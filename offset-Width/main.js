// const container = document.querySelector('.container')
// const insideContainer = document.querySelector('.inside--container');

// console.log("The container offset Left is " + container.offsetLeft);
// console.log("The inside container offset Left is " + insideContainer.offsetLeft);


const imageCarousel = document.querySelector('.carousel--wrapper');
const images = document.querySelectorAll('.carousel--wrapper img');
const prev = document.querySelector('.fa-chevron-left');
const next = document.querySelector('.fa-chevron-right');

function slider(carousel, next, prev) {
    var slides = carousel.getElementsByClassName('slide'),
        slideLength = slides.length,
        slideSize = carousel.getElementsByClassName('slide')[0].offsetWidth;
        firstSlide = slides[0],
        lastSlide = slides[slides.length - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

        // Clone first and last slide
        carousel.appendChild(cloneFirst);
        carousel.insertBefore(cloneLast, firstSlide);
        
        next.addEventListener('click', function() {
            nextImage();
        });
        prev.addEventListener('click', function() {
            prevImage();
        });


        function nextImage() {
            index++;
            if(index > slides.length - 1) {
                index = 0;
            }

            carousel.style.transform = `translateX(${-index * 400}px)`;
        }
        function prevImage() {
            index--;
            if(index == -1) {
                index = slides.length - 1;
            }

            carousel.style.transform = `translateX(${-index * 400}px)`;
        }
}

slider(imageCarousel, next, prev);