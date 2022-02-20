import { useState } from "react";
import "./App.css";
import ConnectButton from "./ConnectButton";
import ShowProfileName from "./ShowProfileName";

function App() {
  const [selfID, setSelfID] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to hashchat</h1>
        <ConnectButton setSelfID={setSelfID} />
        {selfID && <ShowProfileName did={selfID.id} />}
      </header>
    </div>
  );
}

export default App;
