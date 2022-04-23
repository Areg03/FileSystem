import { memo, useState } from "react";
import OnFileChange from "./fileChange/fileChange";
import s from './content.module.css'
import { Button } from "antd";

const Content = ({ img, width, height, header, text, isFileChange, FileChange,
    setFile, onFileChanged, onFileHidden, createMenuHidden }) => {

    const [hover, onHover] = useState(false)

    return (
        <div className={(createMenuHidden && !isFileChange) ? s.fileContent : s.fileContentDisabled}>
            <div className={s.changeName} onClick={() => FileChange(true)}>changeFile</div>
            <Button className={s.quit} onClick={() => onFileHidden(true)} type={hover === false ? "text" : "primary"}
                onMouseOver={() => onHover(true)} onMouseLeave={() => onHover(false)} danger={hover}>X</Button>
            {!isFileChange && <div>
                <img src={img} width={width} height={height} hidden={(img === null || img == '') ? true : false} />
                <h1>{header}</h1>
                <p>{text}</p>
            </div>}
            {isFileChange && <div>
                <img src={img} width={width} height={height} hidden={(img === null || img == '') ? true : false} />
                <h1>{header}</h1>
                <div className={s.text}>
                   <p>{text}</p> 
                </div>
                <OnFileChange setFile={setFile} FileChange={FileChange}
                    isFileChange={isFileChange} onFileChanged={onFileChanged}
                    img={img} width={width} height={height} header={header} text={text} />
            </div>}
        </div>
    )
}


export default memo(Content);