import React, { useState } from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import './TrackItem.css';

export default function TrackItem({
  track,
  index,
  isActiveTrack = false,
  isPlaying = false,
  onPlayTrack,
  onToggleLike,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLikedLocal, setIsLikedLocal] = useState(track.isLiked ?? false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLikedLocal(!isLikedLocal);
    onToggleLike?.(track.id);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    onPlayTrack(track);
  };

  return (
    <div
      className={`track-item-row ${isActiveTrack ? 'active-row' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayClick}
      role="row"
      tabIndex={0}
      id={`track-row-${track.id}`}
      aria-label={`${track.title} by ${track.artist}`}
    >
      {/* 1. Index / Play button column */}
      <div className="track-col-index">
        {isHovered ? (
          <button
            type="button"
            className="row-play-btn"
            onClick={handlePlayClick}
            title={isActiveTrack && isPlaying ? "Pause" : `Play ${track.title}`}
            aria-label={isActiveTrack && isPlaying ? "Pause" : `Play ${track.title}`}
          >
            {isActiveTrack && isPlaying ? (
              <Pause size={16} fill="#ffffff" />
            ) : (
              <Play size={16} fill="#ffffff" className="play-triangle-row-offset" />
            )}
          </button>
        ) : isActiveTrack && isPlaying ? (
          <div className="equalizer-bars-icon" title="Playing">
            <span className="eq-bar eq-bar-1" />
            <span className="eq-bar eq-bar-2" />
            <span className="eq-bar eq-bar-3" />
            <span className="eq-bar eq-bar-4" />
          </div>
        ) : (
          <span className={`track-index-num ${isActiveTrack ? 'active-index-green' : ''}`}>
            {index + 1}
          </span>
        )}
      </div>

      {/* 2. Title & Artist Column */}
      <div className="track-col-title">
        <div className="track-row-art">
          <img
            src={track.coverUrl || '/images/album_neon.jpg'}
            alt={track.title}
            className="track-row-img"
            loading="lazy"
          />
        </div>

        <div className="track-row-text">
          <span className={`track-row-name ${isActiveTrack ? 'active-title-green' : ''}`}>
            {track.title}
          </span>
          <span className="track-row-artist" title={track.artist}>
            {track.artist}
          </span>
        </div>
      </div>

      {/* 3. Album Column */}
      <div className="track-col-album">
        <span className="track-row-album-name" title={track.album}>
          {track.album || "Single"}
        </span>
      </div>

      {/* 4. Date Added Column */}
      <div className="track-col-date">
        <span className="track-row-date">{track.dateAdded || "Recently"}</span>
      </div>

      {/* 5. Duration & Action Column */}
      <div className="track-col-duration">
        <button
          type="button"
          className={`row-heart-btn ${isLikedLocal ? 'liked' : ''} ${isHovered || isLikedLocal ? 'visible' : 'hidden'}`}
          onClick={handleLikeClick}
          title={isLikedLocal ? "Remove from Liked Songs" : "Save to Liked Songs"}
          aria-label="Save to Liked Songs"
        >
          <Heart
            size={16}
            fill={isLikedLocal ? "var(--spotify-green)" : "none"}
            color={isLikedLocal ? "var(--spotify-green)" : "currentColor"}
          />
        </button>

        <span className="track-duration-text">{track.duration}</span>

        <button
          type="button"
          className={`row-more-btn ${isHovered ? 'visible' : 'hidden'}`}
          onClick={(e) => e.stopPropagation()}
          title="More options"
          aria-label="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
