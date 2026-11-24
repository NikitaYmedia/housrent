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

let ticking = false;
function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll', y);
    root.style.setProperty('--progress', max > 0 ? (y / max).toFixed(4) : 0);
    nav.classList.toggle('nav--scrolled', y > 40);
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
    }
}, {passive:true});
onScroll();

document.getElementById('burger').addEventListener('click', () => nav.classList.toggle('nav--open'));
document.querySelectorAll('nav__link').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
});