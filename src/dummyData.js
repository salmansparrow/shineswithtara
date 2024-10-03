// src/data/dummyData.js
import BookImg1 from "./images/shopimages/book.png"; // replace with actual image paths
import activityImg from "./images/shopimages/sheet.png"; // replace with actual image paths
import imgColor from "./images/shopimages/coloring.png"; // replace with actual image paths
import extraImg from "./images/shopimages/extra.png"; // replace with actual image paths

export const bookActivityData = [
  { id: 1, title: "Tara's Dua Book", price: 15, imgSrc: BookImg1 },
  { id: 2, title: "Ramadan Coloring Book", price: 13, imgSrc: BookImg1 },
  { id: 3, title: "Book 3", price: 25, imgSrc: BookImg1 },
  { id: 4, title: "Book 4", price: 30, imgSrc: BookImg1 },
  { id: 5, title: "Book 5", price: 35, imgSrc: BookImg1 },
  { id: 6, title: "Book 6", price: 40, imgSrc: BookImg1 },
];

export const learningActivityData = [
  { id: 1, title: "Worksheet", price: 15, imgSrc: activityImg },
  { id: 2, title: "Ramadan Coloring Book", price: 13, imgSrc: activityImg },
  { id: 3, title: "Activity 3", price: 25, imgSrc: activityImg },
  { id: 4, title: "Activity 4", price: 30, imgSrc: activityImg },
  { id: 5, title: "Activity 5", price: 35, imgSrc: activityImg },
  { id: 6, title: "Activity 6", price: 40, imgSrc: activityImg },
];

export const coloringActivityData = [
  { id: 1, title: "Coloring Sheet", price: 15, imgSrc: imgColor },
  { id: 2, title: "Coloring Sheet", price: 13, imgSrc: imgColor },
];

export const extraActivityData = [
  { id: 1, title: "Extra 1", price: 15, imgSrc: extraImg },
  { id: 2, title: "Extra 2", price: 13, imgSrc: extraImg },
  { id: 3, title: "Extra 3", price: 25, imgSrc: extraImg },
  { id: 4, title: "Extra 4", price: 30, imgSrc: extraImg },
];
