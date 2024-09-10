const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api", propertyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
