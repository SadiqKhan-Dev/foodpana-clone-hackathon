// About Page JavaScript

// ==================== COUNTER ANIMATION ====================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / speed;

    const updateCount = () => {
      const current = +counter.innerText.replace(/,/g, "");

      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString();
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  };

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

console.log("✓ About page JavaScript loaded!");

const slides = [
  {
    title: "Customers come first",
    text: "We’re far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.",
    img: "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-4.webp",
  },
  {
    title: "Growing with our partners",
    text: "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?",
    img: "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-2.webp",
  },
  {
    title: "Our riders are our heroes",
    text: "We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one.",
    img: "'https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-3.webp",
  },
];

// let currentIndex = 0;

const titleEl = document.querySelector(".card h2");
const textEl = document.querySelector(".card p");
const imageEl = document.getElementById("mainImage");
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  currentIndex = index;

  // Update Content
  titleEl.innerText = slides[currentIndex].title;
  textEl.innerText = slides[currentIndex].text;
  imageEl.src = slides[currentIndex].img;

  // Update Dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  let next = (currentIndex + 1) % slides.length;
  updateSlide(next);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  let prev = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(prev);
});

// For specific dot clicking
function goToSlide(index) {
  updateSlide(index);
}


const slider = document.getElementById('sliderContainer');
const track = document.getElementById('sliderTrack');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;

// Event Listeners
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('touchend', dragEnd);
slider.addEventListener('mouseleave', dragEnd);

slider.addEventListener('mousemove', dragAction);
slider.addEventListener('touchmove', dragAction);

function dragStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    track.style.transition = 'none'; // Disable transition for smooth dragging
}

function dragAction(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    // Determine if we should move to next/prev slide
    if (movedBy < -100 && currentIndex < 2) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -slider.offsetWidth;
    prevTranslate = currentTranslate;
    track.style.transition = 'transform 0.4s ease-out';
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// Ensure responsiveness on window resize
window.onresize = setPositionByIndex;