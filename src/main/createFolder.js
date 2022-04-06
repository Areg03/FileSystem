import { useState } from "react"


const CreateFolder = ({folderPush}) => {

    const [name, setName] = useState('');
    return  <div className="inp">
     <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
     <button>CreateFolder</button>
     <button>CreateFile</button>
     </div>
}

export default CreateFolder;