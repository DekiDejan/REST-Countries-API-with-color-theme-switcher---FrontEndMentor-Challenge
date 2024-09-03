import { useEffect, useState } from "react";
import moonRegularIcon from "./assets/moon-regular.svg";
import moonSolidIcon from "./assets/moon-solid.svg";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const storedValue = localStorage.getItem("isThemeDark");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  const documentClass = document.documentElement.classList;

  useEffect(() => {
    localStorage.setItem("isThemeDark", JSON.stringify(isDark));

    if (localStorage.getItem("isThemeDark") === "true") {
      documentClass.add("dark");
    } else {
      documentClass.remove("dark");
    }
  }, [isDark]);

  const handleThemeChange = () => {
    if (isDark && documentClass.contains("dark")) {
      documentClass.remove("dark");
      setIsDark(false);
    } else {
      documentClass.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-20 py-8 bg-white dark:bg-dark-blue shadow-md sticky top-0">
      <div>
        <span className="font-extrabold md:text-xl">Where in the world?</span>
      </div>
      <div onClick={handleThemeChange} className="flex gap-2 cursor-pointer">
        <img
          width={14}
          height={14}
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
