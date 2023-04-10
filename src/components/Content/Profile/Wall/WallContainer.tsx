import {addPost, ChangeNewPostText, PostType} from '../../../../redux/profileReducer';
import {Wall} from './Wall';
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';


type MapStateToPropsType = {
    posts: Array<PostType>
    postTextValue: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    ChangeNewPostText: (value: string) => void
}
export type WallPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postTextValue: state.profilePage.postTextValue
    }
}


export const WallContainer = connect(mapStateToProps, {addPost, ChangeNewPostText})(Wall)

