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
const CREATE_MENU_HIDDEN = 'CREATE_MENU_HIDDEN';

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
                        id: 6, name: 'lion', isFolder: false, hidden: true, items: [
                            {
                                img: lev, width: 100, height: 100, header: 'Lion', text: `The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India.
                             It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.
                              It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates.
                               The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not.` }
                        ]
                    },
                    {
                        id: 7, name: 'seven', isFolder: true, hidden: true, items: [
                            {
                                id: 8, name: 'pig', isFolder: false, hidden: true, items: [
                                    {
                                        img: 'https://media.istockphoto.com/photos/-picture-id1389203436', width: 350, height: 250, header: 'pig', text: `The pig (Sus domesticus), often called swine, hog, or domestic pig when distinguishing from other members of the genus Sus,
                                         is an omnivorous, domesticated, even-toed, hoofed mammal. It is variously considered a subspecies of Sus scrofa (the wild boar or Eurasian boar) or a distinct species. The pig's head-plus-body length ranges from 0.9 to 1.8 m (3 to 6 ft),
                                 and adult pigs typically weigh between 50 and 350 kg (110 and 770 lb), with well-fed individuals even exceeding this range.
                                  The size and weight of hogs largely depends on their breed. Compared to other artiodactyls, a pig's head is relatively long and pointed. Most even-toed ungulates are herbivorous, but pigs are omnivores, like their wild relative. Pigs grunt and make snorting sounds.` }
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                id: 5, name: 'monkey', isFolder: false, hidden: true, items: [
                    {
                        img: 'https://worldbirds.com/wp-content/uploads/2020/05/monkey11-1024x652.jpg', width: 350, height: 250, header: 'monkey', text: `Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians.
                     Traditionally, all animals in the group now known as simians are counted as monkeys except the apes, a grouping known as paraphyletic; however in the broader sense based on cladistics, apes (Hominoidea) are also included, making the terms monkeys and simians synonyms in regard of their scope.
                      Monkeys are divided into the families of New World monkeys (Platyrrhini) and Old World monkeys (Cercopithecidae in the strict sense; Catarrhini in the broad sense, which again includes apes).` }
                ]
            },
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
    createMenuHidden: true,
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
        case CREATE_MENU_HIDDEN: {
            return {
                ...state,
                createMenuHidden: action.hidden,
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
export const isFolderDelete = (folderDelete) => ({ type: FOLDER_DELETE, folderDelete })
export const FileChange = (isFileChange) => ({ type: IS_FILE_CHANGE, isFileChange })
export const onFileChanged = (fileChanged) => ({ type: FILE_CHANGED, fileChanged })
export const onFileHidden = (fileHidden) => ({ type: FILE_HIDDEN, fileHidden })
export const onCreateMenuHidden = (hidden) => ({ type: CREATE_MENU_HIDDEN, hidden })

export default filesReducer;