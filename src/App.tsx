import { useState } from "react";
import "./App.css";
import ConnectButton from "./ConnectButton";
import ViewerRecord from "./ViewerRecord";
import PublicRecord from "./PublicRecord";

function App() {
  const [selfID, setSelfID] = useState(null);
  const [friendsDID, setFriendsDID] = useState(null);

  const handleFriendsDID = (e) => {
    if (e.key === "Enter") {
      setFriendsDID(e.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to hashchat</h1>
        <ConnectButton setSelfID={setSelfID} />
        <hr />
        {selfID && (
          <section>
            <h2>YOUR PUBLIC RECORD:</h2>
            <PublicRecord />
            <p>this is your DID: {selfID.id}</p>
          </section>
        )}
        <label htmlFor="friendsDID">Enter your Friends DID:</label>
        <input
          id="friendsDID"
          type="text"
          onKeyPress={handleFriendsDID}
          value="did:3:bafyreicinidhfsmz47lyr7u5kplyzvdaczm54jxistzy5xg5fkfuw7drqq"
        />
        <hr />
        {friendsDID && (
          <section>
            <h2>YOUR FRIENDS VIEW RECORD: </h2>
            <ViewerRecord did={friendsDID} />
          </section>
        )}
      </header>
    </div>
  );
}

export default App;
