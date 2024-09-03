import { useState } from "react";
import moonRegularIcon from "./assets/moon-regular.svg";
import moonSolidIcon from "./assets/moon-solid.svg";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    const documentClass = document.documentElement.classList;

    documentClass.toggle("dark");
    documentClass.contains("dark") ? setIsDark(true) : setIsDark(false);
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-20 py-8 bg-white dark:bg-dark-blue shadow-md">
      <div>
        <span className="font-extrabold md:text-xl">Where in the world?</span>
      </div>
      <div onClick={handleThemeChange} className="flex gap-2 cursor-pointer">
        <img
          width={14}
          height={14}
          src={isDark ? moonRegularIcon : moonSolidIcon}
          alt="Theme Icon"
          className=""
        />
        <span>{isDark ? "Light" : "Dark"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
