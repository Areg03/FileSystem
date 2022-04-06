import { connect } from "react-redux"
import { createFile, setFolder } from "../store/filesReducer"
import CreateFolder from "./createFolder"
import Xdr from "./main"
import Main from "./main"

const MainContainer = (props) => {
    
    return <div>
        <CreateFolder folderPush={props.folderPush}/>
    <Main folders={props.folders} isActive={props.isActive} setFolder={props.setFolder}/>
    </div>
}



let mapStateToProps = (state) => ({
    folders: state.foldersPage.mainFolder,
    isActive: state.foldersPage.isActive,
    folder: state.foldersPage.folder,
    folderPush: state.foldersPage.folderPush
})

let mapDispatchToProps = {
    createFile,
    setFolder,
}

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

