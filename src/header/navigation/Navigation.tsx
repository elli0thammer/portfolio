import s from "./Navigation.module.css";
import React from "react";

export function Navigation() {
    return (
        <div className={s.navigation}>
            <ul className={s.navigation__list}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Skills</a></li>
                <li><a href={"#"}>Projects</a></li>
                <li><a href={"#"}>Contacts</a></li>
            </ul>
        </div>
    );
}
