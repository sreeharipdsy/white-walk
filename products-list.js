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
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0250_7d8392cf-cdf7-4415-bf19-5ca8a7981223.jpg?v=1722598011&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    id: 47,
    name: "Nike calm mule sandel (orange)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0251.jpg?v=1722597708&width=990",
    price: 2859, // 1359 + 1500
    discountedPrice: 1359,
    size: "EUR 40-45",
  },
  {
    id: 48,
    name: "Nike calm mule sandel (white)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0253.jpg?v=1722598052&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    id: 49,
    name: "Nike calm mule sandel (green)",
    category: "slide",
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
  },
  {
    id: 101,
    name: "CONVERSE CHUCK TAYLOR 70 LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240518-WA0045.jpg?v=1716058245&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 102,
    name: "ADIDAS ORIGINALS CAMPUS LEOPERD PRINT",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0016.jpg?v=1720378619&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-40",
  },
  {
    id: 103,
    name: "ASICS KAHANA GEL 8",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0011.jpg?v=1722977157&width=533",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 104,
    name: "NIKE JORDANS RETRO 1 LOW VOODO ZION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b57411e5-090e-419a-9142-d47de1388f9f.jpg?v=1716496060&width=533",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    id: 105,
    name: "ADIDAS ADIMETIC ORIGINALS GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240623-WA0009.jpg?v=1719085978&width=533",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "EUR 40-45",
  },
  {
    id: 106,
    name: "NIKE MK 2 TEKNO OG WHITE GREY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_913100fc-f8f4-4ee2-a260-8492a82419dd.jpg?v=1717098821&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 107,
    name: "NIKE SB DUNK RED PANDA REMAKE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0095.jpg?v=1720773726&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 108,
    name: "ADIDAS SAMBA WHITE RED",
    category: "uaquality",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0027.jpg?v=1723118556&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 109,
    name: "NEW BLANCE 9060 RAINCLOUD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0021.jpg?v=1723118305&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 110,
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK NOIRE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0034.jpg?v=1722978255&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 111,
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK YELLOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0160.jpg?v=1722376614&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 112,
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE UNIVERSITY RED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0168.jpg?v=1722028940&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 113,
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE MOCHA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0168.jpg?v=1722376815&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 114,
    name: "ADIDAS GAZELLE INDOOR GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_28b836d5-3141-4f2b-a290-b4cb3a93d963.jpg?v=1718399508&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 115,
    name: "ADIDAS GAZELLE INDOOR PRELOVED INK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240613-WA0032.jpg?v=1718284614&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 116,
    name: "ASICS EX-89 BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ecc82007-9198-4bf5-bfdb-90bf938a9162.jpg?v=1717098875&width=990",
    price: 5499, // 3999 + 1500
    discountedPrice: 3999,
    size: "EUR 40-45",
  },
  {
    id: 117,
    name: "ADIDAS ORIGINALS CAMPUS GREY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0052.jpg?v=1720610267&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 118,
    name: "ASICS EX-89 NEEDLES BUTTERFLY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240723-WA0024.jpg?v=1721678778&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 119,
    name: "ADIDAS SUPERSTAR BASIC",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5e5dca28-79c8-4f0a-a84b-faa33c0da753.jpg?v=1709971331&width=990",
    price: 3499, // 1999 + 1500
    discountedPrice: 1999,
    size: "EUR 36-45",
  },
  {
    id: 120,
    name: "ADIDAS ORIGINALS OZELIA JOKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0057.jpg?v=1716589320&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 121,
    name: "ADIDAS ORIGINALS SAMBA SPORTY AND RICH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0035.jpg?v=1723119058&width=990",
    price: 2849, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    id: 122,
    name: "NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_91eba77a-8cce-4088-a055-25982adbb738.jpg?v=1710077317&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    id: 123,
    name: "NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_94091f00-6e25-4d7e-b21a-71e8cf81d3e3.jpg?v=1717098797&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 124,
    name: "ADIDAS SAMBA X WALES BONER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240709-WA0074.jpg?v=1720548657&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-46",
  },
  {
    id: 125,
    name: "ADIDAS FORUM 84 MID UNIVERSITY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_76712076-9f80-4f5c-b075-3f75f9dade87.jpg?v=1709578805&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    id: 126,
    name: "NEW BALANCE 1906R BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.42.54_2ffd7b03.jpg?v=1722283003&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 127,
    name: "NIKE CORTEZ HAWKINS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b49bd108-a786-48d3-ac34-306ab3a90854.jpg?v=1716674770&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 128,
    name: "VANS OLD SKOOL KNU",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0023.jpg?v=1721545702&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    id: 129,
    name: "ADIDAS BAD BUNNY RESPONSE CL ECRU TINT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0024.jpg?v=1721545971&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 130,
    name: "ADIDAS BAD BUNNY RESPONSE CL BASIC",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_08990dd7-ef49-48e3-93e9-bebc776f8a59.jpg?v=1717358810&width=533",
    price: 4349, // 2849 + 1500
    discountedPrice: 2849,
    size: "EUR 40-45",
  },
  {
    id: 131,
    name: "ADIDAS ORIGINALS CAMPUS 00s 2024 MAROON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0083.jpg?v=1723324925&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 132,
    name: "ADIDAS ORIGINALS CAMPUS 00s CRYSTAL WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0077.jpg?v=1723324807&width=533",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    id: 133,
    name: "NIKE SB DUNK BIG MONEY SAVINGS",
    category: "ua",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0062.jpg?v=1720730280&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 134,
    name: "NIKE SB DUNK OLIVE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0007.jpg?v=1720557768&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-45",
  },
  {
    id: 135,
    name: "NIKE SB DUNK CRENSHAW CLUB",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5efc58d2-e939-4446-b2a9-b7907457760b.jpg?v=1709790949&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 136,
    name: "NIKE SB DUNK LOW SE 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0255.jpg?v=1722078565&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 137,
    name: "ADIDAS ORIGINALS CAMPUS BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0015.jpg?v=1720728461&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 138,
    name: "ONITSUKA TIGER MEXICO 66 NAVY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240623-WA0023.jpg?v=1719086692&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    id: 139,
    name: "NIKE AIR JORDANS RETRO 4 PE FIRST CLASS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0038.jpg?v=1721162777&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 140,
    name: "NIKE SB DUNK RENOWN MAZDA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0260.jpg?v=1722078706&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 141,
    name: "NIKE ALPHAFLY 3 NEXT WHITE",
    category: "sports",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240625-WA0040.jpg?v=1719321085&width=533",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 142,
    name: "NIKE ALPHAFLY 3 NEXT BLACK",
    category: "sports",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240625-WA0025_b67aa2fc-df46-4723-8f0e-a067278f13d7.jpg?v=1719320769&width=533",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 143,
    name: "NEW BALANCE 2002r SALEHE BEMBURRY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0028.jpg?v=1720728645&width=990",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    id: 144,
    name: "ASICS GEL CONTEND 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0227.jpg?v=1722077813&width=990",
    price: 4449, // 2949 + 1500
    discountedPrice: 2949,
    size: "EUR 40-45",
  },
  {
    id: 145,
    name: "NIKE SB DUNK IRONSTONE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_45efb059-97b1-4549-af00-ab361a9cdbf2.jpg?v=1710063633&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 146,
    name: "ADIDAS FORUM EXHIBIT MID 2023 BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6b0553a7-0c61-4c6f-8d18-e5deca2e80ca.jpg?v=1717103975&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 147,
    name: "ADIDAS FORUM EXHIBIT MID 2023 MULTI WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0f0e0228-1ee8-407c-8208-b23fd57870ea.jpg?v=1715810911&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 148,
    name: "NEW BALANCE 1906 PROTECTION TURTLEDOVE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0163.jpg?v=1722028727&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 149,
    name: "NEW BALANCE 9060 CASTLEROCK INDIGO",
    category: "men",
    image:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/16/57f9e678-f89c-cf91-cb15-f1f205f43c43.webp?x-image-process=image/resize,m_lfit,h_500,w_500",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 150,
    name: "NIKE CORTEZ PETALS UNITED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0078.jpg?v=1717015874&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 151,
    name: "ADIDAS FORUM EXHIBIT TRIPPLE WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240709-WA0069.jpg?v=1720548498&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    id: 152,
    name: "ADIDAS FORUM EXHIBIT MULTI BLUE",
    category: "women",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/8/440381775/KO/CV/ZR/184941413/prod-20240805-0733543799770634270112522-jpg-500x500.jpg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-40",
  },
  {
    id: 153,
    name: "ADIDAS ORIGINALS SAMBA GUM XLG GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240428-WA0088.jpg?v=1714334507&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 154,
    name: "ONITSUKA TIGER TOKUTEN GUM SOLE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/25c8174f-8b3a-44f0-9c19-96834ed81069.jpg?v=1717097962&width=2200",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 155,
    name: "NIKE AIRFORCE AMBUSH CHICAGO EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0078.jpg?v=1717015874&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 156,
    name: "NIKE JORDANS RETRO 1 LUCKY GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0064.jpg?v=1723391449&width=600",
    price: 3749, // 2249 + 1500
    discountedPrice: 2249,
    size: "EUR 40-45",
  },
  {
    id: 157,
    name: "NIKE SB DUNK STARRY NIGHT",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_02d9bbfa-ded4-4310-bf75-86c548df981c.jpg?v=1717103548&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 158,
    name: "ADIDAS ORIGINALS SAMBA SKY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c862643a-5c9a-4128-9e42-6415864b33af.jpg?v=1711543659&width=600",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 36-45",
  },
  {
    id: 159,
    name: "ADIDAS ORIGINAL NEO VL COURT 2.0 MILK WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0049.jpg?v=1720905911&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 160,
    name: "ADIDAS GAZZELE INDOOR BEAM ORANGE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e579ea3f-57fb-4076-86fd-a6f696b61dc8.jpg?v=1709667233&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-40",
  },
  {
    id: 161,
    name: "ADIDAS SAMBA NOTITLE GREEN",
    category: "ua",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0071.jpg?v=1719866201&width=2200",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 162,
    name: "NIKE SB DUNK BRAINER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_61a8e387-5303-4391-bbec-adba137ca7c3.jpg?v=1709665617&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 163,
    name: "NEW BALANCE ON RUNNING CLOUD MONSTER",
    category: "sports",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/386772361/ZX/IF/KS/9581609/on-running-cloud-monster-500x500.jpg",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 164,
    name: "NEW BALANCE 2002r SPRING",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_af6c0143-3a3c-40e2-ad83-38dd71883233.jpg?v=1710233565&width=2200",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    id: 165,
    name: "ADIDAS ORIGINAL SAMBA WHITE VIOLET TONE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0080_fdda602a-2edb-4512-a2e5-a632fb089e31.jpg?v=1723391923",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 36-40",
  },
  {
    id: 166,
    name: "NIKE JORDAN RETRO 4 MILITARY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3622a578-bd20-4811-8cb7-15ec94f20108.jpg?v=1716235427&width=600",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    id: 167,
    name: "NIKE JORDAN RETRO 4 SB X JORDAN",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/427655020/ON/LA/HU/192412408/whatsapp-image-2024-06-16-at-20-50-18-500x500.jpeg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 168,
    name: "ADIDAS ORIGINALS SUPERSTAR DIME",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0055.jpg?v=1717791102&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    id: 169,
    name: "ADIDAS SAMBA NOTITLE MAROON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0059.jpg?v=1719866076&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 170,
    name: "ADIDAS ORIGINALS SAMBA PRIME KNIT SOCKS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0021.jpg?v=1716587955&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 36-45",
  },
  {
    id: 171,
    name: "NIKE AIRFORCE DOLLARS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0056.jpg?v=1721212715&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 172,
    name: "NIKE JORDANS RETRO 4 FEAR PACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0045.jpg?v=1719865434&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 173,
    name: "ADIDAS ORIGINALS SUPERSTAR XLG",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-04at21.24.23_f0f926a2.jpg?v=1720173107&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 174,
    name: "NEW BALANCE 9060 BLACK GREY",
    category: "men",
    image:
      "https://wornwellhub.com/wp-content/uploads/2024/05/WhatsApp-Image-2023-11-05-at-12.40.37-PM-600x670-1.webp",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 175,
    name: "NEW BLANCE 9060 BLUE HAZE",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438822952/CT/OX/MA/208282416/whatsapp-image-2024-07-24-at-11-55-14-7f0017e6-500x500.jpg",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 176,
    name: "NIKE SB DUNK FUTURA LABORATORIES",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240718-WA0049.jpg?v=1721286439&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 177,
    name: "NIKE JORDANS RETRO 1 LOW TRAVIS SCOTT NOIRE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0029.jpg?v=1723752313&width=2200",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 178,
    name: "AMIRI LEGACY SNEAKERS",
    category: "men",
    image:
      "https://eliteresalez.store/cdn/shop/files/IMG-20240811-WA0184.jpg?v=1723373894&width=1946",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 179,
    name: "AMIRI LEGACY SNEAKERS 1",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/7/434783611/IM/UD/RV/192473731/product-jpeg-500x500.jpg",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 180,
    name: "NEW BALANCE 1906 KHAKI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0016.jpg?v=1716583147&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 181,
    name: "NEW BALANCE 1906 MINDFULL GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0067.jpg?v=1723718779&width=600",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 182,
    name: "NIKE DUNK OTOMO OST GREEN BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0090.jpg?v=1723719192&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 183,
    name: "NEW BALANCE 2002r PROTECTION GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f0387130-6f28-4545-86a3-17507ac23b11.jpg?v=1716668473&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 184,
    name: "NIKE SB DUNK LOW ANTHRACITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0011.jpg?v=1722373241&width=2200",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 185,
    name: "NIKE SB DUNK SPLIT ATHLETIC DEPARTMENT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0108.jpg?v=1717099170&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 186,
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 187,
    name: "NIKE AIRFORCE ONE MID",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-08-14at16.42.18_402346da.jpg?v=1723663859&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    id: 188,
    name: "NIKE JORDAN CUT LOW JACK CACTUS RED AND WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_389c6e50-c060-47bc-8f09-308c8feaa1e8.jpg?v=1709972482&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 189,
    name: "NIKE JORDAN 3 X TRAVIS SCOTT",
    category: "men",
    image:
      "https://i0.wp.com/www.shoesinkart.com/wp-content/uploads/2024/04/whatsapp-image-2024-04-05-at-13.21.19-scaled.jpeg?fit=1440%2C2560&ssl=1",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 190,
    name: "NIKE AIRFORCE AMBUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b1cf99a1-569e-4e9e-8359-d7a4ff448d5b.jpg?v=1711109075&width=2200",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 191,
    name: "ONITSUKA TIGER MEXICO 66 1",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0017.jpg?v=1719499989&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 192,
    name: "ONITSUKA TIGER MEXICO 66 2",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0019.jpg?v=1719500072",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 193,
    name: "ONITSUKA TIGER MEXICO 66 3",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240718-WA0052.jpg?v=1721286782",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 194,
    name: "ONITSUKA TIGER MEXICO 66 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240627-WA0008.jpg?v=1719501145",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 195,
    name: "ONITSUKA TIGER MEXICO 66 5",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0023.jpg?v=1719500536&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 196,
    name: "ONITSUKA TIGER MEXICO 66 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ed8abb24-b638-4861-b44f-c6149c6b7a25.jpg?v=1709879438&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    id: 197,
    name: "ASICS GEL VENTURE 6 TRIPLE WHITE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c3380ea6-4808-470a-80bd-e6e0925f06a4.jpg?v=1709578601&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    id: 198,
    name: "ASICS KAHANA GEL 8 WHITE AND BLUE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9b0ac36e-14e0-4d41-bc60-e35faee93675.jpg?v=1716056267&width=600",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    id: 199,
    name: "Puma Rs Ferrari",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3952a561-6c6f-4e03-aa57-8a0fcf136aea.jpg?v=1710156349&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 200,
    name: "NIKE SB DUNK BURGUNDY CRUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0057.jpg?v=1718993449&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 201,
    name: "NIKE AIRFORCE ONE WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_00f8cdf2-0a84-4b86-9473-a32b12ec95d2.jpg?v=1717261552&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    id: 202,
    name: "Nike Sb Dunk Panda",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d3b68cfd-5c2c-4dd3-9725-bf0c104fce5e.jpg?v=1709704708&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-45",
  },
  {
    id: 203,
    name: "Asics Gel 1130 Hal Studios",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_da1b8b2e-c5b1-4a81-9ccc-961a9e375147.jpg?v=1710098868&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 204,
    name: "Asics Gel 1130 Hal Studios",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0072.jpg?v=1722374859&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 205,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0008_cd14c5d1-6001-48d4-9fc4-330a9fe2e4b4.jpg?v=1722270177&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 206,
    name: "ADIDAS SAMBA X WALES BONER BEIGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0042.jpg?v=1716588391&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    id: 207,
    name: "ADIDAS SAMBA x WALES BONER BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3b7bd355-b76f-4568-8f43-eb8d7a0ad4c2.jpg?v=1714382354&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    id: 208,
    name: "New Balance 530 Silver",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-13at13.11.49_296704f2.jpg?v=1720907060&width=533",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "EUR 36-45",
  },
  {
    id: 209,
    name: "New balance 530",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0246.jpg?v=1722078441&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 36-45",
  },
  {
    id: 210,
    name: "NEW BALANCE 1906 CORDURA GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0115.jpg?v=1723751852&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 211,
    name: "NEW BALANCE 1906 BLACK CREAM",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0127.jpg?v=1716582982&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "EUR 40-45",
  },
  {
    id: 212,
    name: "New balance 1906 WHITE GREEN CREAM",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0006.jpg?v=1717778410&width=990",
    price: 4375, // 2875 + 1500
    discountedPrice: 2875,
    size: "EUR 40-45",
  },
  {
    id: 213,
    name: "NEW BALANCE 1906 PROTECTION BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0202.jpg?v=1722029695&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "EUR 40-45",
  },
  {
    id: 214,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0202.jpg?v=1722029695&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 215,
    name: "Asics Ex 89",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ecc82007-9198-4bf5-bfdb-90bf938a9162.jpg?v=1717098875&width=990",
    price: 4250, // 2750 + 1500
    discountedPrice: 2750,
    size: "EUR 40-45",
  },
  {
    id: 216,
    name: "ADIDAS OZELIA WHITE SKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_68447597-6126-4a0c-9bad-f348a6a0f54d.jpg?v=1715891499&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    id: 217,
    name: "New balance RC elite V4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at14.54.10_b00e7949.jpg?v=1720607684&width=990",
    price: 4375, // 2875 + 1500
    discountedPrice: 2875,
    size: "EUR 40-44",
  },
  {
    id: 218,
    name: "NEW BALANCE 9060 RICH OAK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240510-WA0015.jpg?v=1716585894&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 219,
    name: "NEW BALANCE 9060 TRIPLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0119.jpg?v=1719867084&width=2200",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    id: 220,
    name: "NEW BALANCE 9060 BRICKS AND WOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-20at01.31.46_6047d2c8.jpg?v=1721419601&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 221,
    name: "NEW BALANCE 9060 BLACK AND WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0099.jpg?v=1721938594&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 222,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0002.jpg?v=1722269924&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 223,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_7173284e-6f09-4068-b69a-ea96d642ea22.jpg?v=1713926294&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 224,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0008_cd14c5d1-6001-48d4-9fc4-330a9fe2e4b4.jpg?v=1722270177&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 225,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at16.35.54_af7335cf.jpg?v=1720614436&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 226,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-01at05.19.23_46c2c2be.jpg?v=1714564765",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 227,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0004_59a0253a-7e76-4f10-a109-96c4e824b281.jpg?v=1722270125&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 228,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_29a90124-61de-49d7-9dba-032f07c7a8b6.jpg?v=1713926461&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 229,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8e6a5960-0448-4bdb-8a91-e736b30d7750.jpg?v=1713926393&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 230,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0003_3960b510-c848-4d32-b8a5-9f1c18dc5e66.jpg?v=1722270058&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 231,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at16.35.50_37474d5f.jpg?v=1720614526&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 232,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-02at05.31.12_f4443c0e.jpg?v=1714682660&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 233,
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9ef59d5f-4e28-4db1-ad3d-ee2b901fd608.jpg?v=1713926130&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 234,
    name: "NIKE AIR JORDANS RETRO 1 PANDA MID",
    category: "women",
    image:
      "https://firstcopyshop.com/wp-content/uploads/2024/07/FIRST-COPY-JORDANS-RETRO-1-OG-BLACK-WHITE-PANDA-FOR-MEN-AND-WOMEN-1.jpeg",
    price: 2699, // 1199 + 1500
    discountedPrice: 1199,
    size: "EUR 36-40",
  },
  {
    id: 235,
    name: "ADIDAS SUPERSTAR PARLEY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_88edbf5f-6fb9-4e5d-b296-a80701ad91a7.jpg?v=1709649355&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 236,
    name: "ADIDAS SUPERSTAR BASIC",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5e5dca28-79c8-4f0a-a84b-faa33c0da753.jpg?v=1709971331&width=600",
    price: 2999, // 1499 + 1500
    discountedPrice: 1499,
    size: "EUR 36-40",
  },
  {
    id: 237,
    name: "NIKE MK2 TEKNO MONARCH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_29a2f202-238c-4247-bb20-2b663e23eaf6.jpg?v=1716062211&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 238,
    name: "NIKE MK2 TEKNO MONARCH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d92286fa-f318-4dd0-92e0-01bf4b238a60.jpg?v=1709814201&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 239,
    name: "NIKE MK2 TEKNO",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_579aec0e-639d-43a8-ba2e-8e625d75ff29.jpg?v=1709704059&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    id: 240,
    name: "NIKE MK2 TEKNO CHUNKY GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_509e0eb7-fbc9-4304-bd01-dfd411c6997a.jpg?v=1717099623&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 241,
    name: "NIKE MK2 TEKNO ATMOSPHERE COOL GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0023.jpg?v=1719864476&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    id: 242,
    name: "NIKE MK2 TEKNO",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0009.jpg?v=1723751962&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 243,
    name: "NIKE MK2 TEKNO TRIPLE WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_033b414d-22d6-411a-bc8d-26d1427f8ca9.jpg?v=1709641579&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 244,
    name: "ADIDAS CAMPUS 00S OREO",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d9650b4e-a260-4858-a974-e7bd7033dded.jpg?v=1715810821&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    id: 245,
    name: "ADIDAS CAMPUS WHITE PRELOVED BLUE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_616bdab9-e53e-41df-b641-abbdf694a2f3.jpg?v=1709630504&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 246,
    name: "ADIDAS ORIGINALS CAMPUS LEOPARD PRINT",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0016.jpg?v=1720378619&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-40",
  },
  {
    id: 247,
    name: "ADIDAS ORIGINALS CAMPUS BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c124393b-146d-4510-9da8-67656124a715.jpg?v=1715810952&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 248,
    name: "ADIDAS CAMPUS 00s WHITE BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0101.jpg?v=1723736356&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    id: 249,
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0029.jpg?v=1724393799&width=990",
    price: 2750, // 1250 + 1500
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    id: 250,
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0030.jpg?v=1724393892&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    id: 251,
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0031.jpg?v=1724394082&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    id: 252,
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0028_24b1ce9d-1b06-4186-b53c-3f2932c475cc.jpg?v=1724393592&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    id: 253,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bdab26df-3b44-4527-8b89-e4c4a573227a.jpg?v=1709668287&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    id: 254,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_639c8c3d-adaf-4d36-954f-2df3f0f366e2.jpg?v=1716407467&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    id: 255,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0b3105e5-1fbf-446c-a669-9aa784387ef4.jpg?v=1709629129&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    id: 256,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/4/409782161/FJ/SW/PI/19051907/product-jpeg-500x500.jpg",
    price: 4140, // 2640 + 1500
    discountedPrice: 2640,
    size: "EUR 41-45",
  },
  {
    id: 257,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/4/409782131/LN/RP/CI/19051907/product-jpeg-500x500.jpg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    id: 258,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XkBxQyIxBBiG4SwZqWMlnEpoasCsf1KppA&usqp=CAU",
    price: 4349, // 2849 + 1500
    discountedPrice: 2849,
    size: "EUR 41-45",
  },
  {
    id: 259,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/389621239/ZE/WZ/RT/9581609/asics-gel-venture-6-250x250.jpg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    id: 260,
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9kmuSFRF0j07yBLB6nCgQaVPcRcVohXd8Q&usqp=CAU",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    id: 261,
    name: "ADIDAS ORIGINALS CAMPUS 00S 2024 BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0015.jpg?v=1720728461&width=600",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 36-45",
  },
  {
    id: 262,
    name: "Jordan Retro 1 Suede Panda",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_22fac2fe-d574-4047-ac0c-b57292c209d3.jpg?v=1716496276&width=990",
    price: 2549, // 1549 + 1000
    discountedPrice: 1549,
    size: "EUR 36-45",
  },
  {
    id: 263,
    name: "Vans Old Skool",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b96e9be2-39fd-4919-9658-11fb43fab30b.jpg?v=1709667036&width=990",
    price: 2199, // 1199 + 1000
    discountedPrice: 1199,
    size: "EUR 36-45",
  },
  {
    id: 264,
    name: "Air Jordan Retro 4 ROYALTY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0045.jpg?v=1717437830&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 265,
    name: "AIR JORDANS RETRO 1 TRAVIS SCOTT MOCHA REVERSE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0056.jpg?v=1723752060&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 266,
    name: "AIR JORDANS RETRO 1 TRAVIS SCOTT FRAGMENT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0055.jpg?v=1719865947&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 267,
    name: "Air Jordan Retro 1 Low Travis Scott Noire",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_48e8c912-a36c-4f81-831f-c2daa0f58ac2.jpg?v=1716065139&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 268,
    name: "Air Jordan Retro 1 Travis Scott",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_adcfe07a-4062-4545-8a84-6c79852cc345.jpg?v=1716148361&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 269,
    name: "AIR JORDAN RETRO 1 LUCKY GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0063.jpg?v=1723391449&width=990",
    price: 3150, // 2150 + 1000
    discountedPrice: 2150,
    size: "EUR 40-45",
  },
  {
    id: 270,
    name: "NIKE AIR JORDAN 1 LOW OG X TROPHY ROOM SAIL AND VARSITY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0058.jpg?v=1722374296&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 40-45",
  },
  {
    id: 271,
    name: "AIR JORDANS RETRO 1 LOW GREY BLACK ORANGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0052.jpg?v=1721937061&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 40-45",
  },
  {
    id: 272,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.38.52_a750abb9_2f7d6d7a-7c42-4bfe-b79f-1c94826e927e.jpg?v=1717685852&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 273,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.27.33_d5ef1c62.jpg?v=1717685891&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 274,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.28.35_0b893567.jpg?v=1717684552&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 275,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.40.07_61698af9.jpg?v=1717687153&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 276,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.34.10_ce532136.jpg?v=1717686809&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 277,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.42.26_b8d6b9ab.jpg?v=1717685644&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 278,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.38.14_bb41e741.jpg?v=1717685376&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 279,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.32.11_aeaaca0d.jpg?v=1717686067&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 280,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.40.51_204a9c4a.jpg?v=1717687230&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 281,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.31.24_5e81a1b3.jpg?v=1717684827&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 282,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.37.14_a1b0dedf.jpg?v=1717686973&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 283,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.32.11_aeaaca0d.jpg?v=1717686067&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 284,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.29.56_b4d5d5e3.jpg?v=1717685969&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 285,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.35.46_28675ddd.jpg?v=1717686889&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 286,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.33.33_78ab5b2c_f3c162df-49a9-44ad-aab9-34f413ccffec.jpg?v=1717686734&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 287,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.39.37_152b41b3.jpg?v=1717687067&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 288,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.29.56_b4d5d5e3.jpg?v=1717685969&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 289,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.33.02_b1960774.jpg?v=1717686689&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 290,
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.41.28_b155b0ad.jpg?v=1717684689&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 291,
    name: "Jordan retro 4 sail off white",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240426-WA0003.jpg?v=1716581920&width=990",
    price: 3875, // 2375 + 1500
    discountedPrice: 2375,
    size: "EUR 40-45",
  },
  {
    id: 292,
    name: "AIR JORDAN RETRO 4 YELLOW FLIGHT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0025.jpg?v=1721936222&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    id: 293,
    name: "Air Jordan Retro 4 Messy Room",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c99cb7da-7e9d-4fa3-889f-2bfadfb50df2.jpg?v=1709704147&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    id: 294,
    name: "Air Jordan Retro 4 Cool Grey",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8a06c3e0-872f-4e8a-b7aa-147a7b64d145.jpg?v=1709792605&width=990",
    price: 3599, // 2099 + 1500
    discountedPrice: 2099,
    size: "EUR 40-45",
  },
  {
    id: 295,
    name: "Jordan Retro 1 Spiderverse",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ab779de9-074b-4344-bed9-0ee9a8642595.jpg?v=1713298990&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 296,
    name: "CR9CS LITERIDE 360 BLUE RED",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240824-WA0005.jpg?v=1724438030&width=533",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "M6-M11",
  },
  {
    id: 297,
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240614-WA0015.jpg?v=1718394701&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    id: 298,
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240614-WA0019.jpg?v=1718394793&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    id: 299,
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0047.jpg?v=1717790652&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    id: 300,
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0045.jpg?v=1717790573&width=533",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    id: 301,
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0041.jpg?v=1717790711&width=533",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    id: 302,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.47.57_c88b429c.jpg?v=1722283509&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 303,
    name: "NEW BALANCE 2002r CASTLEROCK INDIGO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0053.jpg?v=1724437678&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    id: 304,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.45.26_8c867d7a.jpg?v=1722283365&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 305,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.48.24_d3fc3d27.jpg?v=1722283587&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 306,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.47.29_9ecccbd0.jpg?v=1722283442&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 307,
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.44.52_326e579f.jpg?v=1722283197&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    id: 308,
    name: "New balance 2002r Shadow",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_839c5983-fa2b-4d00-b63c-2734d2cd04ba.jpg?v=1717103866&width=990",
    price: 4275, // 2775 + 1500
    discountedPrice: 2775,
    size: "EUR 40-45",
  },
  {
    id: 309,
    name: "New balance 2002r Cherry Bordeaux",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_eb0d1761-db40-4b18-b916-8515599e6b03.jpg?v=1711210651&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    id: 310,
    name: "NEW BALANCE 2002r GORETEX JJJOUND",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0151.jpg?v=1722028416&width=990",
    price: 4749, // 3249 + 1500
    discountedPrice: 3249,
    size: "EUR 40-45",
  },
  {
    id: 311,
    name: "NEW BALANCE 2002r DARK GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0018.jpg?v=1718621385&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    id: 312,
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "UNISEX",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0040.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    id: 313,
    name: "VANS OLD SKOOL KNU DEVIL",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0073.jpg?v=1723812527&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-40",
  },
  {
    id: 314,
    name: "VANS OLD SKOOL KNU BLUE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240820-WA0017.jpg?v=1724098653&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    id: 315,
    name: "VANS OLD SKOOL KNU DISNEY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0104.jpg?v=1717792053&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    id: 316,
    name: "VANS OLD SKOOL KNU BLACK WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-08-13at13.07.36_700390ad.jpg?v=1723579873&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 36-45",
  },
  {
    id: 317,
    name: "VANS OLD SKOOL KNU CORE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0064.jpg?v=1720906817&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 318,
    name: "VANS OLD SKOOL KNU PEACHES",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0023.jpg?v=1721545702&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    id: 319,
    name: "NIKE SB DUNK MUMMY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0105.jpg?v=1720774633&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    id: 320,
    name: "NIKE SB DUNK JOKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240821-WA0007.jpg?v=1724184740&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    id: 321,
    name: "NIKE SB DUNK LOW MEDIUM CURRY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240705-WA0035.jpg?v=1720172537&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 322,
    name: "NIKE SB DUNK STUSSY LUV FREE HUGS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0027.jpg?v=1721161196&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    id: 323,
    name: "NIKE SB DUNK DRAGON BALLS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_fee2283f-5ba3-40ee-9cc5-73e955e1dc17.jpg?v=1717954826&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    id: 324,
    name: "NIKE SB DUNK GHOST RIDER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6cc9dfb7-3dd9-45e7-a43e-4c2f4ec2aa08.jpg?v=1718910952&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
];
