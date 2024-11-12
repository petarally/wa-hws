import express from "express";
import ponude from "../ponude_data.js";
import nekretnine from "../nekretnine_data.js";

const router = express.Router();

// Dodavanje nove ponude
router.post("/", (req, res) => {
  const ponuda = req.body;
  const ids = nekretnine.map((n) => n.id);
  console.log(ponuda);
  if (!ids.includes(ponuda.id_property)) {
    return res
      .status(400)
      .json({ message: "Nekretnina s navedenim ID-em ne postoji!" });
  }
  ponude.push(ponuda);
  res.status(201).json(ponuda);
});

export default router;
