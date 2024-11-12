import express from "express";
import nekretnine from "../nekretnine_data.js";

const router = express.Router();

// Funkcija provjere
function provjera(varijabla) {}

// Sve nekretnine
router.get("/", (req, res) => {
  res.status(200).json(nekretnine);
});

// Nekretnina po ID-u
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "ID nije broj!" });
  }
  const nekretnina = nekretnine.find((n) => n.id === Number(id));
  if (nekretnina) {
    res.status(200).json(nekretnina);
  } else {
    res.status(404).json({ message: "Nekretnina nije pronađena" });
  }
});

// Dodavanje nove nekretnine
router.post("/add-new", (req, res) => {
  const nekretnina = req.body;
  let kljucevi = Object.keys(nekretnina);
  if (
    !kljucevi.includes("name") ||
    !kljucevi.includes("desc") ||
    !kljucevi.includes("price") ||
    !kljucevi.includes("location") ||
    !kljucevi.includes("rooms") ||
    !kljucevi.includes("area")
  ) {
    return res.status(400).json("Nedostaju podaci");
  }

  if (nekretnina.price < 0) {
    return res.status(400).json("Cijena ne smije biti negativna");
  }

  if (nekretnina.area < 0) {
    return res.status(400).json("Površina ne smije biti negativna");
  }

  if (nekretnina.rooms < 0) {
    return res.status(400).json("Broj soba ne smije biti negativan");
  }
  nekretnine.push(nekretnina);
  res.status(201).json({ message: "Nekretnina je uspješno dodana!" });
});

// Potpuno ažuriranje nekretnine
router.put("/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "ID nije broj!" });
  }
  const index = nekretnine.findIndex((n) => n.id === Number(id));
  if (index !== -1) {
    nekretnine[index] = req.body;
    res.status(200).json(nekretnine[index]);
  } else {
    res.status(404).json({ message: "Nekretnina nije pronađena" });
  }
});

// Djelomična izmjena nekretnine
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "ID nije broj!" });
  }
  const nekretnina = nekretnine.find((n) => n.id === Number(id));
  if (nekretnina) {
    Object.assign(nekretnina, req.body);
    res.status(200).json(nekretnina);
  } else {
    res.status(404).json({ message: "Nekretnina nije pronađena" });
  }
});

// Brisanje nekretnine
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "ID nije broj!" });
  }
  const index = nekretnine.findIndex((n) => n.id === Number(id));
  if (index !== -1) {
    nekretnine.splice(index, 1);
    res.status(200).json({ message: "Nekretnina je obrisana" });
  } else {
    res.status(404).json({ message: "Nekretnina nije pronađena" });
  }
});

export default router;
