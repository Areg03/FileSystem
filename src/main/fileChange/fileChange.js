import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import s from './fileChange.module.css'

const OnFileChange = ({ FileChange, setFile, onFileChanged, isFileChange, img, width, height, header, text }) => {
    const [aimg, setaImg] = useState('')
    const [awidth, setaWidth] = useState('')
    const [aheight, setaHeight] = useState('')
    const [aheader, setaHeader] = useState('')
    const [atext, setaText] = useState('')

    useEffect(() => {
        setaImg(img)
        setaHeader(header)
        setaWidth(width)
        setaHeight(height)
        setaText(text)
    },[isFileChange])


    const setSome = (e, setaImg) => {
        return setaImg(e)
    }

    const onButtonClick = () => {
        if (aheight > 250 && awidth <= 350) {
            setFile(aimg, awidth, 250, aheader, atext);
        } else if (awidth > 350 && aheight <= 250) {
            setFile(aimg, 350, aheight, aheader, atext);
        }
        else if (aheight > 250 && awidth > 350) {
            setFile(aimg, 350, 250, aheader, atext);
        } else {
            setFile(aimg, awidth, aheight, aheader, atext);
        }
        onFileChanged(true)

        FileChange(false)
    }

    const onXClick = () => {
        FileChange(false)
    }

    return (
        <div className={s.fileChange}>
            <div className={s.fileClose} onClick={() => onXClick()}>X</div>
            <div className={s.inpGroup}>
            <Input.Group  >
                <Input  type={'text'} placeholder={'img (Enter src without quotes)'} value={aimg} onChange={(e) => setSome(e.target.value, setaImg)} />
                <Input type={'number'} placeholder={'width(img)'} value={awidth} onChange={(e) => setSome(e.target.value, setaWidth)} />
                <Input type={'number'} placeholder={'height(img)'} value={aheight} onChange={(e) => setSome(e.target.value, setaHeight)} />
                <Input type={'text'} placeholder={'header'} value={aheader} onChange={(e) => setSome(e.target.value, setaHeader)} />
                <Input type={'text'} placeholder={'text'} value={atext} onChange={(e) => setSome(e.target.value, setaText)} />
            </Input.Group>
            </div>
            <Button type="primary" onClick={onButtonClick}>changeFile</Button>
            
        </div>
    )
}

export default OnFileChange;