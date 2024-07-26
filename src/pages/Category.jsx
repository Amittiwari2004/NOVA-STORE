// Category.js
import React from 'react';
import ProductList from '../components/ProductList/ProductList';

// Sample product data
const products = [
  { id: 1, name: 'Acme Slip-On Shoes', category: 'Footwear', price: 45, image: 'slip-on-shoes.jpg' },
  { id: 2, name: 'Acme Circles T-Shirt', category: 'Shirts', price: 20, image: 'circles-tshirt.jpg' },
  { id: 3, name: 'Acme Drawstring Bag', category: 'Bags', price: 12, image: 'drawstring-bag.jpg' },
  { id: 4, name: 'Acme Feather T-Shirt', category: 'Shirts', price: 25, image: 'feather-tshirt.jpg' },
  { id: 5, name: 'Acme Sneakers', category: 'Footwear', price: 60, image: 'sneakers.jpg' },
  { id: 6, name: 'Acme Sticker Pack', category: 'Stickers', price: 5, image: 'sticker-pack.jpg' },
];

const Category = ({ activeCategory }) => {
  return (
    <div className="h-max">
      <ProductList products={products} activeCategory={activeCategory} />
    </div>
  );
};

export default Category;