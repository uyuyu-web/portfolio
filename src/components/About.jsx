import React, { useRef } from "react";
import "./About.css";

export default function About() {
  const cards = [
    { title: "Piano(Hover your mouse)", src: "/About/piano.mp4", type: "video" },
    { title: "Ice Hockey", src: "/About/hockey.png", type: "image" },
    { title: "Basketball", src: "/About/basketball.png", type: "image" },
    { title: "Band", src: "/About/band.jpg", type: "image" },
    {
      title: "Favorite Artist",
      src: "https://open.spotify.com/embed/playlist/14lqCKYHM5xa0uwILzNUjk?utm_source=generator",
      type: "spotify",
      color: "#1DB954"
    },
    {
      title: "Favorite Artist",
      src: "https://open.spotify.com/embed/playlist/5sKL2GzwkNUzT9n37B7HkU?utm_source=generator",
      type: "spotify",
      color: "#1DB954"
    }
  ];

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const card = cards[index];
    if (card.type === "video") {
      const video = videoRefs.current[index];
      if (video) {
        video.muted = false; // hoverで音声オン
        video.play();
      }
    }
  };

  const handleMouseLeave = (index) => {
    const card = cards[index];
    if (card.type === "video") {
      const video = videoRefs.current[index];
      if (video) {
        video.muted = true; // hover離れでミュート
        video.pause(); // 動画停止
        video.currentTime = 0; // 最初に戻す
      }
    }
  };

  return (
    <section id="about" className="about">
      <h1>About</h1>

      <div className="about-grid">
        {cards.map((card, index) => (
          <div
            className="about-card"
            key={index}
            style={card.type === "spotify" ? { borderTop: `5px solid ${card.color}` } : {}}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {card.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={card.src}
                muted
                loop
                preload="metadata"
                className="about-media"
              />
            ) : card.type === "image" ? (
              <img src={card.src} alt={card.title} className="about-media" />
            ) : (
              <iframe
                src={card.src}
                className="about-media"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                title={card.title}
              ></iframe>
            )}
            <h3 style={card.type === "spotify" ? { color: card.color } : {}}>
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}