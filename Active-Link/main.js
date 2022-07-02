const navLinks = document.querySelectorAll('.list li');


// function activeLinks(index) {
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     })
//     navLinks[index].classList.add('active');
// }

// navLinks.forEach((navLink, i) => {
//     navLink.addEventListener('click', () => {
//         activeLinks(i);
//     });
// })

for(var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        if(current.length > 0) {
            current[0].className = current[0].className.replace('active', '');
        }
        console.log(current);
        this.className += 'active';
    } ) 
}

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
function highlightLink() {
    const coordsValue = this.getBoundingClientRect();
    console.log(coordsValue);
    const coords = {
        width: coordsValue.width,
        height: coordsValue.height,
        left: coordsValue.left + window.scrollX,
        top: coordsValue.top + window.scrollY,
    }
    highlight.style.height = `${coords.height}px`;
    highlight.style.width = `${coords.width}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

navLinks.forEach(navLink => 
    navLink.addEventListener('mouseenter', highlightLink)
)