import React, { FC } from "react";
import { Content } from "../components/Content";
import { DataCenter } from "../components/DataBlock";
import { IAccount } from "../types/unistory.types";


export const MainPage:FC<IAccount> = ({account}) => {
    return (
        <>
            <Content />
            <DataCenter account={account} />
        </>
    );
};
