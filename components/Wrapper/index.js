import React from "react";
import s from "./Wrapper.module.css";

export const Wrapper = (props) => {
    return (
        <div className={s.wrapper}>
            {props.children}
        </div>
    );
};