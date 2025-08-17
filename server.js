// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

// Middleware (must come before routes)
app.use(cors());
app.use(express.json()); // allows parsing of JSON bodies
app.use(express.urlencoded({ extended: true })); // allows parsing of form data

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/pets", require("./routes/petRoutes"));
console.log("✅ Pet routes loaded");
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
console.log("✅ Adoption routes loaded");
app.use("/api/applications", require("./routes/applicationRoutes"));
console.log("✅ Application routes loaded");


// Serve frontend (only if you’re deploying fullstack together)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
