// products.js
import shoes from '../assets/shoes-1.png'
import hoodies from "../assets/hoodie-1.png"
import mug from '../assets/mug-1.png';
import tshirt from "../assets/t-shirt-circles-black.png"

const products = [
  {
    id: 14,
    name: 'Nova Shoes',
    description: 'Soft and comfortable Shoes',
    price: 10.00,
    image: shoes,
  },
  {
    id: 10,
    name: 'Nova Hoodies',
    description: 'Stylish Hoodied.',
    price: 10.00,
    image: hoodies,
  },
  {
    id: 7,
    name: 'Acme Mug',
    description: ' Mug for your morning coffee or tea.',
    price: 15.00,
    image: mug,
  },
  {
    id: 17,
    name: 'Acme T-Shirt',
    description: 'T-shirt for everyday wear.',
    price: 20.00,
    image: tshirt, // Reference to the mug image
  },
];

export default products;
