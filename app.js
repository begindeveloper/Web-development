var hamburger = document.querySelector('#hamburger');
var navList = document.querySelector('nav-list');


hamburger.addEventListener('click', function(){
    document.querySelector('#nav-list').classList.toggle("show")
})

// switch flicker
document.querySelector('.switch')