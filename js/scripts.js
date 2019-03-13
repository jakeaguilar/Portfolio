// STICKY NAVBAR
// variables
const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

// trigger sticky nav when scrollY is greater than navTop
function stickyNavigation(){
    if(window.scrollY > navTop){
        nav.classList.add('fixed-nav');
        nav.classList.remove('fixed-nav-out');

    } else{
        nav.classList.remove('fixed-nav')
        nav.classList.add('fixed-nav-out');
    }
}
window.addEventListener('scroll', stickyNavigation);

