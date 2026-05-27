import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar({ setSearch, search, setSelected, selected }) {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  function handleClick() {
    setSearch("");
    setSelected("Filter by Region");
  }
  return (
    <div className="bg-white shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] dark:bg-[hsl(209,23%,22%)] transition-color duration-100">
      <div className="container mx-auto flex justify-between px-4 py-6">
        {" "}
        {/* border here*/}
        <Link to="/" onClick={handleClick}>
          <h1 className="text-lg font-extrabold dark:text-white">
            Where in the world?
          </h1>
        </Link>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 font-semibold"
        >
          {darkTheme === false ? (
            <ion-icon key="outline" name="moon-outline" className="[--ionicon-stroke-width:45px]"></ion-icon>
          ) : (
            <ion-icon
              name="moon"
              key="filled"
              className="dark:text-white"
            ></ion-icon>
          )}
          <div className="dark:text-white">Dark Mode</div>
        </button>
      </div>
    </div>
  );
}
