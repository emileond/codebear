import React from 'react';

export default function ReadTime({ words }) {
  let readingTime;
  if (words <= 180) {
    readingTime = '1 min de lectura';
  } else if (words <= 540) {
    readingTime = '3 min de lectura';
  } else if (words <= 900) {
    readingTime = '5 min de lectura';
  } else if (words <= 1440) {
    readingTime = '8 min de lectura ';
  } else if (words <= 1800) {
    readingTime = '10 min de lectura ';
  } else if (words <= 2700) {
    readingTime = '15 min de lectura ';
  } else if (words <= 3600) {
    readingTime = '20 min de lectura ';
  } else if (words <= 4500) {
    readingTime = '25 min de lectura ';
  } else if (words <= 5400) {
    readingTime = '30 min de lectura ';
  } else if (words <= 8100) {
    readingTime = '45 min de lectura ';
  } else if (words <= 900) {
    readingTime = '50 min de lectura ';
  } else if (words >= 10800) {
    readingTime = ' 1hr de lectura';
  }
  return readingTime;
}
