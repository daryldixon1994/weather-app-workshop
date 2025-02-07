import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");

  return (
    <div id="App">
      <NavBar />
      <div id="app-content">
        <WeatherData search={search} />
        <Search setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
