import  baby_cap_black from "../assets/baby-cap-black.png"
import baby_cap_white from  "../assets/baby-cap-white.png";
import baby_cap_grey from "../assets/baby-cap-gray.png";

import baby_oneside_beige_1 from  "../assets/baby-onesie-beige-1.png";
import baby_oneside_beige_2 from "../assets/baby-onesie-beige-2.png";
import baby_oneside_black_1 from "../assets/baby-onesie-black-1.png"
import baby_oneside_black_2 from "../assets/baby-onesie-black-2.png" 


import bag_black from "../assets/bag-black.png";
import bag_white from "../assets/bag-white.png";

import bomber_jacket_army from "../assets/bomber-jacket-army.png"
import bomber_jacket_black from "../assets/bomber-jacket-black.png"

import  cowboy_hat_black_1 from "../assets/cowboy-hat-black-1.png"
import  cowboy_hat_black_2 from "../assets/cowboy-hat-black-2.png"
import  cowboy_hat_black_3 from "../assets/cowboy-hat-black-3.png"
import  cowboy_hat_black_4 from "../assets/cowboy-hat-black-4.png"
import  cowboy_hat_black_5 from "../assets/cowboy-hat-black-5.png"
import  cowboy_hat_black_6 from "../assets/cowboy-hat-black-6.png"



import cup_black from "../assets/cup-black.png"
import cup_white from "../assets/cup-white.png"

import dog_sweater_1 from "../assets/dog-sweater-1.png"
import dog_sweater_2 from "../assets/dog-sweater-2.png"

import hat_1 from "../assets/hat-1.png"
import hat_2 from "../assets/hat-2.png"
import hat_3 from "../assets/hat-3.png"

import hoodies_1 from "../assets/hoodie-1.png"
import hoodies_2 from "../assets/hoodie-2.png"

import keyboard from "../assets/keyboard.png"

import mug_1 from "../assets/mug-1.png"
import mug_2 from "../assets/mug-2.png"

import pacifier_1 from "../assets/pacifier-1.png"
import pacifier_2 from "../assets/pacifier-2.png"

import shoes_1 from "../assets/shoes-1.png"
import shoes_2 from "../assets/shoes-2.png"
import shoes_3 from "../assets/shoes-3.png"
import shoes_4 from "../assets/shoes-4.png"

import rainbowsticker from "../assets/sticker-rainbow.png"
import sticker from "../assets/sticker.png"

import tshirt_circle_blue from "../assets/t-shirt-circles-blue.png"
import tshirt_circle_black from "../assets/t-shirt-circles-black.png"
import tshirt_circle_white from "../assets/t-shirt-circles-white.png"

import tshirt_color_black from "../assets/t-shirt-color-black.png"
import tshirt_color_blue from "../assets/t-shirt-color-blue.png"
import tshirt_color_gray from "../assets/t-shirt-color-gray.png"
import tshirt_color_pink from "../assets/t-shirt-color-pink.png"
import tshirt_color_white from "../assets/t-shirt-color-white.png"

import tshirt_spiral_1 from "../assets/t-shirt-spiral-1.png"
import tshirt_spiral_2 from "../assets/t-shirt-spiral-2.png"
import tshirt_spiral_3 from "../assets/t-shirt-spiral-3.png"
import tshirt_spiral_4 from "../assets/t-shirt-spiral-4.png"
import webcam from "../assets/webcam-cover.png"

