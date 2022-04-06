import { useEffect, useState } from "react"
import Folder from "./folder"

const Main = ({folders, isActive, setFolder}) => {

    const [img, setImg] = useState(true);
    const onImgClick = () =>{
        setFolder(folders.id)
        folders.hidden = !folders.hidden
        setImg(!img)
    }

    let onCreateFolder = () => {
        
        {folders.isFolder && folders.items.push({ id: 10, name: 'ten', isFolder: true, hidden: true, items: [] })}
    }
    console.log(isActive)
    return (
        <div className="main">
            <button onClick={onCreateFolder}>ad</button>
            <div onClick={onImgClick} className={isActive == folders.id? 'isactive' : 'none'}>
                <Folder name={folders.name} img={img} isFolder={folders.isFolder} />
            </div >
            <div className="item" hidden={folders.hidden}>
        {folders.items.map((folder) =>(  <div key={folder.id}>   
          {folder.id &&  <Main folders={folder} isActive={isActive} setFolder={setFolder}/> }
            </div> 
        ))}
            </div>
        </div>
    )
}

export default Main;
