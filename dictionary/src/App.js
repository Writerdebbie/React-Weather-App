import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">REACT WEATHER APP.</header>
      <Weather />
      <p>
        This App is designed by Gloria using React and is Open-sourced on
        <a href="https://github.com/Writerdebbie"> Github</a> and hosted on{" "}
        <a href="https://app.netlify.com/teams/writerdebbie/overview"> Netlify</a>{" "}
      </p>
    </div>
  );
}

export default App;
