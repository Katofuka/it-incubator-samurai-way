import React from 'react';
import style from "./ProfileInfo.module.css";

type ProfileContactsPropsType = {
    contact: string
    name: string
}

export const ProfileContact = (props: ProfileContactsPropsType) => {
    return <a className={style.contact} href={props.contact}>{props.name}</a>
}