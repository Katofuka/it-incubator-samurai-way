import React from 'react';
import style from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://play-lh.googleusercontent.com/F4dLhEGbGsTrvZCvoiYObMGzpu2ThQUeQaJ61glTdsZCjsVMwwUoqst0_jmWQErmNC8" alt="myAvatar"/>
            </div>
            <div className={style.descriptionBlock}>
                <p>some text about me</p>
            </div>
        </div>
    );
};
