import {addPost, PostType} from '../../../../redux/profileReducer';
import {Wall} from './Wall';
import {connect} from 'react-redux';
import {RootStateType} from '../../../../redux/redux-store';


type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void
}
export type WallPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}


export const WallContainer = connect(mapStateToProps, {addPost})(Wall)

