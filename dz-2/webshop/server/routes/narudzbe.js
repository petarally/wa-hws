import express from "express";
import { Proizvod, proizvodi } from "../data.js";

const router = express.Router();

class Narudzba {
  constructor(id, naruceni_proizvodi) {
    this.id = id;
    this.naruceni_proizvodi = naruceni_proizvodi;
  }
  get ukupnaCijena() {
    let ukupno = this.naruceni_proizvodi.reduce((suma, currProizvod) => {
      let pronadeni_proizvod = proizvodi.find((p) => p.id == currProizvod.id);
      console.log(pronadeni_proizvod);
      return suma + pronadeni_proizvod.cijena * currProizvod.narucena_kolicina;
    }, 0);
    return ukupno;
  }
}
// dummy narudžba
const narudzba = new Narudzba(1, [
  { id: 1, velicina: "M", narucena_kolicina: 2 },
  { id: 3, velicina: "onesize", narucena_kolicina: 1 },
]);
console.log(narudzba.ukupnaCijena); // 240

let narudzbe = [];
router.post("/", (req, res) => {
  let podaci = req.body;
  let naruceni_proizvodi = podaci.naruceni_proizvodi;
  if (!Array.isArray(naruceni_proizvodi) || naruceni_proizvodi.length == 0) {
    return res.status(400).json({ message: "Nema podataka" });
  }
  let latest_id = narudzbe.length ? narudzbe.at(-1).id + 1 : 1;
  let narudzba_obj = new Narudzba(latest_id, naruceni_proizvodi);
  narudzbe.push(narudzba_obj);
  return res.status(201).json(podaci);
});

export default router;
