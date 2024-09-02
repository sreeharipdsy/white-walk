// PRODUCT LISTS
const products = [
  {
    name: "NIKE SB DUNK STUSSY JUST DO IT",
    category: "men",
    image:
      "https://www.toteeme.in/cdn/shop/files/IMG-20240509-WA0035.jpg?v=1715274285",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "40-45",
  },
  {
    name: "NEW BALANCE 530 GREEN",
    category: "unisex",
    image:
      "https://dukaan.b-cdn.net/700x700/webp/media/080cb1ce-4b02-4536-bb19-8dba8d12325d.jpg",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "36-44",
  },
  {
    name: "NEW BALANCE 1906 KHAKHI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0016.jpg?v=1716583147&width=533",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "40-45",
  },
  {
    name: "ADIDAS FORUM 84 TRIPPLE WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_65c33e6f-d0da-47aa-984f-78595841a30e.jpg?v=1711794536&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "36-40",
  },
  {
    name: "NIKE SB DUNK MOCHA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_846c7af1-d81e-478d-bd26-04262f32bdc2.jpg?v=1710146025&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "40-45",
  },
  {
    name: "NIKE SB DUNK KLEKT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0090.jpg?v=1722629848&width=533",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "40-45",
  },
  {
    name: "Nike Sb Dunk Low x Otomo Katsuhiro green",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_1184f140-8ffa-4966-b7a0-178018a5d414.jpg?v=1709636964&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "40-45",
  },
  {
    name: "NEW BALANCE 1906 TRIPPLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240512-WA0008.jpg?v=1717099153&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "40-45",
  },
  {
    name: "Nike Sb dunk RAYSSA LEAL",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0112.jpg?v=1720775043&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "40-45",
  },
  {
    name: "Nike Sb Dunk Low x otomo brown white",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240720-WA0030.jpg?v=1721419828&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "41-46",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA XLG FEI FEI RUN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0017.jpg?v=1717052264&width=533",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "40-44",
  },
  {
    name: "ADIDAS ORGINAL 00S BLACK SOLE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_77244e45-65e2-4268-a9f9-7ff4e4086032.jpg?v=1722547747&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "36-44",
  },
  {
    name: "ONITSUKA tiger leather",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_1f1b99c4-38aa-447f-b97e-29934519d42d.jpg?v=1709664383&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "36-45",
  },
  {
    name: "NIKE SB DUNK RUSH HOURS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0222.jpg?v=1722547874&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "40-45",
  },
  {
    name: "ADIDAS SAMBA BASIC BLACK AND WHITE",
    category: "unisex",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgBV9-vs0KAKH5vqa0KOA1mjmIXfg7sB8XA&usqp=CAU",
    price: 3875, // 2375 + 1500
    discountedPrice: 2375,
    size: "36-44",
  },
  {
    name: "Jordan RETRO 1 Fearless patent",
    category: "clearance",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/5/423423437/XZ/SV/YP/32302589/product-500x500.jpg",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "41-44",
  },
  {
    name: "ADIDAS ORGINAL CAMPUS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6e5de952-ee07-474c-89ef-33b68d26c793.jpg?v=1709637413&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "36-44",
  },
  {
    name: "nike airforce hemp coconut milk",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_96ba8faa-61cb-4743-a183-53153320c619.jpg?v=1717016772&width=533",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "40-45",
  },
  {
    name: "NIKE SB DUNK SUPREME WORLD FAMOUS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_630f3862-c2be-4adb-aa58-e4468fa26aa6.jpg?v=1710097924&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 41-45",
  },
  {
    name: "NIKE SB DUNK LOW X OTOMO KOTSUHIRO GREY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240801-WA0011.jpg?v=1722454296&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW ANTHRACITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0014.jpg?v=1722373241&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS STAN SMITH SCUBA GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db5095d1-cff9-4ba4-8842-6e08f59a7c03.jpg?v=1712093403&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE BROWN SWOOSH 07 LTD",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0030.jpg?v=1720608903&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA TRIPPLE SNEAKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240619-WA0016.jpg?v=1718787791&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-44",
  },
  {
    name: "REEBOK CLASSIC CHALK PAPERWHITE",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/430510793/FL/OJ/OP/192412408/whatsapp-image-2024-06-27-at-18-48-19-500x500.jpeg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA WALES AND BONER SNAKE SKIN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0111.jpg?v=1720908351&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-44",
  },
  {
    name: "NIKE SB DUNK SETSUBAN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0034.jpg?v=1717098703&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK DUNKIN DONUT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f26beff6-a391-4aa5-b9d1-bdbe2b661f1c.jpg?v=1717915064&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE AMBUSH WHITE BLUE ORANGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240624-WA0027.jpg?v=1719256095&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "NIKE CORTEZ PETALS UNITED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_79829595-8250-462f-9aa3-cac26e09b715.jpg?v=1717099955&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9f2a3784-4417-486a-b5eb-74318067cb83.jpg?v=1711797145&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-44",
  },
  {
    name: "NEW BALANCE WRPD RUNNER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0115.jpg?v=1716667788&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS 00s 2024 GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0009.jpg?v=1721159662&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-44",
  },
  {
    name: "NEW BALANCE 2002 THE BASEMENT MOSS GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240613-WA0015.jpg?v=1718284174&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE AMBUSH HAMAWA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8e87b091-fb78-4d2e-a39f-29780ab2e4b3.jpg?v=1711108880&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 530 SILVER",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-13at13.11.49_296704f2.jpg?v=1720907060&width=990",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "EUR 36-44",
  },
  {
    name: "ADIDAS FORUM 84 WHITE GREEN EDITION",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0149.jpg?v=1722689209&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-44",
  },
  {
    name: "CROCS VISTA YUKON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240803-WA0144.jpg?v=1722689035&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 41-44",
  },
  {
    name: "CROCS LITERIDE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0121.jpg?v=1717792797&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 40-44",
  },
  {
    name: "NIKE SB DUNK DE LA SOUL",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2c2add15-a49e-4e17-9902-80e75f00fc41.jpg?v=1710099193&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW OREWOOD BROWN SASHIKO OFF WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0098.jpg?v=1722375440&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "CROCS 2024(BLACK)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-17at01.17.32_1c82f94f.jpg?v=1717794694&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    name: "CROCS 2024(WHITE)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-17at01.17.36_07702f95.jpg?v=1717794880&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    name: "CROCS 2024(KHAKHI)",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0244.jpg?v=1722597304&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m8-m10",
  },
  {
    name: "Nike calm mule sandel (black)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0250_7d8392cf-cdf7-4415-bf19-5ca8a7981223.jpg?v=1722598011&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "Nike calm mule sandel (orange)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0251.jpg?v=1722597708&width=990",
    price: 2859, // 1359 + 1500
    discountedPrice: 1359,
    size: "EUR 40-45",
  },
  {
    name: "Nike calm mule sandel (white)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0253.jpg?v=1722598052&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "Nike calm mule sandel (green)",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0252.jpg?v=1722598108&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM BAD BUNNY BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ddac6280-05e9-4863-ad21-6cce92bb0142.jpg?v=1709792476&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 36-44",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS PURPLE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0062.jpg?v=1722798837&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    name: "NIKE AIRFORCE NORTH FACE GUCCI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240612-WA0030.jpg?v=1718210744&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK MOCHA LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-04-25at21.58.52_6c9754cb.jpg?v=1714136663&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4449, // 2949 + 1500
    discountedPrice: 2949,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS GAZZELE BOLD BLACK WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_79a51976-3f18-4ad6-9252-048b1a644b7d.jpg?v=1714078407&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN WHITE NAVY EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0017.jpg?v=1717236598&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "CONVERSE CHUCK 70 BLACK WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0093.jpg?v=1720907858&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "NEW BALANCE 1906 LIGHTON GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240612-WA0086.jpg?v=1718214923&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK OTOMO KOTSUHIRO DBRN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_46713d70-3030-4c37-b719-1bb956e74a6c.jpg?v=1710098054&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0032.jpg?v=1716588189&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA BONER END",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0011.jpg?v=1716587736&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE ONE CRISTIANO RONALDO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db39ae21-fd99-45f6-a494-1ec7fe9b561f.jpg?v=1709787825&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK TIGHTBOOTH EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_831516b3-c677-4b65-8c96-47df14c8a91f.jpg?v=1710156885&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CENTENNIAL 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bffb3f49-cefc-4f91-bedb-c462e1021cd0.jpg?v=1709653768&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK YEAR OF THE TIGER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0091.jpg?v=1722799859&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0045.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA NAKED",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0052.jpg?v=1718049819&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA NEIGHBORHOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0032.jpg?v=1716588189&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA BONER END",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0011.jpg?v=1716587736&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE ONE CRISTIANO RONALDO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db39ae21-fd99-45f6-a494-1ec7fe9b561f.jpg?v=1709787825&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK TIGHTBOOTH EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_831516b3-c677-4b65-8c96-47df14c8a91f.jpg?v=1710156885&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CENTENNIAL 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bffb3f49-cefc-4f91-bedb-c462e1021cd0.jpg?v=1709653768&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK YEAR OF THE TIGER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0091.jpg?v=1722799859&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0045.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA NAKED",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0052.jpg?v=1718049819&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    name: "NIKE AIRFORCE ONE SHADOW",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b6f4236f-34b0-44b6-ba0b-075dc934742f.jpg?v=1710091795&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS FEAR OF GOD LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-07at15.21.24_1004875b.jpg?v=1720378945&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FEAR OF GOD MID",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0045.jpg?v=1718049585&width=990",
    price: 4799, // 3299 + 1500
    discountedPrice: 3299,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r SPRING 2023 SKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0024.jpg?v=1722977917&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE DUNK BEETROOT CRUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ed2d98d3-aba7-46ea-84cd-46da0c86a74a.jpg?v=1709814495&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINAL SAMBA MESSI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0087.jpg?v=1719866523&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 GANNI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0085.jpg?v=1716583053&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE KEEP FRESH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3c739218-609e-4db9-a029-d4a0698eb206.jpg?v=1709709506&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK RUN THE JEWELS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0045.jpg?v=1720905570&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINAL BERMUDA 2024 GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0085.jpg?v=1720907480&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TRAINERS SILVER COLOR",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0186.jpg?v=1722029275&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM 84 WHITE BLUE",
    category: "uaquality",
    image:
      "https://snapkicks.in/cdn/shop/files/image_96807eef-8dae-4655-91db-f65d6d8f6ffa.jpg?v=1715810872&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-45",
  },
  {
    name: "VANS OLD SKOOL KNU OLIVE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0063.jpg?v=1717265800&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK YEAR OF RABBIT 2023",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240602-WA0021.jpg?v=1717348397&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO 4 PINE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d9b068a4-64c7-4a28-b279-9f3f75e9287c.jpg?v=1717798408&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK VANEER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e04c8350-8651-4709-8671-981af298fb71.jpg?v=1711657980&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR ORIGINALS RABBIT HOLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0007.jpg?v=1718622012&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR ORIGINAL RABBIT HOLE WOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0013.jpg?v=1718621037&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "VANS OLD SKOOL MIDANKLE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/d10da6e8-1f5a-4a94-9171-92cc876f4795.jpg?v=1709477731&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS GAZELLE INDOOR NAVY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240720-WA0021.jpg?v=1721419318&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 36-45",
  },
  {
    name: "ASICS GEL 1130 GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240801-WA0025.jpg?v=1722454470&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "ASICS GEL 1130 SILVER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240707-WA0024.jpg?v=1720347825&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "CROCS MTN ATLAS ELEPHANT",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0051.jpg?v=1720730124&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "M6-M11",
  },
  {
    name: "ADIDAS SLTN ADIFOM WHITE GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0033.jpg?v=1720379319&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SLTN ADIFOM WHITE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_68298609-c03b-4f5e-8be6-ba256f030740.jpg?v=1711749407&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK NAVY 2023",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6e63355d-8d49-44d3-aaec-d3d195c4d6ef.jpg?v=1717101735&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM BAD BUNNY CLOUD WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c7486f4a-2b6e-408c-a0e2-6b8de0ae11da.jpg?v=1710156080&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "CONVERSE ALL STAR BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2eb8286d-be2d-4567-897b-c94c9aa8cfc7.jpg?v=1709977527&width=990",
    price: 2799, // 1299 + 1500
    discountedPrice: 1299,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK IVORY HYPER ROYAL",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9840fbfd-47ad-4002-b058-2ed8740c58b3.jpg?v=1710080814&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA XLG GUM BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_82e0596b-9842-40e4-b68b-09ef9e00260b.jpg?v=1715811036&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS SAMBA 2023 GREY GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_80c195ef-e2ad-417f-b428-2d04930fbede.jpg?v=1715892621&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "CONVERSE CHUCK TAYLOR 70 LOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240518-WA0045.jpg?v=1716058245&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS LEOPERD PRINT",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0016.jpg?v=1720378619&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-40",
  },
  {
    name: "ASICS KAHANA GEL 8",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0011.jpg?v=1722977157&width=533",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDANS RETRO 1 LOW VOODO ZION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b57411e5-090e-419a-9142-d47de1388f9f.jpg?v=1716496060&width=533",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ADIMETIC ORIGINALS GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240623-WA0009.jpg?v=1719085978&width=533",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE MK 2 TEKNO OG WHITE GREY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_913100fc-f8f4-4ee2-a260-8492a82419dd.jpg?v=1717098821&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK RED PANDA REMAKE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0095.jpg?v=1720773726&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SAMBA WHITE RED",
    category: "uaquality",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0027.jpg?v=1723118556&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "NEW BLANCE 9060 RAINCLOUD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0021.jpg?v=1723118305&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK NOIRE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240807-WA0034.jpg?v=1722978255&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK YELLOW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0160.jpg?v=1722376614&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE UNIVERSITY RED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0168.jpg?v=1722028940&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO TRAVIS SCOTT CUT THE MOCHA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0168.jpg?v=1722376815&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS GAZELLE INDOOR GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_28b836d5-3141-4f2b-a290-b4cb3a93d963.jpg?v=1718399508&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS GAZELLE INDOOR PRELOVED INK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240613-WA0032.jpg?v=1718284614&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ASICS EX-89 BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ecc82007-9198-4bf5-bfdb-90bf938a9162.jpg?v=1717098875&width=990",
    price: 5499, // 3999 + 1500
    discountedPrice: 3999,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS GREY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0052.jpg?v=1720610267&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "ASICS EX-89 NEEDLES BUTTERFLY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240723-WA0024.jpg?v=1721678778&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR BASIC",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5e5dca28-79c8-4f0a-a84b-faa33c0da753.jpg?v=1709971331&width=990",
    price: 3499, // 1999 + 1500
    discountedPrice: 1999,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS OZELIA JOKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0057.jpg?v=1716589320&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA SPORTY AND RICH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240808-WA0035.jpg?v=1723119058&width=990",
    price: 2849, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_91eba77a-8cce-4088-a055-25982adbb738.jpg?v=1710077317&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_94091f00-6e25-4d7e-b21a-71e8cf81d3e3.jpg?v=1717098797&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SAMBA X WALES BONER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240709-WA0074.jpg?v=1720548657&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-46",
  },
  {
    name: "ADIDAS FORUM 84 MID UNIVERSITY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_76712076-9f80-4f5c-b075-3f75f9dade87.jpg?v=1709578805&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906R BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.42.54_2ffd7b03.jpg?v=1722283003&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "NIKE CORTEZ HAWKINS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b49bd108-a786-48d3-ac34-306ab3a90854.jpg?v=1716674770&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "VANS OLD SKOOL KNU",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0023.jpg?v=1721545702&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS BAD BUNNY RESPONSE CL ECRU TINT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0024.jpg?v=1721545971&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS BAD BUNNY RESPONSE CL BASIC",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_08990dd7-ef49-48e3-93e9-bebc776f8a59.jpg?v=1717358810&width=533",
    price: 4349, // 2849 + 1500
    discountedPrice: 2849,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS 00s 2024 MAROON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0083.jpg?v=1723324925&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS 00s CRYSTAL WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0077.jpg?v=1723324807&width=533",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    name: "NIKE SB DUNK BIG MONEY SAVINGS",
    category: "ua",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0062.jpg?v=1720730280&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK OLIVE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0007.jpg?v=1720557768&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK CRENSHAW CLUB",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5efc58d2-e939-4446-b2a9-b7907457760b.jpg?v=1709790949&width=990",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW SE 85",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0255.jpg?v=1722078565&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0015.jpg?v=1720728461&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 NAVY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240623-WA0023.jpg?v=1719086692&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "NIKE AIR JORDANS RETRO 4 PE FIRST CLASS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0038.jpg?v=1721162777&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK RENOWN MAZDA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0260.jpg?v=1722078706&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE ALPHAFLY 3 NEXT WHITE",
    category: "sports",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240625-WA0040.jpg?v=1719321085&width=533",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE ALPHAFLY 3 NEXT BLACK",
    category: "sports",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240625-WA0025_b67aa2fc-df46-4723-8f0e-a067278f13d7.jpg?v=1719320769&width=533",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r SALEHE BEMBURRY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0028.jpg?v=1720728645&width=990",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    name: "ASICS GEL CONTEND 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0227.jpg?v=1722077813&width=990",
    price: 4449, // 2949 + 1500
    discountedPrice: 2949,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK IRONSTONE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_45efb059-97b1-4549-af00-ab361a9cdbf2.jpg?v=1710063633&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM EXHIBIT MID 2023 BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6b0553a7-0c61-4c6f-8d18-e5deca2e80ca.jpg?v=1717103975&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM EXHIBIT MID 2023 MULTI WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0f0e0228-1ee8-407c-8208-b23fd57870ea.jpg?v=1715810911&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 PROTECTION TURTLEDOVE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0163.jpg?v=1722028727&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060 CASTLEROCK INDIGO",
    category: "men",
    image:
      "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/07/16/57f9e678-f89c-cf91-cb15-f1f205f43c43.webp?x-image-process=image/resize,m_lfit,h_500,w_500",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NIKE CORTEZ PETALS UNITED",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0078.jpg?v=1717015874&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM EXHIBIT TRIPPLE WHITE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240709-WA0069.jpg?v=1720548498&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS FORUM EXHIBIT MULTI BLUE",
    category: "women",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/8/440381775/KO/CV/ZR/184941413/prod-20240805-0733543799770634270112522-jpg-500x500.jpg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA GUM XLG GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240428-WA0088.jpg?v=1714334507&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN GUM SOLE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/25c8174f-8b3a-44f0-9c19-96834ed81069.jpg?v=1717097962&width=2200",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE AMBUSH CHICAGO EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0078.jpg?v=1717015874&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDANS RETRO 1 LUCKY GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0064.jpg?v=1723391449&width=600",
    price: 3749, // 2249 + 1500
    discountedPrice: 2249,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK STARRY NIGHT",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_02d9bbfa-ded4-4310-bf75-86c548df981c.jpg?v=1717103548&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA SKY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c862643a-5c9a-4128-9e42-6415864b33af.jpg?v=1711543659&width=600",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINAL NEO VL COURT 2.0 MILK WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0049.jpg?v=1720905911&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS GAZZELE INDOOR BEAM ORANGE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e579ea3f-57fb-4076-86fd-a6f696b61dc8.jpg?v=1709667233&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS SAMBA NOTITLE GREEN",
    category: "ua",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0071.jpg?v=1719866201&width=2200",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK BRAINER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_61a8e387-5303-4391-bbec-adba137ca7c3.jpg?v=1709665617&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE ON RUNNING CLOUD MONSTER",
    category: "sports",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/386772361/ZX/IF/KS/9581609/on-running-cloud-monster-500x500.jpg",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r SPRING",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_af6c0143-3a3c-40e2-ad83-38dd71883233.jpg?v=1710233565&width=2200",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINAL SAMBA WHITE VIOLET TONE",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0080_fdda602a-2edb-4512-a2e5-a632fb089e31.jpg?v=1723391923",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 36-40",
  },
  {
    name: "NIKE JORDAN RETRO 4 MILITARY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3622a578-bd20-4811-8cb7-15ec94f20108.jpg?v=1716235427&width=600",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN RETRO 4 SB X JORDAN",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/427655020/ON/LA/HU/192412408/whatsapp-image-2024-06-16-at-20-50-18-500x500.jpeg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SUPERSTAR DIME",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0055.jpg?v=1717791102&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS SAMBA NOTITLE MAROON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0059.jpg?v=1719866076&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SAMBA PRIME KNIT SOCKS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0021.jpg?v=1716587955&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 36-45",
  },
  {
    name: "NIKE AIRFORCE DOLLARS",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0056.jpg?v=1721212715&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "NIKE JORDANS RETRO 4 FEAR PACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0045.jpg?v=1719865434&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SUPERSTAR XLG",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-04at21.24.23_f0f926a2.jpg?v=1720173107&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "NEW BALANCE 9060 BLACK GREY",
    category: "men",
    image:
      "https://wornwellhub.com/wp-content/uploads/2024/05/WhatsApp-Image-2023-11-05-at-12.40.37-PM-600x670-1.webp",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BLANCE 9060 BLUE HAZE",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438822952/CT/OX/MA/208282416/whatsapp-image-2024-07-24-at-11-55-14-7f0017e6-500x500.jpg",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK FUTURA LABORATORIES",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240718-WA0049.jpg?v=1721286439&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDANS RETRO 1 LOW TRAVIS SCOTT NOIRE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0029.jpg?v=1723752313&width=2200",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "AMIRI LEGACY SNEAKERS",
    category: "men",
    image:
      "https://eliteresalez.store/cdn/shop/files/IMG-20240811-WA0184.jpg?v=1723373894&width=1946",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "AMIRI LEGACY SNEAKERS 1",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/7/434783611/IM/UD/RV/192473731/product-jpeg-500x500.jpg",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 KHAKI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0016.jpg?v=1716583147&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 MINDFULL GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0067.jpg?v=1723718779&width=600",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE DUNK OTOMO OST GREEN BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0090.jpg?v=1723719192&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r PROTECTION GREEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f0387130-6f28-4545-86a3-17507ac23b11.jpg?v=1716668473&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW ANTHRACITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0011.jpg?v=1722373241&width=2200",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK SPLIT ATHLETIC DEPARTMENT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0108.jpg?v=1717099170&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE BANG CHUNKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9d4ece80-e77b-4e2d-91e0-85722a916040.jpg?v=1711034195",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE ONE MID",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-08-14at16.42.18_402346da.jpg?v=1723663859&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    name: "NIKE JORDAN CUT LOW JACK CACTUS RED AND WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_389c6e50-c060-47bc-8f09-308c8feaa1e8.jpg?v=1709972482&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE JORDAN 3 X TRAVIS SCOTT",
    category: "men",
    image:
      "https://i0.wp.com/www.shoesinkart.com/wp-content/uploads/2024/04/whatsapp-image-2024-04-05-at-13.21.19-scaled.jpeg?fit=1440%2C2560&ssl=1",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE AMBUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b1cf99a1-569e-4e9e-8359-d7a4ff448d5b.jpg?v=1711109075&width=2200",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 1",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0017.jpg?v=1719499989&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 2",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0019.jpg?v=1719500072",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 3",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240718-WA0052.jpg?v=1721286782",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240627-WA0008.jpg?v=1719501145",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 5",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240525-WA0023.jpg?v=1719500536&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER MEXICO 66 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ed8abb24-b638-4861-b44f-c6149c6b7a25.jpg?v=1709879438&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 40-45",
  },
  {
    name: "ASICS GEL VENTURE 6 TRIPLE WHITE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c3380ea6-4808-470a-80bd-e6e0925f06a4.jpg?v=1709578601&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "ASICS KAHANA GEL 8 WHITE AND BLUE EDITION",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9b0ac36e-14e0-4d41-bc60-e35faee93675.jpg?v=1716056267&width=600",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 40-45",
  },
  {
    name: "Puma Rs Ferrari",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3952a561-6c6f-4e03-aa57-8a0fcf136aea.jpg?v=1710156349&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK BURGUNDY CRUSH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0057.jpg?v=1718993449&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE ONE WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_00f8cdf2-0a84-4b86-9473-a32b12ec95d2.jpg?v=1717261552&width=990",
    price: 3399, // 1899 + 1500
    discountedPrice: 1899,
    size: "EUR 36-45",
  },
  {
    name: "Nike Sb Dunk Panda",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d3b68cfd-5c2c-4dd3-9725-bf0c104fce5e.jpg?v=1709704708&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-45",
  },
  {
    name: "Asics Gel 1130 Hal Studios",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_da1b8b2e-c5b1-4a81-9ccc-961a9e375147.jpg?v=1710098868&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "Asics Gel 1130 Hal Studios",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0072.jpg?v=1722374859&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0008_cd14c5d1-6001-48d4-9fc4-330a9fe2e4b4.jpg?v=1722270177&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SAMBA X WALES BONER BEIGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0042.jpg?v=1716588391&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS SAMBA x WALES BONER BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_3b7bd355-b76f-4568-8f43-eb8d7a0ad4c2.jpg?v=1714382354&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    name: "New Balance 530 Silver",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-13at13.11.49_296704f2.jpg?v=1720907060&width=533",
    price: 4075, // 2575 + 1500
    discountedPrice: 2575,
    size: "EUR 36-45",
  },
  {
    name: "New balance 530",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0246.jpg?v=1722078441&width=990",
    price: 3949, // 2449 + 1500
    discountedPrice: 2449,
    size: "EUR 36-45",
  },
  {
    name: "NEW BALANCE 1906 CORDURA GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0115.jpg?v=1723751852&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 BLACK CREAM",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0127.jpg?v=1716582982&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "EUR 40-45",
  },
  {
    name: "New balance 1906 WHITE GREEN CREAM",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0006.jpg?v=1717778410&width=990",
    price: 4375, // 2875 + 1500
    discountedPrice: 2875,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906 PROTECTION BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0202.jpg?v=1722029695&width=990",
    price: 4475, // 2975 + 1500
    discountedPrice: 2975,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0202.jpg?v=1722029695&width=990",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "Asics Ex 89",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ecc82007-9198-4bf5-bfdb-90bf938a9162.jpg?v=1717098875&width=990",
    price: 4250, // 2750 + 1500
    discountedPrice: 2750,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS OZELIA WHITE SKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_68447597-6126-4a0c-9bad-f348a6a0f54d.jpg?v=1715891499&width=990",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 40-45",
  },
  {
    name: "New balance RC elite V4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at14.54.10_b00e7949.jpg?v=1720607684&width=990",
    price: 4375, // 2875 + 1500
    discountedPrice: 2875,
    size: "EUR 40-44",
  },
  {
    name: "NEW BALANCE 9060 RICH OAK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240510-WA0015.jpg?v=1716585894&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060 TRIPLE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0119.jpg?v=1719867084&width=2200",
    price: 4699, // 3199 + 1500
    discountedPrice: 3199,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060 BRICKS AND WOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-20at01.31.46_6047d2c8.jpg?v=1721419601&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060 BLACK AND WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0099.jpg?v=1721938594&width=600",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0002.jpg?v=1722269924&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_7173284e-6f09-4068-b69a-ea96d642ea22.jpg?v=1713926294&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0008_cd14c5d1-6001-48d4-9fc4-330a9fe2e4b4.jpg?v=1722270177&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at16.35.54_af7335cf.jpg?v=1720614436&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-01at05.19.23_46c2c2be.jpg?v=1714564765",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0004_59a0253a-7e76-4f10-a109-96c4e824b281.jpg?v=1722270125&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_29a90124-61de-49d7-9dba-032f07c7a8b6.jpg?v=1713926461&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8e6a5960-0448-4bdb-8a91-e736b30d7750.jpg?v=1713926393&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240729-WA0003_3960b510-c848-4d32-b8a5-9f1c18dc5e66.jpg?v=1722270058&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-10at16.35.50_37474d5f.jpg?v=1720614526&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-05-02at05.31.12_f4443c0e.jpg?v=1714682660&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 9060",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9ef59d5f-4e28-4db1-ad3d-ee2b901fd608.jpg?v=1713926130&width=600",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIR JORDANS RETRO 1 PANDA MID",
    category: "women",
    image:
      "https://firstcopyshop.com/wp-content/uploads/2024/07/FIRST-COPY-JORDANS-RETRO-1-OG-BLACK-WHITE-PANDA-FOR-MEN-AND-WOMEN-1.jpeg",
    price: 2699, // 1199 + 1500
    discountedPrice: 1199,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS SUPERSTAR PARLEY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_88edbf5f-6fb9-4e5d-b296-a80701ad91a7.jpg?v=1709649355&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS SUPERSTAR BASIC",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5e5dca28-79c8-4f0a-a84b-faa33c0da753.jpg?v=1709971331&width=600",
    price: 2999, // 1499 + 1500
    discountedPrice: 1499,
    size: "EUR 36-40",
  },
  {
    name: "NIKE MK2 TEKNO MONARCH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_29a2f202-238c-4247-bb20-2b663e23eaf6.jpg?v=1716062211&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE MK2 TEKNO MONARCH",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d92286fa-f318-4dd0-92e0-01bf4b238a60.jpg?v=1709814201&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE MK2 TEKNO",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_579aec0e-639d-43a8-ba2e-8e625d75ff29.jpg?v=1709704059&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-40",
  },
  {
    name: "NIKE MK2 TEKNO CHUNKY GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_509e0eb7-fbc9-4304-bd01-dfd411c6997a.jpg?v=1717099623&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "NIKE MK2 TEKNO ATMOSPHERE COOL GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0023.jpg?v=1719864476&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE MK2 TEKNO",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0009.jpg?v=1723751962&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "NIKE MK2 TEKNO TRIPLE WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_033b414d-22d6-411a-bc8d-26d1427f8ca9.jpg?v=1709641579&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS CAMPUS 00S OREO",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d9650b4e-a260-4858-a974-e7bd7033dded.jpg?v=1715810821&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS CAMPUS WHITE PRELOVED BLUE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_616bdab9-e53e-41df-b641-abbdf694a2f3.jpg?v=1709630504&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS LEOPARD PRINT",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0016.jpg?v=1720378619&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c124393b-146d-4510-9da8-67656124a715.jpg?v=1715810952&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS CAMPUS 00s WHITE BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0101.jpg?v=1723736356&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0029.jpg?v=1724393799&width=990",
    price: 2750, // 1250 + 1500
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0030.jpg?v=1724393892&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0031.jpg?v=1724394082&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    name: "NIKE OFFCOURT ADJUST SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0028_24b1ce9d-1b06-4186-b53c-3f2932c475cc.jpg?v=1724393592&width=990",
    price: 2250, // 1250 + 1000
    discountedPrice: 1250,
    size: "EUR 40-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bdab26df-3b44-4527-8b89-e4c4a573227a.jpg?v=1709668287&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_639c8c3d-adaf-4d36-954f-2df3f0f366e2.jpg?v=1716407467&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0b3105e5-1fbf-446c-a669-9aa784387ef4.jpg?v=1709629129&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/4/409782161/FJ/SW/PI/19051907/product-jpeg-500x500.jpg",
    price: 4140, // 2640 + 1500
    discountedPrice: 2640,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/4/409782131/LN/RP/CI/19051907/product-jpeg-500x500.jpg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XkBxQyIxBBiG4SwZqWMlnEpoasCsf1KppA&usqp=CAU",
    price: 4349, // 2849 + 1500
    discountedPrice: 2849,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/389621239/ZE/WZ/RT/9581609/asics-gel-venture-6-250x250.jpg",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL VENTURE 6",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9kmuSFRF0j07yBLB6nCgQaVPcRcVohXd8Q&usqp=CAU",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 41-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS 00S 2024 BROWN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0015.jpg?v=1720728461&width=600",
    price: 4249, // 2749 + 1500
    discountedPrice: 2749,
    size: "EUR 36-45",
  },
  {
    name: "Jordan Retro 1 Suede Panda",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_22fac2fe-d574-4047-ac0c-b57292c209d3.jpg?v=1716496276&width=990",
    price: 2549, // 1549 + 1000
    discountedPrice: 1549,
    size: "EUR 36-45",
  },
  {
    name: "Vans Old Skool",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b96e9be2-39fd-4919-9658-11fb43fab30b.jpg?v=1709667036&width=990",
    price: 2199, // 1199 + 1000
    discountedPrice: 1199,
    size: "EUR 36-45",
  },
  {
    name: "Air Jordan Retro 4 ROYALTY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0045.jpg?v=1717437830&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDANS RETRO 1 TRAVIS SCOTT MOCHA REVERSE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0056.jpg?v=1723752060&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDANS RETRO 1 TRAVIS SCOTT FRAGMENT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0055.jpg?v=1719865947&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "Air Jordan Retro 1 Low Travis Scott Noire",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_48e8c912-a36c-4f81-831f-c2daa0f58ac2.jpg?v=1716065139&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "Air Jordan Retro 1 Travis Scott",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_adcfe07a-4062-4545-8a84-6c79852cc345.jpg?v=1716148361&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 1 LUCKY GREEN",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240811-WA0063.jpg?v=1723391449&width=990",
    price: 3150, // 2150 + 1000
    discountedPrice: 2150,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIR JORDAN 1 LOW OG X TROPHY ROOM SAIL AND VARSITY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0058.jpg?v=1722374296&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDANS RETRO 1 LOW GREY BLACK ORANGE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0052.jpg?v=1721937061&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.38.52_a750abb9_2f7d6d7a-7c42-4bfe-b79f-1c94826e927e.jpg?v=1717685852&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.27.33_d5ef1c62.jpg?v=1717685891&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.28.35_0b893567.jpg?v=1717684552&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.40.07_61698af9.jpg?v=1717687153&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.34.10_ce532136.jpg?v=1717686809&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.42.26_b8d6b9ab.jpg?v=1717685644&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.38.14_bb41e741.jpg?v=1717685376&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.32.11_aeaaca0d.jpg?v=1717686067&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.40.51_204a9c4a.jpg?v=1717687230&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.31.24_5e81a1b3.jpg?v=1717684827&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.37.14_a1b0dedf.jpg?v=1717686973&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.32.11_aeaaca0d.jpg?v=1717686067&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.29.56_b4d5d5e3.jpg?v=1717685969&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.35.46_28675ddd.jpg?v=1717686889&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.33.33_78ab5b2c_f3c162df-49a9-44ad-aab9-34f413ccffec.jpg?v=1717686734&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.39.37_152b41b3.jpg?v=1717687067&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.29.56_b4d5d5e3.jpg?v=1717685969&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.33.02_b1960774.jpg?v=1717686689&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-06at01.41.28_b155b0ad.jpg?v=1717684689&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "Jordan retro 4 sail off white",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240426-WA0003.jpg?v=1716581920&width=990",
    price: 3875, // 2375 + 1500
    discountedPrice: 2375,
    size: "EUR 40-45",
  },
  {
    name: "AIR JORDAN RETRO 4 YELLOW FLIGHT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240726-WA0025.jpg?v=1721936222&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "Air Jordan Retro 4 Messy Room",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c99cb7da-7e9d-4fa3-889f-2bfadfb50df2.jpg?v=1709704147&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "Air Jordan Retro 4 Cool Grey",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8a06c3e0-872f-4e8a-b7aa-147a7b64d145.jpg?v=1709792605&width=990",
    price: 3599, // 2099 + 1500
    discountedPrice: 2099,
    size: "EUR 40-45",
  },
  {
    name: "Jordan Retro 1 Spiderverse",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ab779de9-074b-4344-bed9-0ee9a8642595.jpg?v=1713298990&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "CR9CS LITERIDE 360 BLUE RED",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240824-WA0005.jpg?v=1724438030&width=533",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "M6-M11",
  },
  {
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240614-WA0015.jpg?v=1718394701&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240614-WA0019.jpg?v=1718394793&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0047.jpg?v=1717790652&width=990",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0045.jpg?v=1717790573&width=533",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    name: "CROCS LAKERS BASKETBALL",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0041.jpg?v=1717790711&width=533",
    price: 3099, // 1599 + 1500
    discountedPrice: 1599,
    size: "M6-M11",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.47.57_c88b429c.jpg?v=1722283509&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "NEW BALANCE 2002r CASTLEROCK INDIGO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240823-WA0053.jpg?v=1724437678&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.45.26_8c867d7a.jpg?v=1722283365&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.48.24_d3fc3d27.jpg?v=1722283587&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.47.29_9ecccbd0.jpg?v=1722283442&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "NEW BALANCE 1906D",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-07-29at12.44.52_326e579f.jpg?v=1722283197&width=533",
    price: 4399, // 2899 + 1500
    discountedPrice: 2899,
    size: "EUR 41-45",
  },
  {
    name: "New balance 2002r Shadow",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_839c5983-fa2b-4d00-b63c-2734d2cd04ba.jpg?v=1717103866&width=990",
    price: 4275, // 2775 + 1500
    discountedPrice: 2775,
    size: "EUR 40-45",
  },
  {
    name: "New balance 2002r Cherry Bordeaux",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_eb0d1761-db40-4b18-b916-8515599e6b03.jpg?v=1711210651&width=990",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r GORETEX JJJOUND",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0151.jpg?v=1722028416&width=990",
    price: 4749, // 3249 + 1500
    discountedPrice: 3249,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r DARK GREY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0018.jpg?v=1718621385&width=990",
    price: 4649, // 3149 + 1500
    discountedPrice: 3149,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 2002r PROTECTION PACK SEA SALT",
    category: "UNISEX",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0040.jpg?v=1720379936&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    name: "VANS OLD SKOOL KNU DEVIL",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240816-WA0073.jpg?v=1723812527&width=990",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-40",
  },
  {
    name: "VANS OLD SKOOL KNU BLUE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240820-WA0017.jpg?v=1724098653&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-45",
  },
  {
    name: "VANS OLD SKOOL KNU DISNEY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0104.jpg?v=1717792053&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "VANS OLD SKOOL KNU BLACK WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-08-13at13.07.36_700390ad.jpg?v=1723579873&width=990",
    price: 4049, // 2549 + 1500
    discountedPrice: 2549,
    size: "EUR 36-45",
  },
  {
    name: "VANS OLD SKOOL KNU CORE BLACK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0064.jpg?v=1720906817&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "VANS OLD SKOOL KNU PEACHES",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0023.jpg?v=1721545702&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "NIKE SB DUNK MUMMY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0105.jpg?v=1720774633&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK JOKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240821-WA0007.jpg?v=1724184740&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW MEDIUM CURRY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240705-WA0035.jpg?v=1720172537&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK STUSSY LUV FREE HUGS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0027.jpg?v=1721161196&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK DRAGON BALLS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_fee2283f-5ba3-40ee-9cc5-73e955e1dc17.jpg?v=1717954826&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK GHOST RIDER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6cc9dfb7-3dd9-45e7-a43e-4c2f4ec2aa08.jpg?v=1718910952&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS GREY",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0050.jpg?v=1720610267&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS WHITE PRELOVED BLUE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0008.jpg?v=1720378180&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 36-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS 00S 2024 BLUE HEART",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0020.jpg?v=1721159814&width=2200",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK OLIVE GREEN",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0004.jpg?v=1720557768&width=600",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK AMBUSH DRIFTWOOD",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240612-WA0011.jpg?v=1718204105&width=600",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK SYRACUSE ORANGE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0101.jpg?v=1720908044&width=600",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-45",
  },
  {
    name: "NIKE SB DUNK YUTO HORIGOME",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db596f6a-15f4-4c52-a3f9-a0b762306a7c.jpg?v=1710099352&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK AMBUSH SAINT SEIYA",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_457d0676-ffbf-4bac-a316-9010ad25c4a6.jpg?v=1715063817&width=600",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK DUNKIN DONUT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_44a6f6e4-55a1-4aa4-8d83-0a6d3ad41461.jpg?v=1717915057&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK SNORLAX",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240524-WA0049.jpg?v=1716588635&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK HEINEKEN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ad5d8f74-6317-4990-ac28-26d463438609.jpg?v=1717099416&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK DRAGONBALLS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0045.jpg?v=1718993756&width=2200",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK MULTI CAMO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_88af4e30-733f-4f2e-bd15-772ebde994f9.jpg?v=1716297561&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK CLOT CORK",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0058.jpg?v=1717438463&width=600",
    price: 3699, // 2199 + 1500
    discountedPrice: 2199,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK SETSUBAN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0034.jpg?v=1717098703&width=600",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK DISRUPT",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240602-WA0013.jpg?v=1717348046&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK APRIL",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_336cdaf6-e24a-4ca1-bacc-9cf8c619ba88.jpg?v=1711548623&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK PRO LONDON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0028.jpg?v=1717250502&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK STUSSY BLUE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_cb4f5f19-20b5-4b83-919c-bab68c4b32bc.jpg?v=1717104050&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK OTOMO KATSUHIRO",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_00929feb-9887-4db8-825c-5693d2e77ccf.jpg?v=1717098779&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK 2023 CHROME HEARTS",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0084.jpg?v=1717791636&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK GREEN APPLE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0137.jpg?v=1722375891&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK WHITE GUM",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0147.jpg?v=1722376126&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "Puma Palermo",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0009.jpg?v=1717437983&width=990",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "Puma Palermo",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e0cb5e75-bc67-4064-adc0-1416902ea536.jpg?v=1712606738&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "Puma Cali Dream NYC",
    category: "women",
    image:
      "https://shoeseller.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-30-at-4.58.23-PM-2-scaled.jpeg",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 36-40",
  },
  {
    name: "Puma Cali Dream",
    category: "women",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/4/411159686/TQ/LV/EZ/192412408/whatsapp-image-2024-04-17-at-13-37-55-500x500.jpeg",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    name: "PUMA RS BMW",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_09a0cef2-e0aa-4e5f-b0c5-ae6dc688e0fe.jpg?v=1709653629&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "ASICS GT 2160 WHITE PURE SILVER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240824-WA0033.jpg?v=1724438921&width=990",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "ASICS EX-89 WHITE SKY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240824-WA0041.jpg?v=1724439131&width=990",
    price: 4250, // 2750 + 1500
    discountedPrice: 2750,
    size: "EUR 40-45",
  },
  {
    name: "ASICS EX 89 WHITE BLUE",
    category: "men",
    image:
      "https://classyfashionfluence.com/cdn/shop/files/WhatsAppImage2024-03-24at4.47.55PM_1946x.jpg?v=1711354350",
    price: 4450, // 2950 + 1500
    discountedPrice: 2950,
    size: "EUR 40-45",
  },
  {
    name: "ASICS EX 89 KITH",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZ5qcyKb12r5VsBDB3xecnB2D7GhqDSmHSQ&usqp=CAU",
    price: 4599, // 3099 + 1500
    discountedPrice: 3099,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 530 SKY",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240723-WA0036.jpg?v=1721678978&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    name: "New Balance 539 Triple White",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_dfe5c05e-012e-40e5-815a-550ea9e51333.jpg?v=1711453087&width=990",
    price: 3650, // 2150 + 1500
    discountedPrice: 2150,
    size: "EUR 36-40",
  },
  {
    name: "New Balance 530 Ivory",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_bd3d893d-42d8-490d-8cf8-4e41641d9ad0.jpg?v=1716584379&width=990",
    price: 4150, // 2650 + 1500
    discountedPrice: 2650,
    size: "EUR 36-45",
  },
  {
    name: "New Balance 530 Oreo",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5023be02-5817-4ac1-b2dd-0897b6bcc8c0.jpg?v=1709582432&width=1920",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-45",
  },
  {
    name: "CONVERSE CHUCK 70",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0042.jpg?v=1723717050&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "unisex",
  },
  {
    name: "CONVERSE CHUCK 70",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_a26749e8-9461-4482-9ccb-49f31c0d07ee.jpg?v=1710075612&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "unisex",
  },
  {
    name: "Louis Vuitton Skate Trainer",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/7/433557175/MR/VA/BH/192473731/product-jpeg.jpg",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Adimetic Original Grey Blue",
    category: "clearance",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/7/433798170/GI/YN/BD/192473731/product-jpeg-500x500.jpg",
    price: 2849, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ADIMETIC",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240610-WA0062.jpg?v=1718050175&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ADIMETIC",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0016.jpg?v=1719864098&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ADIMETIC",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0047.jpg?v=1720729785&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ADIMETIC",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5f710ba7-2b7c-4b29-92e3-5f8856b00838.jpg?v=1709640221&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN BLACK WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240718-WA0027.jpg?v=1721246943&width=533",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN HUM SOLE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_4fe77a2b-6a72-4b1f-ac4e-11e2db7f26d7.jpg?v=1709814943&width=533",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN HUM SOLE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e32aa912-6c00-436f-9896-68bafdcfd03d.jpg?v=1709661983&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN HUM SOLE",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDuCcTaIjZEEBtpkeEK2-9faH9t_eZLfpJw&usqp=CAU",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ONITSUKA TIGER TOKUTEN HUM SOLE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_170013e9-08ef-48d4-8b93-05bbe2436c58.jpg?v=1720036107&width=1920",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE",
    category: "crocs",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/420125817/VD/GS/US/192412408/whatsapp-image-2024-05-18-at-20-38-01.jpeg",
    price: 2299, // 1299 + 1000
    discountedPrice: 1299,
    size: "M6-M10",
  },
  {
    name: "Nike Jordan 6 City of Flight",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuw8rRxQvR2dtWuzNq14Qw9AcIu_nWEII0g&usqp=CAU",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_33614dd6-8a13-4e2e-9fd1-c5771131fad6.jpg?v=1709788119&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_013658d3-ef7d-4ced-b4d6-03f2ebdaf1e0.jpg?v=1709582570&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0061.jpg?v=1720611302&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240605-WA0099.jpg?v=1717593636&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_a01ba544-db4e-479b-954e-17568ec887b5.jpg?v=1709662463&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/b8377ea5-0426-4ecb-b7c3-7311052dc2a3.jpg?v=1709662323&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/2b009ab5-89e3-47e8-85b6-603d9522a8d8.jpg?v=1708865872&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "Louis Vuitton",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_be66824a-ae33-4d63-a9c1-d2dea4e41c31.jpg?v=1712606894&width=990",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 41-45",
  },
  {
    name: "CONVERSE CHUCK 70",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240815-WA0050.jpg?v=1723717410&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "CONVERSE CHUCK 70",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240824-WA0052.jpg?v=1724492229&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-45",
  },
  {
    name: "Converse All Star",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f6a89d34-200d-484c-8766-e1f565a3c654.jpg?v=1709638451&width=990",
    price: 2699, // 1199 + 1500
    discountedPrice: 1199,
    size: "EUR 36-45",
  },
  {
    name: "Converse Star Vintage",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/4f655408-2a2e-40db-9747-6a56fd77200e.jpg?v=1709637533&width=990",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 36-45",
  },
  {
    name: "Nike Blazer Low 77 Jumbo",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8ff17998-dc0e-4793-9bf8-c01c505e3a9c.jpg?v=1717097694&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 36-45",
  },
  {
    name: "Nike Blazer Mid 77 Jumbo",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_246f48ac-c517-4912-9248-896cc3a52f1c.jpg?v=1709565966&width=990",
    price: 3799, // 2299 + 1500
    discountedPrice: 2299,
    size: "EUR 36-45",
  },
  {
    name: "NIKE AIRFORCE ONE LOUIS VUITTON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240702-WA0041.jpg?v=1719865281",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 41-45",
  },
  {
    name: "Air Jordan Retro 4 Paris",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2350d013-3bbd-4d91-903e-84377dd9c2f8.jpg?v=1716235543&width=990",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Jarritos",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8cfd94fa-808e-4200-82f9-c115fdfe0401.jpg?v=1710147354&width=990",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Otomo Katsuhiro",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0067.jpg?v=1722374604&width=533",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Otomo Katsuhiro",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_00929feb-9887-4db8-825c-5693d2e77ccf.jpg?v=1717098779&width=533",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Otomo Katsuhiro",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_5c8bc8d8-db2a-4464-9fae-b303ef52e249.jpg?v=1712435157&width=533",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Otomo Katsuhiro",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240530-WA0021.jpg?v=1717052678&width=533",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "Nike Sb Dunk Otomo Katsuhiro",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_8c9896fd-3e26-4634-9085-ea526d6e5336.jpg?v=1709667809&width=990",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 41-45",
  },
  {
    name: "ONITSUKA TIGER TRAINERS SILVER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240727-WA0185.jpg?v=1722029275&width=990",
    price: 4199, // 2699 + 1500
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Samba Silver",
    category: "unisex",
    image:
      "https://5.imimg.com/data5/IOS/Default/2024/6/423753196/KL/EV/AT/221850826/product-jpeg-500x500.png",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 36-45",
  },
  {
    name: "CROCS OFF GRID CLOG",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240721-WA0120.jpg?v=1721587057&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "m6-m11",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0086.jpg?v=1718828673&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0089.jpg?v=1718828584&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0061.jpg?v=1718827826&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "CROCS X SALEHE BEMBURRY POLEX SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0077.jpg?v=1718828106&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "CROCS X SALEHE BEMBURRY POLEX SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240613-WA0022.jpg?v=1718284374&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "CROCS X SALEHE BEMBURRY POLEX SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0073.jpg?v=1718828218&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "CROCS X SALEHE BEMBURRY POLEX SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240625-WA0067.jpg?v=1719321954&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "CROCS X SALEHE BEMBURRY POLEX SLIDE",
    category: "slide",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0094.jpg?v=1717791922&width=990",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE 360",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0090.jpg?v=1717791828&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "m6-m11",
  },
  {
    name: "CROCS ALL TERRAIN ATLAS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0051.jpg?v=1718827701&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "CROCS ALL TERRAIN ATLAS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240708-WA0047.jpg?v=1720380131&width=990",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 40-45",
  },
  {
    name: "Crocs Classic all Terrain",
    category: "crocs",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6014/2083/files/IMG-20240620-WA0019.jpg?v=1718825394&width=533",
    price: 3149, // 1649 + 1500
    discountedPrice: 1649,
    size: "EUR 40-45",
  },
  {
    name: "Crocs Classic all Terrain",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-11at04.24.23_67ff1ec3.jpg?v=1718214515&width=990",
    price: 3149, // 1649 + 1500
    discountedPrice: 1649,
    size: "EUR 40-45",
  },
  {
    name: "Crocs Classic all Terrain",
    category: "crocs",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6014/2083/files/WhatsAppImage2024-06-11at04.24.22_f443141b.jpg?v=1718214561&width=533",
    price: 3149, // 1649 + 1500
    discountedPrice: 1649,
    size: "EUR 40-45",
  },
  {
    name: "Crocs Classic all Terrain",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-11at04.24.21_87a4add8.jpg?v=1718214440&width=990",
    price: 3149, // 1649 + 1500
    discountedPrice: 1649,
    size: "EUR 40-45",
  },
  {
    name: "Crocs Classic all Terrain",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240802-WA0214.jpg?v=1722547603&width=990",
    price: 3199, // 1699 + 1500
    discountedPrice: 1699,
    size: "EUR 40-45",
  },
  {
    name: "CROCS ALL TERRAIN ATLAS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0051.jpg?v=1720730124&width=990",
    price: 3499, // 1999 + 1500
    discountedPrice: 1999,
    size: "EUR 40-45",
  },
  {
    name: "CROCS ALL TERRAIN ATLAS",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240617-WA0030.jpg?v=1718622190&width=990",
    price: 3249, // 1749 + 1500
    discountedPrice: 1749,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE 360",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-01at22.38.35_e069ab59.jpg?v=1717793431&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE 360",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-06-01at22.38.38_8e471411.jpg?v=1717793544&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE 360",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240710-WA0070.jpg?v=1720611476&width=990",
    price: 2899, // 1399 + 1500
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0124.jpg?v=1717793039&width=533",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0120.jpg?v=1717792624&width=533",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "CROCS LITERIDE",
    category: "crocs",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0126.jpg?v=1717793294&width=533",
    price: 2849, // 1349 + 1500
    discountedPrice: 1349,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SAMBA X WALES BONER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0110.jpg?v=1722375655&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS SAMBA X WALES BONER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_26fe9021-c7a2-4cdc-a32a-861f3fc47336.jpg?v=1714382504&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS SAMBA X WALES BONER ESSENTIAL BROWN",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240723-WA0089.jpg?v=1721759148&width=990",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-44",
  },
  {
    name: "ADIDAS SUPERSTAR YANWAI",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240723-WA0008.jpg?v=1721678342&width=990",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR FLORAL",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0036.jpg?v=1722373493&width=990",
    price: 3149,
    discountedPrice: 2149,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS SUPERSTAR CHAIN",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0172789c-e58a-451a-afba-326c4c8a645c.jpg?v=1715972182&width=990",
    price: 3349,
    discountedPrice: 2349,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Superstar Bonega",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_1c5cc5c8-c508-46eb-8967-5f9a65622b29.jpg?v=1712780161&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Superstar Pride",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_903a2e61-c185-42c0-abf4-ec0b1bd51677.jpg?v=1715973049&width=990",
    price: 3299,
    discountedPrice: 2299,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Superstar Multi",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d8a26ded-70e9-4585-9586-45515cc4b126.jpg?v=1709704444&width=990",
    price: 3399,
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    name: "ADIDAS SUPERSTAR TRIPPLE BLACK",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0040.jpg?v=1720729523&width=990",
    price: 2399,
    discountedPrice: 1399,
    size: "EUR 36-44",
  },
  {
    name: "Adidas Superstar Cappuccino",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240626-WA0012.jpg?v=1719381093&width=990",
    price: 2849,
    discountedPrice: 1849,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Superstar Hello Kitty",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_0d99f1aa-d6fd-4f65-a528-c996af8f426b.jpg?v=1715972333&width=990",
    price: 2849,
    discountedPrice: 1849,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Originals Superstar PEACHES",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240605-WA0032.jpg?v=1717591305&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS SUPERSTAR BROWN BUTTON",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240607-WA0063.jpg?v=1717790979&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Superstar Cream Black White",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_4087b4cd-2ea2-4e5f-ab36-941b4aad0119.jpg?v=1709790654&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Originals SUPERSTAR bloody red",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240705-WA0049.jpg?v=1720173344&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 41-44",
  },
  {
    name: "Nike Sb Dunk ninja",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-04-20at22.27.24_d733c8ce.jpg?v=1719171015&width=990",
    price: 3499,
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK LOW PRIME BACON",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240714-WA0053.jpg?v=1720906551&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "Nike AIRFORCE dollars",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240717-WA0057.jpg?v=1721212715&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "Nike Airforce North Face Gucci",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_df32ec08-b433-48ec-8378-34990d9d4c83.jpg?v=1709792228&width=990",
    price: 3399,
    discountedPrice: 2399,
    size: "EUR 41-45",
  },
  {
    name: "Nike Airforce North Face Gucci",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_78c8dca9-2613-4daf-bdfe-ad357cf53fa6.jpg?v=1709720437&width=990",
    price: 3399,
    discountedPrice: 2399,
    size: "EUR 41-45",
  },
  {
    name: "ASICS GEL 1130 SILVER SOLAR",
    category: "men",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhnoCxTF--hyOspoSc0uiigW_ouwzp8RVpg&usqp=CAU",
    price: 3999,
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Samba Gum",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_f458a60a-2c14-4734-a35f-eae678748fd6.jpg?v=1709653902&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 36-44",
  },
  {
    name: "Adidas Samba Gum",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_9a73de10-4bd1-4d50-be83-3ba064f65a55.jpg?v=1709720714&width=990",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 36-40",
  },
  {
    name: "Adidas Samba white Green",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_28a4a55a-3ac9-4edc-a292-482aece7e429.jpg?v=1709630625&width=990",
    price: 3199,
    discountedPrice: 2199,
    size: "EUR 36-44",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_296022d2-3bdc-4c37-82cd-91c672bcaf50.jpg?v=1715810985&width=990",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_cfcef993-ef78-4670-9c33-55936ac1e710.jpg?v=1715810975&width=990",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_7bd1a6f5-f0d2-4bbf-a1c1-0125a6bc48fd.jpg?v=1709629360",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_73ccc39b-21ed-4e1f-9ed8-f7cb7964a64c.jpg?v=1715809871",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240605-WA0138.jpg?v=1717594828",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_068d150f-55e6-417e-90e7-8ef4f8caf3fd.jpg?v=1715810997",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_14f224c8-554b-484e-873f-de1c097c62be.jpg?v=1710075880",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_2208041a-af82-47b1-976a-7418e07d3bf1.jpg?v=1712608887",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240601-WA0008.jpg?v=1717236425",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Adidas Orginals Ozelia",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240519-WA0011.jpg?v=1716150657",
    price: 3699,
    discountedPrice: 2699,
    size: "EUR 40-45",
  },
  {
    name: "Nike sb dunk vegeta",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240511-WA0070.jpg?v=1719171414",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK OTOMO KATSUHIRO STEAMBOY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0067.jpg?v=1722374604",
    price: 3499,
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "Nike Sb Dunk Dusty Olive Green",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240705-WA0055.jpg?v=1720178058",
    price: 3599,
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "Nike Sb Dunk Chrome Hearts",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b4065a37-f11d-4344-9b0b-4a9ef89ca918.jpg?v=1710080610",
    price: 3499,
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK OTOMO KATSUHIRO STEAMBOY",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240731-WA0067.jpg?v=1722374604",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "Nike Sb Dunk Dusty Olive Green",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240705-WA0055.jpg?v=1720178058",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "Nike Sb Dunk Chrome Hearts",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_b4065a37-f11d-4344-9b0b-4a9ef89ca918.jpg?v=1710080610",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRMAX 1 BROWN STONE",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240712-WA0087.jpg?v=1720773576&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK AMBUSH SAINT SEIYA",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_4b5e4c0b-edec-4118-8116-e1fa9ed0be18.jpg?v=1717617529&width=600",
    price: 3299, // 1799 + 1500
    discountedPrice: 1799,
    size: "EUR 36-44",
  },
  {
    name: "NIKE SB DUNK LOW SE OLDER DANCE",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_e09498c6-2557-49cd-b5f9-b371f1c5be4a.jpg?v=1711898742&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIR JORDAN RETRO 4 ROYALTY",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0045.jpg?v=1717437830&width=600",
    price: 3849, // 2349 + 1500
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS BAD BUNNY BLACK",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/image_ddac6280-05e9-4863-ad21-6cce92bb0142.jpg?v=1709792476&width=600",
    price: 3999, // 2499 + 1500
    discountedPrice: 2499,
    size: "EUR 36-44",
  },
  {
    name: "ADIDAS FORUM EXHIBIT MULTI COLOUR",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_04bf9772-d656-4438-932c-f8025351cc21.jpg?v=1709578451&width=600",
    price: 3649, // 2149 + 1500
    discountedPrice: 2149,
    size: "EUR 40-45",
  },
  {
    name: "ASICS FUZE GEL ORTHO",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240428-WA0076.jpg?v=1714333841&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORIGINALS CAMPUS PANDA",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240428-WA0063.jpg?v=1714332530&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 36-44",
  },
  {
    name: "NIKE BLAZER CITY LOW",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240529-WA0012.jpg?v=1716999766&width=600",
    price: 4299, // 2799 + 1500
    discountedPrice: 2799,
    size: "EUR 36-44",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0064.jpg?v=1718827826&width=600",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "M6-M11",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0086.jpg?v=1718828673&width=600",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "M6-M11",
  },
  {
    name: "CROCS DYLAN CLOGS",
    category: "Men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240620-WA0084.jpg?v=1718828584&width=600",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "M6-M11",
  },
  {
    name: "ADIDAS SUPERSTAR",
    category: "women",
    image:
      "https://snapkicks.in/cdn/shop/files/image_d307e521-195d-4aa6-801c-e0f67e34db6d.jpg?v=1715970735&width=600",
    price: 3499, // 2149 + 1350
    discountedPrice: 2149,
    size: "EUR 36-40",
  },
  {
    name: "NIKE MK2 TECNO",
    category: "clearance",
    image:
      "https://snapkicks.in/cdn/shop/files/image_c1c43fb1-f57e-47a0-a25b-b65dd65a86f2.jpg?v=1709630383&width=600",
    price: 3799, // 2349 + 1450
    discountedPrice: 2349,
    size: "EUR 36-44",
  },
  {
    name: "NIKE VAPORFLY NEXT 3",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240828-WA0092.jpg?v=1724843142&width=600",
    price: 3799, // 2349 + 1450
    discountedPrice: 2349,
    size: "EUR 40-45",
  },
  {
    name: "NEW BALANCE 530 IVORY",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_db51433d-604a-48ae-baed-0a171934a18e.jpg?v=1716584379&width=600",
    price: 3999, // 2599 + 1400
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK BATMAN X JOKER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_6ce9a8ba-309c-4e7e-98cd-5f8a41b0d610.jpg?v=1709666599&width=600",
    price: 3899, // 2499 + 1400
    discountedPrice: 2499,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIR JORDAN 1 LOW X DIOR",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_a4921297-7a9a-4690-8a61-300a94772113.jpg?v=1709835918&width=600",
    price: 2799, // 1399 + 1400
    discountedPrice: 1399,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE AMBUSH TRIPPLE WHITE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240603-WA0049.jpg?v=1717438221&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "NIKE SB DUNK YEAR OF RABBIT 2023",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240602-WA0021.jpg?v=1717348397&width=600",
    price: 4099, // 2599 + 1500
    discountedPrice: 2599,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRMAX WORLDWIDE",
    category: "men",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2024/6/428115752/UT/ZL/XZ/32302589/product-jpeg-500x500.jpg",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS SUPERSTAR SHADOW GRAY",
    category: "women",
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/10/353253596/TP/EI/MG/200358557/1695190683140-sku-1682-0-500x500.jpg",
    price: 3349, // 1849 + 1500
    discountedPrice: 1849,
    size: "EUR 36-40",
  },
  {
    name: "NIKE AIR JORDAN RETRO 1 LOW TRAVIS SCOTT NOIRE",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/image_48e8c912-a36c-4f81-831f-c2daa0f58ac2.jpg?v=1716065139&width=600",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS FORUM EXHIBIT YELLOW",
    category: "women",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/389351045/BM/SU/OO/9581609/adidas-forum-exhibit-500x500.jpg",
    price: 3899, // 2399 + 1500
    discountedPrice: 2399,
    size: "EUR 36-40",
  },
  {
    name: "NIKE X UNION FIELD GENERAL SP SHIMMER",
    category: "men",
    image:
      "https://snapkicks.in/cdn/shop/files/IMG-20240805-WA0087.jpg?v=1722799676&width=360",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "NIKE AIRFORCE HEMP COCONUT MILK",
    category: "men",
    image: "https://cloudgarment.com/wp-content/uploads/2024/06/Picture3-3.jpg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "VANS OLD SKOOL KNU BLACK WHITE",
    category: "unisex",
    image:
      "https://snapkicks.in/cdn/shop/files/WhatsAppImage2024-08-13at13.07.36_700390ad.jpg?v=1723579873&width=600",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 36-44",
  },
  {
    name: "NIKE AIRFORCE ALL PETALS UNITED BEIGE",
    category: "men",
    image: "https://cdn.dotpe.in/longtail/store-items/6013510/TA4fdAVu.jpeg",
    price: 4149, // 2649 + 1500
    discountedPrice: 2649,
    size: "EUR 40-45",
  },
  {
    name: "EMPORIO ARMANI SNEAKERS WHITE",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/437783704/AB/IP/VR/9581609/emporio-armani-sneakers-500x500.jpg",
    price: 4999, // 3499 + 1500
    discountedPrice: 3499,
    size: "EUR 40-45",
  },
  {
    name: "EMPORIO ARMANI SNEAKERS BLACK",
    category: "men",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/390022633/LP/HD/BA/9581609/emporio-armani-sneakers-500x500.jpg",
    price: 4999, // 3499 + 1500
    discountedPrice: 3499,
    size: "EUR 40-45",
  },
  {
    name: "ADIDAS ORGINALS OZMILLEN",
    category: "Men",
    image:
      "https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwd3d7e717/images/hi-res/001514878_105.jpg?sw=600&sh=600&sm=fit&q=90&frz-v=43",
    price: 4499, // 2999 + 1500
    discountedPrice: 2999,
    size: "EUR 40-45",
  },
  {
    name: "CLOGS",
    category: "crocs",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/425274805/DL/GM/MP/192412408/whatsapp-image-2024-06-07-at-10-59-10-500x500.jpeg",
    price: 2599, // 1099 + 1500
    discountedPrice: 1099,
    size: "M6-M11",
  },
  {
    name: "VERSACE SLIDES",
    category: "slide",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/416435565/YW/MH/OC/192412408/whatsapp-image-2024-05-04-at-18-54-43-500x500.jpeg",
    price: 2449, // 949 + 1500
    discountedPrice: 949,
    size: "EUR 40-45",
  },
  {
    name: "LOUIS VUITTON SLIDES",
    category: "slide",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/420133646/LR/ZO/OG/192412408/whatsapp-image-2024-05-18-at-21-23-18-250x250.jpeg",
    price: 2399, // 899 + 1500
    discountedPrice: 899,
    size: "EUR 40-45",
  }
];

export default products;