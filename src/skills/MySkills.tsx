import s from "./MySkills.module.css";
import React from "react";
import {Skill} from "./skill-item/Skill";

export function MySkills() {
    return (
        <div className={s.my_skills}>
            <div className={`container ${s.my_skills__container}`}>
                <div className={s.my_skills__wrap}>
                    <div>
                        Moи скиллы
                    </div>

                    <div className={s.my_skills__skills}>
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </div>
            </div>
        </div>
    );
}
