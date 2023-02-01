import React from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="myAvatar"/>
            </div>
            <div className={style.descriptionBlock}>
                <p>some text about me</p>
            </div>
        </div>
    );
};
