// Curated SVG Data URI Artwork for Spotify Replica
// Crisp, authentic, zero-latency vector art matching the Sapphire IQ lecture UI

const createSvgUrl = (svgContent) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svgContent.trim())}`;

export const albumArt = {
  youngBlood: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="ybGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e11d48"/>
          <stop offset="50%" stop-color="#881337"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#ybGrad)"/>
      <circle cx="150" cy="150" r="85" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="4"/>
      <circle cx="150" cy="150" r="55" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <path d="M110 190 Q150 90 190 190" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="150" cy="115" r="14" fill="#fbbf24"/>
      <text x="150" y="255" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="3">YOUNG BLOOD</text>
    </svg>
  `),

  likedSongs: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="likeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#450af5"/>
          <stop offset="50%" stop-color="#8e8ee5"/>
          <stop offset="100%" stop-color="#c4efd9"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#likeGrad)"/>
      <path d="M150 220 C130 200 80 160 80 120 C80 95 100 75 125 75 C139 75 146 82 150 88 C154 82 161 75 175 75 C200 75 220 95 220 120 C220 160 170 200 150 220 Z" fill="#ffffff"/>
    </svg>
  `),

  dailyMix1: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="dm1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="60%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#38bdf8"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#dm1Grad)"/>
      <rect x="0" y="210" width="300" height="90" fill="#0369a1"/>
      <circle cx="80" cy="110" r="45" fill="#facc15" opacity="0.9"/>
      <circle cx="160" cy="90" r="35" fill="#f43f5e" opacity="0.8"/>
      <circle cx="220" cy="130" r="40" fill="#a855f7" opacity="0.85"/>
      <text x="24" y="248" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#ffffff">DAILY MIX</text>
      <text x="24" y="280" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#38bdf8">1</text>
      <circle cx="260" cy="255" r="16" fill="#1ed760"/>
      <path d="M255 249 L268 255 L255 261 Z" fill="#000000"/>
    </svg>
  `),

  moodBooster: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="mbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#ef4444"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#mbGrad)"/>
      <circle cx="150" cy="140" r="70" fill="#fef08a" opacity="0.9"/>
      <circle cx="125" cy="125" r="8" fill="#78350f"/>
      <circle cx="175" cy="125" r="8" fill="#78350f"/>
      <path d="M120 155 Q150 185 180 155" stroke="#78350f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <text x="150" y="255" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="1">MOOD BOOSTER</text>
    </svg>
  `),

  discoverWeekly: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="dwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4338ca"/>
          <stop offset="50%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#a855f7"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#dwGrad)"/>
      <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6">
        <circle cx="150" cy="140" r="25"/>
        <circle cx="150" cy="140" r="50"/>
        <circle cx="150" cy="140" r="75"/>
        <circle cx="150" cy="140" r="100"/>
      </g>
      <text x="150" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="18" fill="#ffffff" text-anchor="middle" letter-spacing="2">DISCOVER</text>
      <text x="150" y="265" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="14" fill="#c7d2fe" text-anchor="middle" letter-spacing="4">WEEKLY</text>
    </svg>
  `),

  chill: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="chGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d9488"/>
          <stop offset="60%" stop-color="#14b8a6"/>
          <stop offset="100%" stop-color="#5eead4"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#chGrad)"/>
      <path d="M40 180 Q100 130 160 170 T280 160 L280 300 L40 300 Z" fill="#0f766e" opacity="0.6"/>
      <path d="M20 220 Q80 180 150 210 T280 200 L280 300 L20 300 Z" fill="#115e59" opacity="0.8"/>
      <circle cx="210" cy="90" r="30" fill="#ccfbf1"/>
      <text x="150" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="3">CHILL</text>
    </svg>
  `),

  summer: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="smGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="50%" stop-color="#fb923c"/>
          <stop offset="100%" stop-color="#fde047"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#smGrad)"/>
      <circle cx="150" cy="120" r="65" fill="#fef08a"/>
      <path d="M50 230 Q150 170 250 230" stroke="#881337" stroke-width="8" fill="none" stroke-linecap="round"/>
      <text x="150" y="275" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="4">SUMMER</text>
    </svg>
  `),

  // Popular Albums Shelf
  focusFlow: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="ffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#064e3b"/>
          <stop offset="70%" stop-color="#047857"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#ffGrad)"/>
      <g stroke="#34d399" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7">
        <path d="M50 150 Q100 80 150 150 T250 150"/>
        <path d="M50 170 Q100 100 150 170 T250 170"/>
        <path d="M50 130 Q100 60 150 130 T250 130"/>
      </g>
      <circle cx="150" cy="150" r="40" fill="#065f46" stroke="#6ee7b7" stroke-width="2"/>
      <text x="150" y="255" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="2">FOCUS FLOW</text>
    </svg>
  `),

  nightDrive: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="ndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#180b33"/>
          <stop offset="50%" stop-color="#4a044e"/>
          <stop offset="100%" stop-color="#831843"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#ndGrad)"/>
      <circle cx="150" cy="120" r="50" fill="#f43f5e" opacity="0.9"/>
      <path d="M0 180 L300 180" stroke="#ec4899" stroke-width="3"/>
      <path d="M150 180 L20 300" stroke="#f472b6" stroke-width="2"/>
      <path d="M150 180 L80 300" stroke="#f472b6" stroke-width="2"/>
      <path d="M150 180 L150 300" stroke="#f472b6" stroke-width="2"/>
      <path d="M150 180 L220 300" stroke="#f472b6" stroke-width="2"/>
      <path d="M150 180 L280 300" stroke="#f472b6" stroke-width="2"/>
      <text x="150" y="260" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="3">NIGHT DRIVE</text>
    </svg>
  `),

  top50Global: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="tgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16"/>
          <stop offset="60%" stop-color="#15803d"/>
          <stop offset="100%" stop-color="#22c55e"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#tgGrad)"/>
      <circle cx="150" cy="125" r="65" fill="#14532d" stroke="#86efac" stroke-width="4"/>
      <text x="150" y="145" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#ffffff" text-anchor="middle">50</text>
      <text x="150" y="235" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="2">TOP 50</text>
      <text x="150" y="265" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="16" fill="#86efac" text-anchor="middle" letter-spacing="4">GLOBAL</text>
    </svg>
  `),

  rapCaviar: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#09090b"/>
      <rect x="15" y="15" width="270" height="270" fill="none" stroke="#eab308" stroke-width="3"/>
      <circle cx="150" cy="115" r="45" fill="none" stroke="#ca8a04" stroke-width="4" stroke-dasharray="6,4"/>
      <circle cx="150" cy="115" r="25" fill="#ca8a04"/>
      <text x="150" y="200" font-family="serif" font-weight="900" font-size="28" fill="#fef08a" text-anchor="middle" letter-spacing="2">RapCaviar</text>
      <text x="150" y="235" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="#a1a1aa" text-anchor="middle" letter-spacing="3">THE HIP-HOP ESSENTIAL</text>
    </svg>
  `),

  peacefulPiano: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="ppGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="60%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#ppGrad)"/>
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="30" height="80" fill="#ffffff" rx="3"/>
        <rect x="35" y="0" width="30" height="80" fill="#ffffff" rx="3"/>
        <rect x="70" y="0" width="30" height="80" fill="#ffffff" rx="3"/>
        <rect x="105" y="0" width="30" height="80" fill="#ffffff" rx="3"/>
        <rect x="140" y="0" width="30" height="80" fill="#ffffff" rx="3"/>
        <rect x="22" y="0" width="18" height="50" fill="#0f172a" rx="2"/>
        <rect x="58" y="0" width="18" height="50" fill="#0f172a" rx="2"/>
        <rect x="128" y="0" width="18" height="50" fill="#0f172a" rx="2"/>
      </g>
      <text x="150" y="230" font-family="serif" font-weight="700" font-size="22" fill="#f8fafc" text-anchor="middle" letter-spacing="1">Peaceful Piano</text>
      <text x="150" y="260" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="13" fill="#cbd5e1" text-anchor="middle" letter-spacing="2">RELAX &amp; UNWIND</text>
    </svg>
  `),

  // Playlist View Tracks
  midnightCity: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#1e1b4b"/>
      <circle cx="50" cy="40" r="22" fill="#c084fc"/>
      <polygon points="10,90 25,60 40,90" fill="#312e81"/>
      <polygon points="35,90 50,50 65,90" fill="#4338ca"/>
      <polygon points="60,90 75,55 90,90" fill="#312e81"/>
    </svg>
  `),

  sunflower: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#78350f"/>
      <circle cx="50" cy="50" r="32" fill="#facc15"/>
      <circle cx="50" cy="50" r="18" fill="#451a03"/>
      <circle cx="50" cy="50" r="12" fill="#78350f"/>
    </svg>
  `),

  goldenHour: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="ghRad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="60%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#ghRad)"/>
      <circle cx="50" cy="50" r="24" fill="#ffffff" opacity="0.6"/>
    </svg>
  `),

  levitating: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="levGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ec4899"/>
          <stop offset="50%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#levGrad)"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#ffffff" stroke-width="4"/>
      <circle cx="50" cy="50" r="16" fill="none" stroke="#ffffff" stroke-width="2"/>
    </svg>
  `),

  heatWaves: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="hwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="50%" stop-color="#d946ef"/>
          <stop offset="100%" stop-color="#f97316"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#hwGrad)"/>
      <path d="M10 35 Q30 20 50 35 T90 35" stroke="#ffffff" stroke-width="3" fill="none"/>
      <path d="M10 50 Q30 35 50 50 T90 50" stroke="#ffffff" stroke-width="3" fill="none"/>
      <path d="M10 65 Q30 50 50 65 T90 65" stroke="#ffffff" stroke-width="3" fill="none"/>
    </svg>
  `),

  // Right Sidebar Recently Played
  nightLights: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#090d16"/>
      <circle cx="25" cy="30" r="3" fill="#38bdf8"/>
      <circle cx="65" cy="20" r="2" fill="#818cf8"/>
      <circle cx="45" cy="50" r="4" fill="#a78bfa"/>
      <circle cx="80" cy="45" r="3" fill="#38bdf8"/>
      <path d="M0 75 Q50 60 100 75 L100 100 L0 100 Z" fill="#1e293b"/>
      <circle cx="30" cy="85" r="5" fill="#facc15" opacity="0.8"/>
      <circle cx="70" cy="82" r="6" fill="#f43f5e" opacity="0.8"/>
    </svg>
  `),

  afterglow: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="agGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#312e81"/>
          <stop offset="50%" stop-color="#4c1d95"/>
          <stop offset="100%" stop-color="#831843"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#agGrad)"/>
      <circle cx="50" cy="50" r="22" fill="#06b6d4" opacity="0.8"/>
      <circle cx="50" cy="50" r="12" fill="#f43f5e"/>
    </svg>
  `),

  riverSong: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="rsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#14532d"/>
          <stop offset="50%" stop-color="#047857"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#rsGrad)"/>
      <path d="M30 0 Q60 50 30 100 L55 100 Q85 50 55 0 Z" fill="#38bdf8" opacity="0.8"/>
    </svg>
  `),
};

export const artistPortraits = {
  theWeeknd: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="twGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#b91c1c"/>
          <stop offset="50%" stop-color="#450a0a"/>
          <stop offset="100%" stop-color="#0f0f12"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#twGrad)"/>
      <circle cx="100" cy="85" r="42" fill="#18181b"/>
      <path d="M60 170 C60 120 140 120 140 170 Z" fill="#dc2626"/>
      <rect x="75" y="80" width="50" height="12" rx="3" fill="#000000" stroke="#f87171" stroke-width="1.5"/>
      <path d="M70 65 Q100 35 130 65" fill="#09090b"/>
    </svg>
  `),

  arianaGrande: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="agPortrait" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#f472b6"/>
          <stop offset="60%" stop-color="#831843"/>
          <stop offset="100%" stop-color="#18181b"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#agPortrait)"/>
      <path d="M100 40 Q150 50 160 110" stroke="#451a03" stroke-width="18" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="90" r="38" fill="#fbcfe8"/>
      <path d="M65 175 C65 130 135 130 135 175 Z" fill="#db2777"/>
      <circle cx="100" cy="50" r="14" fill="#451a03"/>
    </svg>
  `),

  khalid: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="khGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#khGrad)"/>
      <circle cx="100" cy="90" r="42" fill="#78350f"/>
      <path d="M60 175 C60 130 140 130 140 175 Z" fill="#f59e0b"/>
      <path d="M65 70 Q100 40 135 70" fill="#18181b"/>
      <path d="M78 105 Q100 120 122 105" stroke="#18181b" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>
  `),

  dojaCat: createSvgUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="dcGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ec4899"/>
          <stop offset="50%" stop-color="#be185d"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#dcGrad)"/>
      <circle cx="100" cy="90" r="40" fill="#f472b6"/>
      <path d="M60 175 C60 130 140 130 140 175 Z" fill="#831843"/>
      <path d="M65 70 L80 40 L95 65 L105 65 L120 40 L135 70 Z" fill="#fdf2f8"/>
      <circle cx="85" cy="88" r="5" fill="#831843"/>
      <circle cx="115" cy="88" r="5" fill="#831843"/>
    </svg>
  `),
};
