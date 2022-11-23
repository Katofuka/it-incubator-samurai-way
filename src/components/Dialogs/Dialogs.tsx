import React from 'react';
import style from './Diologs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
    avatar?: string,
}

type dialogsDataType = {
    id: number
    name: string
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
    let dialogsData = [
        {id: 1, name: 'Semen'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Alesha'},
    ]

    let messagesData = [
        {id: 1, message: 'Эй алё чё такой вася'},
        {id: 2, message: 'Дароу! кадила?'},
        {id: 3, message: 'Сегодня не оч'},
        {id: 4, message: 'Люблю тортики'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[1].message}/>
            </div>

        </div>
    );
}

