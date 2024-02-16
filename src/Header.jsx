import React, { useState, useEffect } from "react";

const Header = ({ title }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const headerStyle = {
    textShadow: "2px 2px 2px #fff",
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          "https://source.unsplash.com/random/800x600/?mars"
        );
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        setBackgroundImage(`url(${url})`);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <header className="Header" style={{ backgroundImage }} data-cy="asyncImage">
      <h1 style={headerStyle}>{title}</h1>
    </header>
  );
};

export default Header;
