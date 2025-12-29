// ==================== CAREER PAGE JAVASCRIPT ====================

// ==================== COUNTER ANIMATION ====================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, '');

                const inc = target / speed;

                if (count < target) {
                    const nextCount = Math.ceil(count + inc);
                    counter.innerText = nextCount > target ? target.toLocaleString() : nextCount.toLocaleString();
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger when section is visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCounters();
            observer.disconnect();
        }
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
        }

        lastScrollTop = scrollTop;
    });
}

// ==================== SEARCH BAR FOCUS EFFECT ====================
const searchContainers = document.querySelectorAll('.search-container');

searchContainers.forEach(container => {
    const input = container.querySelector('input');

    if (input) {
        input.addEventListener('focus', function() {
            container.style.boxShadow = '0 6px 20px rgba(214, 19, 85, 0.2)';
            container.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
            container.style.transform = 'scale(1)';
        });
    }
});

// ==================== ROLE CARD FAVORITE TOGGLE ====================
document.addEventListener('DOMContentLoaded', () => {
    const favoriteIcons = document.querySelectorAll('.fav');

    favoriteIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.style.transition = 'all 0.3s ease';

        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');

            if (this.classList.contains('active')) {
                this.textContent = '★';
                this.style.transform = 'scale(1.3) rotate(72deg)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            } else {
                this.textContent = '☆';
            }
        });

        // Hover effect
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
});

// ==================== PARALLAX EFFECT FOR HERO MASCOT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');

    if (heroImage && scrolled < 800) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ==================== DROPDOWN MENU FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown-content');

        if (content) {
            content.style.transition = 'all 0.3s ease';
            content.style.opacity = '0';
            content.style.transform = 'translateY(-10px)';

            dropdown.addEventListener('mouseenter', function() {
                content.style.display = 'block';
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 10);
            });

            dropdown.addEventListener('mouseleave', function() {
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            });
        }
    });
});

// ==================== ARTICLE CARDS HOVER EFFECT ====================
document.addEventListener('DOMContentLoaded', () => {
    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        });
    });
});

// ==================== ROLE CARDS HOVER EFFECT ====================
document.addEventListener('DOMContentLoaded', () => {
    const roleCards = document.querySelectorAll('.role-card');

    roleCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(214, 19, 85, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// ==================== LANGUAGE DROPDOWN ====================
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');

    if (langBtn) {
        langBtn.style.cursor = 'pointer';
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // You can add actual language selection logic here
            console.log('Language button clicked');
        });
    }
});

// ==================== SEARCH FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
    const searchButtons = document.querySelectorAll('.search-btn');

    searchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const input = this.parentElement.querySelector('input');
            const searchTerm = input ? input.value.trim() : '';

            if (searchTerm) {
                console.log('Searching for:', searchTerm);
                // Add your search logic here
                window.location.href = `#jobs?search=${encodeURIComponent(searchTerm)}`;
            } else {
                input.focus();
            }
        });
    });

    // Allow Enter key to trigger search
    const searchInputs = document.querySelectorAll('.search-container input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchBtn = this.parentElement.querySelector('.search-btn');
                if (searchBtn) {
                    searchBtn.click();
                }
            }
        });
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.mission-section, .love-what-we-do, .feature-row, .roles-section, .articles-section');

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        revealObserver.observe(el);
    });
});

// ==================== READ MORE BUTTONS ====================
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-btn');

    readMoreButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';

        button.addEventListener('click', function() {
            const roleTitle = this.parentElement.querySelector('h3').textContent;
            console.log(`Opening job details for: ${roleTitle}`);
            // Add your navigation logic here
        });

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// ==================== CTA BUTTONS HOVER ====================
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.btn-find-out, .btn-primary, .view-all-btn');

    ctaButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 20px rgba(214, 19, 85, 0.4)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 10px rgba(214, 19, 85, 0.4)';
        });
    });
});

// ==================== BACK TO TOP BUTTON ====================
document.addEventListener('DOMContentLoaded', () => {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'back-to-top-btn';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #D61355;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(214, 19, 85, 0.4);
    `;

    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== PREVENT CONSOLE ERRORS ====================
window.addEventListener('error', function(e) {
    if (e.message.includes('Failed to load resource')) {
        console.warn('Some resources failed to load, but the page is still functional.');
    }
});

console.log('✓ Career page JavaScript loaded successfully!');
