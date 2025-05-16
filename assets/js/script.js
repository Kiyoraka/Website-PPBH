document.addEventListener('DOMContentLoaded', function() {
    // Animation for program cards on scroll
    const programCards = document.querySelectorAll('.program-card');
    
    // Check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
        );
    }
    
    // Add animation class when element is in viewport with a slight delay for sequential effect
    function checkVisibility() {
        programCards.forEach(function(card, index) {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 300); // Slower staggered animation effect
            }
        });
    }
    
    // Initial check
    setTimeout(() => {
        checkVisibility();
    }, 300); // Add a slight delay before initial check
    
    // Check on scroll with throttling for smoother performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(checkVisibility, 100);
    });

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

    // Button hover effect
    const buttons = document.querySelectorAll('.btn-apply');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.4s ease';
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
        }, 5000);
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
            animation: pulse 1.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});