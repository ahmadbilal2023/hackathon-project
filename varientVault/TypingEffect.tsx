import React from "react";

export default function TypingEffect() {
  const text = "OONLINE SHOPPING SITE";
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); // Speed of typing effect, 200ms between each character

    // Cleanup function
    return () => {
      clearInterval(typingEffect);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <h1 className="text-center font-display text-2xl font-bold tracking-[-0.02em] drop-shadow-sm mb-10 md:text-7xl md:leading-[5rem]">
      {displayedText}
    </h1>
  );
}
