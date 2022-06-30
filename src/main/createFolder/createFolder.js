import { Button, Input } from "antd"
import { useState, memo } from "react"
import s from './createFolder.module.css'


const CreateFolder = ({ folderPushTrue, setNewFolderName, isItemFolder, isFolderDelete,
    createMenuHidden, onCreateMenuHidden }) => {

    const [name, setName] = useState('');
    const [hover, onHover] = useState(false)
    const [del, onDel] = useState(false)
    const [cr, onCr] = useState(false)
    const [dang, onDang] = useState(false)


    const onCreate = (boolean) => {

        setNewFolderName(name);
        setName('')
        folderPushTrue(boolean)
        onCreateMenuHidden(true)

    }

    const onCreateClick = () => {
        if (isItemFolder === true) {
            onCreateMenuHidden(false)
        } else{
            onDang(true)
            setTimeout(() => onDang(false), 300)
        }
    }

    const onDelete = () => {

        isFolderDelete(true)
    }

    const updateNewPostText = (e) => {
        if (e.target.value !== ' ' && e.target.value.length !== 25) setName(e.target.value)
    }

    const onClose = () => {
        onCreateMenuHidden(true)
        setName('')
    }

    return <div className={s.inp} >
        <div className={s.crdl}>
            <div >
                <Button type={cr === false ? "default" : "primary"} onMouseOver={() => onCr(true)}
                    onMouseLeave={() => onCr(false)} onClick={onCreateClick} danger={dang}>Create</Button>
            </div>
            <div >
                <Button type={del === false ? "default" : "primary"} onMouseOver={() => onDel(true)}
                    onMouseLeave={() => onDel(false)} onClick={onDelete} danger>Delete</Button>
            </div>
        </div>
        <div className={s.create} hidden={createMenuHidden} >
            <Input type={'text'} value={name} onChange={updateNewPostText} placeholder='name' />
            <span className={s.x} >
                <Button size="small" type={hover === false ? "text" : "primary"}
                    onMouseOver={() => onHover(true)} onMouseLeave={() => onHover(false)}
                    onClick={onClose} danger={hover}>X</Button>
            </span>
            <div className={s.buttons} >
                <div className={s.folder}>
                    <Button type="primary" onClick={() => onCreate(true)}
                        disabled={name === '' ? true : false} >Folder</Button>
                </div>
                <div className={s.file}>
                    <Button type="primary" onClick={() => onCreate(false)}
                        disabled={name === '' ? true : false} >File</Button>
                </div>
            </div>
        </div>
    </div>
}

export default memo(CreateFolder);
