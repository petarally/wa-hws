class Proizvod {
  constructor(id, naziv, cijena, velicine, opis, slike) {
    this.id = id;
    this.naziv = naziv;
    this.cijena = cijena;
    this.velicine = velicine;
    this.opis = opis;
    this.slike = slike;
  }
}
const proizvodi = [
  new Proizvod(
    1,
    "Obična crna majica",
    100,
    ["XS", "S", "M", "L"],
    "Majica je odlična za svakodnevno nošenje.",
    [
      "https://northwestriders.com/cdn/shop/products/tee_6040_Black07.jpg?v=1564171706",
      "https://pyxis.nymag.com/v1/imgs/05d/b15/f4c61238a24a34610ae3a41dede1df90a4-Gildan-black-tshirt.rsquare.w600.jpg",
      "https://contents.mediadecathlon.com/p2157319/k$45a8143f29ae498e05be9c1588d95135/men-s-running-breathable-t-shirt-kiprun-run-100-dry-black-decathlon-8488034.jpg?f=1920x0&format=auto",
      "https://isto.pt/cdn/shop/files/Classic_T-shirt_Black_1_4b42b483-c2cf-46f6-805c-90bd905b4338.webp?v=1685716490",
    ]
  ),
  new Proizvod(
    2,
    "Levi's 501 traperice",
    110,
    ["S", "M", "L"],
    "Traperice su izrađene od kvalitetnog materijala.",
    ["traperice1.jpg", "traper"]
  ),
  new Proizvod(3, "Zimska kapa", 40, "onesize", "Kapa je topla.", [
    "kapa1.jpg",
    "kapa2.jpg",
  ]),
  new Proizvod(
    4,
    "Čarape Adidas",
    20,
    ["34-36", "37-39", "40-42"],
    "Čarape su udobne.",
    ["carape1.jpg", "carape2.jpg"]
  ),
  new Proizvod(
    5,
    "Tenisice Nike",
    200,
    ["38", "39", "40", "41", "42", "43", "44", "45"],
    "Tenisice su udobne.",
    ["tenisice1.jpg", "tenisice2.jpg"]
  ),
];

export { Proizvod, proizvodi };
