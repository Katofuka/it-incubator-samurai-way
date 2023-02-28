import React, {memo} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    meId: number | null,
    logout: () => void
}


export const Header = memo((props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img alt='logo'
                 src='../../images/logo.png'/>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <button onClick={props.logout}>
                        <div className={style.loginLink}>{props.login}</div>
                    </button>
                    : <NavLink to={'/login'} className={style.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    );
});
