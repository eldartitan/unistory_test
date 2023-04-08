import React from "react";

export const ArrowSvg = () => {
    return (
        <svg
            width="249"
            height="490"
            viewBox="0 0 249 490"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-10"
        >
            <path
                id="line"
                d="M3 1C137.205 1 246 109.795 246 244C246 378.205 137.205 487 3 487"
                stroke="#E75626"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="1540"
                strokeDashoffset="1540"
            />
            <circle cx="246" cy="244" r="3" fill="#E75626" />
            <circle cx="3" cy="487" r="3" fill="#E75626" />
        </svg>
    );
};
