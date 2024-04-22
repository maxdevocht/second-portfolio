import React from "react";

export default function Header() {
    return (
        <header className="mx-5 my-3 flex flex-row gap-2">
            <div className="min-h-60 w-1/2 flex flex-col items-start justify-center border-black border border-solid rounded-[30px] pl-14 shadow-lg">
                <h1 className="text-6xl font-outfit font-bold">I'm Max 👋</h1>
                <h2 className="font-outfit text-4xl font-light italic">Front-end Dev</h2>
            </div>

            <div className="min-h-60 w-1/2 flex items-center justify-center border-black border border-solid rounded-[30px] shadow-lg">
                <img src="./src/assets/images/memoji_fade2.svg" alt="Memoji" className="object-cover w-80 pb-10" />
            </div>
        </header>
    )
}