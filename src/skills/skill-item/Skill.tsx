import s from "../MySkills.module.css";
import React from "react";

export function Skill() {
    return (
        <div className={s.skill}>
            <div className={`${s.skill__container}`}>
                <div className={s.skill__wrap}>
                    <div>
                        <img src={s.skill__img}/>
                        React
                    </div>

                    <div>
                        Подробное описание навыка
                    </div>
                </div>
            </div>
        </div>
    );
}
