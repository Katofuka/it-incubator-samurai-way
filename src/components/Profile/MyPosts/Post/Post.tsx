import React, {memo} from 'react';
import style from "./Post.module.css";
import defaultImage from "../../../../images/default-profile-image.svg"
import styleApp from '../../../../App.module.css'

type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = memo((props) => {
    return (
        <div className={`${style.post} ${styleApp.blockBox}`}>
            <div className={style.postHeader}>
                <div className={style.userImg}>
                    <img className={style.ava} src={defaultImage} alt={"ava"}/>
                </div>
                <div className={style.userName}>
                    someNickname
                </div>
            </div>
            <div className={style.postBody}>
                {props.message}

            </div>
            <div className={style.likeBlock}>
                <span className={style.likeIcon}>👍</span>
                <span className={style.likeCount}>{props.likesCount}</span>
            </div>


        </div>

    );
});
