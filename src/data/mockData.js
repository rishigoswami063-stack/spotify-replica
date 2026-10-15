import { albumArt, artistPortraits } from './artAssets';

export const currentUser = {
  name: "Rishi",
  badge: "R",
  avatar: null,
  isPremium: false,
};

// Initial now-playing track matching Requirement 7
export const initialNowPlaying = {
  id: "track-young-blood",
  title: "Young Blood",
  artist: "Vuce",
  album: "Young Blood - Single",
  thumbnail: albumArt.youngBlood,
  coverUrl: albumArt.youngBlood,
  duration: 192, // 3:12
  currentTime: 101, // 1:41
  durationFormatted: "3:12",
  currentTimeFormatted: "1:41",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  isLiked: false,
  isPlaying: false,
};

// 6 Quick-play grid cards matching Requirement 5
export const quickPlayCards = [
  {
    id: "quick-liked-songs",
    title: "Liked Songs",
    subtitle: "243 songs",
    image: albumArt.likedSongs,
    thumbnail: albumArt.likedSongs,
    coverUrl: albumArt.likedSongs,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    isLikedBadge: true,
    accentColor: "rgba(69, 10, 245, 0.4)",
    duration: 243,
  },
  {
    id: "quick-daily-mix-1",
    title: "Daily Mix 1",
    subtitle: "Spotify",
    image: albumArt.dailyMix1,
    thumbnail: albumArt.dailyMix1,
    coverUrl: albumArt.dailyMix1,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    accentColor: "rgba(2, 132, 199, 0.4)",
    duration: 215,
  },
  {
    id: "quick-mood-booster",
    title: "Mood Booster",
    subtitle: "A playlist",
    image: albumArt.moodBooster,
    thumbnail: albumArt.moodBooster,
    coverUrl: albumArt.moodBooster,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    accentColor: "rgba(245, 158, 11, 0.4)",
    duration: 198,
  },
  {
    id: "quick-discover-weekly",
    title: "Discover Weekly",
    subtitle: "New music",
    image: albumArt.discoverWeekly,
    thumbnail: albumArt.discoverWeekly,
    coverUrl: albumArt.discoverWeekly,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    accentColor: "rgba(99, 102, 241, 0.4)",
    duration: 228,
  },
  {
    id: "quick-chill",
    title: "Chill",
    subtitle: "Calm vibes",
    image: albumArt.chill,
    thumbnail: albumArt.chill,
    coverUrl: albumArt.chill,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    accentColor: "rgba(13, 148, 136, 0.4)",
    duration: 184,
  },
  {
    id: "quick-summer",
    title: "Summer",
    subtitle: "Hot hits",
    image: albumArt.summer,
    thumbnail: albumArt.summer,
    coverUrl: albumArt.summer,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    accentColor: "rgba(244, 63, 94, 0.4)",
    duration: 210,
  },
];

// 5 Popular albums matching Requirement 5 & 6
export const popularAlbums = [
  {
    id: "album-focus-flow",
    title: "Focus Flow",
    subtitle: "52 songs",
    image: albumArt.focusFlow,
    thumbnail: albumArt.focusFlow,
    coverUrl: albumArt.focusFlow,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    tag: "Playlist",
    accentColor: "#047857",
    duration: 254,
  },
  {
    id: "album-night-drive",
    title: "Night Drive",
    subtitle: "68 songs",
    image: albumArt.nightDrive,
    thumbnail: albumArt.nightDrive,
    coverUrl: albumArt.nightDrive,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    tag: "Album",
    accentColor: "#831843",
    duration: 236,
  },
  {
    id: "album-top-50-global",
    title: "Top 50 - Global",
    subtitle: "50 songs",
    image: albumArt.top50Global,
    thumbnail: albumArt.top50Global,
    coverUrl: albumArt.top50Global,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    tag: "Chart",
    accentColor: "#15803d",
    duration: 205,
  },
  {
    id: "album-rapcaviar",
    title: "RapCaviar",
    subtitle: "76 songs",
    image: albumArt.rapCaviar,
    thumbnail: albumArt.rapCaviar,
    coverUrl: albumArt.rapCaviar,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    tag: "Playlist",
    accentColor: "#ca8a04",
    duration: 195,
  },
  {
    id: "album-peaceful-piano",
    title: "Peaceful Piano",
    subtitle: "39 songs",
    image: albumArt.peacefulPiano,
    thumbnail: albumArt.peacefulPiano,
    coverUrl: albumArt.peacefulPiano,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    tag: "Album",
    accentColor: "#334155",
    duration: 218,
  },
];

