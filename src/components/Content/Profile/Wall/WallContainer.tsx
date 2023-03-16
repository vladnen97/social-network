import {addPostActionCreator, ChangeNewPostTextActionCreator, PostType} from '../../../../redux/profileReducer';
import {Wall} from './Wall';
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    posts: Array<PostType>
    postTextValue: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    onChangeText: (value: string) => void
}
export type WallPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postTextValue: state.profilePage.postTextValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangeText: (value: string) => {
            dispatch(ChangeNewPostTextActionCreator(value))
        }
    }
}

export const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

