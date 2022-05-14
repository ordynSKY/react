import React from "react";

import AppHeader from "../app-header";
import "../app-header/app-header.css";
import SearchPanel from "../search-panel";
import "../search-panel/search-panel.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
      </div>
    </div>
  );
};

export default App;
