const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const imageCarousel = document.querySelector('.carousel--container');
const images = document.querySelectorAll('.carousel--container img');
const featureCard = document.querySelectorAll('.features--wrapper .feature--card');
// console.log(images.length);
let index = 0;


function sliderFeature(idx) {
    featureCard.forEach(card => {
        card.classList.remove('active');
    })

    featureCard[idx].classList.add('active');
}


leftArrow.addEventListener('click', () => {
    index--;   
    if(index < 0) {
        index = images.length - 1;
    }
    sliderFeature(index);
    imageCarousel.style.transform = `translateX(${-index * 400}px)`;
});

rightArrow.addEventListener('click', () => {
    index++;   
    if(index > images.length - 1) {
        index = 0;
    }
    sliderFeature(index);
    imageCarousel.style.transform = `translateX(${-index * 400}px)`;
})