import style from "./Navbar.module.css";
import React, {memo} from "react";


export const Friends = memo(() => {
    return (
        <div className={style.friends}>
            <div className={style.friendMenu}>
                <div className={style.friendAva}>block img</div>
                <div className={style.friendName}>Name1</div>
            </div>
            <div className={style.friendMenu}>
                <div className={style.friendAva}>block img</div>
                <div className={style.friendName}>Name2</div>
            </div>
            <div className={style.friendMenu}>
                <div className={style.friendAva}>block img</div>
                <div className={style.friendName}>Name3</div>
            </div>
        </div>
    )
})