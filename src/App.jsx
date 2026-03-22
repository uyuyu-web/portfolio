import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ProfilePhoto from "./components/ProfilePhoto";
import GlitchBackground from "./components/GlitchBackground";
import Experience from "./components/Experience";
import Developer from "./components/Developer";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import { FiFile } from "react-icons/fi";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  const labels = [
    { name: "Experience", id: "experience" },
    { name: "Developer", id: "developer" },
    { name: "Education", id: "education" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const positions = [
    { top: 69, left: 19 },
    { top: 43, left: 65 },
    { top: 50, left: 4 },
    { top: 65, left: 85 },
    { top: 80, left: 77 },
  ];

  // ローディングタイマー
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // hover音の準備
  useEffect(() => {
    const audio = new Audio("/sounds/hover-sound.mp3"); // 音声ファイルパス
    audio.volume = 0.5;
    audioRef.current = audio;
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const playHoverSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {}); // 再生できない場合は無視
    }
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        {/* 背景の粒子 */}
        <div className="particles">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>

        {/* ジャンプするドット */}
        <div className="game-loader">{[...Array(5)].map((_, i) => <span key={i}></span>)}</div>

        {/* LOADING文字 */}
        <p className="loading-text">LOADING...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#fcfbf5" }}>
      {/* ヘッダー */}
      <Header />

      {/* ホームセクション */}
      <section id="home" style={{ minHeight: "100vh", position: "relative" }}>
        {/* ホーム画面のGlitch背景 */}
        <GlitchBackground />

        {/* 自己紹介 */}
        <div style={{ marginTop: "700px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <ProfilePhoto />
          <p
            className="fade-up"
            style={{
              marginTop: "90px",
              lineHeight: "3.1",
              color: "#533434",
              fontSize: "50px",
            }}
          >
            <span
              style={{
                fontSize: "90px",
                backgroundColor: "#f6b5b5",
                padding: "70px 74px",
                borderRadius: "10px",
              }}
            >
              Hey, I'm Kiyu.
            </span>
            <br />
            <span
              style={{
                fontSize: "70px",
                backgroundColor: "#e6e5e5",
                padding: "65px 70px",
                borderRadius: "10px",
              }}
            >
              Here, you can check out
            </span>
            <br />
            <span
              style={{
                backgroundColor: "#f7f7c3",
                padding: "60px 70px",
                borderRadius: "10px",
                fontSize: "65px",
              }}
            >
              what I'm working on.
            </span>
            <br />
            <span
              style={{
                backgroundColor: "#e6e5e5",
                padding: "80px 100px",
                fontSize: "65px",
                borderRadius: "10px",
              }}
            >
              I try my best to create things with passion and curiosity 👍
            </span>
          </p>

          {/* 注意文 */}
          <div
            style={{
              position: "absolute",
              bottom: "-107.5px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                backgroundColor: "#aec9f2",
                padding: "20px 30px",
                fontSize: "30px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              For the best experience, please set your browser <strong>zoom</strong>.
            </span>
          </div>
        </div>

        {/* ラベル（hoverで音） */}
        {labels.map((label, index) => {
          const { top, left } = positions[index];
          return (
            <div
              key={label.name}
              className="home-label"
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
                display: "flex",
                alignItems: "center",
                gap: "60px",
                padding: "50px 138px",
                borderRadius: "12px",
                backgroundColor: "#e6e5e5",
                fontSize: "60px",
                cursor: "pointer",
                zIndex: 5,
              }}
              onMouseEnter={playHoverSound} // ← hoverで音が鳴る
              onClick={() => scrollToSection(label.id)}
            >
              <FiFile /> {label.name}{" "}
              <span style={{ fontSize: "70px", marginLeft: "8px" }}>︙</span>
            </div>
          );
        })}
      </section>

      {/* 他セクション */}
      <Experience />
      <Developer />
      <Education />
      <About />
      <Contact />
    </div>
  );
}

export default App;