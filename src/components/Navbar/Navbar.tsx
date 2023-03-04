import React, {memo} from 'react';
import style from "./Navbar.module.css";
import {Friends} from './Friends';
import {NavLinks} from "./NavLinks";


type NavbarPropsType = {
    isMenuOpen: boolean
    changeCollapsedMenu: (isCollapsed: boolean) => void
}

export const Navbar: React.FC<NavbarPropsType> = memo((
    {
        isMenuOpen,
        changeCollapsedMenu
    }) => {

    const toggleMenuOpen = () => {
        changeCollapsedMenu(!isMenuOpen)
    }

    return (
        <div className={`${style.navbar} ${isMenuOpen ? '' : style.collapsed}`}>
            <span onClick={toggleMenuOpen}>ToggleMenu</span>
            <NavLinks/>
            <Friends/>
        </div>
    )
        ;
});
