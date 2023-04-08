import React, { useState } from "react";
import ReactDom from "react-dom";
import Button from "./ui/Button";

export const Modal = () => {
    const [open, setOpen] = useState(true);

    return ReactDom.createPortal(
        <>
            {open && (
                <div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="fixed z-[1000] top-0 left-0 bottom-0 right-0  bg-[#171717CF]"
                    />
                    <div
                        style={{ transform: "translate(-50%,-50%)" }}
                        className="fixed z-[1000] w-[422px] h-[295px] bg-[#262628] top-1/2 left-1/2 flex items-center flex-col"
                    >
                        <h1 className="text-4xl text-main-orange mt-12">
                            metamask extention
                        </h1>
                        <p className="font-inter w-[320px] text-white font-light text-base text-center mt-[29px] mb-12">
                            To work with our application, you have to install
                            the{" "}
                            <span className="text-main-orange">
                                Metamask browser extension
                            </span>
                        </p>
                        <Button onClick={() => setOpen(!open)}>
                            Skip this step
                        </Button>
                    </div>
                </div>
            )}
        </>,
        document.getElementById("portal") as HTMLElement
    );
};
