// Contact Page JavaScript

// ==================== FORM SUBMISSION ====================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            console.log('Form submitted:', formData);

            // Show success message
            alert('Thank you for contacting us! We will get back to you soon.');

            // Reset form
            contactForm.reset();

            // In production, you would send this to a server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
        });
    }
});

// ==================== FAQ TOGGLE ====================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// ==================== FORM VALIDATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ff4444';
            } else if (this.type === 'email' && this.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(this.value)) {
                    this.style.borderColor = '#ff4444';
                } else {
                    this.style.borderColor = '#4caf50';
                }
            } else if (this.value) {
                this.style.borderColor = '#4caf50';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-pink)';
        });
    });
});

console.log('✓ Contact page JavaScript loaded!');
