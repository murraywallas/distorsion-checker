'use strict';

// ── Lineup completo de Distortion Ø ───────────────────────────────────
const LINEUP = [
  "Anetha", "Carlita", "Charlie Sparks", "Interplanetary Criminal",
  "Kevin Saunderson", "MCR-T", "Moodymann", "Parra for Cuva",
  "Pegassi", "Sara Landry", "Trym", "WhoMadeWho", "Øtta",
  "Chomba", "Eloq", "Faster Horses", "fumi", "ISAbella",
  "Just Emma", "Moxie", "Schacke", "THELMA", "Ueberrest",
  "Ana Karla", "B From E", "Baltza", "Bongo & Pusk", "Central",
  "Cornelius", "Danjo & Verena", "filth.Y b2b Jeroen", "Freya Rose",
  "frølår b2b Signe Alarcón", "Gross & Artig", "Prom Night & Harrison Heat",
  "Lulla-Li", "Marliblue & Sofyah", "Mental Projection", "MiniMalene",
  "OxyFlux", "Professor Trelawney", "Rexie Lex", "RO", "Seahorse",
  "Shenanigan", "SoSo Klein", "Tania Just", "Teison", "Whrikk",
  "¡HARTY!", "steamboi", "Tadoh"
];

// ── Día de actuación (cphdistortion.dk) ──────────────────────────────
const LINEUP_DAYS = {
  // Viernes 5 de junio
  "Anetha": "friday", "Carlita": "friday", "Interplanetary Criminal": "friday",
  "Kevin Saunderson": "friday", "Sara Landry": "friday", "Trym": "friday",
  "WhoMadeWho": "friday", "Eloq": "friday", "fumi": "friday",
  "ISAbella": "friday", "Just Emma": "friday", "Schacke": "friday",
  "Ana Karla": "friday", "Cornelius": "friday", "Freya Rose": "friday",
  "Gross & Artig": "friday", "Prom Night & Harrison Heat": "friday",
  "Lulla-Li": "friday", "Mental Projection": "friday", "MiniMalene": "friday",
  "OxyFlux": "friday", "Rexie Lex": "friday", "RO": "friday",
  "Shenanigan": "friday", "¡HARTY!": "friday",
  // Sábado 6 de junio
  "Charlie Sparks": "saturday", "MCR-T": "saturday", "Moodymann": "saturday",
  "Parra for Cuva": "saturday", "Pegassi": "saturday", "Øtta": "saturday",
  "Chomba": "saturday", "Faster Horses": "saturday", "Moxie": "saturday",
  "THELMA": "saturday", "Ueberrest": "saturday", "B From E": "saturday",
  "Baltza": "saturday", "Bongo & Pusk": "saturday", "Central": "saturday",
  "Danjo & Verena": "saturday", "filth.Y b2b Jeroen": "saturday",
  "frølår b2b Signe Alarcón": "saturday", "Marliblue & Sofyah": "saturday",
  "Professor Trelawney": "saturday", "Seahorse": "saturday",
  "SoSo Klein": "saturday", "Tania Just": "saturday", "Teison": "saturday",
  "Whrikk": "saturday", "steamboi": "saturday", "Tadoh": "saturday",
};

// ── Horarios por día (time, stage, note) ─────────────────────────────
const SCHEDULE = {
  friday: [
    { time: "18:00", stage: "Forest",          artist: "Ana Karla",                  note: "" },
    { time: "19:00", stage: "Rave Teletech",   artist: "Schacke",                    note: "" },
    { time: "19:00", stage: "Sunrise",         artist: "Rexie Lex",                  note: "" },
    { time: "20:00", stage: "Forest",          artist: "¡Harty!",                    note: "" },
    { time: "20:00", stage: "Oasis",           artist: "RO",                         note: "" },
    { time: "21:00", stage: "Rave Teletech",   artist: "Fumi",                       note: "Sunset" },
    { time: "21:00", stage: "Sunrise",         artist: "Cornelius",                  note: "Sunset" },
    { time: "21:00", stage: "Shadow Arcanum",  artist: "Freya Rose",                 note: "Sunset" },
    { time: "22:00", stage: "Forest",          artist: "WhoMadeWho",                 note: "Hybrid DJ Set" },
    { time: "22:00", stage: "Oasis",           artist: "Isabella",                   note: "" },
    { time: "22:00", stage: "Shadow Arcanum",  artist: "Lulla-Li",                   note: "" },
    { time: "23:00", stage: "Rave Teletech",   artist: "Anetha",                     note: "" },
    { time: "23:00", stage: "Sunrise",         artist: "Minimalene",                 note: "" },
    { time: "23:00", stage: "Shadow Arcanum",  artist: "Mental Projection",          note: "Live" },
    { time: "00:00", stage: "Forest",          artist: "Carlita",                    note: "" },
    { time: "00:00", stage: "Oasis",           artist: "Kevin Saunderson",           note: "" },
    { time: "01:00", stage: "Forest",          artist: "Eloq",                       note: "" },
    { time: "01:00", stage: "Rave Teletech",   artist: "Sara Landry",                note: "" },
    { time: "01:00", stage: "Oasis",           artist: "Prom Night & Harrison Heat", note: "" },
    { time: "01:00", stage: "Sunrise",         artist: "Gross & Artig",              note: "" },
    { time: "01:00", stage: "Shadow Arcanum",  artist: "Shenanigan",                 note: "Live" },
    { time: "03:00", stage: "Forest",          artist: "Interplanetary Criminal",    note: "" },
    { time: "03:00", stage: "Rave Teletech",   artist: "Trym",                       note: "" },
    { time: "03:00", stage: "Sunrise",         artist: "Just Emma",                  note: "" },
    { time: "03:00", stage: "Shadow Arcanum",  artist: "Oxyflux",                    note: "Live" },
  ],
  saturday: [
    { time: "19:00", stage: "Forest",        artist: "Baltza",                    note: "" },
    { time: "19:00", stage: "Sunrise",       artist: "Tadoh",                     note: "" },
    { time: "20:00", stage: "Forest",        artist: "Teison",                    note: "" },
    { time: "20:00", stage: "Rave Teletech", artist: "Steamboi",                  note: "" },
    { time: "20:00", stage: "Oasis",         artist: "Tania Just",                note: "" },
    { time: "21:00", stage: "Forest",        artist: "Parra for Cuva",            note: "Live, Sunset" },
    { time: "21:00", stage: "Sunrise",       artist: "Bongo & Pusk",              note: "Sunset" },
    { time: "21:00", stage: "Shadow Quake",  artist: "Seahorse",                  note: "Sunset" },
    { time: "22:00", stage: "Rave Teletech", artist: "Faster Horses",             note: "" },
    { time: "22:00", stage: "Oasis",         artist: "Moxie",                     note: "" },
    { time: "23:00", stage: "Forest",        artist: "B From E",                  note: "" },
    { time: "23:00", stage: "Sunrise",       artist: "Marliblue & Sofyah",        note: "" },
    { time: "23:00", stage: "Shadow Quake",  artist: "Filth.y B2B Jeroen",        note: "" },
    { time: "00:00", stage: "Rave Teletech", artist: "Øtta",                      note: "" },
    { time: "00:00", stage: "Oasis",         artist: "Moodymann",                 note: "" },
    { time: "01:00", stage: "Forest",        artist: "MCR-T",                     note: "" },
    { time: "01:00", stage: "Sunrise",       artist: "Danjo & Verena",            note: "" },
    { time: "01:00", stage: "Shadow Quake",  artist: "Professor Trelawney",       note: "" },
    { time: "02:00", stage: "Rave Teletech", artist: "Charlie Sparks",            note: "" },
    { time: "03:00", stage: "Forest",        artist: "Thelma",                    note: "" },
    { time: "03:00", stage: "Oasis",         artist: "Central",                   note: "" },
    { time: "03:00", stage: "Sunrise",       artist: "Soso Klein",                note: "" },
    { time: "03:00", stage: "Shadow Quake",  artist: "frølår b2b Signe Alarcón",  note: "" },
    { time: "04:00", stage: "Rave Teletech", artist: "Ueberrest",                 note: "Sunrise" },
    { time: "05:00", stage: "Forest",        artist: "Pegassi",                   note: "Sunrise" },
    { time: "05:00", stage: "Sunrise",       artist: "Chomba",                    note: "Sunrise" },
    { time: "05:00", stage: "Shadow Quake",  artist: "Whrikk",                    note: "Sunrise" },
  ],
};

