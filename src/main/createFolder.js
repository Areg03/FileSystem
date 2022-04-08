import { useState, memo } from "react"


const CreateFolder = ({folderPushTrue, setNewFolderName}) => {

    const [name, setName] = useState('');

    const onCreateFolder = () => {
        setNewFolderName(name);
        setName('')
        folderPushTrue(true)
    }

    const onCreateFile = () => {
        setNewFolderName(name);
        setName('')
        folderPushTrue(false)
    }

    return  <div className="inp">
     <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
     <button onClick={onCreateFolder}>CreateFolder</button>
     <button onClick={onCreateFile}>CreateFile</button>
     </div>
}

export default memo(CreateFolder);
