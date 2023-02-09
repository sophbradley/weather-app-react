import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <Weather defaultCity="London" />
        <footer className="App-footer">
          <a
            href="https://github.com/sophbradley/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
            title="Check it out on GitHub"
          >
            Open source code
          </a>{" "}
          built by{" "}
          <a
            href="https://www.sophiebradley.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out my portfolio here"
          >
            {" "}
            Sophie Bradley
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
