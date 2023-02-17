import React, {memo} from 'react';
import style from "./Navbar.module.css";
import {Friends} from './Friends';
import {NavLinks} from "./NavLinks";


export const Navbar = memo(() => {
    return (
        <div className={style.NavBar}>
            <NavLinks />
            <Friends/>
        </div>
    )
        ;
});
