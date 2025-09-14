import Chemical from "../models/Chemical.js";

export const createChemical = async (req, res) => {
  try {
    const chemical = new Chemical(req.body);
    await chemical.save();
    res.json({ success: true, data: chemical });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getChemicals = async (req, res) => {
  try {
    const data = await Chemical.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
