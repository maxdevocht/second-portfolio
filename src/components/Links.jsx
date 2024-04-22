import React from "react";

export default function Links() {
    return (
        <section className="mx-5 my-3 flex flex-col gap-1 max-[1100px]:mb-12">
            <div className="w-full flex gap-1">
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">IX UITLEENFORMULIER</a>
                <a href="#" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">BQ MUSIC</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="#" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">SSSYMBOLSSS</a>
                <a href="https://mijnlijst.netlify.app" className="w-1/2 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">MY SHOPPING LIST</a>
            </div>
            <div className="w-full flex gap-1">
                <a href="https://my-todo-checklist.netlify.app" className="w-2/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">MY TODO APP</a>
                <a href="#" className="w-3/5 border-black border border-solid rounded-[30px] pl-14 shadow-lg text-[45px] font-outfit font-light italic tracking-wide hover:text-white hover:bg-black transition-all ease-in-out duration-75 max-[1100px]:text-[30px] max-[1100px]:py-2 max-[835px]:text-[18px] max-[835px]:pl-6">MEME GENERATOR</a>
            </div>
        </section>
    )
}