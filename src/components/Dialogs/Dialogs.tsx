import React from 'react';
import style from './Diologs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
    avatar?: string,
}

const DialogItem = (props: DialogItemType) => {
    const linkToDialog = '/dialogs/' + props.id;
    return (
        <div className={style.dialogs}>
            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={linkToDialog}>{props.name}</NavLink>
            </div>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={'Semen'} id={1}/>
                <DialogItem name={'Sasha'} id={2}/>
                <DialogItem name={'Ksenia'} id={3}/>
                <DialogItem name={'Alesha'} id={4}/>
            </div>
            <div className={style.messages}>
                <Message message={'Hi'}/>
                <Message message={'my'}/>
                <Message message={'friend'}/>
            </div>

        </div>
    );
}

