import { useRef } from "react";

const FileInputBox = ({ 
    label = 'Label',
    name = '',
    value = '',
    onValueChange = () => {}
}) => {
    const fileInputRef = useRef();
    const handleValueChange = (e) => onValueChange(e);

    return(
        <div className="relative w-1/2 h-14 rounded-lg flex items-center">
            <input className={`bg-backgroundGray w-full h-full border border-white focus:border-mainGreen outline-none rounded-lg p-2 pr-8`} name={name} type={'text'} placeholder={label} value={value} onClick={() => fileInputRef.current.click()}></input>
            <span className="absolute bg-backgroundGray -top-3 left-3 px-1">{label}</span>
            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={(e) => handleValueChange(e)}/>
            <div className="z-auto absolute right-0 pr-1" onClick={() => fileInputRef.current.click()}>
                <img src="/images/auth/upload.png" />
            </div>
        </div>
    )
}

export default FileInputBox;