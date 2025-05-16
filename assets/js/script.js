// assets/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation for program cards on scroll
    const programCards = document.querySelectorAll('.program-card');
    
    // Check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Add animation class when element is in viewport with a slight delay for sequential effect
    function checkVisibility() {
        programCards.forEach(function(card, index) {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 150); // Staggered animation effect
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight button hover effect
    const buttons = document.querySelectorAll('.btn-apply, .btn-more');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // WhatsApp button pulse animation
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.classList.add('pulse');
            setTimeout(() => {
                whatsappButton.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Add pulse animation CSS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }
        
        .pulse {
            animation: pulse 1s;
        }
    `;
    document.head.appendChild(style);
});