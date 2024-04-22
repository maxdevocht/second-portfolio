import React from "react";

export default function Links() {
    return (
        <section className="mx-5 my-3 flex flex-col gap-1">
            <div className="w-full flex gap-1">
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">IX UITLEENFORMULIER</a>
                <a href="#" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">BQ MUSIC</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="#" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">SSSYMBOLSSS</a>
                <a href="https://mijnlijst.netlify.app" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">MY SHOPPING LIST</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="https://my-todo-checklist.netlify.app" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">MY TODO APP</a>
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75">MEME GENERATOR</a>
            </div>
        </section>
    )
}