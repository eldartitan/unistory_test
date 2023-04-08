import { Routes, Route } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { Modal } from "./components/Modal";
import { MainPage } from "./pages/MainPage";
import { MemberPage } from "./pages/MemberPage";
import Button from "./components/ui/Button";
import "./App.css";

function App() {
    const { account, deactivate, activateBrowserWallet } = useEthers();

    return (
        <div className="App font-bebas container mx-auto max-w-[1315px] text-white">
            <Modal />
            <div className="flex justify-between items-center h-[72px]">
                <span className="bg-[#5A5A5A] w-[199px] h-[44px] text-white border border-[#C7C7C7] border-dashed flex justify-center items-center">
                    LOGO
                </span>
                {account ? (
                    <span className="w-[145px] h-[19px] text-main-orange whitespace-nowrap overflow-hidden text-ellipsis text-lg">
                        {account}
                    </span>
                ) : (
                    <Button onClick={() => activateBrowserWallet()}>
                        Connect metamask
                    </Button>
                )}
            </div>
            <Routes>
                <Route path="/" element={<MainPage account={account} />} />
                <Route path="/:adress" element={<MemberPage />} />
            </Routes>
        </div>
    );
}

export default App;
