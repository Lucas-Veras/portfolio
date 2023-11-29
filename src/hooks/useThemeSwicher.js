import { useEffect, useState } from "react";

const setModePref = ({ mode, setMode }) => {
  setMode(mode);

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const useThemeSwicher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setModePref({ mode: check, setMode });
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setModePref({ mode: check, setMode });
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwicher;
