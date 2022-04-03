import foldimg from './closedFolder.png'
import openFoldImg from './openFolder.png'
import fileImg from './file.png'

const Folder = (props) => {
    return(
        <div className='folder'>
            <img src={props.isFolder?(props.img ? foldimg : openFoldImg) : fileImg} />
            <div>{props.name}</div>
        </div>
    )
}

export default Folder;