import { useViewerConnection } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";

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
function ConnectButton() {
  const [connection, connect, disconnect] = useViewerConnection();
  console.log("connection", connection);

  return connection.status === "connected" ? (
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect ({connection.selfID.id})
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
