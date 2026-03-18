import { useState, useEffect } from "react";
import "../App.css";
import "./Experience.css";
function Experience() {

  // ラーメン店スライド写真
  const ramenImages = [
    "/images/ramen-team1.jpg",
    "/images/ramen-team2.jpg",
    "/images/ramen-coworker1.jpg",
    "/images/ramen-coworker2.jpg",
    "/images/ramen-coworker3.jpg",
    "/images/ramen-coworker4.jpg",
  ];

  // バスケスライド写真（2ショットのみ）
  const basketballImages = [
    "/images/basketball-2shot1.jpg",
    "/images/basketball-2shot2.jpg",
    "/images/basketball-2shot3.jpg",
    "/images/basketball-2shot4.jpg",
  ];

  const [ramenIndex, setRamenIndex] = useState(0);
  const [basketIndex, setBasketIndex] = useState(0);
  const [pausedRamen, setPausedRamen] = useState(false);
  const [pausedBasket, setPausedBasket] = useState(false);

  // ラーメンスライド
  useEffect(() => {
    if (pausedRamen) return;
    const interval = setInterval(() => {
      setRamenIndex((prev) => (prev + 1) % ramenImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pausedRamen]);

  // バスケスライド
  useEffect(() => {
    if (pausedBasket) return;
    const interval = setInterval(() => {
      setBasketIndex((prev) => (prev + 1) % basketballImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pausedBasket]);

  return (
    <section id="experience" className="section">

      <h1>Experience</h1>

      {/* ====== ラーメン店 ====== */}
      <h2>Kitchen Manager – Local Ramen Restaurant</h2>

      {/* 外観写真 */}
      <div className="ramen-hero">
        <img src="/images/ramen-shop.jpg" alt="Ramen shop exterior" />
      </div>

      {/* テキスト + スライド */}
      <div className="ramen-content">
        <div className="ramen-text">
          <p>
            <><>I worked for approximately <strong>1.5 years</strong> at a busy ramen
            restaurant <br/>while studying at university. After six months,</>
            I was promoted to <br/><strong>Kitchen Manager</strong>.</>
          </p>
          <p>
            <>My responsibilities included <strong>training new staff</strong>,
            managing inventory,<br/> coordinating shifts, and maintaining hygiene
            and food safety standards.</>
          </p>
          <p>
            <>I improved the kitchen workflow and staff communication which helped<br/>
            <strong> reduce waiting times during peak hours</strong>.</>
          </p>
          <p>
            This role strengthened my
            <><strong> leadership, communication,<br/> and problem-solving skills</strong>.</>
          </p>
        </div>

        {/* スライダー */}
        <div
          className="ramen-slider"
          onMouseEnter={() => setPausedRamen(true)}
          onMouseLeave={() => setPausedRamen(false)}
        >
          <img
            key={ramenIndex}
            src={ramenImages[ramenIndex]}
            alt="Ramen team"
            className="slide-image"
          />
          <div className="slider-dots">
            {ramenImages.map((_, i) => (
              <span
                key={i}
                className={i === ramenIndex ? "dot active" : "dot"}
                onClick={() => setRamenIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

<div className="developer-content" style={{ marginBottom: "1000px" }}></div>


      {/* ====== バスケットボール ====== */}
      <h2>Basketball Community Leader – Toronto Japanese Basketball Group</h2>

      {/* 集合写真（1枚） */}
      <div className="basket-hero">
        <img
          src="/images/basketball-hero.jpg"
          alt="Basketball team large group"
        />
      </div>

      {/* テキスト + 2ショットスライド */}
      <div className="basket-content">
        <div className="basket-text">
          <p>
           <><><>I founded a <strong>Japanese basketball group in Toronto</strong> <br/>to connect
            Japanese residents who wanted </>to play basketball. <br/>We started with 20 people
            and </>grew to over 100 members <br/>using social media platforms.</>
          </p>
          <p>
            <><>I organized weekly sessions, managed scheduling, and<br/> coordinated with
            members to ensure smooth events.</> <br/>Our group now runs <strong>weekly games</strong></>
            every Monday.
          </p>
          <p>
            <>Leading this community strengthened my
            <strong> leadership,<br/> organizational, and communication skills</strong>.</>
          </p>
          <p>
            <><>This experience, together with my professional work as<br/> a Kitchen Manager,
            showcases my ability to </>lead teams <br/>and manage multiple responsibilities effectively.</>
          </p>
        </div>

{/* GIF */}
    <div className="basket-gif">
      <img src="/images/basketball-dribble.gif" alt="Basketball animation" />
    </div>
    
        {/* スライダー（2ショットのみ） */}
        <div
          className="basket-slider"
          onMouseEnter={() => setPausedBasket(true)}
          onMouseLeave={() => setPausedBasket(false)}
        >
          <img
            key={basketIndex}
            src={basketballImages[basketIndex]}
            alt="Basketball 2-shot"
            className="slide-image"
          />
          <div className="slider-dots">
            {basketballImages.map((_, i) => (
              <span
                key={i}
                className={i === basketIndex ? "dot active" : "dot"}
                onClick={() => setBasketIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Experience;