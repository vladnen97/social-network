import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from '../Header.module.css';
import {Input} from 'antd';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean;
    status: string
}

const {TextArea} = Input

export class MainStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    activateEditMode = (): void => {
        this.setState({editMode: true})
    }
    deactivateEditMode = (): void => {
        this.setState({editMode: false})
        this.setState({status: this.props.status})
    }
    onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({status: e.currentTarget.value})
    }
    onEnterPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === 'Enter') {
            this.deactivateEditMode()
            this.props.updateStatus(this.state.status.trim())
        }
    }

    render() {
        return <div className={s.status}>
            {!this.state.editMode
                ? <span className={s.statusText}
                        onDoubleClick={this.activateEditMode}>{this.props.status || 'no status :('}</span>
                : <TextArea size={'middle'}
                            autoSize={{minRows: 1, maxRows: 3}}
                            placeholder={'Tell us something...'}
                            maxLength={230}
                            autoFocus
                            value={this.state.status}
                            onChange={this.onChangeHandler}
                            onBlur={this.deactivateEditMode}
                            onKeyDown={this.onEnterPressHandler}/>
            }
        </div>
    }
}
