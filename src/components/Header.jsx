import React from "react";

export default function Header() {
    return (
        <header className="mx-5 my-3">
            <div className="min-h-60 w-1/2 flex flex-col items-start justify-center border-black border border-solid rounded-full pl-14 shadow-lg">
                <h1 className="text-6xl font-outfit font-bold">I'm Max 👋</h1>
                <h2 className="font-outfit text-4xl font-light italic">Front-end Dev</h2>
            </div>

            {/* <div className="header--img shadow">
                <img src="./src/assets/images/memoji_fade2.svg" alt="Memoji" className="memoji" />
            </div> */}
        </header>
    )
}