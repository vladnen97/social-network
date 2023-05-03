import React from 'react';
import s from '../Header.module.css';

type PropsType = {
    status: string | undefined
}

export class MainStatus extends React.Component<PropsType, {editMode: boolean}>{
    state = {
        editMode: false
    }

    activateEditMode = () => {
      this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'status...'}</span>
                : <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus/>
            }
        </div>
    }
}
