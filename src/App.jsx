import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
  return (
    <div className="loading-overlay">

      {/* 追加：背景の粒子 */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 4 + Math.random() * 6 + "s",
              animationDelay: Math.random() * 5 + "s"
            }}
          />
        ))}
      </div>

      <div className="game-loader">
        {[...Array(5)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <p className="loading-text">
        LOADING...
      </p>

    </div>
  );
}

  return (
    <div style={{ backgroundColor: "#fcfbf5" }}>
      <GlitchBackground />
      <Header />

      <section id="home" style={{ minHeight: "100vh", position: "relative" }}>
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
          For the best experience, please set your browser{" "}
          <strong>zoom</strong>.
        </span>
      </div>
    

          
        </div>


        
        {labels.map((label, index) => {
          const { top, left } = positions[index];
          return (
            <div
              key={label.name}
              className="home-label"
              style={{
                position: "absolute",
                top: top + "%",
                left: left + "%",
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
              onClick={() => scrollToSection(label.id)}
            >
              <FiFile /> {label.name} <span style={{ fontSize: "70px", marginLeft: "8px" }}>︙</span>
            </div>
          );
        })}
      </section>

      <Experience />
      <Developer />
      <Education />
      <About />
      <Contact />
    </div>
  );
}

export default App;