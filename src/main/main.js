import { useState } from "react"
import Folder from "../assets/folder"

const  Main = ({folders}) => {
    console.log(folders)
    const [isHidden, setIsHidden] = useState(true);
    const [img, setImg] = useState(true);

    const onImgClick = () =>{
        setIsHidden(!isHidden);
        setImg(!img)
    }
    return (
        <div className="main">
            <div onClick={onImgClick}>
                <Folder name={folders.name} img={img} isFolder={folders.isFolder} />
            </div >
            <div className="item" hidden={isHidden}>
        {folders.items.map((folder) =>(           
            <Main folders={folder}/>      
        ))}
            </div>
        </div>
    )
}

export default Main;