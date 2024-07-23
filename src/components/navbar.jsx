import { LucideCircleUserRound, LucideLogIn } from "lucide-react";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <div className="w-screen h-14 bg-slate-500 flex justify-end items-center px-4">
            <LucideCircleUserRound className="h-8 w-8 text-white mr-4 cursor-pointer hover:text-slate-950" />
            <ModeToggle className="pr-6"/>
        </div>
    );
}

export default Navbar;
