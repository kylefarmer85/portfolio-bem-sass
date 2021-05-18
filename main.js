const scroll = new SmoothScroll('.main-nav a[href*="#', {
  speed: 800
});

const sections = document.querySelectorAll('section');
const faders = document.querySelectorAll('.fade-in');

// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: '-250px'
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if(!entry.isIntersecting) {
//       return;
//     }
//     console.log(entry.target);
//     entry.target.classList.add("fade-in");
//     observer.unobserve(entry.target)
//   });
// }, options);

// sections.forEach(section => {
//   observer.observe(section)
// })

const appearOptions = {
  threshold: .5,
  rootMargin: '0px'
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
