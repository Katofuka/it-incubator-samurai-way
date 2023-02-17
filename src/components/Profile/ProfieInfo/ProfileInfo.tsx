import React, { memo } from 'react';
import style from "./ProfileInfo.module.css";
import styleApp from '../../../App.module.css'
import {UserProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileContact} from "./ProfileContact";
import {ProfileStatus} from "./ProfileStatus";
import defaultImage from "../../../images/default-profile-image.svg"

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = memo((props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={`${style.profileBlock} ${styleApp.blockBox}`}>

            <div className={style.profilePhotoBlock}>
                <img className={style.profilePhoto} src={props.profile.photos.large || defaultImage} alt="myAvatar"/>
            </div>


            <div className={style.descriptionBlock}>
                <div className={style.profileName}>{props.profile.fullName}</div>

                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div className={style.contactsBlock}>
                    <ProfileContact
                        contact={props.profile.contacts.github ? props.profile.contacts.github : ''}
                        name={'github'}/>
                    <ProfileContact
                        contact={props.profile.contacts.vk ? props.profile.contacts.vk : ''}
                        name={'vk'}/>
                    <ProfileContact
                        contact={props.profile.contacts.instagram ? props.profile.contacts.instagram : ''}
                        name={'instagram'}/>
                </div>
            </div>
        </div>
    )
});
