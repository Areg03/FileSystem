import { memo } from "react";
import OnFileChange from "./fileChange";

const Content = ({ img, width, height, header, text, isFileChange, FileChange, setFile, fileChanged, onFileChanged }) => {
    
    return (
        <div>
            <div className="changeName" onClick={() => FileChange(true)}>changeFile</div>
            {!isFileChange && <div>
                <img src={img} width={width} height={height} hidden={img === null ? true : false} />
                <h1>{header}</h1>
                <p>{text}</p>
            </div>}
            {isFileChange && <div>
                <img src={img} width={width} height={height} hidden={img === null ? true : false} />
                <h1>{header}</h1>
                <p>{text}</p>
                <OnFileChange setFile={setFile} FileChange={FileChange} fileChanged={fileChanged} onFileChanged={onFileChanged} />
            </div>}
        </div>
    )
}


export default memo(Content);