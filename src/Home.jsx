import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProfilePhoto from "./components/ProfilePhoto";
import GlitchBackground from "./components/GlitchBackground";
import { FiFile } from "react-icons/fi";

function Home() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const labels = ["Experience", "Developer", "Education", "About", "Contact"];
  const positions = [
    { top: 70, left: 5 },
    { top: 50, left: 75 },
    { top: 50, left: 4 },
    { top: 67, left: 80 },
    { top: 80, left: 77 },
  ];
  const paths = ["/experience", "/developer", "/education", "/about", "/contact"];

  // ローディングタイマー
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Hoverサウンド設定
  useEffect(() => {
    audioRef.current = new Audio("/sounds/hover-sound.mp3");
    audioRef.current.volume = 0.5;
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="game-loader">{[...Array(5)].map((_, i) => <span key={i}></span>)}</div>
        <p className="loading-text">LOADING...</p>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", backgroundColor: "#fcfbf5", minHeight: "100vh" }}>
      <GlitchBackground />
      <Header />

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          maxWidth: "930px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <ProfilePhoto />

        <p
          className="fade-up"
          style={{
            marginTop: "34px",
            lineHeight: "2.35",
            color: "#533434",
            fontSize: "50px",
          }}
        >
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "65px",
              color: "#050505",
              backgroundColor: "#f6b5b5",
              padding: "40px 14px",
              borderRadius: "10px",
            }}
          >
            Hey, I'm Kiyu.
          </span>
          <br />
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              backgroundColor: "#e6e5e5",
              padding: "25px 14px",
              borderRadius: "10px",
            }}
          >
            Here, you can check out
          </span>
          <br />
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              backgroundColor: "#f7f7c3",
              padding: "35px 14px",
              borderRadius: "10px",
              fontSize: "40px",
            }}
          >
            what I'm working on.
          </span>
          <br />
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              backgroundColor: "#e6e5e5",
              padding: "25px 40px",
              borderRadius: "10px",
            }}
          >
            I try my best to create things with passion and curiosity 👍
          </span>
        </p>
      </div>

      {/* ラベル */}
      {labels.map((label, index) => {
        const { top, left } = positions[index];
        return (
          <div
            key={label}
            style={{
              position: "absolute",
              top: `${top}%`,
              left: `${left}%`,
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "20px 18px",
              borderRadius: "12px",
              backgroundColor: "#e6e5e5",
              fontSize: "45px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              }
            }}
            onClick={() => navigate(paths[index])}
          >
            <FiFile />
            {label}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;