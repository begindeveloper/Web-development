function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
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


const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach(card => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

 



//const faders = document.querySelectorAll('.fade-in');const appearOnScroll = new IntersectionObserver((entries, observer) => {entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); observer.unobserve(entry.target);}});}, {threshold: 0.1});faders.forEach(fader => {
    //appearOnScroll.observe(fader);
  //   function filterProjects(category) {
 //    const allCards = document.querySelectorAll('.project-card');
 //    allCards.forEach(card => {
  //     if (category === 'all' || card.classList.contains(category)) {
   //      card.style.display = 'block';
   //    } else {
    //     card.style.display = 'none';
   //    }
 //    });
 //  }

//var hamburger = document.querySelector('#hamburger');
//var navList = document.querySelector('#nav-list');


//hamburger.addEventListener('click', function(){
   // document.querySelector('#nav-list').classList.toggle("show")
//})
   // const buttons = document.querySelectorAll('.filter-btn');
   // const cards = document.querySelectorAll('.project-card');

  //  buttons.forEach(btn => {
   //    btn.addEventListener('click', () => {
     //    buttons.forEach(b => b.classList.remove('active'));
     //    btn.classList.add('active');
     //    const filter = btn.dataset.filter;
     //    cards.forEach(card => {
      //     if (filter === 'all' || card.classList.contains(filter)) {
       //      card.style.display = 'block';
      //     } else {
      //       card.style.display = 'none';
     //      }
     //    });
    //   });
  //   });
// }); //