// Lookup: nombre en minúsculas → entrada de horario
const ARTIST_SCHEDULE = new Map();
for (const acts of Object.values(SCHEDULE))
  for (const act of acts)
    ARTIST_SCHEDULE.set(act.artist.toLowerCase(), act);

// Convierte "HH:MM" a minutos para ordenar cruzando medianoche
function scheduleTimeToSort(time) {
  const [h, m] = time.split(':').map(Number);
  return (h < 7 ? h + 24 : h) * 60 + (m || 0);
}

// ── Imágenes locales (descargadas de cphdistortion.dk) ───────────────
const LINEUP_IMAGES = {
  "Anetha":                    "./images/anetha.jpg",
  "Carlita":                   "./images/carlita.jpg",
  "Charlie Sparks":            "./images/charlie-sparks.jpg",
  "Interplanetary Criminal":   "./images/interplanetary-criminal.jpg",
  "Kevin Saunderson":          "./images/kevin-saunderson.jpg",
  "MCR-T":                     "./images/mcr-t.jpg",
  "Moodymann":                 "./images/moodymann.jpg",
  "Parra for Cuva":            "./images/parra-for-cuva.jpg",
  "Pegassi":                   "./images/pegassi.jpg",
  "Sara Landry":               "./images/sara-landry.jpg",
  "Trym":                      "./images/trym.jpg",
  "WhoMadeWho":                "./images/whomadewho.jpg",
  "Øtta":                      "./images/oetta.jpg",
  "Chomba":                    "./images/chomba.jpg",
  "Eloq":                      "./images/eloq.jpg",
  "Faster Horses":             "./images/faster-horses.jpg",
  "fumi":                      "./images/fumi.jpg",
  "ISAbella":                  "./images/isabella.jpg",
  "Just Emma":                 "./images/just-emma.jpg",
  "Moxie":                     "./images/moxie.jpg",
  "Schacke":                   "./images/schacke.jpg",
  "THELMA":                    "./images/thelma.jpg",
  "Ueberrest":                 "./images/ueberrest.jpg",
  "Ana Karla":                 "./images/ana-karla.jpg",
  "B From E":                  "./images/b-from-e.jpg",
  "Baltza":                    "./images/baltza.jpg",
  "Bongo & Pusk":              "./images/bongo-and-pusk.jpg",
  "Central":                   "./images/central.jpg",
  "Cornelius":                 "./images/cornelius.jpg",
  "Danjo & Verena":            "./images/danjo-and-verena.jpg",
  "filth.Y b2b Jeroen":        "./images/filthy-b2b-jeroen.jpg",
  "Freya Rose":                "./images/freya-rose.jpg",
  "frølår b2b Signe Alarcón":  "./images/froelaar-b2b-signe.jpg",
  "Gross & Artig":             "./images/gross-and-artig.jpg",
  "Prom Night & Harrison Heat":"./images/prom-night-harrison-heat.jpg",
  "Lulla-Li":                  "./images/lulla-li.jpg",
  "Marliblue & Sofyah":        "./images/marliblue-and-sofyah.jpg",
  "Mental Projection":         "./images/mental-projection.jpg",
  "MiniMalene":                "./images/minimalene.jpg",
  "OxyFlux":                   "./images/oxyflux.jpg",
  "Professor Trelawney":       "./images/professor-trelawney.jpg",
  "Rexie Lex":                 "./images/rexie-lex.jpg",
  "RO":                        "./images/ro.jpg",
  "Seahorse":                  "./images/seahorse.jpg",
  "Shenanigan":                "./images/shenanigan.jpg",
  "SoSo Klein":                "./images/soso-klein.jpg",
  "Tania Just":                "./images/tania-just.jpg",
  "Teison":                    "./images/teison.jpg",
  "Whrikk":                    "./images/whrikk.jpg",
  "¡HARTY!":                   "./images/harty.jpg",
  "steamboi":                  "./images/steamboi.jpg",
  "Tadoh":                     "./images/tadoh.jpg",
};

// ── Tags de estilo de la web de Distortion (fuente primaria para artistas sin géneros Spotify)
const ARTIST_STYLE_OVERRIDES = {
  "Anetha":                  ['Techno', 'Trance', 'Experimental', 'Melodic'],
  "Carlita":                 ['House', 'Organic House', 'Deep House'],
  "Interplanetary Criminal": ['UK Garage', 'Speed Garage', 'Bass'],
  "Kevin Saunderson":        ['Detroit Techno', 'House', 'Pioneer'],
  "Moodymann":               ['House', 'Soul', 'Detroit', 'Soulful'],
  "Parra for Cuva":          ['Electronica', 'Melodic', 'Organic'],
  "Pegassi":                 ['Trance', 'Techno', 'High Energy'],
  "Sara Landry":             ['Hard Techno', 'Dark', 'Driving'],
  "Trym":                    ['Hard Trance', 'Hard Dance', 'High Energy'],
  "WhoMadeWho":              ['Electronic', 'Indie', 'Melodic', 'Jazz-fused'],
  "Moxie":                   ['Deep House', 'Detroit', 'Dubby', 'Percussive'],
};

