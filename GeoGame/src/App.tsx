import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const [position, setPosition] = React.useState<GpsPosition>();

  const updateGpsPosition = () => {
    console.log("updating");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        console.log("updating2");
        setPosition({
          latitude: p.coords.latitude,
          longitude: p.coords.longitude,
        });
      },
      (err) => {
        alert(err);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
    console.log("updated");
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR ??
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={updateGpsPosition}>Update position</button>

      <div>
        <p>Latitude: {position?.latitude}</p>
        <p>Longitude: {position?.longitude}</p>
      </div>
    </div>
  );
};

export default App;
