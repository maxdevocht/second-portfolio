import React from "react";

export default function Navbar() {
    return (
        <nav className="flex items-center border-black border border-solid rounded-full mx-5 my-3 p-3 shadow-lg max-[835px]:justify-center">
            <div className="w-60 ml-10 flex flex-row items-center justify-between max-[835px]:ml-0">
                <a href="https://www.instagram.com/maxde.v/"><i className="ri-instagram-fill text-3xl text-gray-950"></i></a>
                <a href="https://github.com/maxdevocht"><i className="ri-github-fill text-3xl text-gray-950"></i></a>
                <a href="#"><i className="ri-linkedin-box-fill text-3xl text-gray-950"></i></a>
                <a href="mailto:maxdevocht@hotmail.com"><i className="ri-mail-fill text-3xl text-gray-950"></i></a>
            </div>
        </nav>
    )
}