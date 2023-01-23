import "./App.css";
import { useState } from "react";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const toggle = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ on: !isTrue }),
    };
    try {
      fetch(
        `https://62c462c37d83a75e39f89aea.mockapi.io/api/bulbOn/1`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => setIsTrue(!isTrue));
    } catch (error) {}
  };
  return (
    <div class="App">
      <button class="btn" onClick={toggle}>
        کلیک کنید
      </button>
      <div class={isTrue ? "active" : "box"}></div>
    </div>
  );
}

export default App;
