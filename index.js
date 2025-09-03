// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://dhyanpatel110:xgaDtWNcFKmcn77r@projects.j8yawhr.mongodb.net/Tushar?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Schema
const chemicalSchema = new mongoose.Schema({
  nextId: String,
  amountNibr: Number,
  barcodeNibr: String,
  amountPds: Number,
  barcodePds: String,
  total: Number,
  purity: Number,
  externalNoteBookRef: String,
  externalId: String,
  externalProjectCode: String,
  saltCode: String,
  saltCoefficient: Number,
  shippingDate: Date,
  shippingInfo: String,
  stepCount: Number,
  synthesisDate: Date,
  sampleComment: String,
  sampleQuality: String,
  requestedChiralPurity: String,
  solvent: String,
  purificationMethod: String,
});

// Model
const Chemical = mongoose.model("Chemical", chemicalSchema);

// API Routes

// POST → Save new entry
app.post("/api/chemicals", async (req, res) => {
  try {
    const newChemical = new Chemical(req.body);
    await newChemical.save();
    res.json({ success: true, message: "Chemical saved!", data: newChemical });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET → Fetch all entries
app.get("/api/chemicals", async (req, res) => {
  try {
    const data = await Chemical.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
