const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ CORS setup: only for requests from frontend
app.use(cors({
  origin: process.env.CLIENT_URL || "*", // e.g., https://your-frontend.onrender.com
  credentials: true
}));

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ API Routes — use only relative paths
app.use("/api/pets", require("./routes/petRoutes"));
app.use("/api/adoptions", require("./routes/adoptionRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Optional: health check route
app.get("/ping", (_, res) => res.send("Server alive"));

// ✅ Connect to MongoDB and start server
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000
})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
