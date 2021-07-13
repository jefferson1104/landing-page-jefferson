document.addEventListener('DOMContentLoaded', () => {
  var timeLine = gsap.timeline();

  timeLine
    .from(".menu-1", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
    })
    .from(".menu-2", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-3", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-4", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-5", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-6", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-7", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".container-item div", {
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {each: 0.2},
      ease: "power3.out",
    }, "-=0.8")
    .from(".bg-hero", {
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {each: 0.2},
      ease: "power3.out",
    }, "-=0.8")
    .from(".technology div", {
      duration: 2,
      y: 600,
      opacity: 0,
      stagger: {each: 0.8},
      ease: "power3.out",
    }, "-=0.8")
    .from(".about div", {
      duration: 2,
      y: 600,
      opacity: 0,
      stagger: {each: 0.8},
      ease: "power3.out",
    }, "-=0.8")

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#section-works div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.3},
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-works",
    }
  });

  gsap.from("#section-get div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.3},
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-get",
    }
  });
})

window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu-list');

  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}