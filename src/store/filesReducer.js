const CREATE_FOLDER = 'CREATE_FOLDER';
const CREATE_FILE = 'CREATE_FILE';
const SET_FOLDER = 'SET_FOLDER';
const FOLDER_PUSH_FALSE = 'FOLDER_PUSH_FALSE';
const FOLDER_PUSH_TRUE = 'FOLDER_PUSH_TRUE';
const SET_ID = 'SET_ID';
const SET_NEW_FOLDER_NAME = 'SET_NEW_FOLDER_NAME'; 
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
    isActive: 1,
    newFolder: { id: 9, name: '', isFolder: false },
    folderPush: false,
    newFolderName: '',
    id: 10,
    isFolder: false,
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
        case FOLDER_PUSH_FALSE: {
            return {
                ...state,
                folderPush: false,
            }
        }
        case FOLDER_PUSH_TRUE: {
            return {
                ...state,
                folderPush: true,
                isFolder: action.isFolder
            }
        }
        case SET_ID: {
            return {
                ...state,
                id: state.id + 1,
            }
        }
        case SET_NEW_FOLDER_NAME: {
            return {
                ...state,
                newFolderName: action.newFolderName
            }
        }
        default: {
            return state
        }
    }
}

export const createFile = () => ({ type: CREATE_FILE })
export const setFolder = (isActive) => ({type: SET_FOLDER, isActive})
export const folderPushFalse = () => ({type: FOLDER_PUSH_FALSE})
export const folderPushTrue = (isFolder) => ({type: FOLDER_PUSH_TRUE, isFolder})
export const setId = () => ({type: SET_ID})
export const setNewFolderName = (newFolderName) => ({type: SET_NEW_FOLDER_NAME, newFolderName})

export default filesReducer;