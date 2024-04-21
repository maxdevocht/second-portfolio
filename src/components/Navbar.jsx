import React from "react";

export default function Navbar() {
    return (
        <nav className="flex items-center border-black border border-solid rounded-full mx-5 my-3 p-3 shadow-lg">
            <div className="max-w-80 ml-10 flex items-center justify-between">
                <a href=""><i className="ri-instagram-fill mr-7 text-3xl text-gray-950"></i></a>
                <a href=""><i className="ri-github-fill mr-7 text-3xl text-gray-950"></i></a>
                <a href=""><i className="ri-linkedin-box-fill mr-7 text-3xl text-gray-950"></i></a>
                <a href=""><i className="ri-mail-fill text-3xl text-gray-950"></i></a>
            </div>
        </nav>
    )
}