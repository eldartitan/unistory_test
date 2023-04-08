import { useState, useEffect, useRef, FC, MouseEventHandler } from "react";
import { CloseSvg } from "./ui/CloseSvg";
import { useGetAllDataQuery } from "../store/api";
import { Link } from "react-router-dom";

interface IInfiniteScroll {
    name?: String;
    email?: String;
    address?: String;
    added?: Boolean;
    onClick?: MouseEventHandler;
}

export const InfiniteScroll: FC<IInfiniteScroll> = ({added, address, email, name, onClick}) => {
    const blockRef = useRef<HTMLDivElement>(null);
    const [allData, setAllData] = useState<IData[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const { data, isLoading, isFetching } = useGetAllDataQuery(pageNumber);

    useEffect(() => {
        if (data && data.items.length > 0) {
            setAllData((prevData) => [...prevData, ...data.items]);
        }
    }, [data]);

    function handleScroll() {
        if (!blockRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = blockRef.current;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    }

    useEffect(() => {
        if (blockRef.current) {
            blockRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (blockRef.current) {
                blockRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div
            ref={blockRef}
            className="data-list max-h-[550px] pr-[27px] overflow-y-scroll"
        >
            {added && address && name && email && (
                <div className="participation flex w-[668px] font-avenir py-4 border-b-[0.5px] text-sm text-main-orange">
                    <p className="w-[187px] whitespace-nowrap overflow-hidden text-ellipsis pr-1">
                        {name}
                    </p>
                    <p className="w-[258px] whitespace-nowrap overflow-hidden text-ellipsis pr-1">
                        {email}
                    </p>
                    <p className="w-[195px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {address}
                    </p>
                    <button
                        onClick={onClick}
                        className="close-button hidden ml-auto"
                    >
                        <CloseSvg />
                    </button>
                </div>
            )}
            {allData?.map((m: IData, index) => (
                <Link
                    key={index}
                    to={`/${m.username}`}
                    state={m}
                >
                    <div className="flex w-[668px] font-avenir py-4 border-b-[0.5px] text-sm">
                        <p className="w-[187px] whitespace-nowrap overflow-hidden text-ellipsis pr-1">
                            {m.username}
                        </p>
                        <p className="w-[258px] whitespace-nowrap overflow-hidden text-ellipsis pr-1">
                            {m.email}
                        </p>
                        <p className="w-[195px] whitespace-nowrap overflow-hidden text-ellipsis">
                            {m.address}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
