const root = document.documentElement;
const nav = document.getElementById('nav');

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
} else {
    items.forEach((el) => el.classList.add('is-visible'));
}