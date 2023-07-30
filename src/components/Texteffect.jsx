import { useState, useEffect } from "react";

const Texteffect = ({ text }) => {
  const [displayText, setDisplayText] = useState(text[0] || ""); // Set initial display text with the first character

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText(""); // Reset para cuando cambie el text

    const timer = setInterval(() => {
      if (currentIndex < text.length - 1) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  useEffect(() => {
    setDisplayText(text[0] || ""); // Reset cuando text cambie
  }, [text]);

  return <p>{displayText}</p>;
};

export default Texteffect;
