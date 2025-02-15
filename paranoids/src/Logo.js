import { useState, useEffect } from "react";

const Logo = () => {
  const letters = [
    { char: "p", color: "rgb(228, 100, 120)" },
    { char: "a", color: "rgb(230, 230, 109)" },
    { char: "r", color: "rgb(80, 140, 220)" },
    { char: "a", color: "rgb(120, 180, 120)" },
    { char: "n", color: "rgb(180, 120, 200)" },
    { char: "o", color: "rgb(150, 200, 230)" },
    { char: "i", color: "rgb(140, 140, 140)" },
    { char: "d", color: "rgb(220, 220, 220)" },
    { char: "s", color: "rgb(150, 180, 120)" },
    { char: "?", color: "rgb(120, 120, 220)" },
  ];
/* 화이트 로고 /*
  const letters = [
    { char: "p", color: "rgb(220, 220, 220)" },
    { char: "a", color: "rgb(220, 220, 220)" },
    { char: "r", color: "rgb(220, 220, 220)" },
    { char: "a", color: "rgb(220, 220, 220)" },
    { char: "n", color: "rgb(220, 220, 220)" },
    { char: "o", color: "rgb(220, 220, 220)" },
    { char: "i", color: "rgb(220, 220, 220)" },
    { char: "d", color: "rgb(220, 220, 220)" },
    { char: "s", color: "rgb(220, 220, 220)" },
    { char: "?", color: "rgb(220, 220, 220)" },
  ];
 */
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="logo">
      {letters.map((item, index) => {
        // 중앙을 기준으로 크기 변화 (스크롤에 따라 조정)
        const scale = 2.5 + Math.sin((scrollY / 200 + index * 0.2)) * 0.5;
        return (
          <span
            key={index}
            style={{
              color: item.color,
              fontSize: `${scale}rem`,
              transition: "font-size 0.2s ease-out",
            }}
          >
            {item.char}
          </span>
        );
      })}
    </div>
  );
};



export default Logo;
