import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import CountryDetail from "./components/CountryDetail";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [selected, setSelected] = useState("Filter by Region");
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    //  const toggleTheme = function () {
    setDarkTheme((prev) => !prev);
    console.log(`darkTheme is ${darkTheme}`);
  };

  useEffect(() => {
    document.documentElement.classList[darkTheme ? "add" : "remove"]("dark");
  }, [darkTheme]);
  {
    /*selects the html tag itself */
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <div className="min-h-screen bg-[hsl(0,0%,99%)] transition-colors duration-300 dark:bg-[hsl(207,26%,17%)]">
        <Navbar
          selected={selected}
          setSelected={setSelected}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Filters
                  selected={selected}
                  setSelected={setSelected}
                  search={search}
                  setSearch={setSearch}
                />{" "}
                <CardList
                  selected={selected}
                  setSelected={setSelected}
                  search={search}
                  setSearch={setSearch}
                />
              </div>
            }
          ></Route>
          <Route
            path="/:countryName"
            element={<CountryDetail></CountryDetail>}
          ></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
