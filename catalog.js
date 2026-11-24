const PROPERTIES = [
    { id: 1, type: 'house', loc: 'suburbs', price: 340000, beds: 4, baths: 3, area: 240 },
    { id: 2, type: 'villa', loc: 'seaside', price: 890000, beds: 5, baths: 4, area: 410 },
    { id: 3, type: 'apartment', loc: 'downtown', price: 275000, beds: 2, baths: 1, area: 95 },
    { id: 4, type: 'house', loc: 'suburbs', price: 420000, beds: 4, baths: 3, area: 260 },
    { id: 5, type: 'villa', loc: 'seaside', price: 1250000, beds: 6, baths: 5, area: 520 },
    { id: 6, type: 'apartment', loc: 'downtown', price: 365000, beds: 3, baths: 2, area: 130 },
    { id: 7, type: 'house', loc: 'downtown', price: 510000, beds: 3, baths: 2, area: 190 },
    { id: 8, type: 'apartment', loc: 'seaside', price: 450000, beds: 2, baths: 2, area: 110 },
    { id: 9, type: 'villa', loc: 'suburbs', price: 760000, beds: 5, baths: 4, area: 380 },
    { id: 10, type: 'house', loc: 'seaside', price: 640000, beds: 4, baths: 3, area: 300 },
    { id: 11, type: 'apartment', loc: 'suburbs', price: 198000, beds: 1, baths: 1, area: 64 },
    { id: 12, type: 'villa', loc: 'downtown', price: 980000, beds: 5, baths: 5, area: 450 }
];

const PRICE_MAX = 1500000;
const { t, fmtPrice } = window.I18N;

const els = {
    q: document.getElementById('q'),
    types: document.getElementById('types'),
    loc: document.getElementById('loc'),
    price: document.getElementById('price'),
    priceLabel: document.getElementById('priceLabel'),
    beds: document.getElementById('beds'),
    sort: document.getElementById('sort'),
    count: document.getElementById('count'),
    listing: document.getElementById('listing'),
    reset: document.getElementById('reset'),
    filters: document.getElementById('filters'),
    filtersToggle: document.getElementById('filtersToggle')
};

const state = { q: '', types: new Set(), loc: '', maxPrice: PRICE_MAX, beds: 0, sort: 'featured' };

let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem('lx-favs') || '[]')); } catch (e) { /* ignore */ }
function saveFavs() {
    try { localStorage.setItem('lx-favs', JSON.stringify([...favs])); } catch (e) { /* ignore */ }
}

function getFiltered() {
    const q = state.q.trim().toLowerCase();
    let list = PROPERTIES.filter((p) => {
        if (state.types.size && !state.types.has(p.type)) return false;
        if (state.loc && p.loc !== state.loc) return false;
        if (state.maxPrice < PRICE_MAX && p.price > state.maxPrice) return false;
        if (state.beds && p.beds < state.beds) return false;
        if (q) {
            const hay = [t('n' + p.id), t('loc.' + p.loc), t('type.' + p.type)].join(' ').toLowerCase();
            if (!hay.includes(q)) return false;
        }
        return true;
    });

    if (state.sort === 'priceAsc') list = [...list].sort((a, b) => a.price - b.price);
    if (state.sort === 'priceDesc') list = [...list].sort((a, b) => b.price - a.price);
    if (state.sort === 'area') list = [...list].sort((a, b) => b.area - a.area);
    return list;
}

function cardHTML(p) {
    const on = favs.has(p.id) ? ' is-on' : '';
    return `
    <article class="pcard">
      <div class="pcard__media">
        <div class="pcard__img img-${p.id}"></div>
        <span class="pcard__badge">${t('type.' + p.type)}</span>
        <button type="button" class="fav${on}" data-id="${p.id}" aria-label="${t('fav.aria')}">
          <span class="icon icon--heart"></span>
        </button>
      </div>
      <div class="pcard__body">
        <h3 class="pcard__name">${t('n' + p.id)}</h3>
        <p class="pcard__loc"><span class="icon icon--pin"></span>${t('loc.' + p.loc)}</p>
        <div class="pcard__price">${fmtPrice(p.price)}</div>
        <div class="pcard__meta">
          <span><i class="icon icon--bed"></i>${p.beds} ${t('unit.bed')}</span>
          <span><i class="icon icon--bath"></i>${p.baths} ${t('unit.bath')}</span>
          <span><i class="icon icon--area"></i>${p.area} m²</span>
        </div>
      </div>
    </article>`;
}

function emptyHTML() {
    return `
    <div class="empty">
      <span class="empty__icon"><span class="icon icon--search"></span></span>
      <h3>${t('empty.title')}</h3>
      <p>${t('empty.text')}</p>
    </div>`;
}

function renderPriceLabel() {
    const v = Number(els.price.value);
    const pct = ((v - Number(els.price.min)) / (Number(els.price.max) - Number(els.price.min))) * 100;
    els.price.style.setProperty('--fill', pct + '%');
    els.priceLabel.textContent = v >= PRICE_MAX ? t('price.any') : t('price.upto', { price: fmtPrice(v) });
}

function render() {
    const list = getFiltered();
    els.listing.innerHTML = list.length ? list.map(cardHTML).join('') : emptyHTML();
    els.count.innerHTML = `<strong>${list.length}</strong> ${t(list.length === 1 ? 'results.one' : 'results.n')}`;
    renderPriceLabel();
}

els.q.addEventListener('input', () => { state.q = els.q.value; render(); });

els.types.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    const type = btn.dataset.type;
    if (state.types.has(type)) state.types.delete(type); else state.types.add(type);
    btn.classList.toggle('is-active', state.types.has(type));
    render();
});

els.loc.addEventListener('change', () => { state.loc = els.loc.value; render(); });

els.price.addEventListener('input', () => { state.maxPrice = Number(els.price.value); render(); });

els.beds.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    state.beds = Number(btn.dataset.beds);
    els.beds.querySelectorAll('.pill').forEach((b) => b.classList.toggle('is-active', b === btn));
    render();
});

els.sort.addEventListener('change', () => { state.sort = els.sort.value; render(); });

els.reset.addEventListener('click', () => {
    state.q = ''; state.types.clear(); state.loc = ''; state.maxPrice = PRICE_MAX; state.beds = 0; state.sort = 'featured';
    els.q.value = '';
    els.loc.value = '';
    els.price.value = PRICE_MAX;
    els.sort.value = 'featured';
    els.types.querySelectorAll('.pill').forEach((b) => b.classList.remove('is-active'));
    els.beds.querySelectorAll('.pill').forEach((b) => b.classList.toggle('is-active', b.dataset.beds === '0'));
    render();
});

els.listing.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    btn.classList.toggle('is-on', favs.has(id));
    saveFavs();
});
els.filtersToggle.addEventListener('click', () => {
    els.filters.classList.toggle('filters--open');
});
document.addEventListener('languagechange', render);

(function readParams() {
    const params = new URLSearchParams(window.location.search);

    const type = params.get('type');
    if (type && ['house', 'apartment', 'villa'].includes(type)) {
        state.types.add(type);
        const pill = els.types.querySelector(`[data-type="${type}"]`);
        if (pill) pill.classList.add('is-active');
    }

    const loc = params.get('loc');
    if (loc && ['downtown', 'suburbs', 'seaside'].includes(loc)) {
        state.loc = loc;
        els.loc.value = loc;
    }

    const price = Number(params.get('price'));
    if (price >= 100000 && price < PRICE_MAX) {
        state.maxPrice = price;
        els.price.value = price;
    }
})();

render();