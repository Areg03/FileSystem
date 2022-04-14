import { useState } from "react";

const OnFileChange = ({ FileChange, setFile, fileChanged, onFileChanged }) => {
    const [img, setImg] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [header, setHeader] = useState('')
    const [text, setText] = useState('')


    const setSome = (e, setImg) => {
        return setImg(e)
    }

    const onButtonClick = () => {
        if (height > 250 && width <= 350) {
            setFile(img, width, 250, header, text);
        } else if (width > 350 && height <= 250) {
            setFile(img, 350, height, header, text);
        }
        else if (height > 250 && width > 350) {
            setFile(img, 350, 250, header, text);
        } else {
            setFile(img, width, height, header, text);
        }
        onFileChanged(true)

        FileChange(false)
    }

    const onXClick = () => {
        FileChange(false)
    }

    return (
        <div className="fileChange">
            <div className="x" onClick={() => onXClick()}>X</div>
            <input type={'text'} placeholder={'img (Enter src without brackets)'} value={img} onChange={(e) => setSome(e.target.value, setImg)} />
            <input type={'number'} placeholder={'width'} value={width} onChange={(e) => setSome(e.target.value, setWidth)} />
            <input type={'number'} placeholder={'height'} value={height} onChange={(e) => setSome(e.target.value, setHeight)} />
            <input type={'text'} placeholder={'header'} value={header} onChange={(e) => setSome(e.target.value, setHeader)} />
            <input type={'text'} placeholder={'text'} value={text} onChange={(e) => setSome(e.target.value, setText)} />
            <button onClick={onButtonClick}>changeFile</button>
        </div>
    )
}

export default OnFileChange;