import React from 'react';

export default function ReadTime({ words }) {
  let readingTime;
  console.log(words);
  console.log(`${words} words`);
  if (words <= 100) {
    readingTime = '1 min de lectura';
  } else if (words <= 300) {
    readingTime = '3 min de lectura';
  } else if (words <= 500) {
    readingTime = '5 min de lectura';
  } else if (words <= 1000) {
    readingTime = '10 minde lectura ';
  } else if (words <= 1500) {
    readingTime = '15 minde lectura ';
  } else if (words <= 2000) {
    readingTime = '20 minde lectura ';
  } else if (words <= 2500) {
    readingTime = '25 minde lectura ';
  } else if (words <= 3000) {
    readingTime = '30 minde lectura ';
  } else if (words <= 4500) {
    readingTime = '45 minde lectura ';
  } else if (words <= 4999) {
    readingTime = '50 minde lectura ';
  } else if (words >= 5000) {
    readingTime = ' 1hr de lectura';
  }
  return readingTime;
}
