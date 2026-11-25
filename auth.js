// Окно входа / регистрации. Подключается на всех страницах.
// Раскрывается кругом от кнопки «Log in». Это демо: данные никуда не отправляются.
// JS строит только семантическую разметку и переключает классы — весь вид в style.css.

(function () {
    const { t } = window.I18N;

    const MARKUP = `
    <div class="auth__photo">
      <span class="auth__mark">Luxe</span>
      <p class="auth__tag" data-i18n-html="auth.tag">Your dream home<br>is closer than you think.</p>
      <div class="auth__brand">
        <strong>LUXESTATE</strong>
        <span data-i18n="auth.brand.sub">Premium real estate platform</span>
      </div>
    </div>

    <button type="button" class="auth__close" data-auth-close aria-label="Close"><span class="icon icon--close"></span></button>

    <section class="auth__card" role="dialog" aria-modal="true" aria-labelledby="authTitle">
      <div class="auth__inner">

        <div class="auth__top rise rise-1">
          <span class="auth__logo">LUXESTATE</span>
          <p class="auth__switch">
            <span class="auth__q" data-only="login" data-i18n="auth.top.q.login">Don’t have an account?</span>
            <span class="auth__q" data-only="signup" data-i18n="auth.top.q.signup">Already have an account?</span>
            <button type="button" class="auth__link" data-switch>
              <span data-only="login" data-i18n="auth.top.link.login">Sign up</span>
              <span data-only="signup" data-i18n="auth.top.link.signup">Sign in</span>
              <span class="icon icon--arrow"></span>
            </button>
          </p>
        </div>

        <header class="auth__head rise rise-2">
          <h2 class="auth__title" id="authTitle">
            <span data-only="login" data-i18n="auth.title.login">Welcome Back</span>
            <span data-only="signup" data-i18n="auth.title.signup">Create Account</span>
          </h2>
          <p class="auth__sub">
            <span data-only="login" data-i18n="auth.sub.login">Sign in to your account to continue</span>
            <span data-only="signup" data-i18n="auth.sub.signup">Join Luxestate and save your favorite homes</span>
          </p>
        </header>

        <form class="auth__form" id="authForm" novalidate>
          <div class="auth-field rise rise-3" data-only="signup" data-field="name">
            <label for="aName" data-i18n="auth.name">Full name</label>
            <div class="auth-input">
              <span class="icon icon--user"></span>
              <input id="aName" type="text" autocomplete="name" placeholder="Enter your name" data-i18n-placeholder="auth.name.ph">
            </div>
            <p class="auth-field__err" data-i18n="auth.err.name">Please enter your name</p>
          </div>

          <div class="auth-field rise rise-3" data-field="email">
            <label for="aEmail" data-i18n="auth.email">Email address</label>
            <div class="auth-input">
              <span class="icon icon--mail"></span>
              <input id="aEmail" type="email" autocomplete="email" placeholder="Enter your email" data-i18n-placeholder="auth.email.ph">
            </div>
            <p class="auth-field__err" data-i18n="auth.err.email">Enter a valid email address</p>
          </div>

          <div class="auth-field rise rise-4" data-field="pass">
            <label for="aPass" data-i18n="auth.pass">Password</label>
            <div class="auth-input">
              <span class="icon icon--lock"></span>
              <input id="aPass" type="password" autocomplete="current-password" placeholder="Enter your password" data-i18n-placeholder="auth.pass.ph">
              <button type="button" class="auth-eye" id="aEye" aria-label="Show password"><span class="icon icon--eye"></span></button>
            </div>
            <p class="auth-field__err" data-i18n="auth.err.pass">Password must be at least 6 characters</p>
          </div>

          <div class="auth__row rise rise-5" data-only="login">
            <label class="auth-check">
              <input type="checkbox" id="aRemember">
              <span data-i18n="auth.remember">Remember me</span>
            </label>
            <button type="button" class="auth__link auth__link--plain" id="aForgot" data-i18n="auth.forgot">Forgot password?</button>
          </div>

          <button type="submit" class="auth__submit rise rise-6" id="aSubmit">
            <span data-only="login" data-i18n="auth.btn.login">Sign In</span>
            <span data-only="signup" data-i18n="auth.btn.signup">Create account</span>
            <span class="icon icon--arrow"></span>
            <i class="spinner"></i>
          </button>
        </form>

        <div class="auth__or rise rise-7"><span data-i18n="auth.or">or continue with</span></div>

        <div class="auth__social rise rise-7">
          <button type="button" class="auth-social" data-social><span class="auth-social__logo auth-social__logo--google"></span>Google</button>
          <button type="button" class="auth-social" data-social><span class="auth-social__logo auth-social__logo--apple"></span>Apple</button>
        </div>

        <p class="auth__bottom rise rise-8">
          <span data-only="login" data-i18n="auth.bottom.q.login">You don’t have an account?</span>
          <span data-only="signup" data-i18n="auth.bottom.q.signup">Already have an account?</span>
          <button type="button" class="auth__link" data-switch>
            <span data-only="login" data-i18n="auth.top.link.login">Sign up</span>
            <span data-only="signup" data-i18n="auth.top.link.signup">Sign in</span>
            <span class="icon icon--arrow"></span>
          </button>
        </p>

      </div>
    </section>`;

    // ---------- построить окно ----------
    const root = document.createElement('div');
    root.className = 'auth';
    root.id = 'auth';
    root.dataset.mode = 'login';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = MARKUP;
    document.body.appendChild(root);

    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);

    const card = root.querySelector('.auth__card');
    const form = document.getElementById('authForm');
    const fEmail = document.getElementById('aEmail');
    const fPass = document.getElementById('aPass');
    const fName = document.getElementById('aName');
    const eye = document.getElementById('aEye');
    const submit = document.getElementById('aSubmit');
    const remember = document.getElementById('aRemember');
    const navBtn = document.querySelector('.nav__right .btn');

    // ---------- пользователь ----------
    const USER_KEY = 'lx-user';
    function getUser() {
        try {
            return JSON.parse(localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY) || 'null');
        } catch (e) { return null; }
    }
    function saveUser(user, persist) {
        try {
            (persist ? localStorage : sessionStorage).setItem(USER_KEY, JSON.stringify(user));
        } catch (e) { /* ignore */ }
    }
    function clearUser() {
        try { localStorage.removeItem(USER_KEY); sessionStorage.removeItem(USER_KEY); } catch (e) { /* ignore */ }
    }

    // ---------- кнопка в меню ----------
    function paintNavBtn() {
        if (!navBtn) return;
        navBtn.removeAttribute('data-i18n');          // текст теперь ведём отсюда
        navBtn.textContent = t(getUser() ? 'nav.logout' : 'nav.signup');
    }

    // ---------- уведомление ----------
    let toastTimer;
    function showToast(text) {
        toast.textContent = text;
        toast.classList.add('is-show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-show'), 2600);
    }

    // ---------- открыть / закрыть ----------
    function setMode(mode) {
        root.dataset.mode = mode;
        fPass.autocomplete = mode === 'login' ? 'current-password' : 'new-password';
        clearErrors();
    }

    function open(mode, originEl) {
        setMode(mode || 'login');
        if (originEl) {
            const r = originEl.getBoundingClientRect();
            root.style.setProperty('--ox', (r.left + r.width / 2) + 'px');
            root.style.setProperty('--oy', (r.top + r.height / 2) + 'px');
        }
        document.documentElement.classList.add('no-scroll');
        root.classList.add('auth--open');
        root.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
            (root.dataset.mode === 'signup' ? fName : fEmail).focus({ preventScroll: true });
        }, 900);
    }

    function close() {
        root.classList.remove('auth--open');
        root.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('no-scroll');
        setTimeout(() => { form.reset(); clearErrors(); setPassVisible(false); submit.classList.remove('is-loading'); submit.disabled = false; }, 900);
    }

    // ---------- ошибки ----------
    function clearErrors() {
        form.querySelectorAll('.auth-field').forEach((f) => f.classList.remove('has-error'));
    }
    function setError(name, bad) {
        const field = form.querySelector(`[data-field="${name}"]`);
        if (!field) return;
        field.classList.remove('has-error');
        if (bad) {
            void field.offsetWidth;                      // перезапустить «тряску»
            field.classList.add('has-error');
        }
    }
    form.addEventListener('input', (e) => {
        const field = e.target.closest('.auth-field');
        if (field) field.classList.remove('has-error');
    });

    // ---------- пароль: показать / скрыть ----------
    function setPassVisible(show) {
        fPass.type = show ? 'text' : 'password';
        eye.classList.toggle('is-shown', show);
        eye.setAttribute('aria-label', t(show ? 'auth.hide' : 'auth.show'));
    }
    eye.addEventListener('click', () => setPassVisible(fPass.type === 'password'));

    // ---------- вход ----------
    function finishLogin(name, persist) {
        saveUser({ name }, persist);
        submit.classList.remove('is-loading');
        submit.disabled = false;
        close();
        paintNavBtn();
        setTimeout(() => showToast(t('auth.ok', { name })), 500);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const signup = root.dataset.mode === 'signup';
        const badName = signup && fName.value.trim().length < 2;
        const badEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fEmail.value.trim());
        const badPass = fPass.value.length < 6;

        setError('name', badName);
        setError('email', badEmail);
        setError('pass', badPass);
        if (badName || badEmail || badPass) return;

        submit.classList.add('is-loading');
        submit.disabled = true;
        const raw = signup ? fName.value.trim() : fEmail.value.trim().split('@')[0];
        const name = raw.charAt(0).toUpperCase() + raw.slice(1);
        setTimeout(() => finishLogin(name, signup || remember.checked), 1200);
    });

    root.querySelectorAll('[data-social]').forEach((btn) => {
        btn.addEventListener('click', () => finishLogin(t('auth.guest'), true));
    });

    document.getElementById('aForgot').addEventListener('click', () => showToast(t('auth.forgot.msg')));

    // ---------- переключение «вход ↔ регистрация» ----------
    root.querySelectorAll('[data-switch]').forEach((btn) => {
        btn.addEventListener('click', () => {
            card.classList.add('is-switching');
            setTimeout(() => {
                setMode(root.dataset.mode === 'login' ? 'signup' : 'login');
                card.classList.remove('is-switching');
            }, 220);
        });
    });

    // ---------- события ----------
    root.querySelector('[data-auth-close]').addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && root.classList.contains('auth--open')) close();
    });

    if (navBtn) {
        navBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (getUser()) {
                clearUser();
                paintNavBtn();
                showToast(t('auth.out'));
            } else {
                open('login', navBtn);
            }
        });
    }

    // пункты «Sign up» в других местах можно открыть так: <a data-auth="signup">
    document.querySelectorAll('[data-auth]').forEach((el) => {
        el.addEventListener('click', (e) => { e.preventDefault(); open(el.dataset.auth, el); });
    });

    document.addEventListener('languagechange', () => {
        paintNavBtn();
        eye.setAttribute('aria-label', t(fPass.type === 'text' ? 'auth.hide' : 'auth.show'));
        root.querySelector('[data-auth-close]').setAttribute('aria-label', t('auth.close'));
    });

    paintNavBtn();
})();