import React from "react";

export default function Header() {
    return (
        <header className="mx-5 my-3 flex flex-row gap-2 max-[835px]:flex-col">
            <div className="min-h-52 w-1/2 flex flex-col items-start justify-center border-black border border-solid rounded-[30px] pl-14 shadow-lg max-[835px]:w-full max-[835px]:text-center">
                <h1 className="text-6xl font-outfit font-bold max-[835px]:text-5xl">I'm Max 👋</h1>
                <h2 className="font-outfit text-4xl font-light italic max-[835px]:text-3xl">Front-end Dev</h2>
            </div>

            <div className="min-h-52 w-1/2 flex items-center justify-center border-black border border-solid rounded-[30px] shadow-lg max-[835px]:w-full">
                <img autoPlay muted loop src="./src/assets/images/memoji_gif2.gif" alt="memoji" className="object-cover w-80 max-[835px]:w-60"/>
            </div>
        </header>
    )
}