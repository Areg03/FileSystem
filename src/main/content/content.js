import { memo } from "react";
import OnFileChange from "../fileChange/fileChange";
import s from './content.module.css'

const Content = ({ img, width, height, header, text, isFileChange, FileChange,
    setFile, onFileChanged, onFileHidden }) => {

    return (
        <div >
            <div className={s.changeName} onClick={() => FileChange(true)}>changeFile</div>
            <div className={s.quit} onClick={() => onFileHidden(true)}>X</div>
            {!isFileChange && <div>
                <img src={img} width={width} height={height} hidden={(img === null || img == '') ? true : false} />
                <h1>{header}</h1>
                <p>{text}</p>
            </div>}
            {isFileChange && <div>
                <img src={img} width={width} height={height} hidden={(img === null || img == '') ? true : false} />
                <h1>{header}</h1>
                <p>{text}</p>
                <OnFileChange setFile={setFile} FileChange={FileChange}
                    isFileChange={isFileChange} onFileChanged={onFileChanged}
                    img={img} width={width} height={height} header={header} text={text} />
            </div>}
        </div>
    )
}


export default memo(Content);