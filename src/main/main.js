import { useMemo, useState } from "react"
import Folder from "./folder"

const Main = ({ folders, isActive, setFolder, folderPush, folderPushFalse, id, setId, newFolderName, isFolder }) => {

    const [img, setImg] = useState(true);
    const onDoubleImgClick = () => {
        setFolder(folders.id)
        folders.hidden = !folders.hidden
        setImg(!img)
    }

    const onImgClick = () => {
        setFolder(folders.id)
        
    }

    
        if (folderPush == true && folders.isFolder && isActive === folders.id) {
            folders.items.push({ id, name: newFolderName, isFolder, hidden: true, items: [] })
            setId()
            folderPushFalse();
        }
    

    console.log(id)
    return (
        <div className="main">
            <div onClick={onImgClick} onDoubleClick={onDoubleImgClick} className={isActive === folders.id ? 'isactive' : 'none'}>
                <Folder name={folders.name} img={img} isFolder={folders.isFolder} />
            </div >
            <div className="item" hidden={folders.hidden}>
                {folders.items.map((folder) => (<div key={folder.id}>
                    {folder.id && <Main folders={folder} isActive={isActive} setFolder={setFolder}
                        folderPush={folderPush} folderPushFalse={folderPushFalse} id={id} setId={setId}
                        newFolderName={newFolderName} isFolder={isFolder} />}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Main;
