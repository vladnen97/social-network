import {toggleFollowingProgress} from '../redux/usersReducer';
import {ThunkDispatch} from 'redux-thunk/src/types';
import {AppActionTypes, RootStateType} from '../redux/redux-store';
import {ResponseType} from '../api/api'

export const followUnfollowFlow = async (apiMethod: (userId: number) => Promise<ResponseType>, action: any, dispatch: ThunkDispatch<RootStateType, unknown, AppActionTypes>, userId: number) => {
    dispatch(toggleFollowingProgress(true, userId))

    const data = await apiMethod(userId)
    dispatch(toggleFollowingProgress(false, userId))
    if (data.resultCode === 0) dispatch(action(userId))
}