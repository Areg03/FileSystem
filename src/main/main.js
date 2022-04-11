import { useEffect, useState } from "react"
import Folder from "./folder"

const Main = ({ folders, isActive, setFolder, folderPush,
    folderPushFalse, id, setId, newFolderName, isFolder, lvl, path, setFol,
    hiddenActive, setHiddenActive, checkIsItemFolder }) => {


    useEffect(() => {
        if (folderPush === true && folders.isFolder === true && hiddenActive === folders.id) {
            folders.items.push({ id, name: newFolderName, isFolder, hidden: true, items: [] })
            setId()
            folderPushFalse();
        } else if (folders.isFolder === false) {
            folderPushFalse()
        }
    })

    { folders.isFolder && hiddenActive === folders.id && checkIsItemFolder(true) }
    { !folders.isFolder && hiddenActive === folders.id && checkIsItemFolder(false) }

    const [img, setImg] = useState(true);
    const onDoubleImgClick = () => {
        folders.hidden = !folders.hidden
        setImg(!img)
    }

    const onImgClick = () => {
        setFol(lvl)
        setFolder(folders.id, folders.name)
        setHiddenActive(folders.id)
    }

    const isHiddenOnly = () => {
        folders.hidden = true;
        setImg(true)
    }


    { !isActive.includes(folders.id) && img === false && isHiddenOnly() }

    return (
        <div className="main">
            <div onClick={onImgClick} onDoubleClick={onDoubleImgClick} className={hiddenActive === folders.id ? 'isactive' : 'none'}>
                <Folder name={folders.name} img={img} isFolder={folders.isFolder} />
            </div >
            <div className="item" hidden={folders.hidden}>
                {folders.items.map((folder) => (<div key={folder.id}>
                    {folder.id && <Main folders={folder} isActive={isActive} setFolder={setFolder}
                        folderPush={folderPush} folderPushFalse={folderPushFalse} id={id} setId={setId}
                        newFolderName={newFolderName} isFolder={isFolder} lvl={lvl + 1} path={path}
                        setFol={setFol} hiddenActive={hiddenActive} setHiddenActive={setHiddenActive}
                        checkIsItemFolder={checkIsItemFolder} />}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Main;
