// slider data

import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { BsBoxSeam } from "react-icons/bs";
import {nanoid} from 'nanoid'


// import sliderImg from '/slider/slider-1.png'
export const hero_slider = [
  {
    id: 1,
    subTitle: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    desc: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    img: "/slider/slider-1.png",
    number: "$456",
  },
  {
    id: 2,
    subTitle: "THE BEST PLACE TO PLAY-2",
    title: "Xbox Consoles",
    desc: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    img: "/slider/slider-1.png",
    number: "$123",
  },
  {
    id: 3,
    subTitle: "THE BEST PLACE TO PLAY-3",
    title: "Xbox Consoles",
    desc: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    img: "/slider/slider-1.png",
    number: "$299",
  },
];


export const top_search_Pro = [
  {
    id: 1,
    subtitle: "Summer Sales",
    title1: "New Google",
    title2: " Pixel 9 Pro",
    off_Num: "29% OFF",
    img: "/top-search-pro/top-search-1.png",
  },
];

export const features = [
  {
    id: 1,
    icon: BsBoxSeam,
    title: "Fasted Delivery",
    subTitle: "Delivery in 24/H",
  },
  {
    id: 2,
    icon: BsBoxSeam,
    title: "Fasted Delivery",
    subTitle: "Delivery in 24/H",
  },
  {
    id: 3,
    icon: BsBoxSeam,
    title: "Fasted Delivery",
    subTitle: "Delivery in 24/H",
  },
  {
    id: 4,
    icon: BsBoxSeam,
    title: "Fasted Delivery",
    subTitle: "Delivery in 24/H",
  },
];

const stars = Array(5).fill(null).map((_,i) => (
  <Star key={i} />
))
console.log(stars);
const id = nanoid();

export const topProducts = [
  {
    id : id,
    offer : '32% OFF',
    type : 'HOT',
    category : 'electronics',
    img : '/products/1gr.png',
    star : stars,
    star_num : '52,677',
    title : 'Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...',
    price : '$442.12',
    delPrice : '$865.99',
    desc : 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    inStork : 'SOLD OUT',
    type : 'HOT',
    category : 'electronics',
    img : '/products/1g.png',
    star : stars,
    star_num : '52,677',
    title : 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...',
    price : '$442.12',
    delPrice : '$865.99',
    desc : 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    offer : '19% OFF',
    type : 'HOT',
    category : 'electronics',
    img : '/products/1g.png',
    star : stars,
    star_num : '52,677',
    title : '4K UHD LED Smart TV with Chromecast Built-in',
    price : '$1,50',
    delPrice : '$865',
    desc : 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    type : 'HOT',
    category : 'electronics',
    img : '/products/1g.png',
    star : stars,
    star_num : '52,677',
    title : 'Simple Mobile 4G LTE Prepaid Smartphone',
    price : '$2,20',
    desc : 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    category : 'electronics',
    img : '/products/1p.png',
    star : stars,
    star_num : '52,677',
    title : 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...',
    price : '$442.12',
    delPrice : '$1200',
    desc : 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    category : 'electronics',
    img : '/products/1p.png',
    star : stars,
    star_num : '52,677',
    title : 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price : '$2,99',
    delPrice : '$700',
    desc : 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    category : 'electronics',
    img : '/products/1p.png',
    star : stars,
    star_num : '52,677',
    title : 'Portable Wshing Machine, 11lbs capacity Model 18NMFIAM',
    price : '$570',
    delPrice : '$870.99',
    desc : 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    type : 'HOT',
    category : 'electronics',
    img : '/products/1p.png',
    star : stars,
    star_num : '52,677',
    title : '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower',
    price : '$160',
    delPrice : '$370.99',
    desc : 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
  {
    id : id,
    offer : '32% OFF',
    category : 'electronics',
    img : '/products/1p.png',
    star : stars,
    star_num : '52,677',
    title : 'JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black',
    price : '$250',
    delPrice : '$360.99',
    desc : 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    icons : [
      {
        Heart,
        Eye,
        ShoppingCart
      }
    ]
  },
]
