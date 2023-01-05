import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postType} from "../../../Redux/state";

type myPostsType = {
    postsData: postType[]
    addPost: (text:string)=>void
}

export const MyPosts = (props: myPostsType) => {
    const postsData = props.postsData
    let postsElements = postsData.map(p =>
        <Post message={p.post} likesCount={p.likesCount}/>
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let  textPost = newPostElement.current?.value
        if(textPost)
            props.addPost(textPost)
    }
    return (
        <div className={style.postBlock}>
            <div>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};
