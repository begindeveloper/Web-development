var hamburger = document.querySelector('#hamburger');
var navList = document.querySelector('#nav-list');


hamburger.addEventListener('click', function(){
    document.querySelector('#nav-list').classList.toggle("show")
})

// dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Save preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  // Load saved preference
  window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  };

// switch flicker
document.querySelector('.switch')

// smooth animations
const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
//const faders = document.querySelectorAll('.fade-in');const appearOnScroll = new IntersectionObserver((entries, observer) => {entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); observer.unobserve(entry.target);}});}, {threshold: 0.1});faders.forEach(fader => {
    //appearOnScroll.observe(fader);
  //}); 
