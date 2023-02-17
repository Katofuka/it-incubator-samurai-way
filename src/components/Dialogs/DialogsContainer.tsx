import React from 'react';
import {addMessageActionCreator, DialogType, MessageType} from "../../Redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapDispatchToPropsType = {
    addMessage: (newMessageText: string)=> void
}

type DialogStateType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

const mapStateToProps = (state: AppRootStateType): DialogStateType => {
    return {
        dialogsData: state.dialogReducer.dialogsData,
        messagesData: state.dialogReducer.messagesData,
    }
}
const mapDispatchToProps = (dispatch:  Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string)=> {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

export const DialogContainer = compose <React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)
