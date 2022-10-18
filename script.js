'use strict';

const birthElement = document.getElementById('birth');
const educationElement = document.querySelector('#education');

let birthElementStyleChanged = false;
let educationElementStyleChanged = false;

birthElement.addEventListener('click', () => {
  if (!birthElementStyleChanged) {
    birthElement.classList.add('birth');
    birthElementStyleChanged = true;
  } else {
    birthElement.classList.remove('birth');
    birthElementStyleChanged = false;
  }
});

educationElement.addEventListener('click', () => {
  if (!educationElementStyleChanged) {
    educationElement.classList.add('education');
    educationElementStyleChanged = true;
  } else {
    educationElement.classList.remove('education');
    educationElementStyleChanged = false;
  }
});

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

addButton.addEventListener('click', () => {
  const imageElement = document.createElement('img');
  imageElement.src =
    'https://lviv.travel/image/news/ca/48/ca488962b7ba4aced73d0b10b8a7b7afb68efc70_1584955392.jpeg?crop=937%2C627%2C2%2C0';
  imageElement.alt = 'Lviv';
  imageElement.classList.add('image');
  const anchorElement = document.querySelector('a');
  anchorElement.appendChild(imageElement);
});

removeButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.image');
  images[images.length - 1].remove();
});

increaseButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.image');
  for (const image of images) {
    image.classList.add('increased-image');
  }
});

decreaseButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.image');
  for (const image of images) {
    image.classList.remove('increased-image');
  }
});
