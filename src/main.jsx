import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const clientId = '379ff66a369f3e12df6535c7008603a5'; // Replace 'your-client-id' with the actual clientId obtained from thirdweb

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Mainnet} clientId={clientId}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
