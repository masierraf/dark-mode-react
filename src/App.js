import React, { useEffect, useState } from "react";
import "./globals.css";

// components
import Header from "./components/Header/header";
import Switch from "./components/Header/header-dark-mode-widget";
import TopCardList from "./components/top-card-list";
import Overview from "./components/overview";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch setDarkMode={setDarkMode} darkMode={darkMode} />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
