import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

export const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]:
            "https://mainnet.infura.io/v3/8be6ce8222f44db6a7a7b4c920761fac",
    },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <DAppProvider config={config}>
                <Provider store={store}>
                    <App />
                </Provider>
            </DAppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
