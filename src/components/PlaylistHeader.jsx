import React from 'react';
import { Heart, User, Sparkles } from 'lucide-react';
import './PlaylistHeader.css';

export default function PlaylistHeader({ playlist, user }) {
  if (!playlist) return null;

  const {
    title,
    type = 'Public Playlist',
    description,
    coverImage,
    isLikedBadge,
    creator = 'Rishi Goswami',
    creatorAvatar,
    followers,
    tracks = [],
    totalTracks = tracks.length,
    totalDuration,
    accentColor = 'rgba(80, 56, 160, 0.8)',
  } = playlist;

  return (
    <header
      className="playlist-header"
      style={{
        '--playlist-accent': accentColor,
      }}
      aria-label={`${title} Header`}
    >
      <div className="playlist-header-backdrop" />

      <div className="playlist-header-content">
        {/* Large Cover Art with Drop Shadow */}
        <div className="playlist-cover-wrapper">
          {isLikedBadge ? (
            <div className="playlist-liked-cover" title="Liked Songs">
              <Heart size={64} fill="#ffffff" color="#ffffff" />
            </div>
          ) : coverImage ? (
            <img
              src={coverImage}
              alt={title}
              className="playlist-cover-image"
              loading="eager"
            />
          ) : (
            <div className="playlist-fallback-cover">
              <Sparkles size={48} />
            </div>
          )}
        </div>

        {/* Playlist Info */}
        <div className="playlist-meta-details">
          <span className="playlist-type-tag">{type}</span>
          <h1 className="playlist-display-title" title={title}>
            {title}
          </h1>

          {description && (
            <p className="playlist-description-text">{description}</p>
          )}

          <div className="playlist-creator-row">
            <div className="creator-avatar-bubble">
              {creatorAvatar || user?.avatar ? (
                <img
                  src={creatorAvatar || user?.avatar}
                  alt={creator}
                  className="creator-avatar-img"
                />
              ) : (
                <div className="creator-avatar-fallback">
                  <User size={14} />
                </div>
              )}
            </div>

            <span className="creator-name-bold">{creator}</span>

            {followers && (
              <>
                <span className="meta-bullet">•</span>
                <span className="creator-stat">{followers} saves</span>
              </>
            )}

            <span className="meta-bullet">•</span>
            <span className="creator-stat">
              {totalTracks} {totalTracks === 1 ? 'song' : 'songs'}
            </span>

            {totalDuration && (
              <>
                <span className="meta-bullet">•</span>
                <span className="creator-stat text-dimmed">{totalDuration}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
