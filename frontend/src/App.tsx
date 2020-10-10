import React, { useEffect, useState } from "react";

function App() {
  const [server, setServer] = useState([{ name: "" }]);
  useEffect(() => {
    fetch("http://localhost:3001", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setServer(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <br />
          {server && `Hello World from server - ${server}`}
          {console.log(server)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
