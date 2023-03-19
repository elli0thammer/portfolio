import s from "./About.module.css";
import React from "react";

export function About() {
    return (
        <div className={s.about}>
            <div className={`container ${s.about__container}`}>
                <div className={s.about__wrap}>
                    <div>
                        Hello!
                    </div>

                    <div>
                        Photo
                    </div>
                </div>
            </div>
        </div>
    );
}
