import "./App.css";
import ConnectButton from "./ConnectButton";
import ShowViewerName from "./ViewerRecord";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to hashchat</h1>
        <ConnectButton />
        <ShowViewerName />
      </header>
    </div>
  );
}

export default App;
