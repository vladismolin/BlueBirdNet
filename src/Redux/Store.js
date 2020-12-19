import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Welcome back,my friend', like: 66},
                {id: 2, message: 'Salut', like: 36}
            ],
            newPostText: ""
        },
        messagesPage: {
            messageData: [
                {id: 1, message: 'Welcome'},
                {id: 2, message: 'saluut'},
                {id: 3, message: 'what'},
                {id: 4, message: 'aloha dance'}
            ],
            newMessText: "",
            dialogsData: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Eugene'},
                {id: 3, name: 'Mariyka'},
                {id: 4, name: 'Roman'}
            ]
        },
        sidebar: {
            sidebarData: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Eugene'},
                {id: 3, name: 'Mariyka'},
                {id: 4, name: 'Roman'}
            ]
        }
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

export default store;
