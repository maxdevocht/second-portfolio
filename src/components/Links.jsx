import React from "react";

export default function Links() {
    return (
        <section className="mx-5 my-3 flex flex-col gap-1">
            <div className="w-full flex gap-1">
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">IX UITLEENFORMULIER</a>
                <a href="#" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">BQ MUSIC</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="#" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">SSSYMBOLSSS</a>
                <a href="#" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">MY SHOPPING LIST</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="#" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">MY TODO APP</a>
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide">MEME GENERATOR</a>
            </div>
        </section>
    )
}