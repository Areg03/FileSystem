import { Button, Input } from "antd";
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
        if (e.target.value !== ' ' && e.target.value.length !== 25) setName(e.target.value)
    }

    return <div className="inp" >
        <Input type={'text'} value={name} onChange={updateNewPostText} />
        <div className="createFolder">
            <Button type="primary" onClick={onCreateFolder}>CreateFolder</Button>
        </div>
        <div className="createFile">
            <Button type="primary" onClick={onCreateFile}>CreateFile</Button>
        </div>
        <div className="delete" >
            <Button type="primary" onClick={onDelete}>DeleteFile</Button>
        </div>
    </div>
}

export default memo(CreateFolder);
