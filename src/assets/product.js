// products.js
import shoes from '../assets/shoes-1.png'
import hoodies from "../assets/hoodie-1.png"
import mug from '../assets/mug-1.png';
import tshirt from "../assets/t-shirt-circles-black.png"

const products = [
  {
    id: 1,
    name: 'Acme Baby Onesie',
    description: 'Soft and comfortable onesie for your little one.',
    price: 10.00,
    image: shoes,
  },
  {
    id: 2,
    name: 'Acme Baby Cap',
    description: 'Stylish Hoodied.',
    price: 10.00,
    image: hoodies,
  },
  {
    id: 3,
    name: 'Acme Mug',
    description: ' Mug for your morning coffee or tea.',
    price: 15.00,
    image: tshirt,
  },
  {
    id: 4,
    name: 'Acme T-Shirt',
    description: 'T-shirt for everyday wear.',
    price: 20.00,
    image: mug, // Reference to the mug image
  },
];

export default products;
