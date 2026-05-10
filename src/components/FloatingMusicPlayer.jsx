import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingMusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // POSISI FLOATING
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('music-position');
    return saved
      ? JSON.parse(saved)
      : { x: window.innerWidth - 120, y: window.innerHeight - 140 };
  });

  // AUTOPLAY
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.log('Autoplay diblok browser');
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // SIMPAN POSISI
  useEffect(() => {
    localStorage.setItem('music-position', JSON.stringify(position));
  }, [position]);

  // PLAY / PAUSE
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // VOLUME
  const increaseVolume = () => {
    if (!audioRef.current) return;

    const newVolume = Math.min(volume + 0.1, 1);

    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const decreaseVolume = () => {
    if (!audioRef.current) return;

    const newVolume = Math.max(volume - 0.1, 0);

    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 0px rgba(11,84,129,0.4);
            }
            50% {
              box-shadow: 0 0 25px rgba(11,84,129,0.9);
            }
            100% {
              box-shadow: 0 0 0px rgba(11,84,129,0.4);
            }
          }

          @keyframes equalizer {
            0% { height: 6px; }
            50% { height: 18px; }
            100% { height: 6px; }
          }
        `}
      </style>

      <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 1.05 }}
        onDragEnd={(event, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y,
          });
        }}
        initial={position}
        animate={position}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          width: '95px',
          height: '95px',
          borderRadius: '50%',
          overflow: 'hidden',
          cursor: 'grab',
          backdropFilter: 'blur(12px)',
          animation: isPlaying
            ? 'pulseGlow 2s infinite'
            : 'none',
        }}
      >
        {/* COVER */}
        <img
          src="/images/logo1.png"
          alt="Music Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            animation: 'rotate 12s linear infinite',
            animationPlayState: isPlaying
              ? 'running'
              : 'paused',
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          {/* PLAY BUTTON */}
          <button
            onClick={togglePlay}
            style={{
              border: 'none',
              background: 'rgba(255,255,255,0.15)',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          {/* EQUALIZER */}
          {isPlaying && (
            <div
              style={{
                display: 'flex',
                gap: '3px',
                marginTop: '8px',
                alignItems: 'flex-end',
                height: '20px',
              }}
            >
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  style={{
                    width: '4px',
                    background: 'white',
                    borderRadius: '999px',
                    animation: `equalizer ${
                      0.5 + bar * 0.2
                    }s infinite`,
                  }}
                />
              ))}
            </div>
          )}

          {/* VOLUME */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              marginTop: '6px',
            }}
          >
            <button
              onClick={decreaseVolume}
              style={volBtn}
            >
              -
            </button>

            <button
              onClick={increaseVolume}
              style={volBtn}
            >
              +
            </button>
          </div>
        </div>

        {/* AUDIO */}
        <audio
          ref={audioRef}
          src="/musik/marsimigrasi.mp3"
          loop
        />
      </motion.div>
    </>
  );
}

const volBtn = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.2)',
  color: 'white',
  cursor: 'pointer',
  fontSize: '12px',
};