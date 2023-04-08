import React, { ChangeEventHandler, FC, useState } from "react";

interface iInput {
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<iInput> = ({placeholder, type="text", onChange, value }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            required
            className="border rounded-[30px] w-[421px] py-3 px-[18px] border-white bg-inherit focus:outline-none focus:border-[#E75626] text-white placeholder-white placeholder-opacity-[0.5] font-avenir"
        />
    );
};

export default Input;