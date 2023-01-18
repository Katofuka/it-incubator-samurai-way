import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator, DialogPageType} from "../../Redux/dialog-reducer";
import {useDispatch} from "react-redux";
import {Dialogs} from "./Dialogs";

type dialogsContainerType = {
    dialogPage: DialogPageType
}

export const DialogsContainer = (props: dialogsContainerType) => {
    const dispatch = useDispatch();

    const addMessage = () => {
        dispatch(addMessageActionCreator())
    }

    const messageChange = (text: string) => {
        dispatch(changeMessageActionCreator(text))
    }

    return (
        <Dialogs messageChangeText={messageChange}
                 addMessage={addMessage}
                 dialogsData={props.dialogPage.dialogsData}
                 messagesData={props.dialogPage.messagesData}
                 newMessageText={props.dialogPage.newMessageText}
        />


    );
}

