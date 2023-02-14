import React from 'react';
import style from "./ProfileInfo.module.css";
import {GithubIcon, InstagramIcon, VkIcon} from "../../../icons/Icons";

type ProfileContactsPropsType = {
    contact: string
    name: string
}

export const ProfileContact = (props: ProfileContactsPropsType) => {
    return <a className={style.contact} href={props.contact}>
        {props.name === 'github'
            ? <GithubIcon />
            : props.name === 'vk'
                ? <VkIcon />
                : props.name === 'instagram'
                ? <InstagramIcon /> : 'social'
        }
    </a>
}