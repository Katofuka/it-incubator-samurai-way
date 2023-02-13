import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator, DialogType, MessageType} from "../../Redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapDispatchToPropsType = {
    addMessage: ()=> void
    messageChangeText: (text: string)=> void
}

type DialogStateType = {
    newMessageText: string
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    // isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): DialogStateType => {
    return {
        dialogsData: state.dialogReducer.dialogsData,
        messagesData: state.dialogReducer.messagesData,
        newMessageText: state.dialogReducer.newMessageText,
        // isAuth: state.authReducer.isAuth
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

export const DialogContainer = compose <React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
//export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
