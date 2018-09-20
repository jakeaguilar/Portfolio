
// select the navbar and make it constant variable and set how far down the navbar starts
const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

// need to know when to activate the sticky nav bar
function stickyNavigationpx() {
  console.log(`navTop = ${navTop}`)
  console.log(`scrollY = ${window.scrollY}`);  
}

window.addEventListener('scroll', stickyNavigationpx);

// trigger sticky nav by adding css class to stylesheet when scrollY is greater than navTop
function stickyNavigation(){
    if(window.scrollY > navTop){
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.getElementById("navigation").classList.add('fixed-nav');
    } else{
        document.body.style.paddingTop = 0;
        document.getElementById("navigation").classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNavigation);