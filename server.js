const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

// Allow frontend origin
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

// API routes
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Serve React build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Health check
app.get("/ping", (_, res) => res.send("Server alive"));

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
