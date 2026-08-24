# Napredak — sajt Jovana Simović Nails

## Kontekst

- Referentni dizajn (statični HTML mockup, uraditi da izgleda isto/slično): `references/jovana-simovic-nails-pocetna.html`
- Cilj: napraviti isti sajt kao jednu Payload stranicu (Home), sekcija po sekcija, kroz postojeći page-builder sistem blokova (`src/blocks/`), ne hardkodovan layout.
- Način rada: Claude daje uputstvo za sledeći korak, Petar implementira i javi rezultat/probleme, pa idemo dalje. Ovaj fajl je zajednička evidencija — ažurira se posle svakog koraka (status + eventualne napomene/odstupanja od uputstva).

## Dizajn temelji reference sajta

**Fontovi:**

- `Bodoni Moda` — naslovi (h1/h2/h3)
- `Jost` — telo teksta
- `Mrs Saint Delafield` — script/potpis akcenti

**Paleta:**
| token | hex | upotreba |
|---|---|---|
| rose-deep | `#a85c68` | primarna akcentna (dugmad, linkovi, brojevi) |
| rose | `#c98a93` | sekundarna roze |
| rose-line | `#e3bcc0` | linije/borderi |
| gold | `#c9a876` | sitni akcenti (dot, pinovi) |
| ink | `#241c1d` | osnovni tekst/naslovi |
| ink-soft | `#5b4a4c` | sekundarni tekst |
| cream | `#fffbf9` | pozadina kartica |
| blush | `#f6e1e3` | pozadina blokova |
| blush-soft | `#fbf0ef` | pozadina body/hero |

## Mapa sekcija → Payload blokovi

| #   | Sekcija u referenci                 | Pristup u boilerplate-u                                              | Status                         |
| --- | ----------------------------------- | -------------------------------------------------------------------- | ------------------------------ |
| 1   | Nav/Header                          | postojeći `Header` global + novi `Navbar` blok                       | ✅ Implementirano (videti Log) |
| 2   | Hero                                | **novi `Hero` blok**                                                 | 🔵 U TOKU (Korak 1)            |
| 3   | Stats traka                         | postojeći `Stats` blok                                               | TODO                           |
| 4   | Usluge (4 kartice)                  | novi blok (npr. `ServiceCards`)                                      | TODO                           |
| 5   | Proces (4 koraka)                   | novi blok (npr. `ProcessSteps`)                                      | TODO                           |
| 6   | Radovi / galerija (filter + grid)   | novi blok (npr. `Gallery`)                                           | TODO                           |
| 7   | O meni (foto + tekst)               | `BlockHolder` + `Image`/`RichText` atomi, ili novi `AboutSplit` blok | TODO                           |
| 8   | Utisci (testimonials)               | postojeći `Testimonials` blok                                        | TODO                           |
| 9   | Cenovnik                            | novi blok (npr. `PriceList`)                                         | TODO                           |
| 10  | FAQ                                 | postojeći `Accordion` blok                                           | TODO                           |
| 11  | Instagram traka                     | novi `InstagramStrip` blok (Elfsight embed)                          | ✅ Implementirano (videti Log) |
| 12  | Kontakt (lista + kartica, bez mape) | novi `Contact` blok                                                  | ✅ Implementirano (videti Log) |
| 13  | Footer                              | postojeći `Footer` global + novi `FooterColumns` blok                | ✅ Implementirano (videti Log) |

## Log

