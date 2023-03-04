import React, {memo} from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {HomeIcon, MessagesIcon, ProfileIcon, SettingsIcon} from "../../icons/Icons";


export const NavLinks = memo(() => {
    return (
        <nav className={style.menu}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to={'/profile'} activeClassName={style.activeLink}>
                    <span className={style.icon}>
                        <HomeIcon/>
                    </span>
                    <span className={style.itemText}>Profile</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/dialogs'} activeClassName={style.activeLink}>
                    <span className={style.icon}>
                    <MessagesIcon/>
                        </span>
                    <span className={style.itemText}>Messages</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/settings'} activeClassName={style.activeLink}>
                    <span className={style.icon}>
                    <SettingsIcon/>
                        </span>
                    <span className={style.itemText}>Settings</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/users'} activeClassName={style.activeLink}>
                    <span className={style.icon}>
                    <ProfileIcon/>
                        </span>
                    <span className={style.itemText}>Users</span>
                </NavLink></div>

        </nav>
    );
})