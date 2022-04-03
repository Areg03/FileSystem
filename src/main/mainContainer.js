import { connect } from "react-redux"
import Main from "./main"

const MainContainer = (props) => {
    
    return <Main folders={props.folders}/>
}



let mapStateToProps = (state) => ({
    folders: state.foldersPage.mainFolder,
})

let mapDispatchToProps = {

}

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