// Playlist view numbered tracklist (5 tracks) matching Requirement 6
export const playlistTracks = [
  {
    id: "pl-track-1",
    index: 1,
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: "4:03",
    durationSeconds: 243,
    thumbnail: albumArt.midnightCity,
    coverUrl: albumArt.midnightCity,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    isLiked: false,
  },
  {
    id: "pl-track-2",
    index: 2,
    title: "Sunflower",
    artist: "Post Malone",
    album: "Spider-Man: Into the Spider-Verse",
    duration: "2:38",
    durationSeconds: 158,
    thumbnail: albumArt.sunflower,
    coverUrl: albumArt.sunflower,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    isLiked: true,
  },
  {
    id: "pl-track-3",
    index: 3,
    title: "Golden Hour",
    artist: "JVKE",
    album: "this is what ____ feels like",
    duration: "3:29",
    durationSeconds: 209,
    thumbnail: albumArt.goldenHour,
    coverUrl: albumArt.goldenHour,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    isLiked: false,
  },
  {
    id: "pl-track-4",
    index: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    durationSeconds: 203,
    thumbnail: albumArt.levitating,
    coverUrl: albumArt.levitating,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    isLiked: false,
  },
  {
    id: "pl-track-5",
    index: 5,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: "3:58",
    durationSeconds: 238,
    thumbnail: albumArt.heatWaves,
    coverUrl: albumArt.heatWaves,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    isLiked: true,
  },
];

// Circular Artist Grid (4 artists) matching Requirement 6
export const circularArtists = [
  {
    id: "artist-the-weeknd",
    name: "The Weeknd",
    genre: "R&B / Pop",
    portrait: artistPortraits.theWeeknd,
    thumbnail: artistPortraits.theWeeknd,
    coverUrl: artistPortraits.theWeeknd,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "artist-ariana-grande",
    name: "Ariana Grande",
    genre: "Pop",
    portrait: artistPortraits.arianaGrande,
    thumbnail: artistPortraits.arianaGrande,
    coverUrl: artistPortraits.arianaGrande,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "artist-khalid",
    name: "Khalid",
    genre: "R&B",
    portrait: artistPortraits.khalid,
    thumbnail: artistPortraits.khalid,
    coverUrl: artistPortraits.khalid,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "artist-doja-cat",
    name: "Doja Cat",
    genre: "Pop / Rap",
    portrait: artistPortraits.dojaCat,
    thumbnail: artistPortraits.dojaCat,
    coverUrl: artistPortraits.dojaCat,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

// Right Sidebar Friend Activity matching Requirement 4
export const friendActivity = [
  {
    id: "friend-alicia",
    name: "Alicia",
    status: "Listening to Ocean Eyes",
    badgeLetter: "A",
    badgeBg: "#a855f7", // purple
  },
  {
    id: "friend-noah",
    name: "Noah",
    status: "Liked Synchronicity",
    badgeLetter: "N",
    badgeBg: "#0ea5e9", // cyan/blue
  },
  {
    id: "friend-sophia",
    name: "Sophia",
    status: "Following Mood Booster",
    badgeLetter: "S",
    badgeBg: "#10b981", // green/emerald
  },
];

// Right Sidebar Recently Played matching Requirement 4
export const recentlyPlayed = [
  {
    id: "rp-night-lights",
    title: "Night Lights",
    genre: "Ambient",
    image: albumArt.nightLights,
    thumbnail: albumArt.nightLights,
    coverUrl: albumArt.nightLights,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: "rp-afterglow",
    title: "Afterglow",
    genre: "Electronic",
    image: albumArt.afterglow,
    thumbnail: albumArt.afterglow,
    coverUrl: albumArt.afterglow,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: "rp-river-song",
    title: "River Song",
    genre: "Indie",
    image: albumArt.riverSong,
    thumbnail: albumArt.riverSong,
    coverUrl: albumArt.riverSong,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
];

// Sidebar PLAYLISTS items matching Requirement 3
export const sidebarPlaylistItems = [
  { id: "pl-your-library", title: "Your Library" },
  { id: "pl-create-playlist", title: "Create Playlist" },
  { id: "pl-liked-songs", title: "Liked Songs" },
  { id: "pl-listen-later", title: "Listen Later" },
  { id: "pl-podcasts", title: "Podcasts" },
];
