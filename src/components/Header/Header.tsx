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
                 src="https://abrakadabra.fun/uploads/posts/2022-01/1642131947_3-abrakadabra-fun-p-tyanka-na-prozrachnom-fone-3.png"/>

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
