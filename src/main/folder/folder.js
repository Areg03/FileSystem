import foldimg from '../../assets/closedFolder.png'
import openFoldImg from '../../assets/openFolder.png'
import fileImg from '../../assets/file.png'
import s from './folder.module.css'

const Folder = (props) => {
    return (
        <div className={s.folder}>
            <img src={props.isFolder ? (props.img ? foldimg : openFoldImg) : fileImg} />
            <div>{props.name}</div>
        </div>
    )
}

export default Folder;