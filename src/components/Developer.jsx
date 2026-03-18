import React from "react";
import TetrisGif from "../assets/tetris-demo.gif";
import ReactLogo from "../assets/tech/react.png";
import JSLogo from "../assets/tech/javascript.png";
import PythonLogo from "../assets/tech/python.png";
import CLogo from "../assets/tech/c.png";
import HTMLLogo from "../assets/tech/html.png";
import CSSLogo from "../assets/tech/css.png";
import GitLogo from "../assets/tech/git.png";
import JavaLogo from "../assets/tech/java.png";
import { useEffect } from "react";
import "../App.css";

function Developer() {


useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}, []);

  return (
    <section id="developer" className="section">

      <h1>Developer</h1>

      {/* ===================== */}
      {/* AI Sign Language Project */}
      {/* ===================== */}

      <div className="developer-content">

        {/* 左側文章 */}
        <div className="developer-text">

          <h2>AI Sign Language Translation</h2>

          <p>
            <><><><>I developed a real-time sign language translation system
            using <br/>pose estimation and deep learning models.</>
            The system extracts <br/>body and hand keypoints from video
            using OpenPose </><br/>and translates sign language into natural
            language sentences</> <br></br>using sequence models.</>
          </p>

          <p>
            <><>Two models were implemented: a Bi-LSTM with attention and a<br/>
            Transformer architecture. The Transformer achieved higher</><br/>
            translation accuracy while the Bi-LSTM provided faster
            real-time performance.</>
          </p>

          <p>
            <>This project demonstrates how pose-based motion data can be
            used to build <br/>accessible communication systems using AI.</>
          </p>

        </div>

        {/* 右側：論文 */}
        <div className="developer-media">

          <iframe
            src="/pdf/sign-language-translation.pdf"
            title="Research Paper"
          />

          <br /><br />

          <a
            href="/pdf/sign-language-translation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="play-button"
          >
            View Research Paper (PDF)
          </a>

        </div>

      </div>

      <div className="developer-content" style={{ marginBottom: "100px" }}></div>

      {/* ===================== */}
      {/* React Tetris */}
      {/* ===================== */}

      <div className="developer-content">

        {/* 左：説明 */}
        <div className="developer-text">

          <h2>React Tetris Game</h2>

          <p>
            <>I developed a <strong>Tetris game using React</strong> to practice
            JavaScript logic,<br/> state management, and game design.</>
          </p>

          <p>
            The game includes keyboard controls, score tracking,
            and dynamic block rotation.
          </p>

        </div>

        {/* 右：GIF + Link */}
        <div className="developer-media tetris-media">

  {/* GIF */}
  <img
    src={TetrisGif}
    alt="React Tetris Demo"
    className="tetris-gif"   // ← GIF専用クラス
  />

  {/* ボタン */}
  <a
    href="https://tetris-game-tan-rho.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="tetris-button"  // ← ボタン専用クラス
  >
    Play React Tetris
  </a>

</div>

      </div>

      {/* ===================== */}
      {/* Technologies */}
      {/* ===================== */}



      <div className="tech-section fade-in">

        <h2>Technologies I Use</h2>

        <div className="tech-grid">


  <img src={ReactLogo} alt="React" />
  <img src={JavaLogo} alt="Java"/>
  <img src={JSLogo} alt="JavaScript" />
  <img src={PythonLogo} alt="Python" />
  <img src={CLogo} alt="C Language" />
  <img src={HTMLLogo} alt="HTML" />
  <img src={CSSLogo} alt="CSS" />
  <img src={GitLogo} alt="Git" />

</div>

        </div>


    </section>
  );
}

export default Developer;