- **2026-08-11** — Analizirana referenca, definisana mapa sekcija, kreiran ovaj fajl. Dato Uputstvo #1 (Hero).
- **2026-08-11** — Odrađen "Korak 0" iz Uputstva #1 (fontovi + paleta), implementirano direktno umesto kao uputstvo:
  - `src/app/(frontend)/layout.tsx` — dodat Google Fonts link (Bodoni Moda, Jost, Mrs Saint Delafield)
  - `src/scss/_variables.scss` — dodate `$font-heading`/`$font-body`/`$font-script`; `$colors` mapa prepravljena na brend paletu (`primary`→rose-deep `#a85c68`, `secondary`→ink `#241c1d`, `bg-gray`→rose-line `#e3bcc0` (Divider-ova podrazumevana linija), + `rose`/`gold`/`ink-soft`/`cream`/`blush`/`blush-soft`; `red` ostaje kao funkcionalna error boja, nepromenjena). Ključevi nisu preimenovani (kontrakt iz `_tokens.scss`), samo hex fallback + admin label.
  - `src/globals/Colors.ts` — `DEFAULT_COLORS` ogledalo iste mape, sa čitljivim brend labelama u adminu (npr. "Rose Deep (Primary)", "Rose Line").
  - `src/scss/main.scss` — `body` font-family → `vars.$font-body` (Jost)
  - `src/components/atoms/Heading/style.module.scss` — `--h1/--h2/--h3` modifikatori dobili `vars.$font-heading` (Bodoni Moda), kao u referenci
  - **Napomena za Petra:** ako je Colors global već seed-ovan u bazi (postoje redovi), Payload neće automatski primeniti novi `DEFAULT_COLORS` — potrebno je ručno izmeniti boje u adminu (`/admin/globals/colors`) da se poklope sa novom listom, ili obrisati postojeće redove i ostaviti da se re-seeduje.
  - Preostaje: fajlovi bloka `Hero` (config/component/style) i registracija u manifestu — to je i dalje na Petru po Uputstvu #1, koraci 1–6.
- **2026-08-12** — Petar sam preimenovao ključeve u `$colors` mapi (`primary`→`rose-deep`, `secondary`→`ink`, `bg-gray`→`rose-line`) u `_variables.scss`. Dovršeno usklađivanje svih mesta koja su još koristila stara imena:
  - `src/globals/Colors.ts` — `DEFAULT_COLORS` `value` tokeni ažurirani da se poklope sa novim ključevima (`value` mora biti identičan `$colors` ključu jer postaje `--color-{value}` CSS varijabla).
  - `src/blocks/Divider/style.module.scss` — `map-get(vars.$colors, 'bg-gray')` → `'rose-line'`.
  - `src/components/atoms/Button/style.module.scss` — jedini fajl koji je hardkodovao sirovu CSS varijablu `var(--color-primary, #01696f)` umesto `vars.$color-primary` indirekcije, pa ga preimenovanje mape nije automatski pokrilo → sve reference promenjene na `var(--color-rose-deep, #a85c68)` (8 mesta).
  - Vraćen izgubljeni `'red'` ključ u `$colors` mapu + `$color-red` derived var (Petrov re-type mape ga je slučajno izostavio) — bez njega `Tabs` i `FormBlock` stilovi (koriste `vars.$color-red` za error stanja) ne bi mogli da se kompajliraju.
  - `src/scss/_tokens.scss` — ažuriran primer/komentar (bio je zastareo, tvrdio da se ključevi ne smeju preimenovati — ispravljeno: ključevi mape smeju, ali bare `$color-primary`/`$color-secondary`/`$color-red`/`$color-bg-gray` varijable ne smeju jer se koriste po imenu u mnogim blokovima).
  - **Napomena:** ako Colors global u adminu već ima sačuvane redove sa starim `value` tokenima (`primary`/`secondary`/`bg-gray`), treba ih ručno preimenovati u `/admin/globals/colors` da se poklope sa kodom — u suprotnom te boje neće biti uređivane iz admina, samo će se koristiti hardkodovani fallback.
- **2026-08-12** — Petar je otišao korak dalje i preimenovao i same bare derived promenljive u `_variables.scss` (`$color-primary`→`$color-rose-deep`, `$color-secondary`→`$color-ink`, `$color-bg-gray`→`$color-rose-line`). Pošto se te promenljive koriste po imenu u desetinama `style.module.scss` fajlova (ne samo preko `$colors` mape), uradjen je masovni find-and-replace kroz ceo `src/**/*.scss`:
  - Izmenjeno 11 fajlova: `Header`, `Footer`, `Accordion`, `Testimonials`, `FormBlock`, `Team`, `Tabs`, `RichText`, `Stats`, `Menu` (style modules) + `main.scss` + komentari u `_tokens.scss`/`_variables.scss`.
  - Verifikovano da posle zamene nigde više ne postoji `$color-primary`/`$color-secondary`/`$color-bg-gray`, i da se `main.scss` (koji povlači `_variables.scss`) i dalje kompajlira bez greške.
  - `src/components/atoms/Button/style.module.scss` nije diran u ovom krugu — već koristi sirove `var(--color-rose-deep, ...)` CSS varijable (ispravljeno u prošlom koraku), ne SCSS `$color-primary`, pa nije bio pogođen ovim preimenovanjem.
