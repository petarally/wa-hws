class Proizvod {
  constructor(
    id,
    naziv,
    cijena,
    velicine,
    opis,
    slike,
    dostupne_boje,
    karakteristike
  ) {
    this.id = id;
    this.naziv = naziv;
    this.cijena = cijena;
    this.velicine = velicine;
    this.opis = opis;
    this.slike = slike;
    this.dostupne_boje = dostupne_boje;
    this.karakteristike = karakteristike;
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
    ],
    ["crna", "siva"],
    ["Materijal: pamuk", "Masa: 30 g", "Održavanje: Prati na 60°C"]
  ),
  new Proizvod(
    2,
    "Levi's 501 traperice",
    110,
    ["S", "M", "L"],
    "Traperice su izrađene od kvalitetnog materijala.",
    [
      "https://www.mrporter.com/variants/images/10163292708421485/in/w2000_q60.jpg",
      "https://www.madsnorgaard.com/cdn/shop/files/201167_8237_1_c8d29050-a12e-4e10-9f41-9b060d91b70e.jpg?v=1720552141",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-hme_tnBNwL7C8mZJNcGXoG5S8mM7mZzsg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxkIJmL1fSSJHAKU3RiNUMkx-vLc_ICyuyg&s",
    ],
    ["plava", "crna", "siva"],
    ["Materijal: pamuk", "Masa: 500 g", "Održavanje: Prati na 40°C"]
  ),
  new Proizvod(
    3,
    "Zimska kapa",
    40,
    "onesize",
    "Kapa je topla.",
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T82-_8LN41iTTPPMZIm4U85MMJlXMnehDw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOhdbsrkPNd4u6dVC_fnthzPhHDol_vk9vDhUkNR5kvawefN94JMSY1XWaVOHpX0DhY0&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H-pfcOfNy5v_mCMAP99yKnHbljq6Qfw8GXrENPoL-keJjAXZdfd1uOI1-hehVKg6oKQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QmVDwObxXexNMPp7frGuc8FWbqm8emEIcq4eaS41ETEU_lOYDKJTapB3_G7YpRui_9Y&usqp=CAU",
    ],
    ["crna", "bijela", "siva"],
    ["Materijal: vuna", "Masa: 100 g", "Održavanje: Prati na 30°C"]
  ),
  new Proizvod(
    4,
    "Čarape Adidas",
    20,
    ["34-36", "37-39", "40-42"],
    "Čarape su udobne.",
    [
      "https://static.ftshp.digital/img/p/9/7/5/1/0/0/975100-full_product.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaehxn-i1B1pxd14CEMlb-2GFjhy6k5caUXg&s",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/631a94556c13476fa643e789ae6fe5db_9366/Select_Basketball_Crew_Socks_Black_GA5457_03_standard.jpg",
      "https://insport.com.au/cdn/shop/products/adidas-unisex-3-stripe-crew-3-pairs-black-socks-332047.webp?v=1706033613&width=630",
    ],
    ["crna", "bijela", "siva"],
    ["Materijal: pamuk", "Masa: 50 g", "Održavanje: Prati na 40°C"]
  ),
  new Proizvod(
    5,
    "Tenisice Nike",
    200,
    ["38", "39", "40", "41", "42", "43", "44", "45"],
    "Tenisice su udobne.",
    [
      "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/bda4533a-96ef-46dc-b658-d1b3f4ce3be6/the-best-white-sneakers-by-nike.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0kdlkZLwoTJ-y8ZPD_E7N9Nbkq7WdTVFZg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl680w16gsY5QakyztHROJtkgm9Y-OyVY9g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v_-rgMZEscxGwtPAQL3O1xsg-wcEl8Q_0w&s",
    ],
    ["crna", "bijela", "siva"],
    ["Materijal: koža", "Masa: 500 g", "Održavanje: Prati na 40°C"]
  ),
];

export { Proizvod, proizvodi };
