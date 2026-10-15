import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { quickPlayCards, popularAlbums } from '../data/mockData';
import { usePlayer } from '../context/usePlayer';
import './HomeView.css';

export default function HomeView({
  onSelectPlaylist,
  onNavigateBack,
  onNavigateForward,
  canGoBack = false,
  canGoForward = false,
}) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();

  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good morning';
    if (hour >= 12 && hour < 18) return 'Good afternoon';
    return 'Good evening';
  });

  return (
    <div className="home-view-wrapper" aria-label="Spotify Home View">
      {/* 1. Top Bar */}
      <header className="home-top-bar">
        <div className="top-bar-left">
          <div className="history-pill-nav">
            <button
              type="button"
              id="btn-history-back"
              className={`history-circle-btn ${!canGoBack ? 'disabled' : ''}`}
              title="Go back"
              aria-label="Go back"
              disabled={!canGoBack}
              onClick={onNavigateBack}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              id="btn-history-forward"
              className={`history-circle-btn ${!canGoForward ? 'disabled' : ''}`}
              title="Go forward"
              aria-label="Go forward"
              disabled={!canGoForward}
              onClick={onNavigateForward}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="top-bar-right">
          <button
            type="button"
            id="btn-home-upgrade"
            className="upgrade-pill-btn"
            title="Upgrade account"
          >
            UPGRADE
          </button>

          <div
            className="user-avatar-badge"
            id="user-badge-r"
            title="User Profile (Rishi)"
            aria-label="User Profile R"
          >
            <span className="user-badge-letter">R</span>
          </div>
        </div>
      </header>

      {/* Main Home Scrollable Area */}
      <div className="home-content-container">
        {/* 2. Greeting Heading */}
        <section className="greeting-header-section">
          <h1 className="home-greeting-title">{greeting}</h1>
        </section>

        {/* 3. 6 Quick-play Grid Cards */}
        <section className="quick-play-grid-section" aria-label="Quick Play Collection">
          <div className="quick-play-grid">
            {quickPlayCards.map((card) => {
              const isCurrent = currentTrack?.title === card.title;
              const isPlayingThis = isCurrent && isPlaying;

              return (
                <div
                  key={card.id}
                  id={card.id}
                  className={`quick-play-card ${isCurrent ? 'active-card-now' : ''}`}
                  onClick={() => {
                    if (card.title === 'Liked Songs') {
                      onSelectPlaylist('pl-liked-songs');
                    } else {
                      playTrack({
                        title: card.title,
                        artist: card.subtitle,
                        thumbnail: card.image,
                        coverUrl: card.image,
                        audioUrl: card.audioUrl,
                        duration: card.duration,
                      });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="quick-play-thumb-box">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="quick-play-thumb-img"
                    />
                  </div>

                  <div className="quick-play-text-box">
                    <div className="quick-play-title-row">
                      <span className={`quick-play-title ${isCurrent ? 'is-active-green' : ''}`}>
                        {card.title}
                      </span>
                      {isCurrent && isPlaying && (
                        <div className="playing-eq-bars" title="Now playing">
                          <span className="eq-bar eq-b1" />
                          <span className="eq-bar eq-b2" />
                          <span className="eq-bar eq-b3" />
                        </div>
                      )}
                    </div>
                    <span className="quick-play-subtitle">{card.subtitle}</span>
                  </div>

                  <button
                    type="button"
                    className={`quick-play-hover-btn ${isPlayingThis ? 'is-playing' : ''}`}
                    title={isPlayingThis ? `Pause ${card.title}` : `Play ${card.title}`}
                    aria-label={`Play ${card.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCurrent) {
                        togglePlay();
                      } else {
                        playTrack({
                          title: card.title,
                          artist: card.subtitle,
                          thumbnail: card.image,
                          coverUrl: card.image,
                          audioUrl: card.audioUrl,
                          duration: card.duration,
                        });
                      }
                    }}
                  >
                    {isPlayingThis ? (
                      <Pause size={20} fill="#000000" />
                    ) : (
                      <Play size={20} fill="#000000" className="play-icon-offset" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. "Made for you" / "Popular albums" Shelf */}
        <section className="popular-albums-shelf-section" aria-labelledby="shelf-heading-popular-albums">
          <div className="shelf-header-row">
            <div>
              <h2 id="shelf-heading-popular-albums" className="shelf-heading-title">
                Popular albums
              </h2>
              <span className="shelf-subheading">Made for you based on recent listening</span>
            </div>
            <button
              type="button"
              className="shelf-show-all-link"
              onClick={() => onSelectPlaylist('pl-your-library')}
            >
              SHOW ALL
            </button>
          </div>

          <div className="shelf-albums-grid">
            {popularAlbums.map((album) => {
              const isCurrent = currentTrack?.title === album.title;
              const isPlayingThis = isCurrent && isPlaying;

              return (
                <div
                  key={album.id}
                  id={album.id}
                  className={`album-card ${isCurrent ? 'active-album-card' : ''}`}
                  onClick={() => {
                    playTrack({
                      title: album.title,
                      artist: album.subtitle,
                      thumbnail: album.image,
                      coverUrl: album.image,
                      audioUrl: album.audioUrl,
                      duration: album.duration,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="album-card-cover-container">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="album-card-cover-img"
                      loading="lazy"
                    />

                    {/* Green Hover Play Button */}
                    <button
                      type="button"
                      className={`album-card-play-btn ${isPlayingThis ? 'is-playing' : ''}`}
                      title={isPlayingThis ? `Pause ${album.title}` : `Play ${album.title}`}
                      aria-label={`Play ${album.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCurrent) {
                          togglePlay();
                        } else {
                          playTrack({
                            title: album.title,
                            artist: album.subtitle,
                            thumbnail: album.image,
                            coverUrl: album.image,
                            audioUrl: album.audioUrl,
                            duration: album.duration,
                          });
                        }
                      }}
                    >
                      {isPlayingThis ? (
                        <Pause size={22} fill="#000000" />
                      ) : (
                        <Play size={22} fill="#000000" className="play-icon-offset" />
                      )}
                    </button>
                  </div>

                  <div className="album-card-meta">
                    <h3 className={`album-card-title ${isCurrent ? 'is-active-green' : ''}`}>
                      {album.title}
                    </h3>
                    <p className="album-card-subtitle">{album.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="home-bottom-spacer" />
      </div>
    </div>
  );
}
