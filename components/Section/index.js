import react from "react";
import s from "./Section.module.css";

export const Section = (props) => {

    return(
        <div className={s.wrapper}>  
        <div className={s.container}>
            <h2 className={s.title}>{props.title}</h2>
            <hr className={s.line}/>
            {props.children}
        </div>
        </div>
    );
}
