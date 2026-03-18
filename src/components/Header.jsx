// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <header className="header-bar">
      {/* 左上の丸い「K」ボタン */}
      <button className="initial-button" onClick={handleReload}>
        K
      </button>
    </header>
  );
};

export default Header;