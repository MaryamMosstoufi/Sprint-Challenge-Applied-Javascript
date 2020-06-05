/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imageURLs = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

function carouselMaker() {
  // Build HTML
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  carouselDiv.appendChild(leftButton);


  for (let i = 0; i < imageURLs.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', imageURLs[i]);
    img.setAttribute('id', i);
    if (i === 0) {
      img.style.display = 'inline';
    }
    // img.setAttribute('data-attribute', [i]);
    carouselDiv.appendChild(img);
  };


  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  carouselDiv.appendChild(rightButton);

  // const currentSlide = carouselDiv.querySelector('img.current-slide');
  // currentSlide.style.display = 'inline';

  // const currentSlideIndex = currentSlide.attributes['data-attribute'].value;

  // console.log(currentSlide);
  // console.log(currentSlideIndex);


  document.querySelector('.carousel-container').appendChild(carouselDiv);

}

carouselMaker();

let visibleIndex = 0;

function prevSlide() {
  const current = document.getElementById(visibleIndex);
  if (visibleIndex > 0) {
    visibleIndex -= 1;
  } else {
    visibleIndex = imageURLs.length - 1;
  }
  const prev = document.getElementById(visibleIndex);
  current.style.display = 'none';
  prev.style.display = 'inline';
  return visibleIndex;
}

function nextSlide() {
  const current = document.getElementById(visibleIndex);
  if (visibleIndex < (imageURLs.length - 1)) {
    visibleIndex += 1;
  } else {
    visibleIndex = 0;
  }
  const next = document.getElementById(visibleIndex);
  current.style.display = 'none';
  next.style.display = 'inline';
  return visibleIndex;
}

console.log(visibleIndex);
let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');
leftButton.addEventListener("click", prevSlide);
rightButton.addEventListener("click", nextSlide);


