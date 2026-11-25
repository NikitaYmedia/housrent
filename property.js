// Страница объекта: галерея, вкладки, избранное, похожие объекты, форма.
// JS только подставляет текст/классы — весь внешний вид описан в style.css.

const { t, fmtPrice, getLang } = window.I18N;
const LIST = window.PROPERTIES;
const AGENTS = window.AGENTS;

// ---------- какой объект показываем ----------
const params = new URLSearchParams(window.location.search);
const prop = LIST.find((p) => p.id === Number(params.get('id'))) || LIST[0];
const agent = AGENTS[prop.agent] || AGENTS[0];

const $ = (id) => document.getElementById(id);
const el = {
    gallery: $('gallery'), gImg: $('gImg'), gFav: $('gFav'), gShare: $('gShare'),
    gCount: $('gCount'), gPrev: $('gPrev'), gNext: $('gNext'), gDots: $('gDots'),
    pName: $('pName'), pTag: $('pTag'), pPrice: $('pPrice'), pBeds: $('pBeds'),
    pBaths: $('pBaths'), pArea: $('pArea'), pAddr: $('pAddr'), pDesc: $('pDesc'),
    bSchedule: $('bSchedule'), bFav: $('bFav'), bFavText: $('bFavText'), bMessage: $('bMessage'),
    tabs: $('tabs'), thumbs: $('thumbs'), facts: $('facts'), similar: $('similar'),
    aPhoto: $('aPhoto'), aName: $('aName'),
    modal: $('modal'), mClose: $('mClose'), mTitle: $('mTitle'), mSub: $('mSub'),
    mForm: $('mForm'), mDate: $('mDate'), mSubmit: $('mSubmit'), mDone: $('mDone'),
    toast: $('toast')
};
const checksList = document.querySelector('.checks');
const featGrid = document.querySelector('[data-panel="features"] .feat-grid');
const agentRole = document.querySelector('.agent-card .agent__role');
const callBtn = document.querySelector('.agent-card__buttons a');

// текст кнопки «в избранное» управляется отсюда, а не переводчиком
el.bFavText.removeAttribute('data-i18n');

// ---------- агент ----------
el.aPhoto.className = 'agent__photo agent__photo--' + agent.photo;
el.aName.textContent = agent.name;
callBtn.href = 'tel:' + agent.phone.replace(/\s/g, '');
agentRole.dataset.i18n = agent.female ? 'agent.role.f' : 'agent.role';

// ---------- галерея ----------
// 12 фото: фасад этого дома, 6 интерьеров/участков и 5 фасадов других домов
const others = LIST.filter((p) => p.id !== prop.id).slice(0, 5).map((p) => 'img-' + p.id);
const slides = ['img-' + prop.id, 'pic-1', 'pic-2', 'pic-3', 'pic-4', 'pic-5', 'pic-6', ...others];
let index = 0;

el.gImg.className = 'gallery__img ' + slides[0];

el.gDots.innerHTML = slides.map((_, i) => `<button type="button" class="dot" data-i="${i}" aria-label="${i + 1}"></button>`).join('');
const dots = [...el.gDots.children];
const thumbs = [...el.thumbs.querySelectorAll('.thumb')];

function paintGalleryState() {
    el.gCount.textContent = `${index + 1} / ${slides.length}`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    thumbs.forEach((b) => b.classList.toggle('is-active', Number(b.dataset.slide) === index));
}

function go(next) {
    const n = slides.length;
    next = (next + n) % n;
    if (next === index) return;
    index = next;
    const cls = slides[index];

    // новое фото плавно проявляется поверх старого
    const layer = document.createElement('div');
    layer.className = 'gallery__img gallery__img--in ' + cls;
    el.gImg.after(layer);
    let finished = false;
    const finish = () => {
        if (finished) return;
        finished = true;
        el.gImg.className = 'gallery__img ' + cls;
        layer.remove();
    };
    layer.addEventListener('animationend', finish);
    setTimeout(finish, 900);

    paintGalleryState();
}

el.gPrev.addEventListener('click', () => go(index - 1));
el.gNext.addEventListener('click', () => go(index + 1));
el.gDots.addEventListener('click', (e) => {
    const d = e.target.closest('.dot');
    if (d) go(Number(d.dataset.i));
});
el.thumbs.addEventListener('click', (e) => {
    const b = e.target.closest('.thumb');
    if (!b) return;
    go(Number(b.dataset.slide));
    const top = el.gallery.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.4) {
        window.scrollTo({ top: window.scrollY + top - 100, behavior: 'smooth' });
    }
});

// свайп на телефоне
let touchX = null;
el.gallery.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
el.gallery.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchX = null;
}, { passive: true });

// ---------- вкладки ----------
el.tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    el.tabs.querySelectorAll('.tab').forEach((b) => b.classList.toggle('is-active', b === tab));
    document.querySelectorAll('.tabpanel').forEach((p) => {
        p.classList.toggle('is-active', p.dataset.panel === tab.dataset.tab);
    });
});

// ---------- избранное и «поделиться» ----------
let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem('lx-favs') || '[]')); } catch (e) { /* ignore */ }

let toastTimer;
function showToast(text) {
    el.toast.textContent = text;
    el.toast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('is-show'), 2200);
}

function paintFav() {
    const on = favs.has(prop.id);
    el.gFav.classList.toggle('is-on', on);
    el.bFav.classList.toggle('is-on', on);
    el.bFavText.textContent = t(on ? 'prop.fav.saved' : 'prop.fav.add');
}

