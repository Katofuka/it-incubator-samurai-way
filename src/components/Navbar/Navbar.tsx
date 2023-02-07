import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import { Friends } from './Friends';
import {HomeIcon, ListingIcon, MessagesIcon, ProfileIcon, SettingsIcon} from "../../icons/Icons";


export const Navbar = () => {
    return (
        <nav className={style.navBar}>
            <div className={style.item}>
                <NavLink to={'/profile'} activeClassName={style.activeLink}>
                    <HomeIcon />
                    Profile
                </NavLink></div>
            <div className={style.item}>
                <NavLink to={'/dialogs'} activeClassName={style.activeLink}>
                    <MessagesIcon/>
                    Messages
                </NavLink></div>
            <div className={style.item}>
                <NavLink to={'/news'} activeClassName={style.activeLink}>
                    <ListingIcon/>
                    News
                </NavLink></div>
            <div className={style.item}>
                <NavLink to={'/music'} activeClassName={style.activeLink}>
                    Music
                </NavLink></div>
            <div className={style.item}>
                <NavLink to={'/settings'} activeClassName={style.activeLink}>
                    <SettingsIcon />
                    Settings
                </NavLink></div>
            <div className={style.item}>
                <NavLink to={'/users'} activeClassName={style.activeLink}>
                    <ProfileIcon/>
                    Users
                </NavLink></div>
            <Friends />
        </nav>

    );
};
