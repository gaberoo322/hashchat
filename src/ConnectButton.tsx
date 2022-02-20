import { useViewerConnection } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useEffect } from "react";

async function createAuthProvider() {
  // The following assumes there is an injected `window.ethereum` provider
  var Window: any = window;
  const addresses = await Window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return new EthereumAuthProvider(Window.ethereum, addresses[0]); // eslint-disable-line
}

// A simple button to initiate the connection flow. A Provider must be present at a higher level
// in the component tree for the `useViewerConnection()` hook to work.
function ConnectButton({ setSelfID }) {
  const [connection, connect, disconnect] = useViewerConnection();

  useEffect(() => {
    if (connection.status === "connected") {
      setSelfID(connection.selfID);
      console.log("connection.selfID", connection.selfID);
    }
  }, [connection, setSelfID]);

  return connection.status === "connected" ? (
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect
    </button>
  ) : "ethereum" in window ? (
    <button
      disabled={connection.status === "connecting"}
      onClick={() => {
        createAuthProvider().then(connect);
      }}
    >
      Connect
    </button>
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default ConnectButton;