// ── Mapeo de géneros Spotify → tags de estilo legibles ────────────────
// Orden: de más específico a más general
const GENRE_TAGS = [
  { re: /industrial techno|industrial/i, label: 'Industrial',      color: '#ef4444' },
  { re: /hard techno/i,                  label: 'Hard Techno',     color: '#dc2626' },
  { re: /dark techno/i,                  label: 'Dark Techno',     color: '#7c3aed' },
  { re: /detroit techno/i,               label: 'Detroit',         color: '#d97706' },
  { re: /berlin techno/i,                label: 'Berlin',          color: '#6b7280' },
  { re: /minimal techno/i,               label: 'Minimal',         color: '#9ca3af' },
  { re: /hard trance/i,                  label: 'Hard Trance',     color: '#a21caf' },
  { re: /melodic techno|melodic house/i, label: 'Melodic',         color: '#3b82f6' },
  { re: /techno/i,                       label: 'Techno',          color: '#f97316' },
  { re: /speed garage|uk garage/i,       label: 'UK Garage',       color: '#facc15' },
  { re: /tech house/i,                   label: 'Tech House',      color: '#f59e0b' },
  { re: /deep house/i,                   label: 'Deep House',      color: '#0ea5e9' },
  { re: /afro house/i,                   label: 'Afro House',      color: '#84cc16' },
  { re: /organic house/i,                label: 'Organic',         color: '#22c55e' },
  { re: /progressive house/i,            label: 'Progressive',     color: '#a855f7' },
  { re: /house/i,                        label: 'House',           color: '#eab308' },
  { re: /nu disco/i,                     label: 'Nu Disco',        color: '#ec4899' },
  { re: /disco/i,                        label: 'Disco',           color: '#a855f7' },
  { re: /funk/i,                         label: 'Funk',            color: '#f97316' },
  { re: /trance/i,                       label: 'Trance',          color: '#8b5cf6' },
  { re: /ambient/i,                      label: 'Ambient',         color: '#06b6d4' },
  { re: /downtempo/i,                    label: 'Downtempo',       color: '#6366f1' },
  { re: /electronica/i,                  label: 'Electronica',     color: '#818cf8' },
  { re: /electro/i,                      label: 'Electro',         color: '#a78bfa' },
  { re: /experimental/i,                 label: 'Experimental',    color: '#64748b' },
  { re: /bass/i,                         label: 'Bass',            color: '#dc2626' },
  { re: /drum.and.bass|dnb/i,            label: 'DnB',             color: '#b45309' },
  { re: /breakbeat|breaks/i,             label: 'Breaks',          color: '#d946ef' },
  { re: /hip.hop|rap/i,                  label: 'Hip-Hop',         color: '#facc15' },
  { re: /r&b|rnb|soul/i,                 label: 'Soul / R&B',      color: '#fb923c' },
  { re: /jazz/i,                         label: 'Jazz',            color: '#34d399' },
  { re: /indie/i,                        label: 'Indie',           color: '#4ade80' },
  { re: /pop/i,                          label: 'Dance Pop',       color: '#fb7185' },
  { re: /electronic/i,                   label: 'Electronic',      color: '#8b5cf6' },
];

const SCOPES = 'user-top-read user-read-private user-library-read';
const STORAGE_KEY      = 'distortion_client_id';
const REDIRECT_URI_KEY = 'distortion_redirect_uri';
const TOKEN_KEY        = 'distortion_token';
const VERIFIER_KEY     = 'distortion_verifier';

