import React, {ChangeEvent} from 'react';
import style from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: 'я лох'
    }


    activateViewMode() {
        this.setState({
            editMode: false
        })
        console.log('edit mode')

    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        console.log('view mode')
    }

    changeStatus(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value)
    }

    render() {
        return (
            <div className={style.profileStatus}>
                {this.state.editMode
                    ? <input autoFocus={true} className={style.statusInput} onChange={this.changeStatus} value={this.state.status}
                             onBlur={this.activateViewMode.bind(this)}></input>
                    :
                    <span className={style.statusSpan} onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status}</span>
                }
            </div>
        )
    }
}
