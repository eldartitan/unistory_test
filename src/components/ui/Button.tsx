import React, { Children, FC, MouseEventHandler } from "react";

interface IButton {
    children: React.ReactNode;
    disabled?: true | false;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({ children, disabled=false, type="button", onClick }) => {
    return (
        <>
            {!disabled ? (
                <button
                    type={type}
                    onClick={onClick}
                    className={`border-none h-[39px] px-[24px] text-lg rounded-[30px] bg-main-orange hover:bg-second-orange text-white`}
                >
                    {children}
                </button>
            ) : (
                <button
                    type={type}
                    disabled
                    className={`border-none h-[39px] px-[24px] text-lg rounded-[30px] bg-main-orange opacity-[0.5] text-white`}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
