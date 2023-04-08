import React, { useState, useEffect, FC } from "react";
import "../App.css";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { InfiniteScroll } from "./InfiniteScroll";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToTable, openTable, removeAdded, setEmail, setName } from "../store/userSlice";
import { IAccount } from "../types/unistory.types";

export const DataCenter: FC<IAccount> = ({ account }) => {
    const { name, email, includeTable, table } = useAppSelector(
        (state) => state.user
    );
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(openTable());
        dispatch(addToTable());
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
    };

    return (
        <div className="flex min-h-[797px] pt-[48px]">
            <div>
                <h1 className="text-4xl text-main-orange">
                    Beta test registration
                </h1>
                <p className="font-avenir w-[421px] mt-[18px] leading-[19px] mb-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 w-[421px] mb-7"
                >
                    <div>
                        <h1 className="text-2xl mb-2">Name</h1>
                        {includeTable || table ? (
                            <h1 className="text-[32px] mb-2 text-main-orange">
                                {name}
                            </h1>
                        ) : (
                            <Input
                                placeholder="We will display your name in participation list"
                                onChange={handleChangeName}
                            />
                        )}
                    </div>
                    <div className="mb-3">
                        <h1 className="text-2xl mb-2">Email</h1>
                        {includeTable || table ? (
                            <h1 className="text-[32px] mb-2 text-main-orange">
                                {email}
                            </h1>
                        ) : (
                            <Input
                                type="email"
                                placeholder="We will display your name in participation list"
                                onChange={handleChangeEmail}
                            />
                        )}
                    </div>
                    <Button disabled={includeTable && table ? true : false} type="submit">
                        {includeTable || table
                            ? "List me to the table"
                            : "Get early access"}
                    </Button>
                </form>
            </div>
            {table && (
                <div className="ml-[136px]">
                    <h1 className="text-3xl">
                        Participation listing (enable only for participants)
                    </h1>
                    <div className="min-w-[668px] max-h-[668px] mt-[35px] ">
                        <div className="flex w-[668px] pb-3 border-b-[0.5px] text-2xl">
                            <h1 className="w-[187px]">Name</h1>
                            <h1 className="w-[258px]">Email</h1>
                            <h1 className="w-[223px]">Wallet</h1>
                        </div>
                        <InfiniteScroll
                            name={name}
                            email={email}
                            address={account}
                            added={includeTable}
                            onClick={() => dispatch(removeAdded())}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
