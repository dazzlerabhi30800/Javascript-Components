const button = document.querySelector('.btn');
const heading = document.querySelector('h1');

const colors = [
    "rgb(11, 24, 96)",
    "rgb(64, 31, 85)",
    "rgb(3, 127, 82)",
    "rgb(118, 45, 109)"
]

let index = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[index];
    heading.style.setProperty("--main-backgroundColor", colors[index]);
    index++;
    if(index > colors.length - 1) {
        index = 0;
    }
}


// function changeBackground2() {
//   document.body.style.backgroundColor = randomBg(); 
// }

// function randomBg() {
//     const random = Math.floor(Math.random() * 360);
//     console.log(random);
//     return `hsl(${random},100%, 50% )`;
// }

button.addEventListener('click', changeBackground);