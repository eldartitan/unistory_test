import { useLocation } from "react-router-dom";
import planetImage from "../assets/planet_right.png";

export const MemberPage = () => {
    let { state } = useLocation();

    return (
        <>
            <div className="fixed right-0 top-[104px]">
                <img src={planetImage} alt="" />
            </div>
            <div className="flex flex-col gap-[22px] mt-[96px]">
                <h1 className="text-5xl mb-12">PErsonal data</h1>
                <div>
                    <h1 className="text-2xl">Name</h1>
                    <h1 className="text-[32px] text-main-orange">
                        {state.username}
                    </h1>
                </div>
                <div>
                    <h1 className="text-2xl">Email</h1>
                    <h1 className="text-[32px] text-main-orange">
                        {state.email}
                    </h1>
                </div>
                <div>
                    <h1 className="text-2xl">Wallet</h1>
                    <h1 className="text-[32px] text-main-orange">
                        {state.address}
                    </h1>
                </div>
            </div>
        </>
    );
};
