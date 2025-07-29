// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link

let sections = document.querySelectorAll('section');
console.log(sections);
let naveLinks = document.querySelectorAll('header nav a');
console.log(naveLinks);

let h2 = document.querySelectorAll('i');
console.log(h2[0]);
let i = 0;
window.onscroll = () => {
    i++;
    // console.log("zizo ->" + i);
    sections.forEach(secc => {
        let top = window.scrollY;
        console.log(top);
        let offset = secc.offsetTop - 150;
        let height = secc.offsetHeight;
        let id = secc.getAttribute('id');
        console.log(offset);
        console.log(height);
        console.log(id);
        if (top >= offset && top < offset + height) {
            naveLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        }
    });
    
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar whwn click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
