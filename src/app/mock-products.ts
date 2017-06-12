import { Product } from './product';
import { SweetsCategory } from './sweetsCategory';

export const PRODUCTS: Product[] = [
{
    name: 'Zoriane Siajvo',
    description: 'Svitoch candy',
    price: 100,
    category: SweetsCategory.Candy,
    isAvailable: true,
    equivalents: [
    'Zoriane Siajvo (Eclipse)',
    'Zoriane Siajvo (Cappuccino)',
    'Svitoch Truffle'
  ],
  imgUrlPath: "http://www.nestle.ua/asset-library/PublishingImages/products/svitoch/9685.png"
},
{
    name: 'Mak',
    description: 'Svitoch candy',
    price: 120,
    category: SweetsCategory.Candy,
    isAvailable: true,
    equivalents: [
    'Mak (AVK)',
    'Mak (Roshen)'
  ],
  imgUrlPath: "https://img3.zakaz.ua/20160301.1456823379.ad72436478c_2016-03-01_vitaliy/20160301.1456823379.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg"
}
];