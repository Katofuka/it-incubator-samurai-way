import React, {ChangeEvent} from 'react';
import style from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateViewMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value})
    }

    render() {
        return (
            <div className={style.profileStatus}>
                {this.state.editMode
                    ? <input autoFocus={true}
                             className={style.statusInput}
                             onChange={this.onChangeStatus}
                             value={this.state.status}
                             onBlur={this.activateViewMode} />
                    :
                    <span title={'samurai status'}
                          className={style.statusSpan}
                          onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                }
            </div>
        )
    }
}
