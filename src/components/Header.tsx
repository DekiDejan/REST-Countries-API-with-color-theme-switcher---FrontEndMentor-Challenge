import { useState } from "react";
import moonRegularIcon from "./assets/moon-regular.svg";
import moonSolidIcon from "./assets/moon-solid.svg";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  console.log(isDark);

  const handleThemeChange = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else setIsDark(false);
  };

  return (
    <header className="flex justify-between items-center px-4 py-8 bg-white dark:bg-dark-blue shadow-md">
      <div>
        <span className="font-extrabold">Where in the world?</span>
      </div>
      <div onClick={handleThemeChange} className="flex gap-2">
        <img
          width={16}
          height={16}
          src={isDark ? moonSolidIcon : moonRegularIcon}
          alt="Theme Icon"
          className=""
        />
        <span>{isDark ? "Light" : "Dark"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
