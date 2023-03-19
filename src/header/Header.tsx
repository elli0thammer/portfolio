import React from "react";
import s from "./Header.module.css"
import {Navigation} from "./navigation/Navigation";

export function Header() {
    return (
        <div className={s.header}>
            <div className={"container"}>
                <Navigation/>
            </div>
        </div>
    );
}
