import React from 'react';
import s from '../Header.module.css';

type PropsType = {
    status: string | undefined
}

export class MainStatus extends React.Component<PropsType, {editMode: boolean}>{
    state = {
        editMode: false
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <span className={s.status}>{this.props.status ? this.props.status : 'status...'}</span>
                : <input value={this.props.status}/>
            }
        </div>
    }
}
