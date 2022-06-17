import React from "react";
import s from "./News.module.css";

 const News = (props) => {
    return(
        <div className={s.wrapper}>
            <div 
                style={{
                    height: "300px", 
                    background: `url('${props.img}')`, 
                    backgroundSize: "cover" }} 
            />
            <h3 className={s.text}>
                <a href={props.link}> 
                    {props.title}
                </a>
            </h3>
        </div>
    );
}

export default News;