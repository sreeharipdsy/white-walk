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
  {
    id: 40,
    name: "CROCS LITERIDE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0121.jpg?v=1717792797&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 40-44",
  },
  {
    id: 41,
    name: "NIKE SB DUNK DE LA SOUL",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2c2add15-a49e-4e17-9902-80e75f00fc41.jpg?v=1710099193&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 42,
    name: "NIKE SB DUNK LOW OREWOOD BROWN SASHIKO OFF WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0098.jpg?v=1722375440&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 43,
    name: "CROCS 2024(BLACK)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-17at01.17.32_1c82f94f.jpg?v=1717794694&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    id: 44,
    name: "CROCS 2024(WHITE)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-17at01.17.36_07702f95.jpg?v=1717794880&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    id: 45,
    name: "CROCS 2024(KHAKHI)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0244.jpg?v=1722597304&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    id: 46,
    name: "Nike calm mule sandel (black)",
    category: "sandals",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0250_7d8392cf-cdf7-4415-bf19-5ca8a7981223.jpg?v=1722598011&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    id: 47,
    name: "Nike calm mule sandel (orange)",
    category: "sandals",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0251.jpg?v=1722597708&width=990",
    price: 2859, // 1359 + 1500
    discountedPrice: 1359,
    size: "EUR 40-45",
  },
  {
    id: 48,
    name: "Nike calm mule sandel (white)",
    category: "sandals",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0253.jpg?v=1722598052&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    id: 49,
    name: "Nike calm mule sandel (green)",
    category: "sandals",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0252.jpg?v=1722598108&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    id: 50,
    name: "ADIDAS FORUM BAD BUNNY BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ddac6280-05e9-4863-ad21-6cce92bb0142.jpg?v=1709792476&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 36-44",
  },
  {
    id: 51,
    name: "ADIDAS ORIGINALS CAMPUS PURPLE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0062.jpg?v=1722798837&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    id: 52,
    name: "NIKE AIRFORCE NORTH FACE GUCCI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240612-WA0030.jpg?v=1718210744&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    id: 53,
    name: "NIKE SB DUNK MOCHA LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-04-25at21.58.52_6c9754cb.jpg?v=1714136663&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 54,
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4449, // 2949 + 1500
    discountedPrice: 2949,
    size: "EUR 40-45",
  },
  {
    id: 55,
    name: "ADIDAS GAZZELE BOLD BLACK WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_79a51976-3f18-4ad6-9252-048b1a644b7d.jpg?v=1714078407&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    id: 56,
    name: "ONITSUKA TIGER TOKUTEN WHITE NAVY EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0017.jpg?v=1717236598&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 57,
    name: "CONVERSE CHUCK 70 BLACK WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0093.jpg?v=1720907858&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    id: 58,
    name: "NEW BALANCE 1906 LIGHTON GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240612-WA0086.jpg?v=1718214923&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 59,
    name: "NIKE SB DUNK OTOMO KOTSUHIRO DBRN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_46713d70-3030-4c37-b719-1bb956e74a6c.jpg?v=1710098054&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 60,
    name: "ADIDAS ORIGINALS SAMBA NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0032.jpg?v=1716588189&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 61,
    name: "ADIDAS ORIGINALS SAMBA BONER END",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0011.jpg?v=1716587736&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 62,
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 63,
    name: "NIKE AIRFORCE ONE CRISTIANO RONALDO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db39ae21-fd99-45f6-a494-1ec7fe9b561f.jpg?v=1709787825&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    id: 64,
    name: "NIKE SB DUNK TIGHTBOOTH EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_831516b3-c677-4b65-8c96-47df14c8a91f.jpg?v=1710156885&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 65,
    name: "ADIDAS ORIGINALS CENTENNIAL 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bffb3f49-cefc-4f91-bedb-c462e1021cd0.jpg?v=1709653768&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 66,
    name: "NIKE SB DUNK YEAR OF THE TIGER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0091.jpg?v=1722799859&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 67,
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 68,
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0045.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    id: 69,
    name: "ADIDAS ORIGINALS SAMBA NAKED",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0052.jpg?v=1718049819&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    id: 60,
    name: "ADIDAS ORIGINALS SAMBA NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0032.jpg?v=1716588189&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 61,
    name: "ADIDAS ORIGINALS SAMBA BONER END",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0011.jpg?v=1716587736&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 62,
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 63,
    name: "NIKE AIRFORCE ONE CRISTIANO RONALDO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db39ae21-fd99-45f6-a494-1ec7fe9b561f.jpg?v=1709787825&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    id: 64,
    name: "NIKE SB DUNK TIGHTBOOTH EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_831516b3-c677-4b65-8c96-47df14c8a91f.jpg?v=1710156885&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 65,
    name: "ADIDAS ORIGINALS CENTENNIAL 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bffb3f49-cefc-4f91-bedb-c462e1021cd0.jpg?v=1709653768&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 66,
    name: "NIKE SB DUNK YEAR OF THE TIGER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0091.jpg?v=1722799859&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 67,
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 68,
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0045.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    id: 69,
    name: "ADIDAS ORIGINALS SAMBA NAKED",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0052.jpg?v=1718049819&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    id: 70,
    name: "NIKE AIRFORCE ONE SHADOW",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b6f4236f-34b0-44b6-ba0b-075dc934742f.jpg?v=1710091795&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "EUR 36-40",
  },
  {
    id: 71,
    name: "ADIDAS FEAR OF GOD LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-07at15.21.24_1004875b.jpg?v=1720378945&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 72,
    name: "ADIDAS FEAR OF GOD MID",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0045.jpg?v=1718049585&width=990",
    price: 4799, // 3299 + 1500
    discountedPrice: 3299,
    size: "EUR 40-45",
  },
  {
    id: 73,
    name: "NEW BALANCE 2002r SPRING 2023 SKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0024.jpg?v=1722977917&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 74,
    name: "NIKE DUNK BEETROOT CRUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ed2d98d3-aba7-46ea-84cd-46da0c86a74a.jpg?v=1709814495&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 75,
    name: "ADIDAS ORIGINAL SAMBA MESSI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0087.jpg?v=1719866523&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 76,
    name: "NEW BALANCE 1906 GANNI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0085.jpg?v=1716583053&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 77,
    name: "NIKE AIRFORCE KEEP FRESH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3c739218-609e-4db9-a029-d4a0698eb206.jpg?v=1709709506&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 78,
    name: "NIKE SB DUNK RUN THE JEWELS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0045.jpg?v=1720905570&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 79,
    name: "ADIDAS ORIGINAL BERMUDA 2024 GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0085.jpg?v=1720907480&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 80,
    name: "ONITSUKA TIGER TRAINERS SILVER COLOR",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0186.jpg?v=1722029275&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 81,
    name: "ADIDAS FORUM 84 WHITE BLUE",
    category: "uaquality",
    image:
      "https://snapkicks.in/cdn/shop/files/image_96807eef-8dae-4655-91db-f65d6d8f6ffa.jpg?v=1715810872&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-45",
  },
  {
    id: 82,
    name: "VANS OLD SKOOL KNU OLIVE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0063.jpg?v=1717265800&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 83,
    name: "NIKE SB DUNK YEAR OF RABBIT 2023",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240602-WA0021.jpg?v=1717348397&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 84,
    name: "NIKE JORDAN RETRO 4 PINE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d9b068a4-64c7-4a28-b279-9f3f75e9287c.jpg?v=1717798408&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    id: 85,
    name: "NIKE SB DUNK VANEER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e04c8350-8651-4709-8671-981af298fb71.jpg?v=1711657980&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 86,
    name: "ADIDAS SUPERSTAR ORIGINALS RABBIT HOLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0007.jpg?v=1718622012&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 87,
    name: "ADIDAS SUPERSTAR ORIGINAL RABBIT HOLE WOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0013.jpg?v=1718621037&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 88,
    name: "VANS OLD SKOOL MIDANKLE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/d10da6e8-1f5a-4a94-9171-92cc876f4795.jpg?v=1709477731&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 36-45",
  },
  {
    id: 89,
    name: "ADIDAS GAZELLE INDOOR NAVY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240720-WA0021.jpg?v=1721419318&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 36-45",
  },
  {
    id: 90,
    name: "ASICS GEL 1130 GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240801-WA0025.jpg?v=1722454470&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 91,
    name: "ASICS GEL 1130 SILVER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240707-WA0024.jpg?v=1720347825&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 92,
    name: "CROCS MTN ATLAS ELEPHANT",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0051.jpg?v=1720730124&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "M6-M11",
  },
  {
    id: 93,
    name: "ADIDAS SLTN ADIFOM WHITE GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0033.jpg?v=1720379319&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 94,
    name: "ADIDAS SLTN ADIFOM WHITE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_68298609-c03b-4f5e-8be6-ba256f030740.jpg?v=1711749407&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 95,
    name: "NIKE SB DUNK NAVY 2023",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6e63355d-8d49-44d3-aaec-d3d195c4d6ef.jpg?v=1717101735&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 96,
    name: "ADIDAS FORUM BAD BUNNY CLOUD WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c7486f4a-2b6e-408c-a0e2-6b8de0ae11da.jpg?v=1710156080&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    id: 97,
    name: "CONVERSE ALL STAR BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2eb8286d-be2d-4567-897b-c94c9aa8cfc7.jpg?v=1709977527&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 40-45",
  },
  {
    id: 98,
    name: "NIKE SB DUNK IVORY HYPER ROYAL",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9840fbfd-47ad-4002-b058-2ed8740c58b3.jpg?v=1710080814&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    id: 99,
    name: "ADIDAS ORIGINALS SAMBA XLG GUM BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_82e0596b-9842-40e4-b68b-09ef9e00260b.jpg?v=1715811036&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 100,
    name: "ADIDAS SAMBA 2023 GREY GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_80c195ef-e2ad-417f-b428-2d04930fbede.jpg?v=1715892621&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  }
];
