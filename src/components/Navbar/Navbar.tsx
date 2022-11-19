import React from 'react';
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={style.navBar}>
            <div className={style.item}>Profile</div>
            <div className={style.item}>Messages</div>
            <div className={style.item}>News</div>
            <div className={style.item}>Music</div>
            <div className={style.item}>Settings</div>
        </nav>

    );
};
