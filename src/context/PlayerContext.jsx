import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { initialNowPlaying, playlistTracks } from '../data/mockData';
import { PlayerContext } from './playerContextDef';

export function PlayerProvider({ children }) {
  const audioRef = useRef(null);

  // Active track state (title, artist, coverUrl, audioUrl, duration)
  const [currentTrack, setCurrentTrack] = useState({
    ...initialNowPlaying,
    coverUrl: initialNowPlaying.coverUrl || initialNowPlaying.thumbnail,
    thumbnail: initialNowPlaying.thumbnail || initialNowPlaying.coverUrl,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialNowPlaying.currentTime ?? 101);
  const [duration, setDuration] = useState(initialNowPlaying.duration ?? 192);
  const [volume, setVolume] = useState(0.7); // 0.0 to 1.0 numeric volume
  const [playlist, setPlaylist] = useState(playlistTracks);

  // Synchronize audio setup when audioRef is mounted or track URL/volume changes
  useEffect(() => {
    if (audioRef.current) {
      if (!audioRef.current.src && currentTrack?.audioUrl) {
        audioRef.current.src = currentTrack.audioUrl;
      }
      audioRef.current.volume = volume;
    }
  }, [currentTrack?.audioUrl, volume]);

  // Play a specific track (or toggle if clicking active track)
  const playTrack = useCallback(
    (track) => {
      if (!track) return;

      const isSameTrack =
        currentTrack?.title === track.title ||
        (track.id && currentTrack?.id === track.id);

      if (isSameTrack) {
        // Toggle play/pause for same track
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play().catch((err) => {
              console.warn('Audio playback error:', err);
            });
            setIsPlaying(true);
          } else {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
        return;
      }

      // New track to play
      const normalizedTrack = {
        id: track.id || `track-${Date.now()}`,
        title: track.title,
        artist: track.artist || 'Curated Artist',
        album: track.album || 'Single',
        coverUrl: track.coverUrl || track.thumbnail || track.image,
        thumbnail: track.thumbnail || track.coverUrl || track.image,
        audioUrl:
          track.audioUrl ||
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        duration: track.durationSeconds || track.duration || 192,
        isLiked: track.isLiked || false,
      };

      setCurrentTrack(normalizedTrack);
      setCurrentTime(0);
      setIsPlaying(true);

      if (audioRef.current) {
        audioRef.current.src = normalizedTrack.audioUrl;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          console.warn('Audio playback error:', err);
        });
      }
    },
    [currentTrack]
  );

  // Toggle Live Playback
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      if (!audioRef.current.src && currentTrack?.audioUrl) {
        audioRef.current.src = currentTrack.audioUrl;
      }
      audioRef.current.play().catch((err) => {
        console.warn('Audio play failed:', err);
      });
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentTrack]);

  // Seek to specific timestamp in seconds
  const seek = useCallback(
    (seconds) => {
      const targetTime = Math.max(0, Math.min(seconds, duration || 192));
      setCurrentTime(targetTime);
      if (audioRef.current) {
        audioRef.current.currentTime = targetTime;
      }
    },
    [duration]
  );

  // Set volume level (0.0 to 1.0)
  const setVolumeLevel = useCallback((val) => {
    const clamped = Math.max(0, Math.min(1, typeof val === 'number' ? val : parseFloat(val) || 0));
    setVolume(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  // Advance to Next Track
  const nextTrack = useCallback(() => {
    if (!playlist || playlist.length === 0) return;

    const currentIndex = playlist.findIndex(
      (t) => t.title === currentTrack?.title || t.id === currentTrack?.id
    );

    const nextIndex =
      currentIndex >= 0 ? (currentIndex + 1) % playlist.length : 0;
    const target = playlist[nextIndex];
    playTrack(target);
  }, [playlist, currentTrack, playTrack]);

  // Return to Previous Track
  const prevTrack = useCallback(() => {
    if (!playlist || playlist.length === 0) return;

    // If more than 3 seconds into current track, restart current track
    if (audioRef.current && audioRef.current.currentTime > 3) {
      seek(0);
      return;
    }

    const currentIndex = playlist.findIndex(
      (t) => t.title === currentTrack?.title || t.id === currentTrack?.id
    );

    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    const target = playlist[prevIndex];
    playTrack(target);
  }, [playlist, currentTrack, playTrack, seek]);

  // Toggle Liked status on active track
  const toggleLike = useCallback(() => {
    setCurrentTrack((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
    }));
  }, []);

  // HTML5 Audio Event Handlers
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (
      audioRef.current &&
      audioRef.current.duration &&
      !isNaN(audioRef.current.duration)
    ) {
      setDuration(Math.floor(audioRef.current.duration));
    }
  };

  const handleEnded = () => {
    // Auto-play next track when current ends
    nextTrack();
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        playTrack,
        togglePlay,
        seek,
        setVolumeLevel,
        nextTrack,
        prevTrack,
        toggleLike,
        playlist,
        setPlaylist,
        audioRef,
      }}
    >
      {/* Hidden Global Audio Element persistent across all views */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={handlePlay}
        onPause={handlePause}
        preload="metadata"
      />
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerProvider;
