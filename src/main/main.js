import { useEffect, useState } from "react"
import Folder from "./folder/folder"
import s from "./main.module.css"

const Main = ({ folders, isActive, setFolder, folderPush,
    folderPushFalse, id, setId, newFolderName, isFolder, lvl, path, setFol,
    hiddenActive, setHiddenActive, checkIsItemFolder, setFile, folderDelete,
    isFolderDelete, isFileChange, img, width, height, header, text, fileChanged,
    onFileChanged, onFileHidden, createMenuHidden }) => {


    const a = folders.items.find(item => item.id === hiddenActive)
    useEffect(() => {
        if (folderPush === true && isFolder === true && hiddenActive === folders.id
            && newFolderName !==
            '' && newFolderName !== null) {
            //create folder

            folders.items.push({ id, name: newFolderName, isFolder, hidden: true, items: [] })

            setId()
            folderPushFalse();
        } else if (folderPush === true && isFolder === false && hiddenActive === folders.id
            && newFolderName !==
            '' && newFolderName !== null) {
            //create file
            folders.items.push({
                id, name: newFolderName, isFolder, hidden: true, items: [
                    { img: null, width: null, height: null, header: 'newFile', text: null }
                ]
            })
            setId()
            folderPushFalse()

        }
        else {
            folderPushFalse()
        }
        { folders.isFolder === true && hiddenActive === folders.id && checkIsItemFolder(true) }
        { folders.isFolder === false && hiddenActive === folders.id && checkIsItemFolder(false) }
        if (folderDelete === true && a !== undefined && hiddenActive !== 1) {
            // delete
            folders.items.splice(folders.items.indexOf(a), 1)
            setHiddenActive(folders.id)
            isFolderDelete(false)
        } else {
            isFolderDelete(false)
        }
        if (fileChanged === true && folders.isFolder === false && folders.id === hiddenActive) {
            //file changed
            folders.items[0].img = img;
            folders.items[0].width = width;
            folders.items[0].height = height;
            folders.items[0].header = header;
            folders.items[0].text = text;
            onFileChanged(false)
        }
        folders.name = newName
    })

    const [aimg, setImg] = useState(true);
    const [editMode, setEditMode] = useState(true);
    const [newName, setNewName ] = useState(folders.name)

    

    const onDoubleImgClick = () => {
        folders.hidden = !folders.hidden
        setImg(!aimg)
        if (folders.isFolder === false) {
            setFile(folders.items[0].img, folders.items[0].width, folders.items[0].height,
                folders.items[0].header, folders.items[0].text)
            onFileHidden(false)
        }
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


    { !isActive.includes(folders.id) && aimg === false && isHiddenOnly() }
    const b = folders.items.filter(fol => fol.id !== undefined)



    return (
        <div className={createMenuHidden ? s.main : s.mainDisabled}  >
            <div onClick={onImgClick} onDoubleClick={onDoubleImgClick} >
                <Folder img={aimg} isFolder={folders.isFolder} />
            </div>
            {editMode ? <div className={hiddenActive === folders.id ? s.isactive : s.none}>
                    <span onDoubleClick={() => setEditMode(false)}>{folders.name}</span>
                </div>
                :
                <div>
                    <input value={newName} onChange={(e) => setNewName(e.target.value)} style={{border: '2px solid black'}}
                     onBlur={() => setEditMode(true)} autoFocus={true}/>
                </div>}
            <div className={s.item} hidden={folders.hidden}>
                {b.map((folder) => (<div key={folder.id}>
                    <Main folders={folder} isActive={isActive} setFolder={setFolder}
                        folderPush={folderPush} folderPushFalse={folderPushFalse} id={id} setId={setId}
                        newFolderName={newFolderName} isFolder={isFolder} lvl={lvl + 1} path={path}
                        setFol={setFol} hiddenActive={hiddenActive} setHiddenActive={setHiddenActive}
                        checkIsItemFolder={checkIsItemFolder} setFile={setFile}
                        folderDelete={folderDelete} isFolderDelete={isFolderDelete}
                        isFileChange={isFileChange} img={img} width={width} height={height}
                        header={header} text={text} fileChanged={fileChanged}
                        onFileChanged={onFileChanged} onFileHidden={onFileHidden}
                        createMenuHidden={createMenuHidden} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Main;
