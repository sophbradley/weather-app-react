import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <Weather />
        <footer className="App-footer">
          <a
            href="https://github.com/sophbradley/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          built by Sophie Bradley
        </footer>
      </div>
    </div>
  );
}

export default App;
