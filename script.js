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

document.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now() + 1000;
       el.textContent = '0' + suffix;
         function tick(now) {
           const t = Math.min(Math.max((now - start) / duration, 0), 1);
           const eased = 1 - Math.pow(1 - t, 4);
             el.textContent = Math.round(end * eased) + suffix;
             if (t < 1) requestAnimationFrame(tick);
            }
    requestAnimationFrame(tick);
});