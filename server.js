const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }));

app.use(express.json());

// API Routes 
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));


if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "client", "build");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}


// --- Health Check ---
app.get("/ping", (_, res) => res.send("Server alive"));

// --- Start Server ---
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