function toggleFav() {
    if (favs.has(prop.id)) favs.delete(prop.id); else favs.add(prop.id);
    try { localStorage.setItem('lx-favs', JSON.stringify([...favs])); } catch (e) { /* ignore */ }
    paintFav();
    showToast(t(favs.has(prop.id) ? 'prop.toast.added' : 'prop.toast.removed'));
}
el.gFav.addEventListener('click', toggleFav);
el.bFav.addEventListener('click', toggleFav);

el.gShare.addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({ title: t('n' + prop.id), url: window.location.href });
            return;
        }
        await navigator.clipboard.writeText(window.location.href);
    } catch (e) { /* пользователь закрыл окно «поделиться» или нет доступа к буферу */ }
    showToast(t('prop.share.copied'));
});

// ---------- модальное окно ----------
let modalMode = 'viewing';

function paintModal() {
    const args = { name: t('n' + prop.id), agent: agent.name };
    el.mTitle.textContent = t('modal.' + modalMode);
    el.mSub.textContent = t('modal.sub.' + modalMode, args);
    el.mSubmit.textContent = t('form.submit.' + modalMode);
}

function openModal(mode) {
    modalMode = mode;
    el.modal.classList.remove('modal--viewing', 'modal--message', 'modal--done');
    el.modal.classList.add('modal--' + mode, 'modal--open');
    el.modal.setAttribute('aria-hidden', 'false');
    el.mDate.min = new Date().toISOString().slice(0, 10);
    paintModal();
    setTimeout(() => el.mForm.querySelector('input')?.focus(), 350);
}

function closeModal() {
    el.modal.classList.remove('modal--open');
    el.modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => { el.modal.classList.remove('modal--done'); el.mForm.reset(); }, 400);
}

el.bSchedule.addEventListener('click', () => openModal('viewing'));
el.bMessage.addEventListener('click', () => openModal('message'));
el.mClose.addEventListener('click', closeModal);
el.mDone.addEventListener('click', closeModal);
el.modal.addEventListener('click', (e) => { if (e.target === el.modal) closeModal(); });
el.mForm.addEventListener('submit', (e) => {
    e.preventDefault();
    el.modal.classList.add('modal--done');
});

// клавиатура: Esc закрывает окно, стрелки листают фото
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); return; }
    if (el.modal.classList.contains('modal--open')) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
});

// ---------- содержимое, зависящее от объекта и языка ----------
const CHECKS = {
    house: ['ov.c1', 'ov.c2', 'ft.garden', 'ov.c4'],
    villa: ['ov.c1', 'ov.c2', 'ov.c3', 'ov.c4'],
    apartment: ['ov.c1', 'ov.c2', 'ft.balcony', 'ov.c4']
};
const FEATURES = {
    house: ['ft.garden', 'ft.garage', 'ft.smart', 'ft.security', 'ft.ac', 'ft.fire', 'ft.solar', 'ft.terrace'],
    villa: ['ft.pool', 'ft.garden', 'ft.garage', 'ft.smart', 'ft.security', 'ft.ac', 'ft.gym', 'ft.cinema', 'ft.wine', 'ft.terrace'],
    apartment: ['ft.balcony', 'ft.elevator', 'ft.concierge', 'ft.parking', 'ft.smart', 'ft.security', 'ft.ac', 'ft.gym']
};

function factsHTML() {
    const locale = getLang() === 'de' ? 'de-DE' : 'en-US';
    const third = prop.lot
        ? `<li><span>${t('fact.lot')}</span><b>${prop.lot.toLocaleString(locale)} m²</b></li>`
        : `<li><span>${t('fact.floor')}</span><b>${prop.floor}</b></li>`;
    return `
    <li><span>${t('fact.year')}</span><b>${prop.year}</b></li>
    <li><span>${t('fact.parking')}</span><b>${t(prop.parking === 1 ? 'fact.space' : 'fact.spaces', { n: prop.parking })}</b></li>
    ${third}
    <li><span>${t('fact.type')}</span><b>${t('type.' + prop.type)}</b></li>`;
}

function similarHTML() {
    const sim = LIST
        .filter((p) => p.id !== prop.id)
        .sort((a, b) =>
            (b.type === prop.type) - (a.type === prop.type) ||
            Math.abs(a.price - prop.price) - Math.abs(b.price - prop.price))
        .slice(0, 3);

    return sim.map((p) => `
    <a href="property.html?id=${p.id}" class="similar__item">
      <span class="similar__thumb img-${p.id}"></span>
      <span class="similar__text"><b>${t('n' + p.id)}</b><span>${fmtPrice(p.price)}</span></span>
      <span class="circle-btn circle-btn--sm"><span class="icon icon--arrow"></span></span>
    </a>`).join('');
}

function render() {
    const name = t('n' + prop.id);
    document.title = `${name} — LUXESTATE`;

    el.pName.textContent = name;
    el.pTag.textContent = t('prop.tag.' + prop.loc);
    el.pPrice.textContent = fmtPrice(prop.price);
    el.pBeds.textContent = t(prop.beds === 1 ? 'prop.bed' : 'prop.beds', { n: prop.beds });
    el.pBaths.textContent = t(prop.baths === 1 ? 'prop.bath' : 'prop.baths', { n: prop.baths });
    el.pArea.textContent = `${prop.area} m²`;
    el.pAddr.textContent = prop.address;
    el.pDesc.textContent = t('desc.' + prop.type);

    checksList.innerHTML = CHECKS[prop.type].map((k) => `<li>${t(k)}</li>`).join('');
    featGrid.innerHTML = FEATURES[prop.type].map((k) => `<li>${t(k)}</li>`).join('');
    el.facts.innerHTML = factsHTML();
    el.similar.innerHTML = similarHTML();

    paintFav();
    paintModal();
}

paintGalleryState();
render();
document.addEventListener('languagechange', render);