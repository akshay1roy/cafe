// const Driver = require('../models/Driver');
// const Booking = require('../models/Booking');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Driver from '../models/Driver.js'
import Booking from '../models/Booking.js';





export const registerDriver = async (req, res) => {
    try {
      const { name, phone, password } = req.body;
      // console.log(name, phone, password);
  
      const existingDriver = await Driver.findOne({ phone });
  
      if (existingDriver) {
        return res.status(400).json({
          success: false,
          error: 'Driver with this phone number already exists',
        });
      }
  
      const hashed = await bcrypt.hash(password, 10);
  
      const driver = new Driver({
        name,
        phone,
        password: hashed,
      });
  
      await driver.save(); 
  
      const token = jwt.sign(
        { id: driver._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
  
      res.status(201).json({
        success: true,
        msg: 'Driver registered',
        user: {
          id: driver._id,
          name: driver.name,
          phone: driver.phone,
        },
        token,
      });
    } catch (error) {
      console.error('Registration error:', error.message);
      res.status(500).json({ success: false, error: 'Something went wrong' });
    }
  };
  


// Login driver and generate a token
export const loginDriver = async (req, res) => {
    const { phone, password } = req.body;

    try {
        const driver = await Driver.findOne({ phone });

        if (!driver) {
            return res.json({success:false, message: 'Driver not found' });
        }

        const isMatch = await bcrypt.compare(password, driver.password);

        // const isMatch = await driver.comparePassword(password);
        if (!isMatch) {
             res.json({success:false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ driverId: driver._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({success:true, message: 'Login successful', token });
    } catch (error) {
        res.json({success:false, error: 'Something went wrong' });
    }
};


export const getDriver = async (req, res) => {
    try {
        const id = req.driver?._id;

        console.log(id);


        const driver = await Driver.findById(id).select("-password");

        if (!driver) {
            return  res.json({success:false, error: "driver not found" });
        }

        // console.log("driver", driver);
        res.status(200).json({success:true, driver });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};




export const driverApproveBooking = async (req, res) => {
  try {
      const driverId = req.driver._id; // Extract driver ID from authentication

      const { bookingId, action } = req.body; // action can be 'approve' or 'reject'

      // Find the booking by ID
      const booking = await Booking.findById(bookingId);
      if (!booking) {
          return res.status(404).json({success:false, error: "Booking not found" });
      }

      // Check if the booking is assigned to the current driver
      if (String(booking.driver) !== String(driverId)) {
          return res.status(403).json({ error: "You are not assigned to this booking" });
      }

      // Handle booking actions (approve or reject)
      if (action === 'approve') {
          // Change the booking status to 'confirmed'
          booking.status = 'confirmed';

          // Update the driver's status to 'busy'
          const driver = await Driver.findById(driverId);
          if (!driver) {
              return res.status(404).json({success:false, error: "Driver not found" });
          }
          driver.status = 'busy';
          await driver.save();

          // Add the booking to the user's booking list
          const user = await User.findById(booking.user);
          if (user) {
              user.bookings.push(booking._id);
              await user.save();
          }

      } else if (action === 'reject') {
          // Reject the booking and change status to 'rejected'
          booking.status = 'rejected';

          // Remove the booking from the driver's assigned bookings
          const driver = await Driver.findById(driverId);
          if (!driver) {
              return res.status(404).json({success:false, error: "Driver not found" });
          }
          driver.bookingsAssigned = driver.bookingsAssigned.filter(id => String(id) !== bookingId);
          await driver.save();

      } else {
          return res.status(400).json({success:false, error: "Invalid action. Please use 'approve' or 'reject'" });
      }

      // Save the booking after updating the status
      await booking.save();

      // Respond with success message and updated booking details
      res.status(200).json({success:true, message: `Booking ${action}ed successfully`, booking });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong while processing the booking" });
  }
};





export const getAvailableCafes = async (req, res) => {
    try {
      const { pickupLocation, destination, date, time } = req.body;
  
      if (!pickupLocation || !destination || !date || !time) {
        return res.status(400).json({ error: "pickupLocation, destination, date, and time are required" });
      }
  
      // Format the date from DD-MM-YYYY to Date object
      const formattedDate = new Date(date.split("-").reverse().join("-"));
  
      // Find available drivers who are not booked at the given date and time
      const drivers = await Driver.find({ status: 'available' }).populate('bookingsAssigned');
  
      // Filter drivers not already booked at the same date & time
      const availableCafes = drivers.filter(driver => {
        return !driver.bookingsAssigned.some(booking => {
          const bookingDate = new Date(booking.date).toDateString();
          const requestDate = formattedDate.toDateString();
          return bookingDate === requestDate && booking.time === time;
        });
      });
  
      if (availableCafes.length === 0) {
        return res.status(404).json({ message: 'No available cafes at the selected time and date' });
      }
  
      res.status(200).json({ availableCafes });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error while fetching available cafes' });
    }
  };
  






  //////////////////////



export const getDriverBookings = async (req, res) => {
  const driverId = req.driver._id // Extracted from auth middleware
    console.log(driverId)
  try {
    // Fetch bookings assigned to this driver, and populate user details
    const bookings = await Booking.find({ driver: driverId })
      .populate("user", "name email") // only fetch name & email from User
      .sort({ date: -1, time: -1 }); // optional: latest bookings first

    res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};