const all_product=[
  {
    id: 1,
    name: "Baby Cap Black",
    price: "10.99",
    description: "Black baby cap for your little one.",
    images: [{ src: baby_cap_black, alt: "Black Baby Cap" },
             { src: baby_cap_white, alt: "White Baby Cap" },
             { src: baby_cap_grey, alt: "Grey Baby Cap" }],
    category: "Headwear",
    colors: ["Black", "White", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 2,
    name: "Baby Onesie Beige",
    price: "15.99",
    description: "Beige baby onesie for your little one.",
    images: [
      { src: baby_oneside_beige_1, alt: "Beige Baby Onesie Front" },
      { src: baby_oneside_beige_2, alt: "Beige Baby Onesie Back" },
      { src: baby_oneside_black_1, alt: "Black Baby Onesie Front" },
      { src: baby_oneside_black_2, alt: "Black Baby Onesie Back" }
    ],
    category: "Kids",
    colors: ["White","Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 3,
    name: "Baby Onesie Black",
    price: "15.99",
    description: "Black baby onesie for your little one.",
    images: [
      { src: baby_oneside_black_1, alt: "Black Baby Onesie Front" },
      { src: baby_oneside_black_2, alt: "Black Baby Onesie Back" },
      { src: baby_oneside_beige_1, alt: "Beige Baby Onesie Front" },
      { src: baby_oneside_beige_2, alt: "Beige Baby Onesie Back" },
    ],
    category: "Kids",
    colors: ["Black", "White", ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
 
  {
    id: 4,
    name: "Drawstring Bag",
    price: "20.99",
    description: "Black bag for your everyday use.",
    images: [{ src: bag_black, alt: "Black Bag" },
             { src: bag_white, alt: "White Bag" }],
    category: "Bags",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 5,
    name: "Bomber Jacket Army",
    price: "45.99",
    description: "Army green bomber jacket for a stylish look.",
    images: [{ src: bomber_jacket_army, alt: "Army Bomber Jacket" },
             { src: bomber_jacket_black, alt: "Black Bomber Jacket" }],
    category: "Jackets",
    colors: ["Black", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 6,
    name: "Cowboy Hat Black",
    price: "25.99",
    description: "Black cowboy hat for a classic western look.",
    images: [
      { src: cowboy_hat_black_1, alt: "Black Cowboy Hat Front" },
      { src: cowboy_hat_black_2, alt: "Black Cowboy Hat Back" },
      { src: cowboy_hat_black_3, alt: "Black Cowboy Hat Side" },
      { src: cowboy_hat_black_4, alt: "Black Cowboy Hat Top" },
      { src: cowboy_hat_black_5, alt: "Black Cowboy Hat Angle" },
      { src: cowboy_hat_black_6, alt: "Black Cowboy Hat Detail" }
    ],
    category: "Headwear",
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 7,
    name: "Nova Cup",
    price: "8.99",
    description: "Cup for your favorite beverages.",
    images: [{ src: cup_black, alt: "Black Cup" },
             { src: cup_white, alt: "White Cup" }],
    category: "Drinkware",
    colors: ["Black", "White"],
    sizes: ["No Size"],
    description_: "12oz double wall ceramic body with a padded bottom..",
  },
  {
    id: 8,
    name: "Dog Sweater",
    price: "12.99",
    description: "Stylish sweater for your furry friend.",
    images: [
      { src: dog_sweater_1, alt: "Dog Sweater Front" },
      { src: dog_sweater_2, alt: "Dog Sweater Back" }
    ],
    category: "Pets",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id:9,
    name: "Hat 1",
    price: "14.99",
    description: "Stylish hat for any occasion.",
    images: [{ src: hat_1, alt: "Hat 1" },
             { src: hat_2, alt: "Hat 2" },
             { src: hat_3, alt: "Hat 3" }],
    category: "Headwear",
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 10,
    name: "Nova Hoodie ",
    price: "29.99",
    description: "Comfortable hoodie for everyday wear.",
    images: [{ src: hoodies_1, alt: "Hoodie 1" },
             { src: hoodies_2, alt: "Hoodie 2" }],
    category: "Hoodies",
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "Comfortable hoodie for everyday wear.",
  },
  {
    id: 11,
    name: "Keyboard",
    price: "99.99",
    description: "High-quality keyboard for typing and gaming.",
    images: [{ src: keyboard, alt: "Keyboard" }],
    category: "Electronics",
    colors: ["Black"],
    sizes: ["No Size"],
    description_: "Cool",
  },
  {
    id: 12,
    name: "Nova Mug ",
    price: "7.99",
    description: "Classic mug for your morning coffee.",
    images: [{ src: mug_1, alt: "Mug 1" },
             { src: mug_2, alt: "Mug 2" }
             ],
    category: "Kitchenware",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },

  {
    id: 13,
    name: "Pacifier ",
    price: "5.99",
    description: "Adorable pacifier for your little one.",
    images: [{ src: pacifier_1, alt: "Pacifier 1" },{ src: pacifier_2, alt: "Pacifier 2" }],
    category: "Kids",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.",
  },
  {
    id: 14,
    name: "Shoes 1",
    price: "39.99",
    description: "Stylish shoes for any outfit.",
    images: [{ src: shoes_1, alt: "Shoes 1" },
             { src: shoes_2, alt: "Shoes 2" },
             { src: shoes_3, alt: "Shoes 3" },
             { src: shoes_4, alt: "Shoes 4" }],
    category: "Footwear",
    colors: [ "Blue"],
    sizes: ["1", "2", "3", "4", "5", "6", "7","8","9"],
    description_: "Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.",
  },
  {
    id: 15,
    name: "Rainbow Sticker",
    price: "2.99",
    description: "Colorful sticker to brighten up your day.",
    images: [{ src: rainbowsticker, alt: "Rainbow Sticker" }],
    category: "Stickers",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "Rainbow Patterned Sticker",
  },
  {
    id: 16,
    name: "Sticker",
    price: "1.99",
    description: "Simple sticker for decoration.",
    images: [{ src: sticker, alt: "Sticker" }],
    category: "Stickers",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "Awesome Sticker"
  },
  {
    id: 17,
    name: "T-shirt Circles Blue",
    price: "17.99",
    description: "Blue t-shirt with circle patterns.",
    images: [{ src: tshirt_circle_blue, alt: "T-shirt Circles Blue" },
    { src: tshirt_circle_black, alt: "T-shirt Circles Black" },
    { src: tshirt_circle_white, alt: "T-shirt Circles White" }
  ],
    category: "Shirt",
    colors: ["Black", "White", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 18,
    name: "T-shirt Color Black",
    price: "14.99",
    description: "Simple black t-shirt for everyday wear.",
    images: [{ src: tshirt_color_black, alt: "T-shirt Color Black" },
             { src: tshirt_color_blue, alt: "T-shirt Color Blue" },
             { src: tshirt_color_gray, alt: "T-shirt Color Gray" },
             { src: tshirt_color_pink, alt: "T-shirt Color Pink" },
             { src: tshirt_color_white, alt: "T-shirt Color White" }],
    category: "Shirt",
    colors: ["Black", "White", "Blue","Pink","Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 19,
    name: "T-shirt Spiral 3",
    price: "16.99",
    description: "Yet another stylish spiral design t-shirt.",
    images: [{ src: tshirt_spiral_1, alt: "T-shirt Spiral 3" },
    { src: tshirt_spiral_2, alt: "T-shirt Spiral 1" },
    { src: tshirt_spiral_3, alt: "T-shirt Spiral 1" },
    { src: tshirt_spiral_4, alt: "T-shirt Spiral 1" }],
    category: "Shirt",
    colors: ["Black", ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description_: "60% combed ringspun cotton/40% polyester jersey tee.",
  },
  {
    id: 20,
    name: "Webcam Cover",
    price: "3.99",
    description: "Privacy cover for your webcam.",
    images: [{ src: webcam, alt: "Webcam Cover" }],
    category: "Electronics",
    colors: ["Black"],
    sizes: [""],
    description_: "",
  }
] 
 
export default all_product;