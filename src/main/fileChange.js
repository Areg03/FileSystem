import { useState } from "react";

const OnFileChange = ({FileChange, setFile, fileChanged, onFileChanged}) => {
    const [img, setImg] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [header, setHeader] = useState('')
    const [text, setText] = useState('')

    
    function app(e, setImg) {
        return setImg(e)
    }
    
    const onButtonClick = () => {
        setFile(img, width, height, header, text);

        onFileChanged(true)

        FileChange(false)
    }

    return (
        <div className="fileChange">
            <img />
            <input type={'text'} placeholder={'img'} value={img} onChange={(e) => app(e.target.value, setImg)} />
            <input type={'text'} placeholder={'width'} value={width} onChange={(e) => app(e.target.value, setWidth)} />
            <input type={'text'} placeholder={'height'} value={height} onChange={(e) => app(e.target.value, setHeight)} />
            <input type={'text'} placeholder={'header'} value={header} onChange={(e) => app(e.target.value, setHeader)} />
            <input type={'text'} placeholder={'text'} value={text} onChange={(e) => app(e.target.value, setText)} />
            <button onClick={onButtonClick}>changeFile</button>
        </div>
    )
}

export default OnFileChange;