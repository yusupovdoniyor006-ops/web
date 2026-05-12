// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active');
        } else {
            // Optional: remove class to animate again when scrolling up
            // el.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call
revealOnScroll();

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Subtle parallax for bento items
document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.bento-item');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    items.forEach(item => {
        const moveX = (x - 0.5) * 10;
        const moveY = (y - 0.5) * 10;
        // Only apply if item is in view (optional for performance)
        item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
