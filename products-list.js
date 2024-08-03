// PRODUCT LISTS
const products = [
    {
        id: 1,
        name: 'NIKE SB DUNK STUSSY JUST DO IT',
        category: 'men',
        image: 'shop/NIKE SB DUNK STUSSY JUST DO IT.jpg',
        price: 2999,
        discountedPrice: 2599,
        size: '40-45'
    },
    {
        id: 2,
        name: 'NEW BALANCE 530 GREEN',
        category: 'unisex',
        image: 'shop/NEW BALANCE 530 GREEN.jpg',
        price: 2899,
        discountedPrice: 2575,
        size: '36-44'
    },
    {
        id: 3,
        name: 'NEW BALANCE 1906 KHAKHI',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 KHAKHI.jpg',
        price: 3499,
        discountedPrice: 2999,
        size: '40-45'
    },
    {
        id: 4,
        name: 'ADIDAS FORUM 84 TRIPPLE WHITE',
        category: 'women',
        image: 'shop/ADIDAS FORUM 84 TRIPPLE WHITE.jpg',
        price: 3499,
        discountedPrice: 2799,
        size: '36-40'
    },
    {
        id: 5,
        name: 'NIKE SB DUNK MOCHA',
        category: 'men',
        image: 'shop/NIKE SB DUNK MOCHA.jpg',
        price: 2999,
        discountedPrice: 2499,
        size: '40-45'
    },
    {
        id: 6,
        name: 'Nike Air Jordan 6 British khakhi',
        category: 'uaquality',
        image: 'shop/Nike Air Jordan 6 British khakhi.jpg',
        price: 4299,
        discountedPrice: 3599,
        size: '41-46'
    },
    {
        id: 7,
        name: 'NIKE SB DUNK KLEKT',
        category: 'men',
        image: 'shop/NIKE SB DUNK KLEKT.jpg',
        price: 3399,
        discountedPrice: 2699,
        size: '40-45'
    },
    {
        id: 8,
        name: 'Nike Sb Dunk Low x Otomo Katsuhiro green',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x Otomo Katsuhiro green.jpg',
        price: 2999,
        discountedPrice: 2499,
        size: '40-45'
    },
    {
        id: 9,
        name: 'ADDIDAS ORGINALS CAMPUS DARK GREEN',
        category: 'unisex',
        image: 'shop/ADDIDAS ORGINALS CAMPUS DARK GREEN.jpg',
        price: 3299,
        discountedPrice: 2599,
        size: '36-44'
    },
    {
        id: 10,
        name: 'NEW BALANCE 1906 TRIPPLE BLACK',
        category: 'men',
        image: 'shop/NEW BALANCE 1906 TRIPPLE BLACK.jpg',
        price: 3599,
        discountedPrice: 2975,
        size: '40-45'
    },
    {
        id: 11,
        name: 'Nike Sb dunk RAYSSA LEAL',
        category: 'men',
        image: 'shop/Nike Sb dunk RAYSSA LEAL.jpg',
        price: 3499,
        discountedPrice: 2799,
        size: '40-45'
    },
    {
        id: 12,
        name: 'Nike Sb Dunk Low x otomo brown white',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x otomo brown white.jpg',
        price: 3799,
        discountedPrice: 2499,
        size: '41-46'
    },
    {
        id: 13,
        name: 'DOLCE AND GABBANA sneakers',
        category: 'uaquality',
        image: 'shop/DOLCE AND GABBANA sneakers.jpg',
        price: 3999,
        discountedPrice: 2999,
        size: '40-44'
    },
    {
        id: 14,
        name: 'NIKE AIRMAX 1 BROWN STONE',
        category: 'men',
        image: 'shop/NIKE AIRMAX 1 BROWN STONE.jpg',
        price: 3699,
        discountedPrice: 2649,
        size: '41-45'
    },
    {
        id: 15,
        name: 'ADIDAS  ORIGINALS SAMBA XLG FEI FEI RUN',
        category: 'men',
        image: 'shop/ADIDAS  ORIGINALS SAMBA XLG FEI FEI RUN.jpg',
        price: 3699,
        discountedPrice: 2599,
        size: '40-44'
    },
    {
        id: 16,
        name: 'ADIDAS ORGINALS 00S BLACK SOLE',
        category: 'unisex',
        image: 'shop/ADIDAS ORGINALS 00S BLACK SOLE.jpg',
        price: 3399,
        discountedPrice: 2599,
        size: '36-44'
    },
    {
        id: 17,
        name: 'ONITSUKA tiger leather ',
        category: 'unisex',
        image: 'shop/ONITSUKA tiger leather.jpg',
        price: 3499,
        discountedPrice: 2499,
        size: '36-45'
    },
    {
        id: 18,
        name: 'NIKE SB DUNK RUSH HOURS',
        category: 'men',
        image: 'shop/NIKE SB DUNK RUSH HOURS.jpg',
        price: 3599,
        discountedPrice: 2699,
        size: '40-45'
    },
    {
        id: 19,
        name: 'ADIDAS SAMBA BASIC BLACK AND WHITE ',
        category: 'unisex',
        image: 'shop/ADIDAS SAMBA BASIC BLACK AND WHITE.jpg',
        price: 3299,
        discountedPrice: 2375,
        size: '36-44'
    },
    {
        id: 20,
        name: 'TRAVIS SCOTT X NIKE MAC ATTACK GREY',
        category: 'men',
        image: 'shop/TRAVIS SCOTT X NIKE MAC ATTACK GREY.jpg',
        price: 3699,
        discountedPrice: 2299,
        size: '41-45'
    },
    {
        id: 21,
        name: 'NIKE AIR FORCE 1 UNDEFEATED WILD BERRY',
        category: 'men',
        image: 'shop/NIKE AIR FORCE 1 UNDEFEATED WILD BERRY.jpg',
        price: 3499,
        discountedPrice: 2099,
        size: '41-45'
    },
    {
        id: 22,
        name: 'Jordan RETRO 1 Fearless patent',
        category: 'clearance',
        image: 'shop/Jordan RETRO 1 Fearless patent.jpg',
        price: 3699,
        discountedPrice: 1599,
        size: '41-44'
    },
    {
        id: 23,
        name: 'ADIDAS ORGINAL CAMPUS ',
        category: 'unisex',
        image: 'shop/ADIDAS ORGINAL CAMPUS.jpg',
        price: 3899,
        discountedPrice: 2499,
        size: '36-44'
    },
    {
        id: 24,
        name: 'nike airforce hemp coconut milk',
        category: 'men',
        image: 'shop/nike airforce hemp coconut milk.jpg',
        price: 3899,
        discountedPrice: 2649,
        size: '40-45'
    },
    {
        id: 25,
        name: 'nike sb dunk supreme world famous ',
        category: 'men',
        image: 'shop/nike sb dunk supreme world famous.jpg',
        price: 4199,
        discountedPrice: 2749,
        size: '41-45'
    },
    {
        id: 26,
        name: 'Nike Sb Dunk Low x Otomo KOTSUHIRO GREY BLUE',
        category: 'men',
        image: 'shop/Nike Sb Dunk Low x Otomo KOTSUHIRO GREY BLUE.jpg',
        price: 3499,
        discountedPrice: 2499,
        size: '40-45'
    },
    {
        id: 27,
        name: 'NIKE SB DUNK LOW ANTHRACITE',
        category: 'men',
        image: 'shop/NIKE SB DUNK LOW ANTHRACITE.jpg',
        price: 3699,
        discountedPrice: 2699,
        size: '40-45'
    },
    {
        id: 28,
        name: 'ADIDAS STAN SMITH SCUBA GREEN',
        category: 'clearance',
        image: 'shop/ADIDAS STAN SMITH SCUBA GREEN.jpg',
        price: 3999,
        discountedPrice: 1849,
        size: '40-45'
    },
    {
        id: 29,
        name: 'NIKE AIRFORCE BROWN swoosh 07 ltd',
        category: 'clearance',
        image: 'shop/NIKE AIRFORCE BROWN swoosh 07 ltd.jpg',
        price: 3699,
        discountedPrice: 1599,
        size: '40-44'
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
