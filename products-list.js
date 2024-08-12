// PRODUCT LISTS
const products = [
    {
        id: 1,
        name: 'NIKE SB DUNK STUSSY JUST DO IT',
        category: 'men',
        image: 'shop/NIKE SB DUNK STUSSY JUST DO IT.jpg',
        price: 2999,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 2,
        name: 'NEW BALANCE 530 GREEN',
        category: 'unisex',
        image: 'shop/NEW BALANCE 530 GREEN.jpg',
        price: 2899,
        discountedPrice: 2575,
        size: 'EUR 36-44'
    },
    {
        id: 3,
        name: 'NEW BALANCE 1906 KHAKHI',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 KHAKHI.jpg',
        price: 3499,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 4,
        name: 'ADIDAS FORUM 84 TRIPPLE WHITE',
        category: 'women',
        image: 'shop/ADIDAS FORUM 84 TRIPPLE WHITE.jpg',
        price: 3499,
        discountedPrice: 2799,
        size: 'EUR 36-40'
    },
    {
        id: 5,
        name: 'NIKE SB DUNK MOCHA',
        category: 'men',
        image: 'shop/NIKE SB DUNK MOCHA.jpg',
        price: 2999,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 6,
        name: 'Nike Air Jordan 6 British khakhi',
        category: 'uaquality',
        image: 'shop/Nike Air Jordan 6 British khakhi.jpg',
        price: 4299,
        discountedPrice: 3599,
        size: 'EUR 41-46'
    },
    {
        id: 7,
        name: 'NIKE SB DUNK KLEKT',
        category: 'men',
        image: 'shop/NIKE SB DUNK KLEKT.jpg',
        price: 3399,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 8,
        name: 'Nike Sb Dunk Low x Otomo Katsuhiro green',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x Otomo Katsuhiro green.jpg',
        price: 2999,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 9,
        name: 'ADDIDAS ORGINALS CAMPUS DARK GREEN',
        category: 'unisex',
        image: 'shop/ADDIDAS ORGINALS CAMPUS DARK GREEN.jpg',
        price: 3299,
        discountedPrice: 2599,
        size: 'EUR 36-44'
    },
    {
        id: 10,
        name: 'NEW BALANCE 1906 TRIPPLE BLACK',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 TRIPPLE BLACK.jpg',
        price: 3599,
        discountedPrice: 2975,
        size: 'EUR 40-45'
    },
    {
        id: 11,
        name: 'Nike Sb dunk RAYSSA LEAL',
        category: 'men',
        image: 'shop/Nike Sb dunk RAYSSA LEAL.jpg',
        price: 3499,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 12,
        name: 'Nike Sb Dunk Low x otomo brown white',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x otomo brown white.jpg',
        price: 3799,
        discountedPrice: 2499,
        size: 'EUR 41-46'
    },
    {
        id: 13,
        name: 'DOLCE AND GABBANA sneakers',
        category: 'uaquality',
        image: 'shop/DOLCE AND GABBANA sneakers.jpg',
        price: 3999,
        discountedPrice: 2999,
        size: 'EUR 40-44'
    },
    {
        id: 14,
        name: 'NIKE AIRMAX 1 BROWN STONE',
        category: 'men',
        image: 'shop/NIKE AIRMAX 1 BROWN STONE.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: 'EUR 41-45'
    },
    {
        id: 15,
        name: 'ADIDAS ORIGINALS SAMBA XLG FEI FEI RUN',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS SAMBA XLG FEI FEI RUN.jpg',
        price: 3699,
        discountedPrice: 2599,
        size: 'EUR 40-44'
    },
    {
        id: 16,
        name: 'ADIDAS ORGINALS 00S BLACK SOLE',
        category: 'unisex',
        image: 'shop/ADIDAS ORGINALS 00S BLACK SOLE.jpg',
        price: 3399,
        discountedPrice: 2599,
        size: 'EUR 36-44'
    },
    {
        id: 17,
        name: 'ONITSUKA tiger leather ',
        category: 'unisex',
        image: 'shop/ONITSUKA tiger leather.jpg',
        price: 3499,
        discountedPrice: 2499,
        size: 'EUR 36-45'
    },
    {
        id: 18,
        name: 'NIKE SB DUNK RUSH HOURS',
        category: 'men',
        image: 'shop/NIKE SB DUNK RUSH HOURS.jpg',
        price: 3599,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 19,
        name: 'ADIDAS SAMBA BASIC BLACK AND WHITE ',
        category: 'unisex',
        image: 'shop/ADIDAS SAMBA BASIC BLACK AND WHITE.jpg',
        price: 3299,
        discountedPrice: 2375,
        size: 'EUR 36-44'
    },
    {
        id: 20,
        name: 'TRAVIS SCOTT X NIKE MAC ATTACK GREY',
        category: 'men',
        image: 'shop/TRAVIS SCOTT X NIKE MAC ATTACK GREY.jpg',
        price: 3699,
        discountedPrice: 2299,
        size: 'EUR 41-45'
    },
    {
        id: 21,
        name: 'NIKE AIR FORCE 1 UNDEFEATED WILD BERRY',
        category: 'men',
        image: 'shop/NIKE AIR FORCE 1 UNDEFEATED WILD BERRY.jpg',
        price: 3499,
        discountedPrice: 2099,
        size: 'EUR 41-45'
    },
    {
        id: 22,
        name: 'Jordan RETRO 1 Fearless patent',
        category: 'clearance',
        image: 'shop/Jordan RETRO 1 Fearless patent.jpg',
        price: 3699,
        discountedPrice: 1599,
        size: 'EUR 41-44'
    },
    {
        id: 23,
        name: 'ADIDAS ORGINAL CAMPUS ',
        category: 'unisex',
        image: 'shop/ADIDAS ORGINAL CAMPUS.jpg',
        price: 3899,
        discountedPrice: 2499,
        size: 'EUR 36-44'
    },
    {
        id: 24,
        name: 'nike airforce hemp coconut milk',
        category: 'men',
        image: 'shop/nike AIRFORCE hemp coconut milk.jpg',
        price: 3899,
        discountedPrice: 2649,
        size: 'EUR 40-45'
    },
    {
        id: 25,
        name: 'nike sb dunk supreme world famous ',
        category: 'men',
        image: 'shop/nike sb dunk supreme world famous.jpg',
        price: 4199,
        discountedPrice: 2749,
        size: 'EUR 41-45'
    },
    {
        id: 26,
        name: 'Nike Sb Dunk Low x Otomo KOTSUHIRO GREY BLUE',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x Otomo KOTSUHIRO GREY Blue.jpg',
        price: 3499,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 27,
        name: 'NIKE SB DUNK LOW ANTHRACITE',
        category: 'men',
        image: 'shop/NIKE SB DUNK LOW ANTHRACITE.jpg',
        price: 3699,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 28,
        name: 'ADIDAS STAN SMITH SCUBA GREEN',
        category: 'clearance',
        image: 'shop/adidas stan smith scuba green.jpg',
        price: 3999,
        discountedPrice: 1849,
        size: 'EUR 40-45'
    },
    {
        id: 29,
        name: 'NIKE AIRFORCE BROWN swoosh 07 ltd',
        category: 'clearance',
        image: 'shop/NIKE AIRFORCE BROWN swoosh 07 ltd.jpg',
        price: 3699,
        discountedPrice: 1599,
        size: 'EUR 40-44'
    },
    {
        id: 30,
        name: 'Adidas originals samba tripple sneaker',
        category: 'men',
        image: 'shop/Adidas originals samba tripple sneaker.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 40-44'
    },
    {
        id: 31,
        name: 'REEBOK CLASSIC CHALK PAPERWHITE',
        category: 'men',
        image: 'shop/REEBOK CLASSIC CHALK PAPERWHITE.jpg',
        price: 3599,
        discountedPrice: 2649,
        size: 'EUR 40-44'
    },
    {
        id: 32,
        name: 'Adidas Originals samba WALES AND BONER SNAKE SKIN',
        category: 'men',
        image: 'shop/Adidas Originals samba WALES AND BONER SNAKE SKIN.jpg',
        price: 3699,
        discountedPrice: 2799,
        size: 'EUR 40-44'
    },
    {
        id: 33,
        name: 'NIKE SB DUNK SETSUBAN',
        category: 'men',
        image: 'shop/NIKE SB DUNK SETSUBAN.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 34,
        name: 'NIKE SB DUNK DUNKIN DONUT',
        category: 'men',
        image: 'shop/NIKE SB DUNK DUNKIN DONUT.jpg',
        price: 3699,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 35,
        name: 'NIKE AIRFORCE AMBUSH WHITE BLUE ORANGE',
        category: 'men',
        image: 'shop/NIKE AIRFORCE AMBUSH WHITE BLUE ORANGE.jpg',
        price: 3499,
        discountedPrice: 2749,
        size: 'EUR 40-45'
    },
    {
        id: 36,
        name: 'NIKE CORTEZ PETALS UNITED',
        category: 'men',
        image: 'shop/NIKE CORTEZ PETALS UNITED.jpg',
        price: 3499,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 37,
        name: 'Adidas superstar neighborhood',
        category: 'men',
        image: 'shop/Adidas superstar neighborhood.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: 'EUR 40-44'
    },
    {
        id: 38,
        name: 'NEW BALANCE WRPD RUNNER',
        category: 'men',
        image: 'shop/NEW BALANCE WRPD RUNNER.jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 39,
        name: 'Adidas Originals Campus 00s 2024 green',
        category: 'men',
        image: 'shop/Adidas Originals Campus 00s 2024 green.jpg',
        price: 3299,
        discountedPrice: 2699,
        size: 'EUR 40-44'
    },
    {
        id: 40,
        name: 'New balance 2002 the basement moss green',
        category: 'men',
        image: 'shop/New balance 2002 the basement moss green.jpg',
        price: 3699,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 41,
        name: 'NIKE AIRFORCE AMBUSH HAMAWA',
        category: 'men',
        image: 'shop/NIKE AIRFORCE AMBUSH HAMAWA.jpg',
        price: 2999,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 42,
        name: 'NEW BALANCE 530 SILVER ',
        category: 'unisex',
        image: 'shop/NEW BALANCE 530 SILVER.jpg',
        price: 2999,
        discountedPrice: 2575,
        size: 'EUR 36-44'
    },
    {
        id: 43,
        name: 'ADIDAS FORUM 84 WHITE GREEN EDITION',
        category: 'unisex',
        image: 'shop/ADIDAS FORUM 84 WHITE GREEN EDITION.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 36-44'
    },
    {
        id: 44,
        name: 'CROCS VISTA YUKON',
        category: 'men',
        image: 'shop/CROCS VISTA YUKON.jpg',
        price: 2299,
        discountedPrice: 1799,
        size: 'EUR 41-44'
    },
    {
        id: 45,
        name: 'DOLCE AND GABBANA HUGHO BOSS',
        category: 'uaquality',
        image: 'shop/DOLCE AND GABBANA HUGHO BOSS.jpg',
        price: 3999,
        discountedPrice: 3499,
        size: 'EUR 40-45'
    },
    {
        id: 46,
        name: 'BALMAIN PARIS',
        category: 'uaquality',
        image: 'shop/BALMAIN PARIS.jpg',
        price: 3999,
        discountedPrice: 3499,
        size: 'EUR 40-45'
    },
    {
        id: 47,
        name: 'AMIRI LEGACY SNEAKERS',
        category: 'men',
        image: 'shop/AMIRI LEGACY SNEAKERS.jpg',
        price: 3999,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 48,
        name: 'CROCS LITERIDE',
        category: 'men',
        image: 'shop/CROCS LITERIDE.jpg',
        price: 1699,
        discountedPrice: 1299,
        size: 'EUR 40-44'
    },
    {
        id: 49,
        name: 'NIKE SB DUNK DE LA SOUL',
        category: 'men',
        image: 'shop/NIKE SB DUNK DE LA SOUL.jpg',
        price: 3299,
        discountedPrice: 2749,
        size: 'EUR 40-45'
    },
    {
        id: 50,
        name: 'NIKE SB DUNK LOW OREWOOD BROWN SASHIKO OFF WHITE',
        category: 'men',
        image: 'shop/NIKE SB DUNK LOW OREWOOD BROWN SASHIKO OFF WHITE.jpg',
        price: 3499,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 51,
        name: 'PRADA MILANO MADE IN ITALY',
        category: 'men',
        image: 'shop/PRADA MILANO MADE IN ITALY.jpg',
        price: 3999,
        discountedPrice: 3499,
        size: 'EUR 40-45'
    },
    {
        id: 52,
        name: 'CROCS 2024(BLACK)',
        category: 'crocs',
        image: 'shop/CROCS 2024(BLACK).jpg',
        price: 1999,
        discountedPrice: 1699,
        size: 'm8-m10'
    },
    {
        id: 53,
        name: 'CROCS 2024(WHITE)',
        category: 'crocs',
        image: 'shop/CROCS 2024(WHITE).jpg',
        price: 1999,
        discountedPrice: 1699,
        size: 'm8-m10'
    },
    {
        id: 54,
        name: 'CROCS 2024(KHAKHI)',
        category: 'crocs',
        image: 'shop/CROCS 2024(KHAKHI).jpg',
        price: 1999,
        discountedPrice: 1699,
        size: 'm8-m10'
    },
    {
        id: 55,
        name: 'ASICS gel nimbus 26',
        category: 'men',
        image: 'shop/ASICS gel nimbus 26.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 41-45'
    },
    {
        id: 56,
        name: 'Nike calm mule sandel (black)',
        category: 'sandals',
        image: 'shop/Nike calm mule sandel (black).jpg',
        price: 1999,
        discountedPrice: 1349,
        size: 'EUR 40-45'
    },
    {
        id: 57,
        name: 'Nike calm mule sandel (orange)',
        category: 'sandals',
        image: 'shop/Nike calm mule sandel (orange).jpg',
        price: 1999,
        discountedPrice: 1359,
        size: 'EUR 40-45'
    },
    {
        id: 58,
        name: 'Nike calm mule sandel (green)',
        category: 'sandals',
        image: 'shop/Nike calm mule sandel (green).jpg',
        price: 1999,
        discountedPrice: 1349,
        size: 'EUR 40-45'
    },
    {
        id: 60,
        name: 'Nike calm mule sandel (white)',
        category: 'sandals',
        image: 'shop/Nike calm mule sandel (white).jpg',
        price: 1999,
        discountedPrice: 1349,
        size: 'EUR 40-45'
    },
    {
        id: 61,
        name: 'Nike Airforce originals (white black)',
        category: 'men',
        image: 'shop/Nike Airforce originals (white black).jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 41-45'
    },
    {
        id: 63,
        name: 'Nike Airforce originals (black white)',
        category: 'men',
        image: 'shop/Nike Airforce originals (black white).jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 41-45'
    },
    {
        id: 63,
        name: 'Jordan cut low jack cactus',
        category: 'men',
        image: 'shop/Jordan cut low jack cactus.jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 40-44'
    },
    {
        id: 64,
        name: 'ASICS gel trainer 21 navy grey',
        category: 'men',
        image: 'shop/ASICS gel trainer 21 navy grey.jpg',
        price: 3999,
        discountedPrice: 3199,
        size: 'EUR 41-45'
    },
    {
        id: 65,
        name: 'ASICS gel trainer 21 Piedmont grey',
        category: 'men',
        image: 'shop/ASICS gel trainer 21 Piedmont grey.jpg',
        price: 3999,
        discountedPrice: 3199,
        size: 'EUR 41-45'
    },
    {
        id: 66,
        name: 'ASICS gel trainer 21 smoke blue',
        category: 'men',
        image: 'shop/ASICS gel trainer 21 smoke blue.jpg',
        price: 3999,
        discountedPrice: 3199,
        size: 'EUR 41-45'
    },
    {
        id: 67,
        name: 'ASICS gel trainer 21 teal pure silver',
        category: 'men',
        image: 'shop/ASICS gel trainer 21 teal pure silver.jpg',
        price: 3999,
        discountedPrice: 3199,
        size: 'EUR 41-45'
    },
    {
        id: 68,
        name: 'ASICS gel trainer 21 white purple',
        category: 'men',
        image: 'shop/ASICS gel trainer 21 white purple.jpg',
        price: 3999,
        discountedPrice: 3199,
        size: 'EUR 41-45'
    },
    {
        id: 69,
        name: 'ADIDAS FORUM BAD BUNNY BLACK',
        category: 'unisex',
        image: 'shop/ADIDAS FORUM BAD BUNNY BLACK.jpg',
        price: 2999,
        discountedPrice: 2449,
        size: 'EUR 36-44'
    },
    {
        id: 70,
        name: 'AIR JORDAN JUMPMAN MVP',
        category: 'men',
        image: 'shop/AIR JORDAN JUMPMAN MVP.jpg',
        price: 3599,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 71,
        name: 'ADIDAS ORIGINALS CAMPUS PURPLE',
        category: 'women',
        image: 'shop/ADIDAS ORIGINALS CAMPUS PURPLE.jpg',
        price: 3499,
        discountedPrice: 2699,
        size: 'EUR 36-40'
    },
    {
        id: 72,
        name: 'UNDER ARMOUR PHANTOM HOVR 2023 BLACK',
        category: 'men',
        image: 'shop/UNDER ARMOUR PHANTOM HOVR 2023 BLACK.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 36-40'
    },
    {
        id: 73,
        name: 'UNDER ARMOUR PHANTOM HOVR 2023 GREEN',
        category: 'men',
        image: 'shop/UNDER ARMOUR PHANTOM HOVR 2023 GREEN.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 36-40'
    },
    {
        id: 74,
        name: 'NIKE AIRFORCE NORTH FACE GUCCI',
        category: 'men',
        image: 'shop/NIKE AIRFORCE NORTH FACE GUCCI.jpg',
        price: 3499,
        discountedPrice: 2449,
        size: 'EUR 36-40'
    },
    {
        id: 75,
        name: 'NIKE SB DUNK MOCHA LOW',
        category: 'men',
        image: 'shop/NIKE SB DUNK MOCHA LOW.jpg',
        price: 3999,
        discountedPrice: 2499,
        size: 'EUR 36-40'
    },
    {
        id: 76,
        name: 'NIKE X UNION FIELD GENERAL SP SHIMMER EDITION',
        category: 'men',
        image: 'shop/NIKE X UNION FIELD GENERAL SP SHIMMER EDITION.jpg',
        price: 3999,
        discountedPrice: 2949,
        size: 'EUR 36-40'
    },
    {
        id: 77,
        name: 'ADIDAS GAZZELE BOLD BLACK WHITE',
        category: 'women',
        image: 'shop/ADIDAS GAZZELE BOLD BLACK WHITE.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 36-40'
    },
    {
        id: 78,
        name: 'ONITSUKA TIGER TOKUTEN WHITE NAVY EDITION',
        category: 'men',
        image: 'shop/ONITSUKA TIGER TOKUTEN WHITE NAVY EDITION.jpg',
        price: 3499,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 79,
        name: 'CONVERSE CHUCK 70 BLACK WHITE',
        category: 'unisex',
        image: 'shop/CONVERSE CHUCK 70 BLACK WHITE.jpg',
        price: 3799,
        discountedPrice: 2499,
        size: 'EUR 36-45'
    },
    {
        id: 80,
        name: 'NIKE AIR JORDAN RETRO TRAVIS SCOTT',
        category: 'men',
        image: 'shop/NIKE AIR JORDAN RETRO TRAVIS SCOTT.jpg',
        price: 4299,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 81,
        name: 'NEW BALANCE 1906 LIGHTON GREY',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 LIGHTON GREY.jpg',
        price: 4399,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 82,
        name: 'NIKE SB DUNK OTOMO KOTSUHIRO DBRN',
        category: 'men',
        image: 'shop/NIKE SB DUNK OTOMO KOTSUHIRO DBRN.jpg',
        price: 3399,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 83,
        name: 'ADIDAS ORIGINALS SAMBA NEIGHBORHOOD',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS SAMBA NEIGHBORHOOD.jpg',
        price: 3299,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 84,
        name: 'ADIDAS ORIGINALS SAMBA BONER END',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS SAMBA BONER END.jpg',
        price: 3299,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 85,
        name: 'NIKE AIRFORCE BANG CHUNKY',
        category: 'men',
        image: 'shop/NIKE AIRFORCE BANG CHUNKY.jpg',
        price: 3399,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 86,
        name: 'NIKE AIRFORCE ONE CRISTIANO RONALDO',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ONE CRISTIANO RONALDO.jpg',
        price: 2599,
        discountedPrice: 1399,
        size: 'EUR 40-45'
    },
    {
        id: 87,
        name: 'NIKE SB DUNK TIGHTBOOTH EDITION',
        category: 'men',
        image: 'shop/NIKE SB DUNK TIGHTBOOTH EDITION.jpg',
        price: 3299,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 88,
        name: 'NIKE BLAZER 77 VINTAGE LOW',
        category: 'men',
        image: 'shop/NIKE BLAZER 77 VINTAGE LOW.jpg',
        price: 2999,
        discountedPrice: 2349,
        size: 'EUR 40-45'
    },
    {
        id: 89,
        name: 'ADIDAS ORIGINALS CENTENNIAL 85',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS CENTENNIAL 85.jpg',
        price: 2999,
        discountedPrice: 2299,
        size: 'EUR 40-45'
    },
    {
        id: 90,
        name: 'ADIDAS FORUM 84 MID WHITE BLACK EDITION',
        category: 'men',
        image: 'shop/ADIDAS FORUM 84 MID WHITE BLACK EDITION.jpg',
        price: 3199,
        discountedPrice: 2149,
        size: 'EUR 40-45'
    },
    {
        id: 91,
        name: 'NIKE SB DUNK YEAR OF THE TIGER',
        category: 'men',
        image: 'shop/NIKE SB DUNK YEAR OF THE TIGER.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: 'EUR 40-45'
    },
    {
        id: 92,
        name: 'NIKE X UNION FIELD GENERAL SP SHIMMER EDITION',
        category: 'men',
        image: 'shop/NIKE X UNION FIELD GENERAL SP SHIMMER EDITION.jpg',
        price: 4299,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 93,
        name: 'NEW BALANCE 2002r PROTECTION PACK SEA SALT',
        category: 'unisex',
        image: 'shop/NEW BALANCE 2002r PROTECTION PACK SEA SALT.jpg',
        price: 3999,
        discountedPrice: 2999,
        size: 'EUR 36-45'
    },
    {
        id: 94,
        name: 'ADIDAS ORIGINALS SAMBA WHITE AND BLACK',
        category: 'unisex',
        image: 'shop/ADIDAS ORIGINALS SAMBA WHITE AND BLACK.jpg',
        price: 2999,
        discountedPrice: 1899,
        size: 'EUR 36-45'
    },
    {
        id: 95,
        name: 'ADIDAS ORIGINALS SAMBA  NAKED',
        category: '',
        image: 'shop/ADIDAS ORIGINALS SAMBA  NAKED.jpg',
        price: 2999,
        discountedPrice: 1899,
        size: 'EUR 36-45'
    },
    {
        id: 96,
        name: 'NIKE AIRFORCE ONE SHADOW',
        category: 'clearance',
        image: 'shop/NIKE AIRFORCE ONE SHADOW.jpg',
        price: 2999,
        discountedPrice: 1599,
        size: 'EUR 36-40'
    },
    {
        id: 97,
        name: 'LOUIS VUITTON X NIKE AIR FORCE 1 DENIM BLACK',
        category: 'men',
        image: 'shop/LOUIS VUITTON X NIKE AIR FORCE 1 DENIM BLACK.jpg',
        price: 4399,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 98,
        name: 'NEW BALANCE 1000 BLACK PATENT',
        category: 'uaquality',
        image: 'shop/NEW BALANCE 1000 BLACK PATENT.jpg',
        price: 4299,
        discountedPrice: 3599,
        size: 'EUR 40-45'
    },
    {
        id: 99,
        name: 'NIKE AIR JORDAN 1 TRUE BLUE',
        category: 'uaquality',
        image: 'shop/NIKE AIR JORDAN 1 TRUE BLUE.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 100,
        name: 'PUMA MELO BALL MB 0.3 ICE BLUE',
        category: 'uaquality',
        image: 'shop/PUMA MELO BALL MB 0.3 ICE BLUE.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 101,
        name: 'ADIDAS FEAR OF GOD LOW',
        category: 'men',
        image: 'shop/ADIDAS FEAR OF GOD LOW.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 102,
        name: 'ADIDAS FEAR OF GOD MID',
        category: '',
        image: 'shop/ADIDAS FEAR OF GOD MID.jpg',
        price: 3999,
        discountedPrice: 3299,
        size: 'EUR 40-45'
    },
    {
        id: 103,
        name: 'ADIDAS FEAR OF GOD WHITE MID',
        category: 'men',
        image: 'shop/ADIDAS FEAR OF GOD WHITE MID.jpg',
        price: 4299,
        discountedPrice: 3299,
        size: 'EUR 40-45'
    },
    {
        id: 104,
        name: 'ADIDAS FEAR OF GOD WHITE 1 MID',
        category: 'men',
        image: 'shop/ADIDAS FEAR OF GOD WHITE 1 MID.jpg',
        price: 4299,
        discountedPrice: 3299,
        size: 'EUR 40-45'
    },
    {
        id: 105,
        name: 'NIKE AIR JORDAN 1 PANDA DIAMOND',
        category: 'uaquality',
        image: 'shop/NIKE AIR JORDAN 1 PANDA DIAMOND.jpg',
        price: 4299,
        discountedPrice: 3599,
        size: 'EUR 40-45'
    },
    {
        id: 106,
        name: 'NEW BALANCE 2002r SPRING 2023 SKY',
        category: 'men',
        image: 'shop/NEW BALANCE 2002r SPRING 2023 SKY.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 107,
        name: 'NIKE DUNK BEETROOT CRUSH',
        category: 'men',
        image: 'shop/NIKE DUNK BEETROOT CRUSH.jpg',
        price: 3699,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 108,
        name: 'ADIDAS ORIGINAL SAMBA MESSI',
        category: 'men',
        image: 'shop/ADIDAS ORIGINAL SAMBA MESSI.jpg',
        price: 3999,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 109,
        name: 'NEW BALANCE 1906 GANNI',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 GANNI.jpg',
        price: 3699,
        discountedPrice: 2999,
        size: 'EUR 40-45'
    },
    {
        id: 110,
        name: 'NEW BALANCE 2002r Spring 2023 SKY BLUE',
        category: 'men',
        image: 'shop/NEW BALANCE 2002r Spring 2023 SKY BLUE.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 111,
        name: 'NIKE AIRFORCE KEEP FRESH',
        category: 'men',
        image: 'shop/NIKE AIRFORCE KEEP FRESH.jpg',
        price: 3899,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 112,
        name: 'NIKE SB DUNK RUN THE JEWELS',
        category: 'men',
        image: 'shop/NIKE SB DUNK RUN THE JEWELS.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 113,
        name: 'ADIDAS ORIGINAL BERMUDA 2024 GREY',
        category: 'men',
        image: 'shop/ADIDAS ORIGINAL BERMUDA 2024 GREY.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 114,
        name: 'ONITSUKA TIGER TRAINERS SILVER COLOR',
        category: 'men',
        image: 'shop/ONITSUKA TIGER TRAINERS SILVER COLOR.jpg',
        price: 3899,
        discountedPrice: 2749,
        size: 'EUR 40-45'
    },
    {
        id: 115,
        name: 'ADIDAS FORUM 84 WHITE BLUE',
        category: 'uaquality',
        image: 'shop/ADIDAS FORUM 84 WHITE BLUE.jpg',
        price: 3899,
        discountedPrice: 2799,
        size: 'EUR 36-45'
    },
    {
        id: 116,
        name: 'VANS OLD SKOOL KNU OLIVE GREEN',
        category: 'unisex',
        image: 'shop/VANS OLD SKOOL KNU OLIVE GREEN.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 36-45'
    },
    {
        id: 117,
        name: 'NIKE SB DUNK YEAR OF RABBIT 2023',
        category: 'men',
        image: 'shop/NIKE SB DUNK YEAR OF RABBIT 2023.jpg',
        price: 3799,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 118,
        name: 'NIKE JORDAN RETRO 4 PINE GREEN',
        category: 'unisex',
        image: 'shop/NIKE JORDAN RETRO 4 PINE GREEN.jpg',
        price: 3499,
        discountedPrice: 2399,
        size: 'EUR 36-45'
    },
    {
        id: 119,
        name: 'ASICS TIGER JAPAN OFF WHITE',
        category: 'men',
        image: 'shop/ASICS TIGER JAPAN OFF WHITE.jpg',
        price: 4499,
        discountedPrice: 3299,
        size: 'EUR 40-45'
    },
    {
        id: 120,
        name: 'VANS WAVY BABY',
        category: 'clearance',
        image: 'shop/VANS WAVY BABY.jpg',
        price: 1999,
        discountedPrice: 999,
        size: 'EUR 40-45'
    },
    {
        id: 121,
        name: 'SKECHERS MAX CUSHION GREY',
        category: 'sports',
        image: 'shop/SKECHERS MAX CUSHION GREY.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 122,
        name: 'SKECHERS MAX CUSHION BLACK',
        category: 'sports',
        image: 'shop/SKECHERS MAX CUSHION BLACK.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 123,
        name: 'SKECHERS MAX CUSHION WHITE',
        category: 'sports',
        image: 'shop/SKECHERS MAX CUSHION WHITE.jpg',
        price: 3999,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 124,
        name: 'NIKE SB DUNK VANEER',
        category: 'men',
        image: 'shop/NIKE SB DUNK VANEER.jpg',
        price: 2999,
        discountedPrice: 2299,
        size: 'EUR 40-45'
    },
    {
        id: 125,
        name: 'ADIDAS SUPERSTAR ORIGINALS RABBIT HOLE BLACK',
        category: 'men',
        image: 'shop/ADIDAS SUPERSTAR ORIGINALS RABBIT HOLE BLACK.jpg',
        price: 3699,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 126,
        name: 'ADIDAS SUPERSTAR ORIGINAL RABBIT HOLE WOOD',
        category: 'men',
        image: 'shop/ADIDAS SUPERSTAR ORIGINAL RABBIT HOLE WOOD.jpg',
        price: 3699,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 127,
        name: 'VANS OLD SKOOL MIDANKLE',
        category: 'unisex',
        image: 'shop/VANS OLD SKOOL MIDANKLE.jpg',
        price: 1999,
        discountedPrice: 1299,
        size: 'EUR 36-45'
    },
    {
        id: 128,
        name: 'ADIDAS GAZELLE INDOOR NAVY',
        category: 'unisex',
        image: 'shop/ADIDAS GAZELLE INDOOR NAVY.jpg',
        price: 3999,
        discountedPrice: 2649,
        size: 'EUR 36-45'
    },
    {
        id: 129,
        name: 'ASICS GEL 1130 GREEN',
        category: 'men',
        image: 'shop/ASICS GEL 1130 GREEN.jpg',
        price: 4999,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 130,
        name: 'ASICS GEL 1130 SILVER',
        category: 'men',
        image: 'shop/ASICS GEL 1130 SILVER.jpg',
        price: 4999,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 131,
        name: 'CROCS MTN ATLAS BLACK',
        category: 'crocs',
        image: 'shop/CROCS MTN ATLAS BLACK.jpg',
        price: 2899,
        discountedPrice: 1899,
        size: 'M6-M11'
    },
    {
        id: 132,
        name: 'CROCS MTN ATLAS GREEN',
        category: 'crocs',
        image: 'shop/CROCS MTN ATLAS GREEN.jpg',
        price: 2899,
        discountedPrice: 1899,
        size: 'M6-M11'
    },
    {
        id: 133,
        name: 'CROCS MTN ATLAS FLURACENT',
        category: 'crocs',
        image: 'shop/CROCS MTN ATLAS FLURACENT.jpg',
        price: 2899,
        discountedPrice: 1899,
        size: 'M6-M11'
    },
    {
        id: 134,
        name: 'CROCS MTN ATLAS ELEPHANT',
        category: 'crocs',
        image: 'shop/CROCS MTN ATLAS ELEPHANT.jpg',
        price: 2899,
        discountedPrice: 1899,
        size: 'M6-M11'
    },
    {
        id: 135,
        name: 'CROCS CLASSIC HOLE GREEN',
        category: 'crocs',
        image: 'shop/CROCS CLASSIC HOLE GREEN.jpg',
        price: 2399,
        discountedPrice: 1599,
        size: 'M6-M11'
    },
    {
        id: 136,
        name: 'CROCS CLASSIC HOLE BLACK',
        category: 'crocs',
        image: 'shop/CROCS CLASSIC HOLE BLACK.jpg',
        price: 2399,
        discountedPrice: 1599,
        size: 'M6-M11'
    },
    {
        id: 137,
        name: 'CROCS CLASSIC HOLE BLUE',
        category: 'crocs',
        image: 'shop/CROCS CLASSIC HOLE BLUE.jpg',
        price: 2399,
        discountedPrice: 1599,
        size: 'M6-M11'
    },
    {
        id: 138,
        name: 'NEW BALANCE 1000 SILVER METALLIC',
        category: 'uaquality',
        image: 'shop/NEW BALANCE 1000 SILVER METALLIC.jpg',
        price: 5299,
        discountedPrice: 3899,
        size: 'EUR 40-45'
    },
    {
        id: 139,
        name: 'NIKE SB DUNK PHILADELPHIA',
        category: 'men',
        image: 'shop/NIKE SB DUNK PHILADELPHIA.jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 140,
        name: 'ADIDAS SLTN ADIFOM WHITE GREEN',
        category: 'men',
        image: 'shop/ADIDAS SLTN ADIFOM WHITE GREEN.jpg',
        price: 3699,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 141,
        name: 'ADIDAS SLTN ADIFOM WHITE BLACK',
        category: 'men',
        image: 'shop/ADIDAS SLTN ADIFOM WHITE BLACK.jpg',
        price: 3799,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 142,
        name: 'NIKE SB DUNK NAVY 2023',
        category: 'men',
        image: 'shop/NIKE SB DUNK NAVY 2023.jpg',
        price: 3699,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 143,
        name: 'AMIRI MA SNEAKER BLACK',
        category: 'men',
        image: 'shop/AMIRI MA SNEAKER BLACK.jpg',
        price: 3999,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 144,
        name: 'AMIRI MA SNEAKER GREEN',
        category: 'men',
        image: 'shop/AMIRI MA SNEAKER GREEN.jpg',
        price: 3999,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 145,
        name: 'ADIDAS FORUM BAD BUNNY CLOUD WHITE',
        category: 'unisex',
        image: 'shop/ADIDAS FORUM BAD BUNNY CLOUD WHITE.jpg',
        price: 3299,
        discountedPrice: 2499,
        size: 'EUR 36-45'
    },
    {
        id: 146,
        name: 'CONVERSE ALL STAR BLACK',
        category: 'men',
        image: 'shop/CONVERSE ALL STAR BLACK.jpg',
        price: 2499,
        discountedPrice: 1299,
        size: 'EUR 40-45'
    },
    {
        id: 147,
        name: 'NIKE SB DUNK IVORY HYPER ROYAL',
        category: 'women',
        image: 'shop/NIKE SB DUNK IVORY HYPER ROYAL.jpg',
        price: 3699,
        discountedPrice: 2599,
        size: 'EUR 36-40'
    },
    {
        id: 148,
        name: 'NIKE AIRMAX 97 CREPE',
        category: 'men',
        image: 'shop/NIKE AIRMAX 97 CREPE.jpg',
        price: 3499,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 149,
        name: 'ADIDAS ORIGINALS SAMBA XLG GUM BLACK',
        category: 'unisex',
        image: 'shop/ADIDAS ORIGINALS SAMBA XLG GUM BLACK.jpg',
        price: 3899,
        discountedPrice: 2599,
        size: 'EUR 36-45'
    },
    {
        id: 150,
        name: 'ADIDAS SAMBA 2023 GREY GREEN',
        category: 'unisex',
        image: 'shop/ADIDAS SAMBA 2023 GREY GREEN.jpg',
        price: 3899,
        discountedPrice: 2599,
        size: 'EUR 36-45'
    },
    {
        id: 151,
        name: 'CONVERSE CHUCK TAYLOR 70 LOW',
        category: 'men',
        image: 'shop/CONVERSE CHUCK TAYLOR 70 LOW.jpg',
        price: 3399,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 152,
        name: 'ADIDAS ORIGINALS CAMPUS LEOPERD PRINT',
        category: 'women',
        image: 'shop/ADIDAS ORIGINALS CAMPUS LEOPERD PRINT.jpg',
        price: 3999,
        discountedPrice: 2799,
        size: 'EUR 36-40'
    },
    {
        id: 153,
        name: 'ASICS KAHANA GEL 8',
        category: 'men',
        image: 'shop/ASICS KAHANA GEL 8.jpg',
        price: 3399,
        discountedPrice: 2649,
        size: 'EUR 40-45'
    },
    {
        id: 154,
        name: 'NIKE JORDANS RETRO 1 lOW VOODO ZION',
        category: 'men',
        image: 'shop/NIKE JORDANS RETRO 1 lOW VOODO ZION.jpg',
        price: 3799,
        discountedPrice: 2449,
        size: 'EUR 40-45'
    },
    {
        id: 155,
        name: 'ADIDAS ADIMETIC ORIGINALS GREEN',
        category: 'clearance',
        image: 'shop/ADIDAS ADIMETIC ORIGINALS GREEN.jpg',
        price: 2499,
        discountedPrice: 1699,
        size: 'EUR 40-45'
    },
    {
        id: 156,
        name: 'NEW BLANCE 9060 PANELED GREY',
        category: 'men',
        image: 'shop/NEW BLANCE 9060 PANELED GREY.jpg',
        price: 3999,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 157,
        name: 'NIKE MK 2 TEKNO OG WHITE GREY',
        category: 'unisex',
        image: 'shop/NIKE MK 2 TEKNO OG WHITE GREY.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 36-45'
    },
    {
        id: 158,
        name: 'ADIDAS FORUM 84 LOW UNIVERSITY BLUE EDITION',
        category: 'unisex',
        image: 'shop/ADIDAS FORUM 84 LOW UNIVERSITY BLUE EDITION.jpg',
        price: 2699,
        discountedPrice: 2149,
        size: 'EUR 36-45'
    },
    {
        id: 159,
        name: 'NEW BALANCE SC ELITE RED',
        category: 'sports',
        image: 'shop/NEW BALANCE SC ELITE RED.jpg',
        price: 3299,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 160,
        name: 'NEW BALANCE SC ELITE GREEN',
        category: 'sports',
        image: 'shop/NEW BALANCE SC ELITE GREEN.jpg',
        price: 3299,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 161,
        name: 'NIKE AIRFORCE ORIGINALS NEW REF',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ORIGINALS NEW REF.jpg',
        price: 3699,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 162,
        name: 'NIKE AIRFORCE ORIGINALS GOLDEN',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ORIGINALS GOLDEN.jpg',
        price: 3699,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 163,
        name: 'NIKE AIRFORCE ORIGINALS NOAH',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ORIGINALS NOAH.jpg',
        price: 3699,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 164,
        name: 'NIKE AIRFORCE ORIGINALS NEW REF',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ORIGINALS NEW REF.jpg',
        price: 3699,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 165,
        name: 'SKETCHERS CARBON IMPULSED RIDE 11 SILVER',
        category: 'sports',
        image: 'shop/SKETCHERS CARBON IMPULSED RIDE 11 SILVER.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 166,
        name: 'SKETCHERS CARBON IMPULSED RIDE 11 BLACK',
        category: 'sports',
        image: 'shop/SKETCHERS CARBON IMPULSED RIDE 11 BLACK.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 167,
        name: 'SKETCHERS CARBON IMPULSED RIDE 11 BLUE',
        category: 'sports',
        image: 'shop/SKETCHERS CARBON IMPULSED RIDE 11 BLUE.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 168,
        name: 'SKETCHERS CARBON IMPULSED RIDE 11 DARK BLUE',
        category: 'sports',
        image: 'shop/SKETCHERS CARBON IMPULSED RIDE 11 DARK BLUE.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 169,
        name: 'SKETCHERS CARBON IMPULSED RIDE 11 DARK BLUE',
        category: 'sports',
        image: 'shop/SKETCHERS CARBON IMPULSED RIDE 11 DARK BLUE.jpg',
        price: 3899,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 170,
        name: 'NIKE JORDAN RETRO 4 OFF WHITE',
        category: 'men',
        image: 'shop/NIKE JORDAN  RETRO 4 OFF WHITE.jpg',
        price: 2899,
        discountedPrice: 2299,
        size: 'EUR 40-45'
    },
    {
        id: 171,
        name: 'ASICS KAHANA GEL 8 WHITE',
        category: 'sports',
        image: 'shop/ASICS KAHANA GEL 8 WHITE.jpg',
        price: 4399,
        discountedPrice: 3199,
        size: 'EUR 40-45'
    },
    {
        id: 172,
        name: 'NIKE AIRFORCE 1 X AMBUSH BLACK WHITE PANDA',
        category: 'men',
        image: 'shop/NIKE AIRFORCE 1 X AMBUSH BLACK WHITE PANDA.jpg',
        price: 3299,
        discountedPrice: 2799,
        size: 'EUR 40-45'
    },
    {
        id: 173,
        name: 'NIKE SB DUNK RED PANDA REMAKE',
        category: 'men',
        image: 'shop/NIKE SB DUNK RED PANDA REMAKE.jpg',
        price: 3399,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 174,
        name: 'CROCS ALL TERRAIN CLOG FULL BLACK',
        category: 'men',
        image: 'shop/CROCS ALL TERRAIN CLOG FULL BLACK.jpg',
        price: 2899,
        discountedPrice: 1699,
        size: 'M6-M11'
    },
    {
        id: 175,
        name: 'CROCS ALL TERRAIN CLOG',
        category: 'men',
        image: 'shop/CROCS ALL TERRAIN CLOG.jpg',
        price: 2899,
        discountedPrice: 1699,
        size: 'M6-M11'
    },
    {
        id: 176,
        name: 'NEW BALANCE FRESH FOAM X TRAIL NEW COLOR ADED',
        category: 'men',
        image: 'shop/NEW BALANCE FRESH FOAM X TRAIL NEW COLOR ADED.jpg',
        price: 4199,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 177,
        name: 'ADIDAS SAMBA WHITE RED',
        category: 'uaquality',
        image: 'shop/ADIDAS SAMBA WHITE RED.jpg',
        price: 3699,
        discountedPrice: 2599,
        size: 'EUR 36-45'
    },
    {
        id: 178,
        name: 'NEW BLANCE 9060 RAINCLOUD',
        category: 'men',
        image: 'shop/NEW BLANCE 9060 RAINCLOUD.jpg',
        price: 3899,
        discountedPrice: 3099,
        size: 'EUR 40-45'
    },
    {
        id: 179,
        name: 'NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK NOIRE',
        category: 'men',
        image: 'shop/NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK NOIRE.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 180,
        name: 'NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK YELLOW',
        category: 'men',
        image: 'shop/NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK YELLOW.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 181,
        name: 'NIKE JORDAN RETRO TRAVIS SCOTT CUT THE UNIVERSITY RED',
        category: 'men',
        image: 'shop/NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK UNIVERSITY RED.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 182,
        name: 'NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK MOCHA',
        category: 'men',
        image: 'shop/NIKE JORDAN RETRO TRAVIS SCOTT CUT THE CHECK MOCHA.jpg',
        price: 3999,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 183,
        name: 'ASICS KAHANA GEL 8 LIGHT BLUE GRAY',
        category: 'men',
        image: 'shop/ASICS KAHANA GEL 8 LIGHT BLUE GRAY.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: 'EUR 40-45'
    },
    {
        id: 184,
        name: 'ASICS KAHANA GEL 8 TRIPPLE BLACK',
        category: 'men',
        image: 'shop/ASICS KAHANA GEL 8 TRIPPLE BLACK.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: 'EUR 40-45'
    },
    {
        id: 185,
        name: 'ADIDAS GAZELLE INDOOR GREEN',
        category: 'men',
        image: 'shop/ADIDAS GAZELLE INDOOR GREEN.jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 186,
        name: 'ADIDAS GAZELLE INDOOR PRELOVED INK',
        category: 'men',
        image: 'shop/ADIDAS GAZELLE INDOOR PRELOVED INK.jpg',
        price: 4299,
        discountedPrice: 2699,
        size: 'EUR 40-45'
    },
    {
        id: 187,
        name: 'ASICS EX-89 BLACK',
        category: 'men',
        image: 'shop/ASICS EX-89 BLACK.jpg',
        price: 5399,
        discountedPrice: 3999,
        size: 'EUR 40-45'
    },
    {
        id: 188,
        name: 'ADIDAS ORIGINALS CAMPUS GREY',
        category: 'unisex',
        image: 'shop/ADIDAS ORIGINALS CAMPUS GREY.jpg',
        price: 3399,
        discountedPrice: 2599,
        size: 'EUR 36-45'
    },
    {
        id: 189,
        name: 'ASICS EX-89 NEEDLES BUTTERFLY',
        category: 'men',
        image: 'shop/ASICS EX-89 NEEDLES BUTTERFLY.jpg',
        price: 3699,
        discountedPrice: 2749,
        size: 'EUR 40-45'
    },
    {
        id: 190,
        name: 'PUMA NITRO GREY',
        category: 'sports',
        image: 'shop/PUMA NITRO GREY.jpg',
        price: 3399,
        discountedPrice: 2449,
        size: 'EUR 40-45'
    },
    {
        id: 191,
        name: 'ADIDAS SUPERSTAR BASIC',
        category: 'unisex',
        image: 'shop/ADIDAS SUPERSTAR BASIC.jpg',
        price: 2999,
        discountedPrice: 1999,
        size: 'EUR 36-45'
    },
    {
        id: 192,
        name: 'ADIDAS ORIGINALS OZELIA JOKER',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS OZELIA JOKER.jpg',
        price: 3899,
        discountedPrice: 2749,
        size: 'EUR 40-45'
    },
    {
        id: 193,
        name: 'ADIDAS ORIGINALS SAMBA SPORTY AND RICH',
        category: 'men',
        image: 'shop/ADIDAS ORIGINALS SAMBA SPORTY AND RICH.jpg',
        price: 2699,
        discountedPrice: 1849,
        size: 'EUR 40-45'
    },
    {
        id: 194,
        name: 'NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF',
        category: 'men',
        image: 'shop/NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF.jpg',
        price: 2899,
        discountedPrice: 2149,
        size: 'EUR 40-45'
    },
    {
        id: 195,
        name: 'NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE',
        category: 'men',
        image: 'shop/NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE.jpg',
        price: 3299,
        discountedPrice: 2499,
        size: 'EUR 40-45'
    },
    {
        id: 196,
        name: 'ADIDAS SAMBA X WALES BONER',
        category: 'men',
        image: 'shop/ADIDAS SAMBA X WALES BONER.jpg',
        price: 3399,
        discountedPrice: 2599,
        size: 'EUR 40-45'
    },
    {
        id: 197,
        name: 'ADIDAS FORUM 84 MID UNIVERSITY BLUE',
        category: 'men',
        image: 'shop/ADIDAS FORUM 84 MID UNIVERSITY BLUE.jpg',
        price: 3199,
        discountedPrice: 2149,
        size: 'EUR 40-45'
    },
    {
        id: 198,
        name: 'NEW BALANCE 1906R WHITE',
        category: 'men',
        image: 'shop/NEW BALANCE 1906R WHITE.jpg',
        price: 4199,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 199,
        name: 'NEW BALANCE 1906R GOLD',
        category: 'men',
        image: 'shop/NEW BALANCE 1906R GOLD.jpg',
        price: 4199,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 200,
        name: 'NEW BALANCE 1906R BLUE',
        category: 'men',
        image: 'shop/NEW BALANCE 1906R BLUE.jpg',
        price: 4199,
        discountedPrice: 2899,
        size: 'EUR 40-45'
    },
    {
        id: 201,
        name: 'ADIDAS BAD BUNNY RED',
        category: 'unisex',
        image: 'shop/ADIDAS BAD BUNNY RED.jpg',
        price: 3899,
        discountedPrice: 2499,
        size: 'EUR 36-45'
    },
    {
        id: 202,
        name: 'NIKE AIRFORCE ONE ORIGINALS BROWN TICK',
        category: 'men',
        image: 'shop/NIKE AIRFORCE ONE ORIGINALS BROWN TICK.jpg',
        price: 3499,
        discountedPrice: 2299,
        size: 'EUR 40-45'
    },
    {
        id: 203,
        name: 'ADIDAS ULTRA BOOST 2023',
        category: 'sports',
        image: 'shop/ADIDAS ULTRA BOOST 2023.jpg',
        price: 2999,
        discountedPrice: 2399,
        size: 'EUR 40-45'
    },
    {
        id: 204,
        name: 'NIKE CORTEZ HAWKINS',
        category: 'men',
        image: 'shop/NIKE CORTEZ HAWKINS.jpg',
        price: 2899,
        discountedPrice: 2299,
        size: 'EUR 40-45'
    },
    {
        id: 205,
        name: 'VANS OLD SKOOL KNU',
        category: 'women',
        image: 'shop/VANS OLD SKOOL KNU.jpg',
        price: 3299,
        discountedPrice: 2399,
        size: 'EUR 36-40'
    },
    {
        id: 206,
        name: 'NIKE SB DUNK LOW ARGON',
        category: 'unisex',
        image: 'shop/NIKE SB DUNK LOW ARGON.jpg',
        price: 3899,
        discountedPrice: 2599,
        size: 'EUR 36-45'
    },
    {
        id: 207,
        name: 'ADIDAS ORIGINALS SAMBA BASIC BLACK AND WHITE',
        category: 'unisex',
        image: 'shop/ADIDAS ORIGINALS SAMBA BASIC BLACK AND WHITE.jpg',
        price: 3899,
        discountedPrice: 2349,
        size: 'EUR 36-45'
    },
    {
        id: 208,
        name: "ADIDAS ORIGINALS SAMBA SPORTY AND RICH",
        category: "men",
        image: "shop/ADIDAS ORIGINALS SAMBA SPORTY AND RICH.jpg",
        price: 2849,
        discountedPrice: 1849,
        size: "EUR 40-45"
    },
    {
        id: 209,
        name: "NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF",
        category: "men",
        image: "shop/NIKE JORDAN SB DUNK X TRAVIS SCOTT GULF.jpg",
        price: 3249,
        discountedPrice: 2149,
        size: "EUR 40-45"
    },
    {
        id: 210,
        name: "NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE",
        category: "men",
        image: "shop/NIKE SB DUNK LOW X OTOMO KATSUHIRO COFFEE.jpg",
        price: 3799,
        discountedPrice: 2499,
        size: "EUR 40-45"
    },
    {
        id: 211,
        name: "ADIDAS SAMBA X WALES BONER",
        category: "men",
        image: "shop/ADIDAS SAMBA X WALES BONER.jpg",
        price: 4099,
        discountedPrice: 2599,
        size: "EUR 40-45"
    },
    {
        id: 212,
        name: "ADIDAS FORUM 84 MID UNIVERSITY BLUE",
        category: "men",
        image: "shop/ADIDAS FORUM 84 MID UNIVERSITY BLUE.jpg",
        price: 3249,
        discountedPrice: 2149,
        size: "EUR 40-45"
    },
    {
        id: 213,
        name: "NEW BALANCE 1906R WHITE",
        category: "men",
        image: "shop/NEW BALANCE 1906R WHITE.jpg",
        price: 4249,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 214,
        name: "NEW BALANCE 1906R GOLD",
        category: "men",
        image: "shop/NEW BALANCE 1906R GOLD.jpg",
        price: 4249,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 215,
        name: "NEW BALANCE 1906R BLUE",
        category: "men",
        image: "shop/NEW BALANCE 1906R BLUE.jpg",
        price: 4249,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 216,
        name: "ADIDAS BAD BUNNY RED",
        category: "unisex",
        image: "shop/ADIDAS BAD BUNNY RED.jpg",
        price: 3999,
        discountedPrice: 2499,
        size: "EUR 36-45"
    },
    {
        id: 217,
        name: "NIKE AIRFORCE ONE ORIGINALS BROWN TICK",
        category: "men",
        image: "shop/NIKE AIRFORCE ONE ORIGINALS BROWN TICK.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 218,
        name: "ADIDAS ULTRA BOOST 2023",
        category: "sports",
        image: "shop/ADIDAS ULTRA BOOST 2023.jpg",
        price: 3899,
        discountedPrice: 2399,
        size: "EUR 40-45"
    },
    {
        id: 219,
        name: "NIKE CORTEZ HAWKINS",
        category: "men",
        image: "shop/NIKE CORTEZ HAWKINS.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 220,
        name: "VANS OLD SKOOL KNU",
        category: "women",
        image: "shop/VANS OLD SKOOL KNU.jpg",
        price: 3899,
        discountedPrice: 2399,
        size: "EUR 36-40"
    },
    {
        id: 221,
        name: "NIKE SB DUNK LOW ARGON",
        category: "unisex",
        image: "shop/NIKE SB DUNK LOW ARGON.jpg",
        price: 4099,
        discountedPrice: 2599,
        size: "EUR 36-45"
    },
    {
        id: 222,
        name: "ADIDAS ORIGINALS SAMBA BASIC BLACK AND WHITE",
        category: "unisex",
        image: "shop/ADIDAS ORIGINALS SAMBA BASIC BLACK AND WHITE.jpg",
        price: 3849,
        discountedPrice: 2349,
        size: "EUR 36-45"
    },
    {
        id: 223,
        name: "NIKE SB DUNK LOW PRO MIDNIGHT NAVY",
        category: "men",
        image: "shop/NIKE SB DUNK LOW PRO MIDNIGHT NAVY.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 40-45"
    },
    {
        id: 224,
        name: "NIKE AIR JORDAN JUMPMAN PRO QUICK ANTHRACITE WOLF GREY BLACK",
        category: "men",
        image: "shop/NIKE AIR JORDAN JUMPMAN PRO QUICK ANTHRACITE WOLF GREY BLACK.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 225,
        name: "ADIDAS BAD BUNNY RESPONSE CL ECRU TINT",
        category: "men",
        image: "shop/ADIDAS BAD BUNNY RESPONSE CL ECRU TINT.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 226,
        name: "ADIDAS BAD BUNNY RESPONSE CL BASIC",
        category: "men",
        image: "shop/ADIDAS BAD BUNNY RESPONSE CL BASIC.jpg",
        price: 4349,
        discountedPrice: 2849,
        size: "EUR 40-45"
    },
    {
        id: 227,
        name: "ADIDAS ORIGINALS CAMPUS 00s 2024 MAROON",
        category: "men",
        image: "shop/ADIDAS ORIGINALS CAMPUS 00S 2024 MAROON.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 40-45"
    },
    {
        id: 228,
        name: "ADIDAS ORIGINALS CAMPUS 00s CRYSTAL WHITE",
        category: "women",
        image: "shop/ADIDAS ORIGINALS CAMPUS 00S CRYSTAL WHITE.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-40"
    },
    {
        id: 229,
        name: "NIKE SB DUNK BIG MONEY SAVINGS",
        category: "ua",
        image: "shop/NIKE SB DUNK BIG MONEY SAVINGS.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 230,
        name: "NIKE SB DUNK OLIVE GREEN",
        category: "unisex",
        image: "shop/NIKE SB DUNK OLIVE GREEN.jpg",
        price: 3849,
        discountedPrice: 2349,
        size: "EUR 36-45"
    },
    {
        id: 231,
        name: "NIKE SB DUNK CRENSHAW CLUB",
        category: "men",
        image: "shop/NIKE SB DUNK CRENSHAW CLUB.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 40-45"
    },
    {
        id: 232,
        name: "NIKE SB DUNK STRAWBERRY COUGH",
        category: "unisex",
        image: "shop/NIKE SB DUNK STRAWBERRY COUGH.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-45"
    },
    {
        id: 233,
        name: "ADIDAS SAMBA BASIC BLACK GUM SOLE",
        category: "unisex",
        image: "shop/ADIDAS SAMBA BASIC BLACK GUM SOLE.jpg",
        price: 3999,
        discountedPrice: 2499,
        size: "EUR 36-45"
    },
    {
        id: 234,
        name: "NIKE SB DUNK PINK STRIPE",
        category: "unisex",
        image: "shop/NIKE SB DUNK PINK STRIPE.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-45"
    },
    {
        id: 235,
        name: "NIKE SB DUNK GREEN LIGHT",
        category: "unisex",
        image: "shop/NIKE SB DUNK GREEN LIGHT.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-45"
    },
    {
        id: 236,
        name: "NIKE SB DUNK LOBSTER",
        category: "men",
        image: "shop/NIKE SB DUNK LOBSTER.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 40-45"
    },
    {
        id: 237,
        name: "NIKE SB DUNK LOW PINE GREEN",
        category: "men",
        image: "shop/NIKE SB DUNK LOW PINE GREEN.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 40-45"
    },
    {
        id: 238,
        name: "ADIDAS SAMBA X PHARREL WILLIAMS BLACK AND WHITE",
        category: "men",
        image: "shop/ADIDAS SAMBA X PHARREL WILLIAMS BLACK AND WHITE.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 239,
        name: "ADIDAS SAMBA X PHARREL WILLIAMS WHITE AND BLACK",
        category: "men",
        image: "shop/ADIDAS SAMBA X PHARREL WILLIAMS WHITE AND BLACK.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 240,
        name: "ADIDAS SAMBA X PHARREL WILLIAMS ORANGE AND WHITE",
        category: "men",
        image: "shop/ADIDAS SAMBA X PHARREL WILLIAMS ORANGE AND WHITE.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 241,
        name: "ADIDAS SAMBA X PHARREL WILLIAMS BURGUNDY",
        category: "men",
        image: "shop/ADIDAS SAMBA X PHARREL WILLIAMS BURGUNDY.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 40-45"
    },
    {
        id: 242,
        name: "NIKE SB DUNK GREEN MONSTER",
        category: "unisex",
        image: "shop/NIKE SB DUNK GREEN MONSTER.jpg",
        price: 4299,
        discountedPrice: 2799,
        size: "EUR 36-45"
    },
    {
        id: 243,
        name: "ADIDAS BAD BUNNY RESPONSE CL YELLOW",
        category: "unisex",
        image: "shop/ADIDAS BAD BUNNY RESPONSE CL YELLOW.jpg",
        price: 4349,
        discountedPrice: 2849,
        size: "EUR 36-45"
    },
    {
        id: 244,
        name: "NIKE SB DUNK OLD SCHOOL BLACK AND WHITE",
        category: "unisex",
        image: "shop/NIKE SB DUNK OLD SCHOOL BLACK AND WHITE.jpg",
        price: 3899,
        discountedPrice: 2399,
        size: "EUR 36-45"
    },
    {
        id: 245,
        name: "NIKE SB DUNK MUMMY HALLOWEEN",
        category: "unisex",
        image: "shop/NIKE SB DUNK MUMMY HALLOWEEN.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 36-45"
    },
    {
        id: 246,
        name: "NIKE SB DUNK PARIS SAINT GERMAIN",
        category: "men",
        image: "shop/NIKE SB DUNK PARIS SAINT GERMAIN.jpg",
        price: 4299,
        discountedPrice: 2799,
        size: "EUR 40-45"
    },
    {
        id: 247,
        name: "NIKE SB DUNK SPACE BLUE",
        category: "unisex",
        image: "shop/NIKE SB DUNK SPACE BLUE.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-45"
    },
    {
        id: 248,
        name: "NIKE SB DUNK BLACK WHITE",
        category: "unisex",
        image: "shop/NIKE SB DUNK BLACK WHITE.jpg",
        price: 4099,
        discountedPrice: 2599,
        size: "EUR 36-45"
    },
    {
        id: 249,
        name: "NIKE SB DUNK BRIGHT PINK",
        category: "unisex",
        image: "shop/NIKE SB DUNK BRIGHT PINK.jpg",
        price: 4199,
        discountedPrice: 2699,
        size: "EUR 36-45"
    },
    {
        id: 250,
        name: "ADIDAS ORIGINALS YEEZY BOOST 350 V2 MONO MIST",
        category: "unisex",
        image: "shop/ADIDAS ORIGINALS YEEZY BOOST 350 V2 MONO MIST.jpg",
        price: 4399,
        discountedPrice: 2899,
        size: "EUR 36-45"
    },
    {
        id: 251,
        name: "NIKE JORDAN 1 RETRO HIGH OG BLACK AND WHITE",
        category: "unisex",
        image: "shop/NIKE JORDAN 1 RETRO HIGH OG BLACK AND WHITE.jpg",
        price: 4699,
        discountedPrice: 3099,
        size: "EUR 36-45"
    },
    {
        id: 252,
        name: "NIKE SB DUNK NAVY BLUE",
        category: "unisex",
        image: "shop/NIKE SB DUNK NAVY BLUE.jpg",
        price: 3999,
        discountedPrice: 2499,
        size: "EUR 36-45"
    },
    {
        id: 253,
        name: "ADIDAS ORIGINALS SAMBA BEIGE AND WHITE",
        category: "unisex",
        image: "shop/ADIDAS ORIGINALS SAMBA BEIGE AND WHITE.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 36-45"
    },
    {
        id: 254,
        name: "ADIDAS ORIGINALS SAMBA GREEN AND WHITE",
        category: "unisex",
        image: "shop/ADIDAS ORIGINALS SAMBA GREEN AND WHITE.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 36-45"
    },
    {
        id: 255,
        name: "ADIDAS ORIGINALS SAMBA WHITE AND BLACK",
        category: "unisex",
        image: "shop/ADIDAS ORIGINALS SAMBA WHITE AND BLACK.jpg",
        price: 3799,
        discountedPrice: 2299,
        size: "EUR 36-45"
    }
];
    