import React from 'react';
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={style.navBar}>
            <div className={style.item}>
                <a href={'/profile'}>Profile</a></div>
            <div className={style.item}>
                <a href={'/messages'}>Messages</a></div>
            <div className={style.item}>
                <a>News</a></div>
            <div className={style.item}>
                <a>Music</a></div>
            <div className={style.item}>
                <a>Settings</a></div>
        </nav>

    );
};
