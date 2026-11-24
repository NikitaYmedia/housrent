const spyLinks = [...document.querySelectorAll('.nav__link[data-spy]')];
if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                spyLinks.forEach((a) => a.classList.toggle('nav__link--active', a.dataset.spy === entry.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'why', 'contact'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) spy.observe(el);
    });
}