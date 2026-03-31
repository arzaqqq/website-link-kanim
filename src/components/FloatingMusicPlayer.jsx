import { useState, useRef, useEffect } from 'react';

export default function FloatingMusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume dari 0.0 sampai 1.0

  useEffect(() => {
    // Mencoba memutar otomatis saat komponen dimuat (masuk halaman web)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay dicegah oleh browser. Pengguna harus klik play.");
        });
    }

    // Fungsi cleanup: mematikan musik saat keluar dari halaman web/komponen di-unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const increaseVolume = () => {
    if (audioRef.current && volume < 1) {
      const newVolume = Math.min(volume + 0.1, 1);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current && volume > 0) {
      const newVolume = Math.max(volume - 0.1, 0);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <>
      {/* Sisipkan keyframes CSS di sini agar tidak perlu file eksternal */}
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
        `}
      </style>
      <div style={styles.container}>
        {/* Ganti src dengan lokasi gambar untuk lingkaran musik kamu */}
        <img 
          src="images/logo1.png" // Contoh gambar, taruh gambarmu di folder public
          alt="Cover Musik" 
          style={{
            ...styles.image,
            // Terapkan animasi rotasi selalu, dan atur status jeda/jalan berdasarkan isPlaying
            animation: 'rotate 10s linear infinite',
            animationPlayState: isPlaying ? 'running' : 'paused'
          }} 
        />
        
        {/* Overlay hitam transparan yang berisi tombol, sekarang SELALU terlihat dan lebih gelap */}
        <div style={styles.overlay}>
          <button onClick={togglePlay} style={styles.playButton}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          
          <div style={styles.volumeControls}>
            <button onClick={decreaseVolume} style={styles.volButton}>-</button>
            <span style={styles.volText}>Vol</span>
            <button onClick={increaseVolume} style={styles.volButton}>+</button>
          </div>
        </div>

        {/* File audio dari folder public/musik/ */}
        <audio ref={audioRef} src="/musik/marsimigrasi.mp3" loop />
      </div>
    </>
  );
}

// Styling bawaan React agar bentuknya bulat, mengambang di kanan bawah, dan ada overlay permanen yang gelap
const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 9999,
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Lebih gelap (0.7 dari sebelumnya 0.5)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1, // SELALU TERLIHAT JELAS
    transition: 'opacity 0.3s ease',
  },
  playButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    margin: '0',
    padding: '0',
    fontWeight: 'bold', // Membuat simbol tombol lebih jelas
  },
  volumeControls: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    gap: '5px',
  },
  volButton: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '12px',
  },
  volText: {
    color: 'white',
    fontSize: '10px',
  }
};