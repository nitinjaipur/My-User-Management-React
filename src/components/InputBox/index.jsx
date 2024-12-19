import { useState } from "react";

const InputBox = ({ 
    label = 'Label',
    name = '',
    value = '',
    type = 'text',
    onValueChange = () => {}
}) => {
    const [inputType, setInputType] = useState(type);
    const toggleInputType = () => inputType == 'password' ? setInputType('text') : setInputType('password');
    const handleValueChange = (e) => onValueChange(e);

    return(
        <div className="relative w-1/2 h-14 rounded-lg flex items-center">
            <input className={`bg-backgroundGray w-full h-full border border-white focus:border-mainGreen outline-none rounded-lg p-2 ${type == 'password' && 'pr-6'} `} name={name} type={inputType} placeholder={label} value={value} onChange={(e) => handleValueChange(e)}></input>
            {
                type == 'password' ?
                <div className="z-auto absolute right-0" onClick={toggleInputType}>
                    {
                        inputType == 'password' ?
                        <img src="/images/auth/eye_hidden.png" />:
                        <img src="/images/auth/eye_show.png" />
                    }
                </div>
                :
                null
            }
            <span className="absolute bg-backgroundGray -top-3 left-3 px-1">{label}</span>
        </div>
    )
}

export default InputBox;