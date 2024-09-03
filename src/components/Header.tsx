import moonRegularIcon from "./assets/moon-regular.svg";
import moonSolidIcon from "./assets/moon-solid.svg";

type HeaderProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isDark, setIsDark }: HeaderProps) => {
  const handleThemeChange = () => {
    setIsDark((prev) => !prev);
  };

  const themeIcon = isDark ? moonRegularIcon : moonSolidIcon;

  return (
    <header className="flex justify-between items-center px-4 py-8 bg-white shadow-md">
      <div>
        <span className="font-extrabold">Where in the world?</span>
      </div>
      <div onClick={handleThemeChange} className="flex gap-2">
        <img
          width={16}
          height={16}
          src={themeIcon}
          alt="Theme Icon"
          className=""
        />
        <span>{isDark ? "Dark" : "Light"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
