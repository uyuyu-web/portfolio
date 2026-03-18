import React, { useState } from "react";
import "./ProfilePhoto.css";
import profilePic from "../assets/profile.jpg";

const ProfilePhoto = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);

    // 1秒後にアニメーションをリセット
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <img
      src={profilePic}
      alt="Profile"
      className={`profile-photo ${animate ? "animate" : ""}`}
      onClick={handleClick}
    />
  );
};

export default ProfilePhoto;