// ── PKCE helpers ───────────────────────────────────────────────────────
function randomString(len) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  return Array.from(crypto.getRandomValues(new Uint8Array(len)))
    .map(b => chars[b % chars.length]).join('');
}
async function pkceChallenge(verifier) {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
function getRedirectUri() {
  // file:// never works with Spotify OAuth — fall back to the standard local dev URL
  if (location.protocol === 'file:') return 'http://127.0.0.1:8080/';
  return `${location.protocol}//${location.host}${location.pathname}`;
}

// ── App ────────────────────────────────────────────────────────────────
class App {
  constructor() {
    this.clientId      = localStorage.getItem(STORAGE_KEY) || '';
    // Use saved URI if exists; only auto-detect the first time
    const savedUri = localStorage.getItem(REDIRECT_URI_KEY);
    this.redirectUri = (savedUri && !savedUri.startsWith('file:'))
      ? savedUri
      : getRedirectUri();
    this.token         = null;
    this.userGenres    = {};
    this.topGenreNames = [];
    this.topArtistIds        = new Set();
    this.savedTrackArtistIds = new Set();
    this.savedTrackGenres    = new Set();
    this.userStyleProfile    = new Map(); // style-tag label → 0-1 weight
    this.savedStyleTagSet    = new Set(); // style-tag labels from track history
    this.likedSongTagSet     = new Set(); // canonical tag labels from liked songs via Discogs
    this.likedTracks         = [];        // [{artist, title}] for Discogs lookup
  }

  // ── Page routing ──────────────────────────────────────────────────────
  showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${name}`).classList.add('active');
  }
  showSetup(errorMsg) {
    document.getElementById('redirect-uri-input').value = this.redirectUri;
    document.getElementById('client-id').value = this.clientId;
    this.showPage('setup');
    const el = document.getElementById('setup-error');
    if (errorMsg) { el.textContent = errorMsg; el.classList.remove('hidden'); }
    else el.classList.add('hidden');
  }
  showLoading(msg, progress) {
    this.showPage('loading');
    document.getElementById('loading-text').textContent = msg || '';
    if (progress !== undefined)
      document.getElementById('loading-bar').style.width = progress + '%';
  }

  // ── Init ──────────────────────────────────────────────────────────────
  async init() {
    document.getElementById('redirect-uri-input').value = this.redirectUri;
    const params = new URLSearchParams(location.search);
    const code = params.get('code'), error = params.get('error');
    if (code || error) history.replaceState({}, '', location.pathname);

    this.bindEvents();

    if (error) { this.showSetup('Error de autorización: ' + error); return; }
    if (code)  { await this.handleCallback(code); return; }

    this.token = sessionStorage.getItem(TOKEN_KEY);
    if (this.token) { await this.runAnalysis(); return; }

    this.showPage(this.clientId ? 'landing' : 'setup');
  }

  // ── Events ────────────────────────────────────────────────────────────
  bindEvents() {
    const $ = id => document.getElementById(id);
    $('save-config-btn').onclick = () => {
      const id = $('client-id').value.trim(), uri = $('redirect-uri-input').value.trim();
      if (!id)  return this.showSetup('Introduce tu Client ID');
      if (!uri) return this.showSetup('La Redirect URI no puede estar vacía');
      this.clientId = id; this.redirectUri = uri;
      localStorage.setItem(STORAGE_KEY, id);
      localStorage.setItem(REDIRECT_URI_KEY, uri);
      this.showPage('landing');
    };
    $('copy-uri-btn').onclick = () => {
      navigator.clipboard.writeText($('redirect-uri-input').value.trim()).catch(() => {});
      $('copy-uri-btn').textContent = '✓ Copiado';
      setTimeout(() => { $('copy-uri-btn').textContent = 'Copiar'; }, 2000);
    };
    $('login-btn').onclick = () => this.authenticate();
    $('change-config-btn').onclick = () => this.showSetup();
    $('logout-btn').onclick = () => { sessionStorage.removeItem(TOKEN_KEY); this.token = null; this.showPage('landing'); };
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.applyFilter(btn.dataset.filter);
      };
    });
    $('artist-search').oninput = () => this.applyFilter(
      document.querySelector('.filter-btn.active')?.dataset.filter || 'all'
    );
  }

  // ── Auth ──────────────────────────────────────────────────────────────
  async authenticate() {
    const verifier = randomString(128);
    sessionStorage.setItem(VERIFIER_KEY, verifier);
    const url = new URL('https://accounts.spotify.com/authorize');
    url.searchParams.set('client_id', this.clientId);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('redirect_uri', this.redirectUri);
    url.searchParams.set('scope', SCOPES);
    url.searchParams.set('code_challenge_method', 'S256');
    url.searchParams.set('code_challenge', await pkceChallenge(verifier));
    location.href = url.toString();
  }

  async handleCallback(code) {
    const verifier = sessionStorage.getItem(VERIFIER_KEY);
    if (!verifier) { this.showSetup('Sesión expirada, inténtalo de nuevo.'); return; }
    this.showLoading('Conectando con Spotify…', 10);
    try {
      const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ grant_type: 'authorization_code', code,
          redirect_uri: this.redirectUri, client_id: this.clientId, code_verifier: verifier }),
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error_description || `HTTP ${res.status}`); }
      const data = await res.json();
      this.token = data.access_token;
      sessionStorage.setItem(TOKEN_KEY, this.token);
      sessionStorage.removeItem(VERIFIER_KEY);
      await this.runAnalysis();
    } catch (e) { this.showSetup('Error al obtener el token: ' + e.message); }
  }

  // ── Spotify API with retry ────────────────────────────────────────────
  async api(endpoint, retries = 3) {
    const res = await fetch(`https://api.spotify.com/v1${endpoint}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    if (res.status === 401) { sessionStorage.removeItem(TOKEN_KEY); this.token = null; this.showPage('landing'); throw new Error('Token expirado'); }
    if (res.status === 429 && retries > 0) {
      const wait = (parseInt(res.headers.get('Retry-After') || '2') + 1) * 1000;
      await sleep(wait);
      return this.api(endpoint, retries - 1);
    }
    if (!res.ok) throw new Error(`API ${res.status} — ${endpoint}`);
    return res.json();
  }

  // ── Main analysis (3 phases) ──────────────────────────────────────────
  async runAnalysis() {
    try {
      // ── Phase 1: User profile ─────────────────────────────────────────
      this.showLoading('Obteniendo tu perfil de Spotify…', 10);
      const profile = await this.api('/me');

      this.showLoading('Analizando tus artistas favoritos…', 20);
      const [short, medium, long_] = await Promise.all([
        this.api('/me/top/artists?limit=50&time_range=short_term'),
        this.api('/me/top/artists?limit=50&time_range=medium_term'),
        this.api('/me/top/artists?limit=50&time_range=long_term'),
      ]);
      this.userGenres      = this.buildGenreProfile(short, medium, long_);
      this.userStyleProfile = this.buildUserStyleProfile(short, medium, long_);
      this.topGenreNames   = [...this.userStyleProfile.entries()]
        .sort((a, b) => b[1] - a[1]).slice(0, 6).map(([l]) => l);

      // Build top artist ID set (for direct-listen detection)
      this.topArtistIds = new Set();
      for (const data of [short, medium, long_])
        for (const a of (data?.items || [])) this.topArtistIds.add(a.id);

      this.showLoading('Analizando tu biblioteca musical…', 30);
      this.savedTrackArtistIds = await this.fetchTrackArtistIds();

      this.showLoading('Obteniendo géneros de tu historial…', 38);
      this.savedTrackGenres   = await this.fetchSavedTrackGenres();
      this.savedStyleTagSet   = this.genresToTagSet([...this.savedTrackGenres]);

      // ── Phase 1.5: Tag liked songs via Discogs to build match profile ──
      this.showLoading('Etiquetando tus canciones guardadas con Discogs…', 43);
      this.likedSongTagSet = await this.buildLikedSongDiscogsProfile();

      // ── Phase 2: Search lineup artists ───────────────────────────────
      this.showLoading('Buscando artistas del lineup…', 55);
      const rankings = await this.searchAllArtists();

      // ── Phase 2b: Discogs enrichment (artists with weak Spotify tags) ──
      this.showLoading('Enriqueciendo tags con Discogs…', 78);
      await this.enrichWithDiscogs(rankings);

      // Recalculate finalScore after Discogs enrichment
      for (const a of rankings) a.finalScore = this.computeFinalScore(a);

      // ── Phase 3: Related artists for non-listened ones ────────────────
      this.showLoading('Buscando conexiones con artistas similares…', 82);
      await this.enrichRelatedArtists(rankings);

      // Apply final scores and sort
      for (const a of rankings) a.finalScore = this.computeFinalScore(a);
      rankings.sort((a, b) => {
        if (a.isDirectListen !== b.isDirectListen) return a.isDirectListen ? -1 : 1;
        if (b.finalScore !== a.finalScore) return b.finalScore - a.finalScore;
        return b.name.localeCompare(a.name, 'es', { sensitivity: 'base' });
      });

      this.showLoading('Preparando tu ranking…', 97);
      await sleep(300);
      this.renderResults(profile, rankings);
    } catch (e) {
      if (e.message !== 'Token expirado') {
        console.error('Analysis error:', e);
        alert('Error durante el análisis: ' + e.message + '\n\nRevisa la consola (F12).');
        this.showPage('landing');
      }
    }
  }

  // ── Fetch artist IDs (and names) from top tracks + liked songs ────────
  async fetchTrackArtistIds() {
    const ids   = new Set();
    this.savedTrackArtistNames = new Map(); // id → name (for Discogs user profile)

    const addArtist = a => { ids.add(a.id); this.savedTrackArtistNames.set(a.id, a.name); };

    try {
      const [s, m, l] = await Promise.all([
        this.api('/me/top/tracks?limit=50&time_range=short_term'),
        this.api('/me/top/tracks?limit=50&time_range=medium_term'),
        this.api('/me/top/tracks?limit=50&time_range=long_term'),
      ]);
      for (const data of [s, m, l])
        for (const track of (data?.items || []))
          for (const a of (track.artists || [])) addArtist(a);
    } catch (e) { console.warn('Top tracks error:', e.message); }

    try {
      const liked = await this.api('/me/tracks?limit=50');
      for (const item of (liked?.items || [])) {
        for (const a of (item.track?.artists || [])) addArtist(a);
        const t = item.track;
        if (t?.name && t.artists?.[0]?.name)
          this.likedTracks.push({ title: t.name, artist: t.artists[0].name });
      }
    } catch (e) { console.warn('Liked songs unavailable:', e.message); }

    return ids;
  }

  // ── Genres from saved-track artists (extra genre pool) ───────────────
  // Fetches genres of artists that appear in the user's saved/top tracks
  // but are NOT already in topArtistIds (their genres are in userGenres).
  // Each matching genre between this pool and a lineup artist adds +10%.
  async fetchSavedTrackGenres() {
    const genres = new Set();

    // Artists from saved tracks that aren't already captured by topArtistIds
    const extraIds = [...this.savedTrackArtistIds].filter(id => !this.topArtistIds.has(id));
    if (!extraIds.length) return genres;

    // Batch-fetch artist objects (up to 50 per request)
    for (let i = 0; i < extraIds.length; i += 50) {
      const ids = extraIds.slice(i, i + 50).join(',');
      try {
        const data = await this.api(`/artists?ids=${ids}`);
        for (const artist of (data.artists || [])) {
          if (!artist) continue;
          for (const g of (artist.genres || [])) genres.add(g);
        }
      } catch (e) { console.warn('Saved track genres batch error:', e.message); }
      if (i + 50 < extraIds.length) await sleep(200);
    }

    return genres;
  }

  // ── Phase 1.5: Build liked-song Discogs tag profile ─────────────────
  // Queries Discogs for each liked song (up to 25), collects genre+style
  // tags, and converts them to canonical GENRE_TAGS labels so they can be
  // compared directly against artist tags in computeFinalScore().
  async buildLikedSongDiscogsProfile() {
    const tagSet = new Set();
    const toSearch = this.likedTracks.slice(0, 25);
    if (!toSearch.length) return tagSet;

    for (let i = 0; i < toSearch.length; i++) {
      const { artist, title } = toSearch[i];
      const rawTags = await this.fetchDiscogsTagsForTrack(artist, title);
      for (const raw of rawTags) {
        const label = this.genreToTag(raw);
        if (label) tagSet.add(label);
      }
      const pct = 43 + Math.round(((i + 1) / toSearch.length) * 10);
      this.showLoading(`Etiquetando canciones con Discogs… ${i + 1}/${toSearch.length}`, pct);
      if (i < toSearch.length - 1) await sleep(2500);
    }
    return tagSet;
  }

  async fetchDiscogsTagsForTrack(artist, title) {
    const a = encodeURIComponent(artist);
    const t = encodeURIComponent(title);
    try {
      const res = await fetch(
        `https://api.discogs.com/database/search?artist=${a}&title=${t}&type=release&per_page=5`,
        { headers: { 'User-Agent': 'DistortionMatcher/1.0', 'Accept': 'application/json' } }
      );
      if (!res.ok) return [];
      const data = await res.json();
      const tags = new Set();
      for (const r of (data.results || []).slice(0, 3)) {
        for (const s of (r.style || [])) tags.add(s.toLowerCase());
        for (const g of (r.genre || [])) tags.add(g.toLowerCase());
      }
      return [...tags];
    } catch { return []; }
  }

  // ── Phase 2: search all lineup artists ───────────────────────────────
  async searchAllArtists() {
    const results = [];
    const BATCH = 5;
    let done = 0;
    for (let i = 0; i < LINEUP.length; i += BATCH) {
      const batch = LINEUP.slice(i, i + BATCH);
      const batchRes = await Promise.all(batch.map(name => this.searchArtist(name)));
      results.push(...batchRes);
      done += batch.length;
      const pct = 55 + Math.round((done / LINEUP.length) * 20);
      this.showLoading(`Analizando artistas… ${done}/${LINEUP.length}`, pct);
      if (i + BATCH < LINEUP.length) await sleep(250);
    }
    return results;
  }

  async searchArtist(name) {
    const searchName    = name.replace(/ b2b .+/i, '').trim();
    const distortionImg = LINEUP_IMAGES[name] || null;

    try {
      const q       = encodeURIComponent(searchName);
      const data    = await this.api(`/search?q=${q}&type=artist&limit=5`);
      const artists = data.artists?.items || [];
      const lower   = searchName.toLowerCase();

      // Prefer exact match; fall back to partial; last resort: first result
      let artist = artists.find(a => a.name.toLowerCase() === lower)
        || artists.find(a => a.name.toLowerCase().includes(lower));

      // If no confident match, only accept the first result if the user
      // already listens to it (cross-reference confirms identity) OR it's
      // a known artist (popularity ≥ 15). Otherwise treat as not found.
      if (!artist) {
        const candidate = artists[0];
        if (candidate && (this.topArtistIds.has(candidate.id) || candidate.popularity >= 15)) {
          artist = candidate;
        }
      }

      if (!artist) return this.notFound(name, distortionImg);

      const isDirectListen = this.topArtistIds.has(artist.id);
      const hasLikedSongs  = this.savedTrackArtistIds.has(artist.id);

      // Only trust Spotify genres if the name match is confident enough
      // or the user actually listens to this artist (confirms it's the right one)
      const nameMatches = artist.name.toLowerCase().includes(lower)
        || lower.includes(artist.name.toLowerCase());
      const trustSpotifyData = nameMatches || isDirectListen;

      const genres        = trustSpotifyData ? (artist.genres || []) : [];
      const genreScore    = this.calcGenreScore(genres);
      const matchedGenres = genres.filter(g =>
        this.userGenres[g] !== undefined ||
        Object.keys(this.userGenres).some(ug => g.includes(ug) || ug.includes(g))
      );
      const styleTags = this.genresToStyleTags(genres, name);

      // Image: Distortion image is always the correct person → use as primary
      const image = distortionImg
        || artist.images[1]?.url || artist.images[0]?.url || null;

      return {
        name, spotifyName: artist.name, found: true,
        spotifyId: artist.id,
        genreScore, isDirectListen, hasLikedSongs,
        hasRelatedArtist: false, relatedArtistName: null,
        matchedGenres, allGenres: genres, styleTags,
        image,
        spotifyUrl:  artist.external_urls.spotify,
        popularity:  artist.popularity,
        followers:   artist.followers?.total ?? 0,
        day:         LINEUP_DAYS[name] || null,
        schedule:    ARTIST_SCHEDULE.get(name.toLowerCase()) || null,
        finalScore:  genreScore, // placeholder
      };
    } catch (err) {
      console.warn(`Search failed for "${name}":`, err.message);
      return this.notFound(name, distortionImg);
    }
  }

  notFound(name, image = null) {
    return { name, found: false, genreScore: 0, finalScore: 0,
      isDirectListen: false, hasLikedSongs: false,
      hasRelatedArtist: false, relatedArtistName: null,
      savedGenreMatches: 0, savedGenreBonus: 0,
      allGenres: [], matchedGenres: [],
      styleTags: this.genresToStyleTags([], name),
      followers: 0, popularity: 0,
      day: LINEUP_DAYS[name] || null,
      schedule: ARTIST_SCHEDULE.get(name.toLowerCase()) || null,
      image: image || LINEUP_IMAGES[name] || null };
  }

  // ── Phase 2b: Discogs enrichment for artists with weak/no Spotify tags ─
  // Discogs has richer electronic music style tags (e.g. "Hard Techno",
  // "Minimal", "Industrial") compared to Spotify's genre system.
  // We only call Discogs for artists whose Spotify tags gave genreScore < 0.15.
  // Rate: 1 call / 2.5s to stay under Discogs anonymous limit (25 req/min).
  async enrichWithDiscogs(results) {
    const toEnrich = results.filter(r => r.found && r.genreScore < 0.15);
    for (let i = 0; i < toEnrich.length; i++) {
      const r = toEnrich[i];
      const searchName = r.name.replace(/ b2b .+/i, '').trim();
      const dStyles = await this.fetchDiscogsStyles(searchName);
      if (dStyles.length) {
        // Merge Discogs styles into allGenres (lowercase, deduplicated)
        const merged = [...new Set([...r.allGenres,
          ...dStyles.map(s => s.toLowerCase())])];
        r.allGenres    = merged;
        r.discogsStyles = dStyles;
        r.styleTags    = this.genresToStyleTags(merged, r.name);
        r.genreScore   = this.calcGenreScore(merged);
        r.matchedGenres = merged.filter(g =>
          (this.userStyleProfile.get(this.genreToTag(g)) || 0) > 0 ||
          this.savedStyleTagSet?.has(this.genreToTag(g))
        );
      }
      const pct = 75 + Math.round((i / toEnrich.length) * 5);
      this.showLoading(`Consultando Discogs… ${i + 1}/${toEnrich.length}`, pct);
      if (i < toEnrich.length - 1) await sleep(2500);
    }
  }

  async fetchDiscogsStyles(artistName) {
    const q = encodeURIComponent(artistName);
    try {
      const res = await fetch(
        `https://api.discogs.com/database/search?q=${q}&type=release&per_page=8`,
        { headers: { 'User-Agent': 'DistortionMatcher/1.0', 'Accept': 'application/json' } }
      );
      if (!res.ok) return [];
      const data = await res.json();
      const counts = {};
      for (const r of (data.results || [])) {
        // Styles are specific (e.g. "Techno") → weight 2; genres are broad (e.g. "Electronic") → weight 1
        for (const s of (r.style || [])) counts[s] = (counts[s] || 0) + 2;
        for (const g of (r.genre || [])) counts[g] = (counts[g] || 0) + 1;
      }
      return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([s]) => s);
    } catch { return []; }
  }

  // ── Phase 3: Related artists for non-listened artists ────────────────
  async enrichRelatedArtists(results) {
    const toEnrich = results.filter(r => r.found && !r.isDirectListen && r.spotifyId);
    for (let i = 0; i < toEnrich.length; i++) {
      const r = toEnrich[i];
      try {
        const data = await this.api(`/artists/${r.spotifyId}/related-artists`);
        const related = data.artists || [];
        const match   = related.find(a => this.topArtistIds.has(a.id));
        r.hasRelatedArtist  = !!match;
        r.relatedArtistName = match?.name || null;
      } catch (e) {
        // Endpoint may be unavailable for newer apps; skip gracefully
        r.hasRelatedArtist = false;
      }
      const pct = 80 + Math.round((i / toEnrich.length) * 15);
      this.showLoading(`Buscando conexiones… ${i + 1}/${toEnrich.length}`, pct);
      if (i < toEnrich.length - 1) await sleep(200);
    }
  }

  // ── Score: genre similarity (pure) ───────────────────────────────────
  calcGenreScore(genres) {
    if (!Array.isArray(genres) || !genres.length) return 0;
    let score = 0, bonus = 0;
    for (const ag of genres) {
      if (this.userGenres[ag] !== undefined) score += this.userGenres[ag];
      for (const [ug, w] of Object.entries(this.userGenres)) {
        if (ag !== ug && (ag.includes(ug) || ug.includes(ag))) bonus += w * 0.4;
      }
    }
    return Math.min((score + bonus) / Math.sqrt(genres.length + 1), 1);
  }

  // ── Final score ───────────────────────────────────────────────────────
  //
  //  Componentes (suman sobre base 0-100):
  //  ┌──────────────────────────────────────────────────────────────────┐
  //  │ YA LO ESCUCHAS                                                   │
  //  │   Base fija            +50 pts  (el hecho de escucharlo)        │
  //  │   En tu biblioteca     +15 pts  (canciones guardadas/top tracks) │
  //  │   Coincidencia géneros  0-35 pts  (genreScore × 0.35)          │
  //  │   Géneros del historial +10 pts por match (máx. +30 pts)       │
  //  │   Máximo: 100 %  —  Mínimo: 50 %                                │
  //  ├──────────────────────────────────────────────────────────────────┤
  //  │ NO LO ESCUCHAS                                                   │
  //  │   Artista relacionado   +30 pts  (alguien similar que sí oyes)  │
  //  │   Coincidencia géneros  0-35 pts  (genreScore × 0.35)          │
  //  │   Géneros del historial +10 pts por match (máx. +30 pts)       │
  //  │   Máximo: 95 %   —  Mínimo: 0 %                                 │
  //  └──────────────────────────────────────────────────────────────────┘
  computeFinalScore(artist) {
    const g = artist.genreScore;

    const artistTagSet = this.genresToTagSet(artist.allGenres);

    // Saved-history matches (chip display only — already baked into genreScore)
    const savedTagHits = [...artistTagSet].filter(t => this.savedStyleTagSet?.has(t));
    artist.savedGenreMatches = savedTagHits.length;
    artist.savedGenreBonus   = 0;

    // Liked-song Discogs tag match → +15% flat bonus
    const likedHits = [...artistTagSet].filter(t => this.likedSongTagSet?.has(t));
    artist.likedSongTagMatch    = likedHits.length > 0;
    artist.likedSongMatchedTags = likedHits;

    let score;
    if (artist.isDirectListen) {
      const libBonus = artist.hasLikedSongs ? 0.15 : 0;
      score = 0.50 + libBonus + (g * 0.35);
    } else {
      const relBonus = artist.hasRelatedArtist ? 0.30 : 0;
      score = (g * 0.70) + relBonus;
    }

    score += artist.likedSongMatchedTags.length * 0.15;

    return Math.min(score, 1.0);
  }

  // ── Genre string → canonical style tag label (or null) ───────────────
  genreToTag(genre) {
    for (const { re, label } of GENRE_TAGS) {
      if (re.test(genre)) return label;
    }
    return null;
  }

  // ── Array of genre strings → Set of tag labels ────────────────────────
  genresToTagSet(genres) {
    const labels = new Set();
    for (const g of (genres || [])) {
      const l = this.genreToTag(g);
      if (l) labels.add(l);
    }
    return labels;
  }

  // ── Build user's style-tag profile: Map<label, 0-1 weight> ───────────
  // This is the CANONICAL user profile used for all genre matching.
  buildUserStyleProfile(short, medium, long_) {
    const raw = new Map();  // label → accumulated weight
    const add = (data, mul) => {
      const items = data?.items;
      if (!Array.isArray(items)) return;
      items.forEach((artist, idx) => {
        const posW = mul * (1 - (idx / items.length) * 0.6);
        for (const g of (artist.genres || [])) {
          const label = this.genreToTag(g);
          if (label) raw.set(label, (raw.get(label) || 0) + posW);
        }
      });
    };
    add(short, 3.0); add(medium, 2.0); add(long_, 1.0);
    const max = Math.max(...raw.values(), 1);
    const profile = new Map();
    for (const [l, w] of raw) profile.set(l, w / max);
    return profile;
  }

  // ── Also keep raw genre strings for legacy chip display ──────────────
  buildGenreProfile(short, medium, long_) {
    const weights = {};
    const add = (data, mul) => {
      const items = data?.items;
      if (!Array.isArray(items)) return;
      items.forEach((artist, idx) => {
        const w = 1 - (idx / items.length) * 0.6;
        (artist.genres || []).forEach(g => { weights[g] = (weights[g] || 0) + mul * w; });
      });
    };
    add(short, 3.0); add(medium, 2.0); add(long_, 1.0);
    const max = Math.max(...Object.values(weights), 1);
    const out = {};
    for (const [g, w] of Object.entries(weights)) out[g] = w / max;
    return out;
  }

  // ── Genre score: style-tag overlap (0-1) ─────────────────────────────
  // Uses TWO sources for the user profile:
  //   1. userStyleProfile  – top artists (high weight, 0-1)
  //   2. savedStyleTagSet  – liked songs / top tracks history (flat 0.35)
  // The max of both is used per tag, so saved-song listening raises scores
  // even when those artists don't appear in the user's top artists.
  calcGenreScore(genres) {
    if (!Array.isArray(genres) || !genres.length) return 0;
    const artistTags = this.genresToTagSet(genres);
    if (!artistTags.size) return 0;
    let score = 0;
    for (const tag of artistTags) {
      const topWeight   = this.userStyleProfile.get(tag) || 0;
      const savedWeight = this.savedStyleTagSet?.has(tag) ? 0.35 : 0;
      score += Math.max(topWeight, savedWeight);
    }
    return Math.min(score / artistTags.size, 1);
  }

  // ── Style tags for card display ───────────────────────────────────────
  genresToStyleTags(genres, artistName = '') {
    const seen = new Set();
    const tags = [];
    for (const genre of (genres || [])) {
      for (const { re, label, color } of GENRE_TAGS) {
        if (re.test(genre) && !seen.has(label)) {
          seen.add(label); tags.push({ label, color });
          if (tags.length >= 4) return tags;
        }
      }
    }
    // Fallback: hardcoded overrides for artists with no Spotify genres
    if (tags.length < 2 && ARTIST_STYLE_OVERRIDES[artistName]) {
      for (const label of ARTIST_STYLE_OVERRIDES[artistName]) {
        if (!seen.has(label)) {
          const entry = GENRE_TAGS.find(t => t.re.test(label)) || { color: '#6b7280' };
          tags.push({ label, color: entry.color }); seen.add(label);
          if (tags.length >= 4) break;
        }
      }
    }
    return tags;
  }

  // ── Render ────────────────────────────────────────────────────────────
  renderResults(profile, rankings) {
    if (profile.images?.[0]?.url) document.getElementById('user-avatar').src = profile.images[0].url;
    document.getElementById('user-name').textContent = profile.display_name || profile.id;
    document.getElementById('user-chip').classList.remove('hidden');
    if (this.topGenreNames.length)
      document.getElementById('genre-summary').textContent =
        `Tus géneros dominantes: ${this.topGenreNames.map(g => `"${g}"`).join(', ')}.`;
    this.allRankings = rankings;
    this.renderCards(rankings);
    this.showPage('results');
    this.animateBars();
  }

  renderCards(rankings) {
    const grid = document.getElementById('ranking-grid');
    grid.innerHTML = '';
    if (!rankings.length) {
      grid.innerHTML = '<p class="no-results">No hay artistas en esta categoría.</p>';
      return;
    }
    rankings.forEach((artist, idx) => grid.appendChild(this.buildCard(artist, idx + 1)));
  }

  buildCard(artist, rank) {
    const pct   = Math.round(artist.finalScore * 100);
    const level = pct >= 50 ? 'high' : pct >= 25 ? 'medium' : 'low';

    // Image
    const imgHtml = artist.image
      ? `<img src="${esc(artist.image)}" alt="${esc(artist.name)}" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
         <div class="card-img-placeholder" style="display:none">${this.initials(artist.name)}</div>`
      : `<div class="card-img-placeholder">${this.initials(artist.name)}</div>`;

    // Direct-listen badge
    const badge = artist.isDirectListen ? `<div class="badge-direct">✓ Ya lo escuchas</div>` : '';

    // Day badge
    const dayLabel = artist.day === 'friday' ? 'Vie 5/6' : artist.day === 'saturday' ? 'Sáb 6/6' : null;
    const dayBadge = dayLabel ? `<div class="badge-day badge-day--${artist.day}">${dayLabel}</div>` : '';

    // Schedule badge
    const schedHtml = artist.schedule
      ? `<div class="badge-schedule">
           <span class="sched-time">${esc(artist.schedule.time)}</span>
           <span class="sched-sep">·</span>
           <span class="sched-stage">${esc(artist.schedule.stage)}</span>
           ${artist.schedule.note ? `<span class="sched-note">${esc(artist.schedule.note)}</span>` : ''}
         </div>`
      : '';

    // Style tags (top of card body)
    const styleTagsHtml = artist.styleTags.length
      ? `<div class="style-tags">${artist.styleTags.map(t =>
          `<span class="style-tag" style="--tag-color:${t.color}">${esc(t.label)}</span>`
        ).join('')}</div>`
      : '';

    // Score section
    let scoreSection = '';
    if (artist.found) {
      // Chips explaining what contributed to the score
      const chips = [];
      if (artist.isDirectListen)    chips.push(`<span class="chip chip-listen">🎵 Lo escuchas · +50%</span>`);
      if (artist.hasLikedSongs)     chips.push(`<span class="chip chip-saved">❤️ En tu biblioteca · +15%</span>`);
      if (artist.hasRelatedArtist)  chips.push(`<span class="chip chip-related">🔗 Via ${esc(artist.relatedArtistName)} · +30%</span>`);
      if (artist.savedGenreMatches > 0)
        chips.push(`<span class="chip chip-history">📂 ${artist.savedGenreMatches} género${artist.savedGenreMatches > 1 ? 's' : ''} en tu historial · +${Math.round(artist.savedGenreBonus * 100)}%</span>`);
      if (artist.likedSongMatchedTags?.length)
        chips.push(`<span class="chip chip-liked">🎵 ${esc(artist.likedSongMatchedTags.join(', '))} en tus guardadas · +${artist.likedSongMatchedTags.length * 15}%</span>`);

      const genrePct  = Math.round(artist.genreScore * 35);
      const matchText = artist.matchedGenres.length
        ? `${artist.matchedGenres.length} género${artist.matchedGenres.length > 1 ? 's' : ''} en común · +${genrePct}%`
        : 'Sin géneros en común';

      scoreSection = `
        <div class="score-wrap">
          <div class="score-header">
            <span class="score-label">Afinidad</span>
            <span class="score-value ${level}">${pct}%</span>
          </div>
          <div class="score-bar-bg">
            <div class="score-bar-fill ${level}" data-width="${pct}%" style="width:0%"></div>
          </div>
          <span class="score-hint">${matchText}</span>
        </div>
        ${chips.length ? `<div class="score-chips">${chips.join('')}</div>` : ''}
        ${artist.allGenres.length ? `<div class="card-genres">${
          artist.allGenres.slice(0, 4).map(g => {
            const matched = artist.matchedGenres.includes(g);
            return `<span class="genre-tag${matched ? ' matched' : ''}">${esc(g)}</span>`;
          }).join('')
        }</div>` : ''}`;
    } else {
      scoreSection = `<div class="score-wrap"><span class="card-not-found">No encontrado en Spotify</span></div>`;
    }

    const nameNote = (artist.found && artist.spotifyName && artist.spotifyName !== artist.name)
      ? `<div class="card-spotify-name">en Spotify: ${esc(artist.spotifyName)}</div>` : '';

    const fmtFollowers = n => n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
        : n >= 1e3 ? Math.round(n / 1e3) + 'K' : n > 0 ? String(n) : '';
    const followersHtml = artist.followers > 0
      ? `<span class="followers-count">👥 ${fmtFollowers(artist.followers)} seguidores</span>` : '';
    const footer = artist.found
      ? `${followersHtml}<a class="spotify-link" href="${esc(artist.spotifyUrl)}" target="_blank" rel="noopener">
           <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
           Spotify
         </a>` : '';

    const card = document.createElement('div');
    card.className = 'artist-card' + (artist.isDirectListen ? ' direct-listen' : '');
    card.innerHTML = `
      <div class="card-rank">#${rank}</div>
      ${badge}
      ${dayBadge}
      <div class="card-img-wrap">${imgHtml}</div>
      <div class="card-body">
        <div><div class="card-name">${esc(artist.name)}</div>${nameNote}</div>
        ${schedHtml}
        ${styleTagsHtml}
        ${scoreSection}
        <div class="card-footer">${footer}</div>
      </div>`;
    return card;
  }

  initials(name) {
    return name.replace(/[^\w\s]/g, '').trim()
      .split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() || '').join('');
  }
  animateBars() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll('.score-bar-fill').forEach(el => { el.style.width = el.dataset.width; });
    }));
  }

  // ── Filters ───────────────────────────────────────────────────────────
  applyFilter(filter) {
    const query = (document.getElementById('artist-search')?.value || '').trim().toLowerCase();
    let filtered = (this.allRankings || []).filter(a => {
      const pct = Math.round(a.finalScore * 100);
      if (filter === 'listened') { if (!a.isDirectListen) return false; }
      else if (filter === 'discover') { if (a.isDirectListen || pct < 25) return false; }
      else if (filter === 'low')      { if (a.isDirectListen || pct >= 25) return false; }
      else if (filter === 'friday')   { if (a.day !== 'friday') return false; }
      else if (filter === 'saturday') { if (a.day !== 'saturday') return false; }
      if (query) return a.name.toLowerCase().includes(query);
      return true;
    });
    // Ordenar por hora si el filtro es "schedule"
    if (filter === 'schedule') {
      filtered = [...filtered].sort((a, b) => {
        const ta = a.schedule ? scheduleTimeToSort(a.schedule.time) : Infinity;
        const tb = b.schedule ? scheduleTimeToSort(b.schedule.time) : Infinity;
        return ta - tb;
      });
    }
    this.renderCards(filtered);
    this.animateBars();
  }
}

// ── Utilities ──────────────────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

const app = new App();
app.init().catch(console.error);
