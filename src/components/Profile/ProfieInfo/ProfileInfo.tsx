import React from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img src={props.profile.photos.large} alt="myAvatar"/>
        </div>
        <div className={style.descriptionBlock}>
            <div className={style.profileName}>{props.profile.fullName}</div>
            <div className={style.contactsBlock}>
                <a className={style.contact} href={props.profile.contacts.github}>GH</a>
                <a className={style.contact} href={props.profile.contacts.vk}>Vk</a>
                <a className={style.contact} href={props.profile.contacts.instagram}>I</a>
            </div>
        </div>
    </div>


};
