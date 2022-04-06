const CREATE_FOLDER = 'CREATE_FOLDER';
const CREATE_FILE = 'CREATE_FILE';
const SET_FOLDER = 'SET_FOLDER'
let initialState = {
    mainFolder: {
        id: 1, name: 'first', isFolder: true, hidden: true, items: [
            {
                id: 2, name: 'two', isFolder: true, hidden: true, items: [
                    { id: 3, name: 'three', isFolder: true, hidden: true, items: [] },
                ]
            },
            {
                id: 4, name: 'four', isFolder: true, hidden: true, items: [
                    { id: 6, name: 'six', isFolder: false, hidden: true, items: [] },
                    {
                        id: 7, name: 'seven', isFolder: true, hidden: true, items: [
                            { id: 8, name: 'eight', isFolder: false, hidden: true, items: [] },
                        ]
                    },
                ]
            },
            { id: 5, name: 'five', isFolder: false, hidden: true, items: [] },
        ]
    },
    isActive: null,
    newFolder: { id: 9, name: '', isFolder: false },
    folderPush: false,
    folderName: '',
}

const filesReducer = (state = initialState, action) => {
    let a = JSON.stringify(state)
    switch (action.type) {
        case CREATE_FOLDER: {
            return {
                ...state,
                folder: { id: 9, name: action.name, isFolder: action.isFolder }
            }
        }
        case CREATE_FILE: {
            return {
                ...state,
                folder: { id: 10, name: 'ten', isFolder: false }
            }
        }
        case SET_FOLDER: {
            return {
                ...state,
                isActive: action.isActive,
            
            }
        }
        default: {
            return state
        }
    }
}

export const createFile = () => ({ type: CREATE_FILE })
export const setFolder = (isActive) => ({type: SET_FOLDER, isActive})

export default filesReducer;