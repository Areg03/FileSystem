import { connect } from "react-redux"
import {
    setFolder, folderPushFalse, folderPushTrue, setId,
    setNewFolderName, setFol, setHiddenActive, checkIsItemFolder,
    setFile, isFolderDelete, FileChange, onFileChanged, onFileHidden,
    onCreateMenuHidden
} from "../store/filesReducer"
import Content from "./content/content"
import CreateFolder from "./createFolder/createFolder"
import Main from "./main"
import s from "./main.module.css"

const MainContainer = (props) => {

    let path = props.path[0];
    for (let i = 1; i < props.path.length; i++) {
        path += '/' + props.path[i];
    }

    return <div className={!props.isFileChange ? s.all : s.allDisabled} >
        <div className={s.system} >
            <div>
                {path}
            </div>
            <CreateFolder folderPushTrue={props.folderPushTrue} setNewFolderName={props.setNewFolderName}
                isItemFolder={props.isItemFolder} isFolderDelete={props.isFolderDelete}
                onCreateMenuHidden={props.onCreateMenuHidden} createMenuHidden={props.createMenuHidden} />
            <Main folders={props.folders} isActive={props.isActive}
                setFolder={props.setFolder} folderPush={props.folderPush}
                folderPushFalse={props.folderPushFalse} id={props.id} setId={props.setId}
                newFolderName={props.newFolderName} isFolder={props.isFolder} lvl={props.lvl}
                path={props.path} setFol={props.setFol} hiddenActive={props.hiddenActive}
                setHiddenActive={props.setHiddenActive} checkIsItemFolder={props.checkIsItemFolder}
                setFile={props.setFile} isFolderDelete={props.isFolderDelete} folderDelete={props.folderDelete}
                isFileChange={props.isFileChange} img={props.img} width={props.width} height={props.height}
                header={props.header} text={props.text} fileChanged={props.fileChanged} onFileChanged={props.onFileChanged}
                onFileHidden={props.onFileHidden} createMenuHidden={props.createMenuHidden} />
        </div>
        <div hidden={props.fileHidden} >
            <Content img={props.img} width={props.width}
                height={props.height} header={props.header} text={props.text}
                isFileChange={props.isFileChange} FileChange={props.FileChange}
                setFile={props.setFile} fileChanged={props.fileChanged} onFileChanged={props.onFileChanged}
                onFileHidden={props.onFileHidden} onCreateMenuHidden={props.onCreateMenuHidden}
                createMenuHidden={props.createMenuHidden}
            />
        </div>
    </div>
}



let mapStateToProps = (state) => ({
    folders: state.foldersPage.mainFolder,
    isActive: state.foldersPage.isActive,
    folderPush: state.foldersPage.folderPush,
    id: state.foldersPage.id,
    newFolderName: state.foldersPage.newFolderName,
    isFolder: state.foldersPage.isFolder,
    lvl: state.foldersPage.lvl,
    path: state.foldersPage.path,
    hiddenActive: state.foldersPage.hiddenActive,
    isItemFolder: state.foldersPage.isItemFolder,
    img: state.foldersPage.img,
    width: state.foldersPage.width,
    height: state.foldersPage.height,
    header: state.foldersPage.header,
    text: state.foldersPage.text,
    folderDelete: state.foldersPage.folderDelete,
    isFileChange: state.foldersPage.isFileChange,
    fileChanged: state.foldersPage.fileChanged,
    fileHidden: state.foldersPage.fileHidden,
    createMenuHidden: state.foldersPage.createMenuHidden,
})

let mapDispatchToProps = {
    setFolder,
    folderPushFalse,
    folderPushTrue,
    setId,
    setNewFolderName,
    setFol,
    setHiddenActive,
    checkIsItemFolder,
    setFile,
    isFolderDelete,
    FileChange,
    onFileChanged,
    onFileHidden,
    onCreateMenuHidden
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

