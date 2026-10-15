import React from 'react';
import { Search, Music2, Heart, Radio } from 'lucide-react';
import { friendActivity, recentlyPlayed } from '../data/mockData';
import { usePlayer } from '../context/usePlayer';
import './RightSidebar.css';

export default function RightSidebar({
  searchQuery = '',
  setSearchQuery = () => {},
}) {
  const { playTrack, currentTrack } = usePlayer();

  return (
    <aside className="spotify-right-sidebar" aria-label="Activity and Search">
      {/* 1. Search Bar at the Top */}
      <div className="right-sidebar-search-box">
        <div className="search-input-container">
          <Search size={16} className="search-icon-inline" />
          <input
            type="text"
            id="right-sidebar-search-input"
            className="right-sidebar-search-input"
            placeholder="Search songs, artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search songs, artists"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 2. Friend Activity Section */}
      <section className="right-sidebar-section friend-activity-section" aria-labelledby="friend-activity-heading">
        <div className="right-section-header">
          <h2 id="friend-activity-heading" className="right-section-title">
            Friend activity
          </h2>
          <button
            type="button"
            className="right-section-action-btn"
            onClick={(e) => e.preventDefault()}
          >
            VIEW ALL
          </button>
        </div>

        <div className="friends-list">
          {friendActivity.map((friend) => (
            <div key={friend.id} className="friend-card" id={`friend-${friend.id}`}>
              <div
                className="friend-avatar-badge"
                style={{ backgroundColor: friend.badgeBg }}
                aria-label={`Avatar for ${friend.name}`}
              >
                {friend.badgeLetter}
              </div>

              <div className="friend-details">
                <span className="friend-name">{friend.name}</span>
                <span className="friend-status" title={friend.status}>
                  {friend.status.includes('Listening') && (
                    <Music2 size={12} className="friend-status-icon" />
                  )}
                  {friend.status.includes('Liked') && (
                    <Heart size={12} className="friend-status-icon" fill="currentColor" />
                  )}
                  {friend.status.includes('Following') && (
                    <Radio size={12} className="friend-status-icon" />
                  )}
                  <span className="friend-status-text">{friend.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Recently Played Section */}
      <section className="right-sidebar-section recently-played-section" aria-labelledby="recently-played-heading">
        <div className="right-section-header">
          <h2 id="recently-played-heading" className="right-section-title">
            Recently played
          </h2>
          <button
            type="button"
            className="right-section-action-btn"
            onClick={(e) => e.preventDefault()}
          >
            MORE
          </button>
        </div>

        <div className="recently-played-cards">
          {recentlyPlayed.map((item) => {
            const isItemCurrent = currentTrack?.title === item.title;

            return (
              <div
                key={item.id}
                className={`recent-card-item ${isItemCurrent ? 'recent-item-active' : ''}`}
                id={`recent-${item.id}`}
                onClick={() =>
                  playTrack({
                    id: item.id,
                    title: item.title,
                    artist: item.genre,
                    thumbnail: item.thumbnail || item.image,
                    coverUrl: item.coverUrl || item.image,
                    audioUrl: item.audioUrl,
                  })
                }
                role="button"
                tabIndex={0}
                title={`Play ${item.title}`}
              >
                <div className="recent-card-cover-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="recent-card-cover-img"
                    loading="lazy"
                  />
                </div>

                <div className="recent-card-info">
                  <span className={`recent-card-title ${isItemCurrent ? 'is-green' : ''}`}>
                    {item.title}
                  </span>
                  <span className="recent-card-genre">{item.genre}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
