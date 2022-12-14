import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import { Friends } from './Friends';

export const Navbar = () => {
    return (
        <nav className={style.navBar}>
            <div className={style.item}>
                <NavLink to={'/profile'} activeClassName={style.activeLink}>Profile</NavLink></div>
            <div className={style.item}>
                <NavLink to={'/dialogs'} activeClassName={style.activeLink}>Messages</NavLink></div>
            <div className={style.item}>
                <NavLink to={'/news'} activeClassName={style.activeLink}>News</NavLink></div>
            <div className={style.item}>
                <NavLink to={'/music'} activeClassName={style.activeLink}>Music</NavLink></div>
            <div className={style.item}>
                <NavLink to={'/settings'} activeClassName={style.activeLink}>Settings</NavLink></div>
            <Friends />
        </nav>

    );
};
