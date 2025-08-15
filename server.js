const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

// Health check route for Render
app.get("/ping", (req, res) => {
  res.send("Server is alive");
});

// API routes
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Serve React build in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;

// MongoDB connection with Render-friendly settings
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000, // Shorter initial timeout (5 seconds)
  socketTimeoutMS: 45000,         // 45-second idle socket timeout
  connectTimeoutMS: 10000,        // 10-second connection attempt timeout
  keepAlive: true,                // Keep connection alive
  keepAliveInitialDelay: 300000   // 5-minute keep-alive ping
})
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Fail fast if DB is unreachable
  });

// Graceful shutdown for Render restarts
process.on("SIGTERM", () => {
  console.log("SIGTERM received: closing server");
  mongoose.connection.close(false, () => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
