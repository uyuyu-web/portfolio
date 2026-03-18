import React, { useRef, useEffect } from "react";

const GlitchBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numSlices = 50;
    const numGroups = 5; // グループ数
    const slices = [];

    // スライス生成（グループ分け）
    for (let i = 0; i < numSlices; i++) {
      slices.push({
        x: Math.random() * width,
        y: Math.random() * height,
        w: 50 + Math.random() * 250,
        h: 30 + Math.random() * 20,
        color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
        visible: false,
        group: i % numGroups, // グループ番号
        frameCount: Math.floor(Math.random() * 300), // ランダムスタート
      });
    }

    // 各グループのタイマー設定
    const groups = Array.from({ length: numGroups }, (_, i) => ({
      visible: false,
      showDuration: 1 + Math.floor(Math.random() * 2), // 一瞬だけ表示
      hideDuration: 100 + Math.floor(Math.random() * 200), // 非表示は長め
      frameCount: Math.floor(Math.random() * 300)
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // グループの表示／非表示処理
      groups.forEach((group, gIdx) => {
        group.frameCount++;

        if (group.visible) {
          if (group.frameCount >= group.showDuration) {
            group.visible = false;
            group.frameCount = 0;
          }
        } else {
          if (group.frameCount >= group.hideDuration) {
            group.visible = true;
            group.frameCount = 0;
          }
        }
      });

      // スライス描画
      slices.forEach(slice => {
        const group = groups[slice.group];
        if (group.visible) {
          // 一瞬だけ表示されるスライス
          slice.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
          ctx.fillStyle = slice.color;
          ctx.fillRect(slice.x, slice.y, slice.w, slice.h);
        }
      });

      // ランダムノイズ（小さい点）
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
        ctx.fillRect(x, y, size, size);
      }

      // ランダムラインノイズ
      if (Math.random() < 0.02) {
        const y = Math.random() * height;
        ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
        ctx.fillRect(0, y, width, 1 + Math.random() * 3);
      }

      // 画面全体の微シフト
      if (Math.random() < 0.03) {
        const shiftX = Math.random() * 10 - 5;
        const shiftY = Math.random() * 3 - 1.5;
        ctx.drawImage(canvas, shiftX, shiftY, width, height);
      }

      requestAnimationFrame(draw);
    };

    draw();

    // リサイズ対応
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(0.5px) contrast(1.2)"
      }}
    />
  );
};

export default GlitchBackground;