// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

// ----------------- MIDDLEWARE -----------------

// CORS: allow frontend origin and local dev
app.use(cors({
  origin: [process.env.CLIENT_URL, "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// JSON body parser
app.use(express.json());

// ----------------- API ROUTES -----------------

// Make sure these are relative paths ONLY!
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// ----------------- SERVE FRONTEND IN PRODUCTION -----------------
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "client/build");
  app.use(express.static(buildPath));

  // React SPA: handle all unmatched routes
  app.get("*", (_, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// ----------------- HEALTH CHECK -----------------
app.get("/ping", (_, res) => res.send("Server alive ✅"));

// ----------------- START SERVER -----------------
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
})
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  })
  .catch(err => {
    console.error("MongoDB connection error ❌:", err.message);
    process.exit(1);
  });
