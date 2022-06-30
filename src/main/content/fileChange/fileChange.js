import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import s from './fileChange.module.css'

const OnFileChange = ({ FileChange, setFile, onFileChanged, isFileChange, img, width, height, header, text }) => {
    const [aimg, setaImg] = useState('')
    const [awidth, setaWidth] = useState('')
    const [aheight, setaHeight] = useState('')
    const [aheader, setaHeader] = useState('')
    const [atext, setaText] = useState('')
    const [hover, onHover] = useState(false)

    useEffect(() => {
        if (awidth > 350) {
            setaWidth(350)
        }
        if (aheight > 250) {
            setaHeight(250)
        }
    })



    useEffect(() => {
        setaImg(img)
        setaHeader(header)
        setaWidth(width)
        setaHeight(height)
        setaText(text)
    }, [isFileChange])


    const setSome = (e, setaImg) => {
        return setaImg(e)
    }

    const updateHeader = (e) => {
        if (e.target.value.length <= 25) setaHeader(e.target.value)
    }

    const updateText = (e) => {
        if (e.target.value.length <= 650) setaText(e.target.value)
    }

    const onButtonClick = () => {

        if (aheight === null || aheight === '' || aheight < 50) {
            setFile(aimg, awidth, 50, aheader, atext)
        } else if (awidth === null || awidth === '' || awidth < 50) {
            setFile(aimg, 50, aheight, aheader, atext);
        } else if (awidth === null || awidth === '' || awidth < 50 ||
            aheight === null || aheight === '' || aheight < 50) {
            setFile(aimg, 50, 50, aheader, atext)
        }
        else {
            setFile(aimg, awidth, aheight, aheader, atext)
        }
        onFileChanged(true)

        FileChange(false)
    }

    const onXClick = () => {
        FileChange(false)
    }

    return (
        <div className={s.fileChange}>
            <div className={s.x}>
                <Button onClick={() => onXClick()} type={hover === false ? "text" : "primary"}
                    onMouseOver={() => onHover(true)} onMouseLeave={() => onHover(false)} danger={hover}>X</Button>
            </div>
            <div className={s.inpGroup}>
                <Input.Group  >
                    <Input type={'text'} placeholder={'img (Enter src without quotes)'} value={aimg} onChange={(e) => setSome(e.target.value, setaImg)} />
                    <Input type={'number'} placeholder={'width(img)'} value={awidth} onChange={(e) => setSome(e.target.value, setaWidth)} />
                    <Input type={'number'} placeholder={'height(img)'} value={aheight} onChange={(e) => setSome(e.target.value, setaHeight)} />
                    <Input type={'text'} placeholder={'header'} value={aheader} onChange={(e) => updateHeader(e)} />
                </Input.Group>
            </div>
            <div className={s.text}>
                <textarea type={'text'} placeholder={'text(max 650 symbols)'} value={atext} onChange={(e) => updateText(e)} />
            </div>

            <Button type="primary" onClick={onButtonClick}>changeFile</Button>

        </div>
    )
}

export default OnFileChange;