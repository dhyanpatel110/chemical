import mongoose from "mongoose";

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

export default mongoose.model("Chemical", chemicalSchema);
