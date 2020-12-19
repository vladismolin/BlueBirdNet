const ADD_MESSAGE = 'ADD-MESSAGES';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';

let initialState = {
    messageData: [
        {id: 1, message: 'Welcome'},
        {id: 2, message: 'saluut'},
        {id: 3, message: 'what'},
        {id: 4, message: 'aloha dance'}
    ],
    newMessText: "",
    dialogsData: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Mariyka'},
        {id: 4, name: 'EugeneM'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            state.newMessText = action.newText;
            return {
                ...state,
                newMessText: "",
                messageData: [...state.messageData, {id: 5, message: state.newMessText}]
            }
        }
        case UPDATE_NEW_MESS_TEXT: {
            return {
                ...state,
                newMessText: action.newText
            }
        }
        default:
            return state;
    }


}

export const AddMessageActionCreator = (newText) => {
    return {
        type: ADD_MESSAGE, newText
    }
}

export const OnTextChangeActionCreator = (text) => {

    return {
        type: UPDATE_NEW_MESS_TEXT,
        newText: text
    }

}

export default dialogsReducer;
