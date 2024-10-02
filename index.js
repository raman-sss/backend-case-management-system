const express = require("express");
const app = express();
const dotenv = require("dotenv");
const rateLimit= require('express-rate-limit')
const cors = require("cors");
// const AppError = require("./utilities/appError");
// const globalErrorHandler= require('./controllers/errorController');

// const authRoutes= require('./routes/auth/routes');
// const userRoutes= require("./routes/user/routes");
// const propertyRoutes= require("./routes/property/routes");

dotenv.config();
app.use(cors());
app.use(express.json());

// Limit request from the same API 
const limiter = rateLimit({ max: 150, windowMs: 60 * 60 * 1000, message: 'Too Many Request from this IP, please try again in an hour' });
app.use('/api', limiter);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// Connecting to the Database
// connectDB();

// app.use("/", authRoutes);

// app.use("/user", userRoutes);

// app.use("/property", propertyRoutes);

// handle undefined Routes(always put your routes above this line, else it will show undefined routes error)
app.use("*", (req, res, next) => {
  const err = new AppError(404, "fail", "undefined route");
  next(err, req, res, next);
});

// app.use(globalErrorHandler);

const port = 5300;

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});

