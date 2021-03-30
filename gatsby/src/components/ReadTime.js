import React from 'react';

export default function ReadTime({ words }) {
  let readingTime;
  if (words <= 180) {
    readingTime = '1 min de lectura';
  } else if (words <= 380) {
    readingTime = '2 min de lectura';
  } else if (words <= 570) {
    readingTime = '3 min de lectura';
  } else if (words <= 950) {
    readingTime = '5 min de lectura';
  } else if (words <= 1520) {
    readingTime = '8 min de lectura ';
  } else if (words <= 1900) {
    readingTime = '10 min de lectura ';
  } else if (words <= 2850) {
    readingTime = '15 min de lectura ';
  } else if (words <= 3800) {
    readingTime = '20 min de lectura ';
  } else if (words <= 4750) {
    readingTime = '25 min de lectura ';
  } else if (words <= 5700) {
    readingTime = '30 min de lectura ';
  } else if (words <= 8550) {
    readingTime = '45 min de lectura ';
  } else if (words <= 9500) {
    readingTime = '50 min de lectura ';
  } else if (words >= 9501) {
    readingTime = ' 1hr de lectura';
  }
  return readingTime;
}
