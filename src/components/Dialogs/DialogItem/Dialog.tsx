import React from 'react';
import style from './Diolog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
    avatar?: string,
}

export const DialogItem = (props: DialogItemType) => {
    const linkToDialog = '/dialogs/' + props.id;
    return (
        <div className={style.dialogs}>
            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={linkToDialog}>{props.name}</NavLink>
            </div>
        </div>
    )
}
