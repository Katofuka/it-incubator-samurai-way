import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator, InitialDialogStateType} from "../../Redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


// type dialogsContainerType = {
//     dialogPage: InitialStateType
// }

type mapDispatchToPropsType = {
    addMessage: ()=> void
    messageChangeText: (text: string)=> void
}


const mapStateToProps = (state: AppRootStateType): InitialDialogStateType => {
    return {
        dialogsData: state.dialogReducer.dialogsData,
        messagesData: state.dialogReducer.messagesData,
        newMessageText: state.dialogReducer.newMessageText,
    }
}
const mapDispatchToProps = (dispatch:  Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: ()=> {
            dispatch(addMessageActionCreator())
        },
        messageChangeText: (text: string)=> {
            dispatch(changeMessageActionCreator(text))
        },
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
