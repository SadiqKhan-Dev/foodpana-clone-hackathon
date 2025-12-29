// ==================== FOODPANDA MAIN PAGE JAVASCRIPT ====================

// ==================== LOCATION DROPDOWN SEARCH ====================
document.addEventListener('DOMContentLoaded', () => {
    const locationSearch = document.querySelector('.location-search input');

    if (locationSearch) {
        locationSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const locationItems = document.querySelectorAll('.location-item');

            locationItems.forEach(item => {
                const locationName = item.querySelector('span').textContent.toLowerCase();
// s
                if (locationName.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Handle location selection
    const locationItems = document.querySelectorAll('.location-item');
    locationItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const locationName = this.querySelector('span').textContent;
            const locationBtn = document.querySelector('.location-btn');

            // Update button text
            const btnText = locationBtn.childNodes[2];
            btnText.textContent = locationName;

            // Optional: Save to localStorage
            localStorage.setItem('selectedLocation', locationName);

            console.log('Selected location:', locationName);
        });
    });

    // Load saved location on page load
    const savedLocation = localStorage.getItem('selectedLocation');
    if (savedLocation) {
        const locationBtn = document.querySelector('.location-btn');
        if (locationBtn) {
            const btnText = locationBtn.childNodes[2];
            btnText.textContent = savedLocation;
        }
    }
});

// ==================== BACK TO TOP BUTTON ====================
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        });

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));
});

// ==================== NEWS CAROUSEL DRAG ====================
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('draggableCarousel');

    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }
});

// ==================== BUTTON HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-large');

    buttons.forEach(button => {
        button.style.transition = 'all 0.3s ease';

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(215, 15, 100, 0.3)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// ==================== NEWS CARD HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== LOGO IMAGE ERROR HANDLING ====================
document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.logo img');

    if (logoImg) {
        logoImg.addEventListener('error', function() {
            console.warn('Logo image failed to load');
            // You can set a fallback image here if needed
        });
    }
});

// ==================== SEARCH ICON FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            // You can implement search modal or redirect here
            console.log('Search clicked');
            alert('Search functionality coming soon!');
        });
    }
});

console.log('✓ Foodpanda main page JavaScript loaded successfully!');
