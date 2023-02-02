import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
    meId: number,
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img alt='logo'
                 src="https://abrakadabra.fun/uploads/posts/2022-01/1642131947_3-abrakadabra-fun-p-tyanka-na-prozrachnom-fone-3.png"/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <NavLink to={'profile/' + props.meId}>
                        <div className={style.loginLink}>{props.login}</div>
                    </NavLink>
                    : <NavLink to={'/login'} className={style.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    );
};
