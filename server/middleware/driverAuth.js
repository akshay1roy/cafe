import  jwt from 'jsonwebtoken';
import Driver from '../models/Driver.js';

const driverAuth = async (req, res, next) => {
  try {
    // console.log(req.headers)
    const {dtoken}= req.headers;
    // console.log(dtoken);
    // const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!dtoken) {
      return res.status(401).json({ error: "Unauthorized: Token missing" });
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

    console.log(decoded)

    const driver = await Driver.findById(decoded.driverId).select("-password");
    if (!driver) return res.json({ error: "Driver not found" });
    // console.log(driver);


    req.driver = driver; // add user to request object
    // console.log(req.driver);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default driverAuth
