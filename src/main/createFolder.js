import { useState, memo } from "react"


const CreateFolder = ({ folderPushTrue, setNewFolderName, isItemFolder, isFolderDelete }) => {

    const [name, setName] = useState('');

    const onCreateFolder = () => {
        if (isItemFolder === true) {
            setNewFolderName(name);
            setName('')
            folderPushTrue(true)
        }

    }

    const onCreateFile = () => {
        if (isItemFolder === true) {
            setNewFolderName(name);
            setName('')
            folderPushTrue(false)
        }
    }

    const onDelete = () => {

        isFolderDelete(true)
    }

    const updateNewPostText = (e) => {
        if (e.target.value !== ' ' && e.target.value.length !== 20) setName(e.target.value)
    }

    return <div className="inp" >
        <input type={'text'} value={name} onChange={updateNewPostText} />
        <button onClick={onCreateFolder}>CreateFolder</button>
        <button onClick={onCreateFile}>CreateFile</button>
        <button onClick={onDelete}>DeleteFile</button>
    </div>
}

export default memo(CreateFolder);
