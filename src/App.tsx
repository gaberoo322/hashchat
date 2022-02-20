import { useEffect, useState } from "react";
import ConnectButton from "./ConnectButton";
import ViewerRecord from "./ViewerRecord";
import PublicRecord from "./PublicRecord";
import Messages from "./Messages";
import "./App.css";
import { Button, TextField } from "@mui/material";

function App() {
  const [selfID, setSelfID] = useState(null);
  const [friendsDID, setFriendsDID] = useState("");
  const [selfDIDClient, setSelfDIDClient] = useState(null);
  const [selfCeramicClient, setSelfCeramicClient] = useState(null);
  const [message, setMessage] = useState("");

  const handleConnectFriend = (e) => {
    if (e.target.value) {
      // setFriendsDID(e.target.value);
      setFriendsDID(
        "did:3:bafyreicinidhfsmz47lyr7u5kplyzvdaczm54jxistzy5xg5fkfuw7drqq"
      );
    }
  };

  const handleSendMessage = (e) => {
    console.log("message", message);
  };

  useEffect(() => {
    if (selfID) {
      setSelfDIDClient(selfID.did);
      setSelfCeramicClient(selfID.client.ceramic);
    }
  }, [selfID]);

  useEffect(() => {
    if (selfDIDClient) {
      console.log("selfDIDClient", selfDIDClient);
    }
    if (selfCeramicClient) {
      console.log("selfCeramicClient", selfCeramicClient);
    }
  }, [selfDIDClient, selfCeramicClient]);

  return (
    <div className="App">
      <h1>Welcome to hashchat</h1>
      <ConnectButton setSelfID={setSelfID} />

      <section className="App-Section">
        {selfID && (
          <>
            <p>YOUR PUBLIC RECORD:</p>
            <PublicRecord />
            <TextField
              label="Enter your Friends DID:"
              variant="outlined"
              id="friendsDID"
              type="text"
              value={friendsDID}
            />
            <Button variant="contained" onClick={handleConnectFriend}>
              Connect Friend
            </Button>
          </>
        )}
      </section>
      {friendsDID && (
        <>
          <section className="App-Section">
            <p>YOUR FRIENDS VIEW RECORD:</p>
            <ViewerRecord did={friendsDID} />
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Enter Message"
              multiline
              variant="filled"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              disabled={message === ""}
              onClick={handleSendMessage}
            >
              SEND
            </Button>
          </section>
          <Messages />
        </>
      )}
    </div>
  );
}

export default App;
