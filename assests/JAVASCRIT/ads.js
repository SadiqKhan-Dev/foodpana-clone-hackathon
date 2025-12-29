// Function to toggle a floating contact menu
const floatingBtn = document.querySelector('.whatsapp');

floatingBtn.addEventListener('mouseenter', () => {
    // Add a tooltip or small menu expansion effect
    floatingBtn.style.width = '160px';
    floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Chat with us';
});

floatingBtn.addEventListener('mouseleave', () => {
    floatingBtn.style.width = '50px';
    floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
});

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Use our existing Intersection Observer to trigger the count
const statsObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
        statsObserver.unobserve(entries[0].target);
    }
}, { threshold: 0.5 });

statsObserver.observe(document.querySelector('.stats-section'));