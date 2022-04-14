import lev from '../assets/lev.jpg'

const SET_FOLDER = 'SET_FOLDER';
const FOLDER_PUSH_FALSE = 'FOLDER_PUSH_FALSE';
const FOLDER_PUSH_TRUE = 'FOLDER_PUSH_TRUE';
const SET_ID = 'SET_ID';
const SET_NEW_FOLDER_NAME = 'SET_NEW_FOLDER_NAME';
const HIDDEN_ACTIVE = 'HIDDEN_ACTIVE';
const IS_ITEM_FOLDER = 'IS_ITEM_FOLDER';
const SET_FOL = 'SET_FOL';
const SET_FILE = 'SET_FILE';
const FOLDER_DELETE = 'FOLDER_DELETE';
const IS_FILE_CHANGE = 'IS_FILE_CHANGE';
const FILE_CHANGED = 'FILE_CHANGED';
const FILE_HIDDEN = 'FILE_HIDDEN';

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
                    {
                        id: 6, name: 'six', isFolder: false, hidden: true, items: [
                            { img: lev, width: 100, height: 100, header: 'Six', text: 'nothingasdasdadasdasdasdasdasdasdasdadasdadasdsadasdasdasdsadasdsdadada' }
                        ]
                    },
                    {
                        id: 7, name: 'seven', isFolder: true, hidden: true, items: [
                            { id: 8, name: 'eight', isFolder: false, hidden: true, items: [
                                { img: lev, width: 100, height: 100, header: 'Eight', text: 'ndsaotasdhiasdng' }
                            ] },
                        ]
                    },
                ]
            },
            { id: 5, name: 'five', isFolder: false, hidden: true, items: [
                { img: null, width: null, height: null, header: 'five', text: 'wqerrqr' }
            ] },
        ]
    },
    isActive: [1],
    folderPush: false,
    newFolderName: '',
    id: 9,
    isFolder: false,
    lvl: 0,
    path: ['first'],
    hiddenActive: 1,
    isItemFolder: true,
    img: null,
    width: null,
    height: null,
    header: null,
    text: null,
    folderDelete: false,
    isFileChange: false,
    fileChanged: false,
    fileHidden: true,
}

const filesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_FOLDER: {
            return {
                ...state,
                isActive: [...state.isActive, action.isActive],
                path: [...state.path, action.path],

            }
        }
        case SET_FOL: {
            return {
                ...state,
                isActive: state.isActive.slice(0, action.lvl),
                path: state.path.slice(0, action.lvl)
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
        case HIDDEN_ACTIVE: {
            return {
                ...state,
                hiddenActive: action.hiddenActive,
            }
        }
        case IS_ITEM_FOLDER: {
            return {
                ...state,
                isItemFolder: action.isItemFolder,
            }
        }
        case SET_FILE: {
            return {
                ...state,
                img: action.img,
                width: action.width,
                height: action.height,
                header: action.header,
                text: action.text,
            }
        }
        case FOLDER_DELETE: {
            return {
                ...state,
                folderDelete: action.folderDelete,
            }
        }
        case IS_FILE_CHANGE: {
            return {
                ...state,
                isFileChange: action.isFileChange,
            }
        }
        case FILE_CHANGED: {
            return {
                ...state,
                fileChanged: action.fileChanged,
            }
        }
        case FILE_HIDDEN: {
            return {
                ...state,
                fileHidden: action.fileHidden,
            }
        }
        default: {
            return state
        }
    }
}

export const setFolder = (isActive, path) => ({ type: SET_FOLDER, isActive, path })
export const folderPushFalse = () => ({ type: FOLDER_PUSH_FALSE })
export const folderPushTrue = (isFolder) => ({ type: FOLDER_PUSH_TRUE, isFolder })
export const setId = () => ({ type: SET_ID })
export const setNewFolderName = (newFolderName) => ({ type: SET_NEW_FOLDER_NAME, newFolderName })
export const setFol = (lvl) => ({ type: SET_FOL, lvl })
export const setHiddenActive = (hiddenActive) => ({ type: HIDDEN_ACTIVE, hiddenActive })
export const checkIsItemFolder = (isItemFolder) => ({ type: IS_ITEM_FOLDER, isItemFolder })
export const setFile = (img, width, height, header, text) => ({ type: SET_FILE, img, width, height, header, text })
export const isFolderDelete = (folderDelete) => ({type: FOLDER_DELETE, folderDelete})
export const FileChange = (isFileChange) => ({type: IS_FILE_CHANGE, isFileChange})
export const onFileChanged = (fileChanged) => ({type: FILE_CHANGED, fileChanged})
export const onFileHidden = (fileHidden) => ({type: FILE_HIDDEN, fileHidden})

export default filesReducer;