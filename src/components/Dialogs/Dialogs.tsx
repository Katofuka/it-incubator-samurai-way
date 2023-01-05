import React from 'react';
import style from './Diologs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {dialogPageType} from '../../Redux/state';

type dialogsType = {
    state: dialogPageType
}

export const Dialogs = (props: dialogsType) => {
    const {
        dialogsData,
        messagesData
    } = props.state

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let textMessage = newMessageElement.current?.value
        console.log(textMessage)
    }

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
}