- **2026-08-13** — Instagram traka (red #11): Petar je ukazao na `studiomusmula.rs` (očev sajt) kao primer ponašanja koje želi. Inspekcijom HTML-a te stranice utvrđeno je da koriste **Elfsight "Instagram Feed" widget** (`elfsight-app-{id}` div + `platform.js` skripta) — to povlači postove i broj pratilaca uživo sa Instagrama, sa klikom na svaku sličicu koji vodi na pravu objavu. Isti pristup primenjen ovde:
  - Novi blok `src/blocks/InstagramStrip/` (`config.ts`/`index.tsx`/`style.module.scss`), registrovan u `block-manifest.ts`.
  - Polja: `eyebrow`, `title`, `description`, `instagramHandle`, `instagramUrl` (obavezno), `elfsightWidgetId` (opciono — ID iz Elfsight embed koda).
  - Kad je `elfsightWidgetId` popunjen: renderuje se `elfsight-app-{id}` div + `platform.js` (`next/script`, `lazyOnload`) — sam widget donosi live grid poslednjih objava (limitirati na 5 u Elfsight podešavanjima) i, ako se uključi njihova "Header" opcija, live broj pratilaca + Follow dugme (to je zamena za stari statični "315+ pratilaca" tekst iz reference — broj mora doći iz Elfsight-a da bi zaista bio uživo, ne može se to hardkodovati u Payload polju).
  - Kad `elfsightWidgetId` nije popunjen (npr. pre nego što se klijentov Elfsight nalog poveže): prikazuje se stilizovan fallback (ikonica + poruka + dugme ka `instagramUrl`), vidljivo i u `blocks-preview` mock-u.
  - Vizuelno uklopljeno sa ostatkom sajta: eyebrow/title u istom stilu kao `Gallery`/`Testimonials`, sadržaj upakovan u `cream` karticu sa `rose-line` obrubom (isti jezik kao `.testimonial` kartice).
  - **Napomena za Petra:** potrebno je napraviti Elfsight nalog, kreirati "Instagram Feed" widget, povezati Instagram nalog, ograničiti na 5 objava, uključiti Header (za live broj pratilaca + Follow dugme), i uneti Widget ID u Payload adminu na ovom bloku.
- **2026-08-13** — Kontakt sekcija (red #12): implementirano po referenci **bez Google mape** (`.map-card`/iframe iz reference eksplicitno izostavljen — Petar to ne želi na sajtu). Novi blok `src/blocks/Contact/` (`config.ts`/`index.tsx`/`style.module.scss`), registrovan u `block-manifest.ts`:
  - Leva kolona: eyebrow + naslov + `items` niz (ikonica-emoji + label + value, `value` opciono link ako je `url` popunjen) — pokriva sve `<li>` iz reference (lokacija, telefon, Instagram DM, profil, termini).
  - Desna kolona: tamna (`ink` pozadina) kartica sa cursive `scriptText`, `text` pasusom i `button` (isti `blocks: [ButtonBlock]` pattern kao CTA/Hero) — 1:1 sa `.contact-card` iz reference, bez `.map-card` ispod liste.
  - Grid `1fr 1fr` sa lomom na jednu kolonu ispod ~860px, kao u referenci.
- **2026-08-13** — Nav/Header (red #1): dogovoreno da se napravi poseban `Navbar` blok (umesto sastavljanja od generičkih atoma) jer postojeći `Menu` atom nema hamburger/full-screen mobilni meni koji referenca zahteva. Novi blok `src/blocks/Navbar/` (`config.ts`/`index.tsx`/`style.module.scss`), registrovan u `block-manifest.ts` (nestable — dostupan direktno u `Header.blocks` kao vrhovni red, isto kao `Section`/`BlockHolder`):
  - Polja: `logo` (upload), `brandName`/`brandSub` (tekst, brend blok kao u referenci — cursive ime + tracked sub), `menu` (relationship na `Menus` kolekciju, renderuje se flat/top-level), `cta` (blocks: `[ButtonBlock]`, maxRows 1).
  - Desktop: logo+ime levo, linkovi centar, CTA + hamburger desno (hamburger sakriven ≥860px). Mobile (<860px): linkovi + CTA sakriveni, hamburger otvara full-screen overlay panel (blush-soft pozadina, veliki serif linkovi, CTA na dnu) — state kroz `useState`, zaključava `body` scroll dok je otvoren, zatvara se na Escape ili klik na link.
  - Namerno bez `spacingFields`/`backgroundFields` na samom bloku — ako zatreba pozadina/padding, red se uvija u `Section` (isti princip kao ostali Header/Footer redovi, videti CLAUDE.md).
  - Link-resolving logika (`resolveHref`) izvučena iz `Menu` atoma u deljeni util `src/utils/resolveMenuHref.ts` (`resolveMenuItemHref`) da je koristi i `Menu` i `Navbar` bez dupliranja.
  - Očišćen mrtav CSS u `src/components/layout/Header/style.module.scss` (stare `.header__logo`/`.header__nav`/`.header__burger`/`.header__mobile` klase iz starije, ne-block-based verzije Header-a, koje `Header/index.tsx` uopšte ne koristi) i header shell restilizovan da liči na referencu (`cream` providna pozadina + blur + `rose-line` border umesto stare `rose-deep` alfa pozadine).
  - Testirano u `/blocks-preview` (dev server + Chrome): desktop red i mobilni panel vizuelno provereni (panel forsiran preko DOM klasa jer alat za resize prozora ne menja stvarni CSS viewport u ovom okruženju); usput ispravljen nedostajući `text-decoration: none` na linkovima (primećen kao podvučen tekst na screenshotu).
  - **Napomena za Petra:** ovo je samo blok, treba ga dodati u Payload adminu na `/admin/globals/header` → `Content` tab → `blocks` → dodati `Navbar` blok i popuniti pravi logo/ime/meni (iz `Menus` kolekcije)/CTA. Trenutni seed-ovani Header global u bazi i dalje ima generički placeholder sadržaj dok se to ručno ne popuni.
- **2026-08-13** — Header boja i skrol dorade (posle prve verzije Navbar-a):
  - Header pozadina je bila hardkodovana u SCSS-u (`cream`, pa promenjena u `blush-soft` na Petrov zahtev) i uopšte nije bila podesiva iz admina — svaka ručna izmena kompajliranog `.next/dev/static/css/...` fajla je nestajala jer se taj fajl generiše iz izvora pri svakom rebuild-u. Dodato pravo **`colorTheme`** polje na Header globalu (Settings tab, isti `ColorSelectField` picker koji koriste background polja na blokovima), `defaultValue: 'blush-soft'`. `Header/style.module.scss` refaktorisan da boju čita preko CSS custom property-ja `--header-bg` (petlja kroz `vars.$colors`) umesto hardkodovane vrednosti — sada je boja headera trajno podesiva iz `/admin/globals/header`.
  - Klik na link u meniju sa vrha strane nije skrolovao do sekcije (Next.js `Link`-ov ugrađeni hash-skrol je nepouzdan kad se hash menja na istoj ruti). Dodat `src/scss/main.scss` → `html { scroll-behavior: smooth; scroll-padding-top: 8rem; }` (+ `prefers-reduced-motion` fallback), i u `Navbar` ručni klik-handler koji radi `element.scrollIntoView({ behavior: 'smooth' })` kad href cilja anchor na trenutnoj stranici — sad radi pouzdano sa bilo koje pozicije skrola. Logika izvučena u `src/utils/smoothAnchorScroll.ts` (`scrollToAnchorIfSamePage`) da je i `Footer` može reuse-ovati.
- **2026-08-13** — Footer (red #13): novi `FooterColumns` blok (`src/blocks/FooterColumns/`), registrovan u `block-manifest.ts`, isti pattern kao `Navbar` (poseban blok, ne generička kompozicija atoma) jer footer ima specifičan layout (brand kolona + N kolona linkova + bottom bar) koji se ne uklapa lepo u BlockHolder grid:
  - Polja: `logo`/`brandName`/`brandSub` (isto kao Navbar brand), `description`, `social` (array platform+url, isti `socialPlatforms` pattern kao `Team` blok — real ikonice iz `Icon` atoma, ne `@` placeholder iz reference), `columns` (array od `{ heading, links[] }` — proizvoljan broj kolona, svaki link je slobodan `label`+`url` tako da može anchor/tel/mailto/https), `bottomText`/`bottomSecondaryText` (copyright red).
  - Linkovi u kolonama koriste isti `scrollToAnchorIfSamePage` handler kao Navbar (glatko skrolovanje ka `#usluge` i sl. iz footera takođe radi, ne samo iz meni bara).
  - `Footer/style.module.scss` očišćen isto kao Header — hardkodovana `rose-deep` alfa pozadina zamenjena `border-top: 1px solid rose-line` (transparent, oslanja se na pozadinu body-ja), 1:1 sa referencom (`footer{border-top:1px solid var(--rose-line)}`).
  - Usput primećen i ispravljen isti propust u `Contact` bloku (red #12) — `<ul>` liste nigde u sajtu nemaju globalni `list-style` reset, pa su i `.contact__list` i `.footerColumns__list` prikazivale podrazumevane bullet tačke dok nisam eksplicitno dodao `list-style: none`.
  - **Napomena za Petra:** isto kao Navbar — treba u `/admin/globals/footer` → Content → blocks → dodati `FooterColumns` blok i popuniti pravi sadržaj (logo, opis, social linkove, kolone).

---

## Uputstvo #1 — Hero sekcija

Cilj: novi `Hero` blok koji izgleda kao hero u referenci — eyebrow, naslov od dva reda (drugi red u accent boji), tekst, dva dugmeta, red "trust chips", i "polaroid" stek od 3 fotografije desno.

### 0. Temelji (fontovi + paleta) — ✅ ODRAĐENO (videti Log ispod za tačne izmene)

**Fontovi** — u `src/app/(frontend)/layout.tsx`, u `<head>`, pored postojećeg FontAwesome linka dodaj:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,500&family=Jost:wght@300;400;500;600&family=Mrs+Saint+Delafield&display=swap"
  rel="stylesheet"
/>
```

U `src/scss/_variables.scss` dodaj ispod postojećih promenljivih:

```scss
$font-heading: 'Bodoni Moda', serif;
$font-body: 'Jost', sans-serif;
$font-script: 'Mrs Saint Delafield', cursive;
```

**Paleta** — `src/scss/_tokens.scss` kaže: _ne preimenovati_ postojeće `$colors` ključeve (`primary`/`secondary`/... su "ugovor" za fallback), samo im promeniti hex i/ili dodati nove. Zato:

- U `src/globals/Colors.ts`, u `DEFAULT_COLORS`, promeni `hex` za `primary` → `#a85c68` (rose-deep) i `secondary` → `#241c1d` (ink). Zameni `blue`/`red`/`green`/`bg-gray` (nigde se ne referenciraju po imenu, samo su demo) brend tonovima: `rose` `#c98a93`, `rose-line` `#e3bcc0`, `gold` `#c9a876`, `cream` `#fffbf9` (možeš zadržati i dodati `ink-soft` `#5b4a4c`, `blush` `#f6e1e3`, `blush-soft` `#fbf0ef` ako želiš da budu dostupni i kao pozadinske boje u adminu).
- U `src/scss/_variables.scss`, u `$colors` mapi, ogledalo istih promena (isti tokeni, isti fallback hex kao gore, oblik `'rose': var(--color-rose, #c98a93)` itd).

Ovo menja default izgled dugmadi/naslova u celom sajtu (jer `Button`, `Heading` itd. koriste `$color-primary`/`$color-secondary`) — to je nameravano, brendiranje za ovog klijenta.

### 1. Config bloka

Novi fajl `src/blocks/Hero/config.ts`, po uzoru na `src/blocks/CTA/config.ts`:

- `slug: 'hero'`, `interfaceName: 'HeroBlockProps'`
- Tab **Content**:
  - `eyebrow` (text) — npr. "Nail Artist · Kragujevac"
  - `heading` (text, required) — prvi red naslova, npr. "Nokti kao mala"
  - `headingAccent` (text) — drugi red, renderuje se u accent boji, npr. "umetnička dela."
  - `text` (textarea) — kratak pasus ispod naslova
  - `buttons` (type: `blocks`, `maxRows: 2`, `blocks: [ButtonBlock]`) — isti pattern kao u CTA
  - `trustItems` (type: `array`, `maxRows: 4`) sa poljima `icon` (text, emoji npr. 📍) i `label` (text, npr. "Kragujevac")
  - `photos` (type: `group`) sa tri `upload` polja (`relationTo: 'media'`): `photoLarge`, `photoBottomRight`, `photoTopRight` — odgovaraju `.p1`/`.p2`/`.p3` iz reference (veliki + dva manja preklopljena)
- Tab **Settings**: `...advancedFields, ...spacingFields, ...backgroundFields`

### 2. React komponenta

Novi fajl `src/blocks/Hero/index.tsx`, po uzoru na `src/blocks/CTA/index.tsx` (klase, `getSpacingClasses`, `getBackgroundClasses`, `BackgroundLayer`, `htmlId`) i `src/components/atoms/Image/index.tsx` (kako se `next/image` renderuje iz upload polja — `typeof photo === 'object' && photo.url`, `fill`, `alt={photo.alt || ''}`).

Struktura render-a (dve kolone, kao `.hero .wrap` u referenci):

- Leva kolona (`hero__copy`): eyebrow → `h1` (heading + `<br/>` + `<em>` sa headingAccent) → `text` kao `<p>` → dugmad (`buttons.length > 0` → `<BlockRenderer blocks={buttons} />`) → red trust chip-ova (mapiraj `trustItems`)
- Desna kolona (`hero__stage`): tri `div` (polaroid large/bottomRight/topRight), svaki sa `next/image` unutra ako je odgovarajuće `photos.photoX` popunjeno

### 3. Stilovi

Novi fajl `src/blocks/Hero/style.module.scss`, po uzoru na `CTA/style.module.scss` (`@use '@/scss/mixins' as mixins;` / `@use '@/scss/variables' as vars;`, i `@each $name, $value in vars.$colors` petlja za `--color-{name}` varijante pozadine).

Ključni delovi da prevedeš iz reference CSS-a (linije ~103–142 u `references/jovana-simovic-nails-pocetna.html`) u SCSS modul klase (`.hero`, `.hero__inner` kao grid `1.05fr .95fr` sa `@media` na 900px za jednu kolonu, `.hero__stage` kao `position: relative; height: clamp(360px,44vw,520px)`, tri `.hero__polaroid` varijante sa `position: absolute` + rotacijom + veličinama kao `.p1/.p2/.p3`, `.hero__trustChip` kao pilula sa `cream` pozadinom i `rose-line` borderom). Koristi `map-get(vars.$colors, 'rose-deep')` itd. umesto hardkodovanih hex vrednosti gde god ima boje.

### 4. Registracija bloka

U `src/blocks/block-manifest.ts`:

- import `HeroBlock` iz `@/blocks/Hero/config`
- `React.lazy` import komponente: `const Hero = React.lazy(() => import('@/blocks/Hero').then((m) => ({ default: m.Hero })))`
- dodaj red u `blockManifest` niz: `{ slug: 'hero', config: HeroBlock, component: Hero }`

(`src/blocks/Hero/index.tsx` treba da eksportuje `Hero` — dodaj i `export default Hero` kao u CTA.)

### 5. Regenerisati tipove

```bash
pnpm generate:types
```

Proveri da se `HeroBlockProps` pojavio u `src/payload-types.ts` i da komponenta koristi taj tip (kao `CTABlockProps` u CTA).

### 6. Dodavanje na stranicu i test

- U Payload adminu, na Home stranici (`pages` kolekcija), unutar `layout` → `Section` → `BlockHolder`, dodaj novi `Hero` blok, popuni sadržaj/slike iz reference i sačuvaj.
- `pnpm dev`, otvori homepage, uporedi sa `references/jovana-simovic-nails-pocetna.html` (raspored, boje, ponašanje na mobilnom < 900px gde se kolone slažu jedna ispod druge).

### Kad završiš

Javi mi kako je prošlo (screenshot ako može, ili samo opiši šta radi/ne radi) — upisaću status u tabelu iznad i daćemo sledeće uputstvo (Stats traka).
