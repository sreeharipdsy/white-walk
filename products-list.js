// PRODUCT LISTS
const products = [
  {
    id: 1,
    name: "NIKE SB DUNK STUSSY JUST DO IT",
    category: "men",
    image:
      "https://www.toteeme.in/cdn/shop/files/IMG-20240509-WA0035.jpg?v=1715274285",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "40-45",
  },
  {
    id: 2,
    name: "NEW BALANCE 530 GREEN",
    category: "unisex",
    image:
      "https://dukaan.b-cdn.net/700x700/webp/media/080cb1ce-4b02-4536-bb19-8dba8d12325d.jpg",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "36-44",
  },
  {
    id: 3,
    name: "NEW BALANCE 1906 KHAKHI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0016.jpg?v=1716583147&width=533",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "40-45",
  },
  {
    id: 4,
    name: "ADIDAS FORUM 84 TRIPPLE WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_65c33e6f-d0da-47aa-984f-78595841a30e.jpg?v=1711794536&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "36-40",
  },
  {
    id: 5,
    name: "NIKE SB DUNK MOCHA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_846c7af1-d81e-478d-bd26-04262f32bdc2.jpg?v=1710146025&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "40-45",
  },
  {
    id: 6,
    name: "NIKE SB DUNK KLEKT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0090.jpg?v=1722629848&width=533",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "40-45",
  },
  {
    id: 7,
    name: "Nike Sb Dunk Low x Otomo Katsuhiro green",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_1184f140-8ffa-4966-b7a0-178018a5d414.jpg?v=1709636964&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "40-45",
  },
  {
    id: 8,
    name: "NEW BALANCE 1906 TRIPPLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240512-WA0008.jpg?v=1717099153&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "40-45",
  },
  {
    id: 9,
    name: "Nike Sb dunk RAYSSA LEAL",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0112.jpg?v=1720775043&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "40-45",
  },
  {
    id: 10,
    name: "Nike Sb Dunk Low x otomo brown white",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240720-WA0030.jpg?v=1721419828&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "41-46",
  },
  {
    id: 11,
    name: "NIKE AIRMAX 1 BROWN STONE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0087.jpg?v=1720773576&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "41-45",
  },
  {
    id: 12,
    name: "ADIDAS ORIGINALS SAMBA XLG FEI FEI RUN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0017.jpg?v=1717052264&width=533",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "40-44",
  },
  {
    id: 13,
    name: "ADIDAS ORGINAL 00S BLACK SOLE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_77244e45-65e2-4268-a9f9-7ff4e4086032.jpg?v=1722547747&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "36-44",
  },
  {
    id: 14,
    name: "ONITSUKA tiger leather",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_1f1b99c4-38aa-447f-b97e-29934519d42d.jpg?v=1709664383&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "36-45",
  },
  {
    id: 15,
    name: "NIKE SB DUNK RUSH HOURS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0222.jpg?v=1722547874&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "40-45",
  },
  {
    id: 16,
    name: "ADIDAS SAMBA BASIC BLACK AND WHITE",
    category: "unisex",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgBV9-vs0KAKH5vqa0KOA1mjmIXfg7sB8XA&usqp=CAU",
    price: 3875, // 2375 + 1500
    discountedPrice: 2375,
    size: "36-44",
  },
  {
    id: 17,
    name: "Jordan RETRO 1 Fearless patent",
    category: "clearance",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/5/423423437/XZ/SV/YP/32302589/product-500x500.jpg",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "41-44",
  },
  {
    id: 18,
    name: "ADIDAS ORGINAL CAMPUS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6e5de952-ee07-474c-89ef-33b68d26c793.jpg?v=1709637413&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "36-44",
  },
  {
    id: 19,
    name: "nike airforce hemp coconut milk",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_96ba8faa-61cb-4743-a183-53153320c619.jpg?v=1717016772&width=533",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "40-45",
  },
  {
    id: 20,
    name: "NIKE SB DUNK SUPREME WORLD FAMOUS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_630f3862-c2be-4adb-aa58-e4468fa26aa6.jpg?v=1710097924&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 41-45",
  },
  {
    id: 21,
    name: "NIKE SB DUNK LOW X OTOMO KOTSUHIRO GREY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240801-WA0011.jpg?v=1722454296&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 22,
    name: "NIKE SB DUNK LOW ANTHRACITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0014.jpg?v=1722373241&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 23,
    name: "ADIDAS STAN SMITH SCUBA GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db5095d1-cff9-4ba4-8842-6e08f59a7c03.jpg?v=1712093403&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    id: 24,
    name: "NIKE AIRFORCE BROWN SWOOSH 07 LTD",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0030.jpg?v=1720608903&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "EUR 40-44",
  },
  {
    id: 25,
    name: "ADIDAS ORIGINALS SAMBA TRIPPLE SNEAKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240619-WA0016.jpg?v=1718787791&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-44",
  },
  {
    id: 26,
    name: "REEBOK CLASSIC CHALK PAPERWHITE",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/430510793/FL/OJ/OP/192412408/whatsapp-image-2024-06-27-at-18-48-19-500x500.jpeg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-44",
  },
  {
    id: 27,
    name: "ADIDAS ORIGINALS SAMBA WALES AND BONER SNAKE SKIN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0111.jpg?v=1720908351&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-44",
  },
  {
    id: 28,
    name: "NIKE SB DUNK SETSUBAN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0034.jpg?v=1717098703&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 29,
    name: "NIKE SB DUNK DUNKIN DONUT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f26beff6-a391-4aa5-b9d1-bdbe2b661f1c.jpg?v=1717915064&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 30,
    name: "NIKE AIRFORCE AMBUSH WHITE BLUE ORANGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240624-WA0027.jpg?v=1719256095&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 31,
    name: "NIKE CORTEZ PETALS UNITED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_79829595-8250-462f-9aa3-cac26e09b715.jpg?v=1717099955&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 32,
    name: "ADIDAS SUPERSTAR NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9f2a3784-4417-486a-b5eb-74318067cb83.jpg?v=1711797145&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-44",
  },
  {
    id: 33,
    name: "NEW BALANCE WRPD RUNNER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0115.jpg?v=1716667788&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 34,
    name: "ADIDAS ORIGINALS CAMPUS 00s 2024 GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0009.jpg?v=1721159662&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-44",
  },
  {
    id: 35,
    name: "NEW BALANCE 2002 THE BASEMENT MOSS GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240613-WA0015.jpg?v=1718284174&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 36,
    name: "NIKE AIRFORCE AMBUSH HAMAWA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8e87b091-fb78-4d2e-a39f-29780ab2e4b3.jpg?v=1711108880&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 37,
    name: "NEW BALANCE 530 SILVER",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-13at13.11.49_296704f2.jpg?v=1720907060&width=990",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "EUR 36-44",
  },
  {
    id: 38,
    name: "ADIDAS FORUM 84 WHITE GREEN EDITION",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0149.jpg?v=1722689209&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-44",
  },
  {
    id: 39,
    name: "CROCS VISTA YUKON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0144.jpg?v=1722689035&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 41-44",
  },
];
