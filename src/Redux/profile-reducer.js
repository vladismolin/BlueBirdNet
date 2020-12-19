import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_STATUS_TEXT = 'UPDATE_STATUS_TEXT';
const SET_STATUS_TEXT = 'SET_STATUS_TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Welcome back,my friend', like: 66},
        {id: 2, message: 'Salut', like: 20}
    ],
    newPostText: "",
    profile: null,
    statusText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            state.newPostText = action.newText;
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, message: state.newPostText, like: 0}]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case UPDATE_STATUS_TEXT: {
            return {
                ...state,
                statusText: action.newText
            }
        }
        default:
            return state;
    }
}

export const SetStatusTextAC = (newText) => {
    return {
        type: UPDATE_STATUS_TEXT, newText
    }
}

export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);

        dispatch(SetStatusTextAC(response.data))
    }
}

export const updateStatusThunk = (Status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(Status);

    if (response.data.resultCode === 0) {
        dispatch(SetStatusTextAC(Status));
    }

}


export const AddPostActionCreator = (newText) => {
    return {
        type: ADD_POST,
        newText
    }
}

export const SetUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const userProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let promise = await profileAPI.profilesData(userId)

        dispatch(SetUserProfileAC(promise));

    }
}

export default profileReducer;
