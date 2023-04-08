import React from "react";

export const CirclesSvg = () => {
    return (
        <svg
            width="570"
            height="570"
            viewBox="0 0 570 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="285" cy="285" r="266" fill="#212124" />
            <g filter="url(#filter0_f_6538_18)">
                <circle cx="285" cy="285" r="263" fill="#171719" />
            </g>
            <circle cx="285" cy="285" r="223" fill="#1E1E20" />
            <circle cx="285" cy="285" r="191.5" stroke="#323232" />
            <circle cx="285" cy="285" r="184.5" stroke="#323232" />
            <defs>
                <filter
                    id="filter0_f_6538_18"
                    x="0"
                    y="0"
                    width="570"
                    height="570"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="11"
                        result="effect1_foregroundBlur_6538_18"
                    />
                </filter>
            </defs>
        </svg>
    );
};
