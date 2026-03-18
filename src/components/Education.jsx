// src/components/Education.jsx
import React, { useRef, useEffect, useState } from "react";
import "./Education.css";

export default function Education() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const hasPlayed = useRef(false);

  // タイムラインデータ
  const timeline = [
    { date: "2003年6月", text: "日本福井県出身",  top: "80%", left: "50%", appearAt: 0.2 },
    { date: "2016年4月", text: <>敦賀市立松陸中学校入学<br/> バスケ部</>,  top: "67%", left: "50%", appearAt: 0.3 },
    { date: "2018年10月", text: "英語検定準二級取得",  top: "55%", left: "46%", appearAt: 0.34 },
    { date: "2019年3月", text: "敦賀市立松陸中学校 卒業",  top: "60%", left: "57%", appearAt: 0.4 },
    { date: "2019年4月", text: <>福井県立敦賀高等学校<br/> 普通科 入学</>,  top: "45%", left: "38%", appearAt: 0.55 },
    { date: "2021年5月", text: <>バスケ部のキャプテン<br/>としてつとめる</>,  top: "35%", left: "48%", appearAt: 0.6 },
    { date: "2022年4月", text: "IELTS 6.5 取得",  top: "40%", left: "30%", appearAt: 0.67  },
    { date: "2022年8月", text: <>Algoma University <br />Computer Science 入学</>,  top: "18%", left: "40%", appearAt: 0.73 },
    { date: "2025年5月", text: <>AI Sign Language Translation<br /> 開発</>,  top: "20%", left: "55%", appearAt: 0.76 },
    { date: "2025年6月", text: <>Algoma University<br />Computer Science 卒業</>,  top: "30%", left: "69%", appearAt: 0.8 }
  ];

  // 初期位置
  const [positions, setPositions] = useState(
    timeline.map(() => ({ top: 100, left: 50, opacity: 0, scale: 0.5 }))
  );

  // 動画再生開始（IntersectionObserver）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current) {
            videoRef.current?.play().catch(() => {});
            hasPlayed.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 補間関数（Quadratic Bezier）
  const interpolate = (start, control, end, t) => {
    return (1-t)*(1-t)*start + 2*(1-t)*t*control + t*t*end;
  };

  // 動画進行に応じて位置・フェードイン・スケールを更新
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const tVideo = video.currentTime / video.duration;

      const newPositions = timeline.map((item) => {
        const appearAt = item.appearAt ?? 0;
        let t = (tVideo - appearAt) / 0.05;
        t = Math.min(Math.max(t, 0), 1);

        const startTop = 100;
        const startLeft = 50;
        const controlTop = parseFloat(item.top) - 10;
        const controlLeft = (parseFloat(item.left) + startLeft) / 2;

        const top = interpolate(startTop, controlTop, parseFloat(item.top), t);
        const left = interpolate(startLeft, controlLeft, parseFloat(item.left), t);
        const opacity = t;
        const scale = 0.5 + 0.5 * t;

        return { top: `${top}%`, left: `${left}%`, opacity, scale };
      });

      setPositions(newPositions);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [timeline]);

  return (
    <section
      id="education"
      className="section"
      ref={sectionRef}
      style={{ backgroundColor: "#FAFFFE", paddingTop: "40px", paddingBottom: 0 }}
    >
      <h1 className="education-title">Education</h1>

      <div className="video-container">
        {/* public 配置の場合は /videos/tree-growth.mp4 */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="education-video"
          src="/videos/tree-growth.mp4"
        />

        {timeline.map((item, i) => (
          <div
            key={i}
            className="timeline-fruit"
            style={{
              top: positions[i].top,
              left: positions[i].left,
              opacity: positions[i].opacity,
              transform: `translateX(-50%) scale(${positions[i].scale})`
            }}
          >
            <strong>{item.date}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}