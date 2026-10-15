import React from 'react';
import {
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
  Clock,
  Radio,
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({
  currentView = 'home',
  activeNav = 'home',
  onGoHome,
  onGoSearch,
  onSelectPlaylist,
  activePlaylistId = 'sp-playlist',
}) {
  return (
    <aside className="spotify-sidebar" aria-label="Main Navigation">
      {/* 1. Official Spotify SVG Logo + "Spotify" Text */}
      <div className="sidebar-brand-container">
        <button
          type="button"
          className="spotify-brand-btn"
          onClick={onGoHome}
          title="Spotify Home"
          aria-label="Spotify Home"
        >
          <svg
            className="spotify-circle-logo-svg"
            viewBox="0 0 100 100"
            width="38"
            height="38"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="50" fill="#1ed760" />
            <path
              d="M70.5 43.8c-15.6-9.3-41.5-10.2-56.5-5.6-2.4.7-5-.7-5.7-3.1-.7-2.4.7-5 3.1-5.7 17.3-5.2 46-4.2 64 6.5 2.2 1.3 2.9 4.1 1.6 6.3-1.3 2.2-4.1 2.9-6.5 1.6zm.5 12.3c-1.1 1.8-3.4 2.4-5.2 1.3-13.1-8-33-10.3-48.4-5.6-2 .6-4.1-.5-4.8-2.5-.6-2 .5-4.1 2.5-4.8 17.6-5.4 39.5-2.8 54.6 6.5 1.8 1.1 2.4 3.4 1.3 5.1zm-1.3 12.2c-.9 1.4-2.8 1.9-4.2 1-11.4-7-25.8-8.5-42.7-4.7-1.6.4-3.2-.6-3.6-2.2-.4-1.6.6-3.2 2.2-3.6 18.5-4.2 34.4-2.4 47.2 5.3 1.4.9 1.9 2.8 1.1 4.2z"
              fill="#000000"
            />
          </svg>
          <span className="spotify-brand-text">Spotify</span>
        </button>
      </div>

      {/* 2. Primary Navigation */}
      <nav className="sidebar-primary-nav" aria-label="Main">
        <ul className="sidebar-nav-list">
          <li>
            <button
              type="button"
              id="sidebar-nav-home"
              className={`sidebar-nav-btn ${currentView === 'home' && activeNav === 'home' ? 'active' : ''}`}
              onClick={onGoHome}
            >
              <Home size={22} className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Home</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              id="sidebar-nav-search"
              className={`sidebar-nav-btn ${activeNav === 'search' ? 'active' : ''}`}
              onClick={onGoSearch}
            >
              <Search size={22} className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Search</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              id="sidebar-nav-library"
              className={`sidebar-nav-btn ${currentView === 'playlist' && activePlaylistId === 'pl-your-library' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-your-library')}
            >
              <Library size={22} className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">Your Library</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* 3. PLAYLISTS Category */}
      <div className="sidebar-playlists-section">
        <div className="playlists-category-heading">
          <span className="playlists-title">PLAYLISTS</span>
        </div>

        <ul className="playlists-menu-list">
          <li>
            <button
              type="button"
              id="playlist-item-your-library"
              className={`playlist-menu-item ${currentView === 'playlist' && activePlaylistId === 'pl-your-library' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-your-library')}
            >
              <Library size={18} className="playlist-menu-icon" />
              <span className="playlist-menu-text">Your Library</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              id="playlist-item-create-playlist"
              className={`playlist-menu-item ${currentView === 'playlist' && activePlaylistId === 'pl-create-playlist' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-create-playlist')}
            >
              <PlusSquare size={18} className="playlist-menu-icon" />
              <span className="playlist-menu-text">Create Playlist</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              id="playlist-item-liked-songs"
              className={`playlist-menu-item ${currentView === 'playlist' && activePlaylistId === 'pl-liked-songs' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-liked-songs')}
            >
              <Heart size={18} className="playlist-menu-icon icon-liked" fill="#ffffff" />
              <span className="playlist-menu-text">Liked Songs</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              id="playlist-item-listen-later"
              className={`playlist-menu-item ${currentView === 'playlist' && activePlaylistId === 'pl-listen-later' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-listen-later')}
            >
              <Clock size={18} className="playlist-menu-icon" />
              <span className="playlist-menu-text">Listen Later</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              id="playlist-item-podcasts"
              className={`playlist-menu-item ${currentView === 'playlist' && activePlaylistId === 'pl-podcasts' ? 'active' : ''}`}
              onClick={() => onSelectPlaylist('pl-podcasts')}
            >
              <Radio size={18} className="playlist-menu-icon" />
              <span className="playlist-menu-text">Podcasts</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
