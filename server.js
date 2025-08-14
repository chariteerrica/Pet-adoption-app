// ✅ Use ESM properly OR CommonJS properly — here I'll use CommonJS for simplicity
const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

// CORS config
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

//  Routes
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//  Serve frontend 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
