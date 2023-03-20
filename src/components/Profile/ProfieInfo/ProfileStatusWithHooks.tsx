import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)


    const activateViewMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
            setStatus(props.status)
    },[props.status])
    // if (prevProps.status !== props.status) {
    //     setStatus(props.status)
    // }

    return (
        <div className={style.profileStatus}>
            {editMode
                ? <input autoFocus={true}
                         className={style.statusInput}
                         onChange={onChangeStatus}
                         value={props.status}
                         onBlur={activateViewMode}/>
                :
                <span title={'samurai status'}
                      className={style.statusSpan}
                      onDoubleClick={activateEditMode}>
                        {status || 'samurai dont have a status'}
                    </span>
            }
        </div>
    )
}
