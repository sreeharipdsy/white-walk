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
        name: 'ADIDAS  ORIGINALS SAMBA XLG FEI FEI RUN',
        category: 'men',
        image: 'shop/ADIDAS  ORIGINALS SAMBA XLG FEI FEI RUN.jpg',
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
        name: 'CROCS  LITERIDE',
        category: 'men',
        image: 'shop/CROCS  LITERIDE.jpg',
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
        name: 'ADIDAS  FORUM BAD BUNNY BLACK',
        category: 'unisex',
        image: 'shop/ADIDAS  FORUM BAD BUNNY BLACK.jpg',
        price: 2999,
        discountedPrice: 2449,
        size: 'EUR 36-44'
    }
    // ,
    // {
    //     id: ,
    //     name: '',
    //     category: '',
    //     image: 'shop/',
    //     price: ,
    //     discountedPrice: ,
    //     size: ''
    // }
];
