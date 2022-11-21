import React from 'react';
import style from './Diologs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/sasha'>Sasha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/viktor'}>Viktor</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/sema'}>Sema</NavLink>
                </div>


            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>my</div>
                <div className={style.message}>friend</div>
            </div>

        </div>
    );
};
