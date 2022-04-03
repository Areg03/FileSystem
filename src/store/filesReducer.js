const CREATE_FOLDER = 'CREATE_FOLDER';
const CREATE_FILE = 'CREATE_FILE';
const SET_FOLDER = 'SET_FOLDER';
const SET_FILE = 'SET_FILE';

let initialState = {
    mainFolder: {name: 'first', isFolder: true, items: [
        {name: 'two', isFolder: true, items: [
            {name: 'three', isFolder: true, items: []},
        ]},
        {name: 'four', isFolder: true, items: [
            {name: 'six', isFolder: false, items: []},
            {name: 'seven', isFolder: true, items: [
                {name: 'eight', isFolder: false, items: []},
            ]},
        ]},
        {name: 'five', isFolder: false, items: []}
    ]}
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state
        }
    }
}

export const setFolder = () => ({ type: SET_FOLDER, })

export default filesReducer;