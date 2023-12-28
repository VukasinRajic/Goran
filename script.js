const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");

const nav = document.querySelector(".nav-main");

document.querySelector(".nav-main").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// Sticky nav------------------------------------------------------------------

const navHeight = nav.getBoundingClientRect();

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
});
section1Observer.observe(section1);
// ----------------------------------------------------------------------------
//menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav-main").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
// reveal sections---------------------------------------------------------------
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
