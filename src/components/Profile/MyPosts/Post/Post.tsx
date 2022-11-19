import React from 'react';
import style from "./Post.module.css";

type PostType = {
    message: string
    likesCount: number
}

export const Post:React.FC<PostType> = (props) => {
    return (
        <div className={style.item}>
            <img src="https://play-lh.googleusercontent.com/F4dLhEGbGsTrvZCvoiYObMGzpu2ThQUeQaJ61glTdsZCjsVMwwUoqst0_jmWQErmNC8" alt="ava"/>
            {props.message}
            <div>
                <span>👍 {props.likesCount}</span>
            </div>
        </div>

    );
};