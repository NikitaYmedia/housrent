// Перевод сайта: English (основной) + Deutsch.
// В HTML: data-i18n="ключ" (текст), data-i18n-html="ключ" (текст с <br>),
// data-i18n-placeholder="ключ", data-price="число" (цена в формате языка).
// Выбранный язык хранится в localStorage и работает на всех страницах.

(function () {
  const dict = {
    en: {
      'title.home': 'LUXESTATE — Build Your Future',
      'title.catalog': 'Property Catalog — LUXESTATE',

      'lang.short': 'Eng',

      'nav.home': 'Home',
      'nav.about': 'About us',
      'nav.list': 'Property List',
      'nav.contact': 'Contact us',
      'nav.signup': 'Log in',
      'nav.logout': 'Log out',

      // login / sign-up overlay
      'auth.tag': 'Your dream home<br>is closer than you think.',
      'auth.brand.sub': 'Premium real estate platform',
      'auth.top.q.login': 'Don’t have an account?',
      'auth.top.q.signup': 'Already have an account?',
      'auth.top.link.login': 'Sign up',
      'auth.top.link.signup': 'Sign in',
      'auth.title.login': 'Welcome Back',
      'auth.title.signup': 'Create Account',
      'auth.sub.login': 'Sign in to your account to continue',
      'auth.sub.signup': 'Join Luxestate and save your favorite homes',
      'auth.name': 'Full name',
      'auth.name.ph': 'Enter your name',
      'auth.email': 'Email address',
      'auth.email.ph': 'Enter your email',
      'auth.pass': 'Password',
      'auth.pass.ph': 'Enter your password',
      'auth.remember': 'Remember me',
      'auth.forgot': 'Forgot password?',
      'auth.btn.login': 'Sign In',
      'auth.btn.signup': 'Create account',
      'auth.or': 'or continue with',
      'auth.bottom.q.login': 'You don’t have an account?',
      'auth.bottom.q.signup': 'Already have an account?',
      'auth.err.name': 'Please enter your name',
      'auth.err.email': 'Enter a valid email address',
      'auth.err.pass': 'Password must be at least 6 characters',
      'auth.ok': 'Welcome, {name}!',
      'auth.out': 'You have been logged out',
      'auth.guest': 'Guest',
      'auth.close': 'Close',
      'auth.show': 'Show password',
      'auth.hide': 'Hide password',
      'auth.forgot.msg': 'Password reset is not available in this demo',

      'hero.mark': 'Build',
      'hero.title1': 'Build Your',
      'hero.title2': 'Future',
      'hero.text': 'Find your dream home with our premium properties, designed for modern living and a better tomorrow.',
      'hero.btn': 'Explore Properties',
      'hero.play': 'One Property<br>at a Time',
      'stats.trusted': 'Trusted',
      'stats.properties': 'Properties',
      'stats.agents': 'Agents',
      'stats.years': 'Years Experience',

      'search.title': 'Find the best place',
      'search.looking': 'Looking for',
      'search.price': 'Price',
      'search.location': 'Location',
      'search.placeholder': 'Select',
      'search.btn': 'Search Properties',

      'type.house': 'House',
      'type.apartment': 'Apartment',
      'type.villa': 'Villa',
      'loc.downtown': 'Downtown',
      'loc.suburbs': 'Suburbs',
      'loc.seaside': 'Seaside',
      'price.300': 'Up to $300,000',
      'price.500': 'Up to $500,000',
      'price.800': 'Up to $800,000',

      'eyebrow.featured': 'Featured',
      'props.title': 'Explore Our<br>Premier Houses',
      'props.text': 'Explore a curated selection of properties that match your lifestyle and goals.',
      'props.btn': 'View all properties',
      'card.sub': 'Luxury Modern Living',
      'card.meta': '{beds} bed · {baths} bath · {area} m²',

      'why.eyebrow': 'Why Luxestate',
      'why.title': 'A calmer way to<br>find your next home',
      'why.f1.title': 'Verified listings',
      'why.f1.text': 'Every property is checked by our team, so what you see is exactly what you get.',
      'why.f2.title': 'Expert guidance',
      'why.f2.text': 'Experienced agents walk with you from the first viewing to the final signature.',
      'why.f3.title': 'Smooth handover',
      'why.f3.text': 'Clear paperwork, fair terms and a fast move-in — no surprises along the way.',

      'agents.eyebrow': 'Our team',
      'agents.title': 'Expert agent',
      'agent.role': 'Real estate agent',
      'agent.call': 'Call now',

      'cta.eyebrow': 'READY TO GET STARTED',
      'cta.title': 'Ready to Make Your Dream<br>Property a Reality?',
      'cta.text': 'Explore our curated selection of properties that align with your vision.',
      'cta.btn': 'Get Started',

      'footer.tagline': 'Your dream. Our priority.',
      'footer.quick': 'Quick Links',
      'footer.about': 'About Us',
      'footer.team': 'Our Team',
      'footer.company': 'Company',
      'footer.how': 'How it works',
      'footer.terms': 'Terms & agreement',
      'footer.privacy': 'Privacy policy',
      'footer.cookie': 'Cookie policy',
      'footer.support': 'Support',
      'footer.faq': 'FAQ',
      'footer.center': 'Support center',
      'footer.chat': 'Chat with us',
      'footer.email': 'Enter your email',
      'footer.rights': '© 2025 Luxestate. All rights reserved.',
      'footer.l.privacy': 'Privacy',
      'footer.l.terms': 'Terms',
      'footer.l.cookies': 'Cookies',

      // catalog
      'cat.crumb': 'Catalog',
      'cat.mark': 'Catalog',
      'cat.eyebrow': 'Catalog',
      'cat.title': 'Find a home<br>that fits you',
      'cat.text': 'Browse our listings and narrow them down with filters.',
      'filt.title': 'Filters',
      'filt.toggle': 'Filters',
      'filt.search': 'Search',
      'filt.search.ph': 'Name or location',
      'filt.type': 'Property type',
      'filt.loc': 'Location',
      'filt.price': 'Max price',
      'filt.beds': 'Bedrooms',
      'filt.reset': 'Reset filters',
      'loc.any': 'All locations',
      'beds.any': 'Any',
      'price.any': 'Any price',
      'price.upto': 'Up to {price}',
      'sort.label': 'Sort by',
      'sort.featured': 'Featured',
      'sort.priceAsc': 'Price: low to high',
      'sort.priceDesc': 'Price: high to low',
      'sort.area': 'Largest area',
      'results.n': 'properties',
      'results.one': 'property',
      'empty.title': 'No properties found',
      'empty.text': 'Try changing or resetting your filters.',
      'unit.bed': 'bed',
      'unit.bath': 'bath',
      'fav.aria': 'Save to favorites',

      'n1': 'Luxury Modern Living',
      'n2': 'Oceanfront Villa',
      'n3': 'City Loft',
      'n4': 'Family Retreat',
      'n5': 'Skyline Estate',
      'n6': 'Garden Residence',
      'n7': 'Urban Townhouse',
      'n8': 'Seaside Apartment',
      'n9': 'Hillside Villa',
      'n10': 'Coastal Home',
      'n11': 'Cozy Studio',
      'n12': 'Penthouse Villa',

      // property page
      'title.property': 'Property Details — LUXESTATE',
      'prop.back': 'Back to list',
      'prop.sale': 'For Sale',
      'prop.schedule': 'Schedule a Viewing',
      'prop.fav.add': 'Add to Favorites',
      'prop.fav.saved': 'Saved to Favorites',
      'prop.bed': '{n} Bed',
      'prop.beds': '{n} Beds',
      'prop.bath': '{n} Bath',
      'prop.baths': '{n} Baths',
      'prop.tag.downtown': 'in the Heart of the City',
      'prop.tag.suburbs': 'in a Peaceful Neighborhood',
      'prop.tag.seaside': 'by the Ocean',
      'prop.share.copied': 'Link copied to clipboard',
      'prop.toast.added': 'Added to favorites',
      'prop.toast.removed': 'Removed from favorites',
      'desc.house': 'Experience the perfect blend of modern design and comfort in this stunning family home. Featuring spacious living areas, high-end finishes and a private garden, this property is a true masterpiece.',
      'desc.villa': 'Experience the perfect blend of modern design and comfort in this stunning luxury villa. Featuring spacious living areas, high-end finishes and breathtaking views, this property is a true masterpiece.',
      'desc.apartment': 'Experience the perfect blend of modern design and comfort in this stunning apartment. Featuring bright living areas, high-end finishes and a sunny balcony, this property is a true gem.',
      'tab.overview': 'Overview',
      'tab.features': 'Features',
      'tab.location': 'Location',
      'tab.plan': 'Floor Plan',
      'tab.reviews': 'Reviews',
      'ov.title': 'Property Overview',
      'ov.text': 'This exceptional home offers unparalleled luxury and comfort. With its modern architecture, spacious interiors, and premium amenities, it’s the perfect place for your dream lifestyle.',
      'ov.c1': 'Modern open floor plan',
      'ov.c2': 'Premium finishes',
      'ov.c3': 'Private pool and garden',
      'ov.c4': 'Smart home features',
      'fact.year': 'Year built',
      'fact.parking': 'Parking',
      'fact.space': '{n} space',
      'fact.spaces': '{n} spaces',
      'fact.lot': 'Lot size',
      'fact.floor': 'Floor',
      'fact.type': 'Type',
      'ft.title': 'Features & Amenities',
      'ft.pool': 'Swimming pool',
      'ft.garden': 'Landscaped garden',
      'ft.garage': '2-car garage',
      'ft.smart': 'Smart home system',
      'ft.security': '24/7 security',
      'ft.ac': 'Air conditioning',
      'ft.fire': 'Fireplace',
      'ft.gym': 'Home gym',
      'ft.solar': 'Solar panels',
      'ft.terrace': 'Panoramic terrace',
      'ft.balcony': 'Sunny balcony',
      'ft.elevator': 'Elevator',
      'ft.concierge': 'Concierge service',
      'ft.parking': 'Underground parking',
      'ft.cinema': 'Home cinema',
      'ft.wine': 'Wine cellar',
      'loc.title': 'Neighbourhood',
      'near.school': 'Primary school',
      'near.shop': 'Supermarket',
      'near.metro': 'Metro station',
      'near.park': 'City park',
      'near.min': '{n} min walk',
      'plan.title': 'Floor Plan',
      'plan.note': 'Schematic illustration, not to scale.',
      'room.living': 'Living room',
      'room.dining': 'Dining',
      'room.kitchen': 'Kitchen',
      'room.terrace': 'Terrace',
      'room.master': 'Master bedroom',
      'room.bed': 'Bedroom',
      'room.bath': 'Bath',
      'rev.title': 'Reviews',
      'rev.based': 'Based on 24 reviews',
      'rev.t1': 'Beautiful home, exactly as described. The viewing was smooth and the agent was very helpful.',
      'rev.t2': 'The pool and the garden are even better in person. A calm neighbourhood with everything nearby.',
      'rev.t3': 'Clear paperwork and a fast handover. We moved in within a month, without any surprises.',
      'agent.contact': 'Contact Agent',
      'agent.message': 'Message',
      'agent.role.f': 'Real estate agent',
      'sim.title': 'Similar Properties',
      'form.name': 'Full name',
      'form.email': 'Email',
      'form.date': 'Date',
      'form.time': 'Time',
      'form.msg': 'Message',
      'form.submit.viewing': 'Request viewing',
      'form.submit.message': 'Send message',
      'form.done.title': 'Thank you!',
      'form.done.text': 'We received your request and will contact you shortly.',
      'form.close': 'Close',
      'modal.viewing': 'Schedule a viewing',
      'modal.message': 'Send a message',
      'modal.sub.viewing': 'Viewing of “{name}” with {agent}',
      'modal.sub.message': 'Write to {agent} about “{name}”'
    },

    de: {
      'title.home': 'LUXESTATE — Gestalten Sie Ihre Zukunft',
      'title.catalog': 'Immobilienkatalog — LUXESTATE',

      'lang.short': 'Deu',

      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.list': 'Immobilien',
      'nav.contact': 'Kontakt',
      'nav.signup': 'Anmelden',
      'nav.logout': 'Abmelden',

      // login / sign-up overlay
      'auth.tag': 'Ihr Traumhaus ist näher,<br>als Sie denken.',
      'auth.brand.sub': 'Premium-Immobilienplattform',
      'auth.top.q.login': 'Noch kein Konto?',
      'auth.top.q.signup': 'Schon ein Konto?',
      'auth.top.link.login': 'Registrieren',
      'auth.top.link.signup': 'Anmelden',
      'auth.title.login': 'Willkommen zurück',
      'auth.title.signup': 'Konto erstellen',
      'auth.sub.login': 'Melden Sie sich an, um fortzufahren',
      'auth.sub.signup': 'Werden Sie Teil von Luxestate und speichern Sie Ihre Lieblingshäuser',
      'auth.name': 'Vollständiger Name',
      'auth.name.ph': 'Namen eingeben',
      'auth.email': 'E-Mail-Adresse',
      'auth.email.ph': 'E-Mail eingeben',
      'auth.pass': 'Passwort',
      'auth.pass.ph': 'Passwort eingeben',
      'auth.remember': 'Angemeldet bleiben',
      'auth.forgot': 'Passwort vergessen?',
      'auth.btn.login': 'Anmelden',
      'auth.btn.signup': 'Konto erstellen',
      'auth.or': 'oder weiter mit',
      'auth.bottom.q.login': 'Sie haben noch kein Konto?',
      'auth.bottom.q.signup': 'Sie haben bereits ein Konto?',
      'auth.err.name': 'Bitte geben Sie Ihren Namen ein',
      'auth.err.email': 'Geben Sie eine gültige E-Mail-Adresse ein',
      'auth.err.pass': 'Das Passwort muss mindestens 6 Zeichen haben',
      'auth.ok': 'Willkommen, {name}!',
      'auth.out': 'Sie wurden abgemeldet',
      'auth.guest': 'Gast',
      'auth.close': 'Schließen',
      'auth.show': 'Passwort anzeigen',
      'auth.hide': 'Passwort verbergen',
      'auth.forgot.msg': 'Das Zurücksetzen des Passworts ist in dieser Demo nicht verfügbar',

      'hero.mark': 'Bauen',
      'hero.title1': 'Gestalten Sie Ihre',
      'hero.title2': 'Zukunft',
      'hero.text': 'Finden Sie Ihr Traumhaus in unseren Premium-Immobilien – für modernes Wohnen und eine bessere Zukunft.',
      'hero.btn': 'Immobilien entdecken',
      'hero.play': 'Eine Immobilie<br>nach der anderen',
      'stats.trusted': 'Vertrauen',
      'stats.properties': 'Immobilien',
      'stats.agents': 'Makler',
      'stats.years': 'Jahre Erfahrung',

      'search.title': 'Finden Sie den besten Ort',
      'search.looking': 'Ich suche',
      'search.price': 'Preis',
      'search.location': 'Lage',
      'search.placeholder': 'Auswählen',
      'search.btn': 'Immobilien suchen',

      'type.house': 'Haus',
      'type.apartment': 'Wohnung',
      'type.villa': 'Villa',
      'loc.downtown': 'Innenstadt',
      'loc.suburbs': 'Vororte',
      'loc.seaside': 'Küste',
      'price.300': 'Bis 300.000 $',
      'price.500': 'Bis 500.000 $',
      'price.800': 'Bis 800.000 $',

      'eyebrow.featured': 'Empfohlen',
      'props.title': 'Entdecken Sie unsere<br>Premium-Häuser',
      'props.text': 'Entdecken Sie eine ausgewählte Auswahl an Immobilien, die zu Ihrem Lebensstil und Ihren Zielen passen.',
      'props.btn': 'Alle Immobilien ansehen',
      'card.sub': 'Luxuriöses modernes Wohnen',
      'card.meta': '{beds} Zi. · {baths} Bad · {area} m²',

      'why.eyebrow': 'Warum Luxestate',
      'why.title': 'Der entspanntere Weg<br>zu Ihrem nächsten Zuhause',
      'why.f1.title': 'Geprüfte Angebote',
      'why.f1.text': 'Jede Immobilie wird von unserem Team geprüft – Sie bekommen genau das, was Sie sehen.',
      'why.f2.title': 'Fachkundige Beratung',
      'why.f2.text': 'Erfahrene Makler begleiten Sie von der ersten Besichtigung bis zur Unterschrift.',
      'why.f3.title': 'Reibungslose Übergabe',
      'why.f3.text': 'Klare Unterlagen, faire Konditionen und ein schneller Einzug – ohne Überraschungen.',

      'agents.eyebrow': 'Unser Team',
      'agents.title': 'Unsere Experten',
      'agent.role': 'Immobilienmakler',
      'agent.call': 'Jetzt anrufen',

      'cta.eyebrow': 'BEREIT FÜR DEN START',
      'cta.title': 'Bereit, Ihre Traumimmobilie<br>Wirklichkeit werden zu lassen?',
      'cta.text': 'Entdecken Sie unsere ausgewählten Immobilien, die zu Ihrer Vision passen.',
      'cta.btn': 'Jetzt starten',

      'footer.tagline': 'Ihr Traum. Unsere Priorität.',
      'footer.quick': 'Schnellzugriff',
      'footer.about': 'Über uns',
      'footer.team': 'Unser Team',
      'footer.company': 'Unternehmen',
      'footer.how': 'So funktioniert’s',
      'footer.terms': 'AGB',
      'footer.privacy': 'Datenschutz',
      'footer.cookie': 'Cookie-Richtlinie',
      'footer.support': 'Support',
      'footer.faq': 'FAQ',
      'footer.center': 'Hilfecenter',
      'footer.chat': 'Chatten Sie mit uns',
      'footer.email': 'E-Mail eingeben',
      'footer.rights': '© 2025 Luxestate. Alle Rechte vorbehalten.',
      'footer.l.privacy': 'Datenschutz',
      'footer.l.terms': 'AGB',
      'footer.l.cookies': 'Cookies',

      // catalog
      'cat.crumb': 'Katalog',
      'cat.mark': 'Katalog',
      'cat.eyebrow': 'Katalog',
      'cat.title': 'Finden Sie ein Zuhause,<br>das zu Ihnen passt',
      'cat.text': 'Stöbern Sie in unseren Angeboten und grenzen Sie diese mit Filtern ein.',
      'filt.title': 'Filter',
      'filt.toggle': 'Filter',
      'filt.search': 'Suche',
      'filt.search.ph': 'Name oder Lage',
      'filt.type': 'Immobilientyp',
      'filt.loc': 'Lage',
      'filt.price': 'Höchstpreis',
      'filt.beds': 'Schlafzimmer',
      'filt.reset': 'Filter zurücksetzen',
      'loc.any': 'Alle Lagen',
      'beds.any': 'Alle',
      'price.any': 'Beliebiger Preis',
      'price.upto': 'Bis {price}',
      'sort.label': 'Sortieren',
      'sort.featured': 'Empfohlen',
      'sort.priceAsc': 'Preis: aufsteigend',
      'sort.priceDesc': 'Preis: absteigend',
      'sort.area': 'Größte Fläche',
      'results.n': 'Immobilien',
      'results.one': 'Immobilie',
      'empty.title': 'Keine Immobilien gefunden',
      'empty.text': 'Ändern Sie Ihre Filter oder setzen Sie sie zurück.',
      'unit.bed': 'Zi.',
      'unit.bath': 'Bad',
      'fav.aria': 'Zu Favoriten hinzufügen',

      'n1': 'Luxuriöses modernes Wohnen',
      'n2': 'Villa am Meer',
      'n3': 'Stadt-Loft',
      'n4': 'Familienrefugium',
      'n5': 'Skyline-Anwesen',
      'n6': 'Gartenresidenz',
      'n7': 'Stadthaus',
      'n8': 'Apartment am Meer',
      'n9': 'Villa am Hang',
      'n10': 'Küstenhaus',
      'n11': 'Gemütliches Studio',
      'n12': 'Penthouse-Villa',

      // property page
      'title.property': 'Objektdetails — LUXESTATE',
      'prop.back': 'Zurück zur Liste',
      'prop.sale': 'Zu verkaufen',
      'prop.schedule': 'Besichtigung vereinbaren',
      'prop.fav.add': 'Zu Favoriten hinzufügen',
      'prop.fav.saved': 'In Favoriten gespeichert',
      'prop.bed': '{n} Schlafzimmer',
      'prop.beds': '{n} Schlafzimmer',
      'prop.bath': '{n} Badezimmer',
      'prop.baths': '{n} Badezimmer',
      'prop.tag.downtown': 'im Herzen der Stadt',
      'prop.tag.suburbs': 'in ruhiger Nachbarschaft',
      'prop.tag.seaside': 'direkt am Meer',
      'prop.share.copied': 'Link in die Zwischenablage kopiert',
      'prop.toast.added': 'Zu Favoriten hinzugefügt',
      'prop.toast.removed': 'Aus Favoriten entfernt',
      'desc.house': 'Erleben Sie die perfekte Verbindung aus modernem Design und Komfort in diesem beeindruckenden Familienhaus. Großzügige Wohnbereiche, hochwertige Ausstattung und ein privater Garten machen es zu einem echten Meisterwerk.',
      'desc.villa': 'Erleben Sie die perfekte Verbindung aus modernem Design und Komfort in dieser beeindruckenden Luxusvilla. Großzügige Wohnbereiche, hochwertige Ausstattung und atemberaubende Ausblicke machen sie zu einem echten Meisterwerk.',
      'desc.apartment': 'Erleben Sie die perfekte Verbindung aus modernem Design und Komfort in dieser beeindruckenden Wohnung. Helle Wohnbereiche, hochwertige Ausstattung und ein sonniger Balkon machen sie zu einem echten Schmuckstück.',
      'tab.overview': 'Übersicht',
      'tab.features': 'Ausstattung',
      'tab.location': 'Lage',
      'tab.plan': 'Grundriss',
      'tab.reviews': 'Bewertungen',
      'ov.title': 'Objektübersicht',
      'ov.text': 'Dieses außergewöhnliche Zuhause bietet unvergleichlichen Luxus und Komfort. Mit moderner Architektur, großzügigen Räumen und erstklassiger Ausstattung ist es der perfekte Ort für Ihren Wohntraum.',
      'ov.c1': 'Moderner offener Grundriss',
      'ov.c2': 'Hochwertige Ausstattung',
      'ov.c3': 'Privater Pool und Garten',
      'ov.c4': 'Smart-Home-Funktionen',
      'fact.year': 'Baujahr',
      'fact.parking': 'Parkplätze',
      'fact.space': '{n} Stellplatz',
      'fact.spaces': '{n} Stellplätze',
      'fact.lot': 'Grundstück',
      'fact.floor': 'Etage',
      'fact.type': 'Typ',
      'ft.title': 'Ausstattung & Annehmlichkeiten',
      'ft.pool': 'Swimmingpool',
      'ft.garden': 'Gepflegter Garten',
      'ft.garage': 'Doppelgarage',
      'ft.smart': 'Smart-Home-System',
      'ft.security': 'Sicherheitsdienst rund um die Uhr',
      'ft.ac': 'Klimaanlage',
      'ft.fire': 'Kamin',
      'ft.gym': 'Fitnessraum',
      'ft.solar': 'Solaranlage',
      'ft.terrace': 'Panoramaterrasse',
      'ft.balcony': 'Sonniger Balkon',
      'ft.elevator': 'Aufzug',
      'ft.concierge': 'Concierge-Service',
      'ft.parking': 'Tiefgarage',
      'ft.cinema': 'Heimkino',
      'ft.wine': 'Weinkeller',
      'loc.title': 'Umgebung',
      'near.school': 'Grundschule',
      'near.shop': 'Supermarkt',
      'near.metro': 'U-Bahn-Station',
      'near.park': 'Stadtpark',
      'near.min': '{n} Min. zu Fuß',
      'plan.title': 'Grundriss',
      'plan.note': 'Schematische Darstellung, nicht maßstabsgetreu.',
      'room.living': 'Wohnzimmer',
      'room.dining': 'Essbereich',
      'room.kitchen': 'Küche',
      'room.terrace': 'Terrasse',
      'room.master': 'Hauptschlafzimmer',
      'room.bed': 'Schlafzimmer',
      'room.bath': 'Bad',
      'rev.title': 'Bewertungen',
      'rev.based': 'Basierend auf 24 Bewertungen',
      'rev.t1': 'Wunderschönes Zuhause, genau wie beschrieben. Die Besichtigung verlief reibungslos und der Makler war sehr hilfsbereit.',
      'rev.t2': 'Pool und Garten sind in echt noch schöner. Eine ruhige Nachbarschaft mit allem in der Nähe.',
      'rev.t3': 'Klare Unterlagen und eine schnelle Übergabe. Wir sind innerhalb eines Monats eingezogen – ohne Überraschungen.',
      'agent.contact': 'Makler kontaktieren',
      'agent.message': 'Nachricht',
      'agent.role.f': 'Immobilienmaklerin',
      'sim.title': 'Ähnliche Immobilien',
      'form.name': 'Vollständiger Name',
      'form.email': 'E-Mail',
      'form.date': 'Datum',
      'form.time': 'Uhrzeit',
      'form.msg': 'Nachricht',
      'form.submit.viewing': 'Besichtigung anfragen',
      'form.submit.message': 'Nachricht senden',
      'form.done.title': 'Vielen Dank!',
      'form.done.text': 'Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.',
      'form.close': 'Schließen',
      'modal.viewing': 'Besichtigung vereinbaren',
      'modal.message': 'Nachricht senden',
      'modal.sub.viewing': 'Besichtigung von „{name}“ mit {agent}',
      'modal.sub.message': 'Schreiben Sie {agent} zu „{name}“'
    }
  };

  const STORAGE_KEY = 'lx-lang';
  let lang = 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && dict[saved]) lang = saved;
  } catch (e) { /* localStorage может быть недоступен */ }

  function t(key, args) {
    let str = (dict[lang] && dict[lang][key]) || dict.en[key] || key;
    if (args) {
      Object.keys(args).forEach((k) => { str = str.replace('{' + k + '}', args[k]); });
    }
    return str;
  }

  function fmtPrice(n) {
    return new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(n);
  }

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n, el.dataset);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.querySelectorAll('[data-price]').forEach((el) => {
      el.textContent = fmtPrice(Number(el.dataset.price));
    });

    // переключатель языка
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function setLang(next) {
    if (!dict[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply();
  }

  // выпадающее меню языка
  function initSwitcher() {
    const box = document.getElementById('lang');
    if (!box) return;
    const toggle = box.querySelector('.lang__btn');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      box.classList.toggle('lang--open');
    });
    box.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
        box.classList.remove('lang--open');
      });
    });
    document.addEventListener('click', () => box.classList.remove('lang--open'));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') box.classList.remove('lang--open'); });
  }

  window.I18N = { t, fmtPrice, getLang: () => lang };

  document.addEventListener('DOMContentLoaded', () => {
    initSwitcher();
    apply();
  });
})();