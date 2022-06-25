import React from "react";
import s from "./Administration.module.css";

export const Administration = (props) => {
    const administration_technician =
        props.info.administration_technician.data.attributes;
    const manager = props.info.manager.data.attributes;
    const technical_supports = props.info.technical_supports.data;

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.item}>
                    <h3 className={s.title}>Coordenador</h3>
                    <p>{manager.name}</p>
                    <p>{manager.email}</p>
                    <p>{manager.room}</p>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Técnico Administrador</h3>
                    <p>{administration_technician.name}</p>
                    <p>{administration_technician.email}</p>
                    <p>{administration_technician.room}</p>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Suporte Técnico</h3>
                    {technical_supports.map((item) => (
                        <div className={s.support} key={item.id}>
                            <p>{item.attributes.name}</p>
                            <p>{item.attributes.email}</p>
                            <p>{item.attributes.room}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
