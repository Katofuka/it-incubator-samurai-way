import React from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileContact} from "./ProfileContact";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileBlock}>

            <div className={style.profilePhotoBlock}>
                <img className={style.profilePhoto} src={props.profile.photos.large} alt="myAvatar"/>
                <ProfileStatus/>
            </div>


            <div className={style.descriptionBlock}>
                <div className={style.profileName}>{props.profile.fullName}</div>
                <div className={style.contactsBlock}>
                    <div className={style.contactsBlock}>
                        <ProfileContact
                            contact={props.profile.contacts.github? props.profile.contacts.github:''}
                            name={'github'}/>
                        <ProfileContact
                            contact={props.profile.contacts.vk?props.profile.contacts.vk:''}
                            name={'vk'}/>
                        <ProfileContact
                            contact={props.profile.contacts.instagram?props.profile.contacts.instagram:''}
                            name={'instagram'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
