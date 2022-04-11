import { connect } from "react-redux"
import {
    setFolder, folderPushFalse, folderPushTrue, setId,
    setNewFolderName, setFol, setHiddenActive, checkIsItemFolder
} from "../store/filesReducer"
import CreateFolder from "./createFolder"
import Main from "./main"

const MainContainer = (props) => {
    let path = props.path[0];
    for (let i = 1; i < props.path.length; i++) {
        path += '/' + props.path[i];
    }

    return <div>
        <div>
            {path}
        </div>
        <CreateFolder folderPushTrue={props.folderPushTrue} setNewFolderName={props.setNewFolderName}
            isItemFolder={props.isItemFolder} />
        <Main folders={props.folders} isActive={props.isActive}
            setFolder={props.setFolder} folderPush={props.folderPush}
            folderPushFalse={props.folderPushFalse} id={props.id} setId={props.setId}
            newFolderName={props.newFolderName} isFolder={props.isFolder} lvl={props.lvl}
            path={props.path} setFol={props.setFol} hiddenActive={props.hiddenActive}
            setHiddenActive={props.setHiddenActive} checkIsItemFolder={props.checkIsItemFolder} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

