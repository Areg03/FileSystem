import { connect } from "react-redux"
import { createFile, setFolder, folderPushFalse, folderPushTrue, setId, setNewFolderName } from "../store/filesReducer"
import CreateFolder from "./createFolder"   
import Main from "./main"

const MainContainer = (props) => {
    return <div>
        <CreateFolder folderPushTrue={props.folderPushTrue} setNewFolderName={props.setNewFolderName}/>
    <Main folders={props.folders} isActive={props.isActive}
     setFolder={props.setFolder} folderPush={props.folderPush}
      folderPushFalse={props.folderPushFalse} id={props.id} setId={props.setId}
      newFolderName={props.newFolderName} isFolder={props.isFolder} />
    </div>
}



let mapStateToProps = (state) => ({
    folders: state.foldersPage.mainFolder,
    isActive: state.foldersPage.isActive,
    folder: state.foldersPage.folder,
    folderPush: state.foldersPage.folderPush,
    id: state.foldersPage.id,
    newFolderName: state.foldersPage.newFolderName,
    isFolder: state.foldersPage.isFolder,
})

let mapDispatchToProps = {
    createFile,
    setFolder,
    folderPushFalse,
    folderPushTrue,
    setId,
    setNewFolderName,
}

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

