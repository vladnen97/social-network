import React from 'react';
import s from '../Header.module.css';
import {Input} from 'antd';

type PropsType = {
    status: string | undefined
}

const {TextArea} = Input

export class MainStatus extends React.Component<PropsType, { editMode: boolean }> {
    state = {
        editMode: false
    }

    activateEditMode = (): void => {
        this.setState({editMode: true})
    }
    deactivateEditMode = (): void => {
        this.setState({editMode: false})
    }

    render() {
        return <div className={s.status}>
            {!this.state.editMode
                ? <span className={s.statusText}
                        onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'status...'}</span>
                : <TextArea size={'middle'}
                            autoSize={{minRows: 1, maxRows: 3}}
                            placeholder={'Tell us something...'}
                            onBlur={this.deactivateEditMode}
                            maxLength={230}
                            autoFocus
                            value={this.props.status}/>
            }
        </div>
    }
}
