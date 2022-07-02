var slider = document.getElementById("slider"),
  sliderItems = document.getElementById("slides"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('slide'),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

    // console.log(firstSlide);

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  wrapper.classList.add("loaded");

  // click Events
  prev.addEventListener("click", function() {
    shiftSlide(-1);
  });
  next.addEventListener("click", function() {
    shiftSlide(1);
  });
  

  // Changing the Items Counter
  items.style.left = "-400px";


  // Transition Events
  items.addEventListener('transitionend', checkIndex);

  console.log("The offset left of Item is " + items.offsetLeft);

  // Functions

  function shiftSlide(dir, action) {
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        // console.log("The pos Initial is " + posInitial)
        // console.log("slide size is " + slideSize)
        items.style.left = (posInitial - slideSize) + "px";
        index++;
      } else if (dir == -1) {
        console.log("The pos initial is " + posInitial);
        items.style.left = (posInitial + slideSize) + "px";
        index--;
      }
    }
    allowShift = false;
  }


  function checkIndex() {
    items.classList.remove('shifting');

    if(index == -1) {
        console.log("The slide length is " + slidesLength);
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
    }

    if(index == slidesLength){
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
    }

    allowShift = true;
  }



}

slide(slider, sliderItems, prev, next);
