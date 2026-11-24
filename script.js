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

document.querySelectorAll('.field select').forEach((select) => {
    select.addEventListener('change', () => {
           select.classList.toggle('is-placeholder', select.value === '' && select.classList.contains('is-placeholder'));
           if (select.value !== '') select.classList.remove('is-placeholder');
             else if (select.options[0].value === '') select.classList.add('is-placeholder');
    });
});

document.getElementById('searchForm').addEventListener('submit', (e) => {
       e.preventDefault();
       const params = new URLSearchParams();
       const type = document.getElementById('sType').value;
       const price = document.getElementById('sPrice').value;
       const loc = document.getElementById('sLoc').value;
          if (type) params.set('type', type);
          if (price) params.set('price', price);
          if (loc) params.set('loc', loc);
             const qs = params.toString();
    window.location.href = 'catalog.html' + (qs ? '?' + qs : '');
});

const list = document.getElementById('agents');
function shift(dir) {
    const cards = list.children;
        if (dir > 0) list.appendChild(cards[0]);
        else list.insertBefore(cards[cards.length - 1], cards[0]);
        list.classList.remove('is-shifting');
        void list.offsetWidth; 
        list.classList.add('is-shifting');
}
document.getElementById('next').addEventListener('click', () => shift(1));
document.getElementById('prev').addEventListener('click', () => shift(-1));