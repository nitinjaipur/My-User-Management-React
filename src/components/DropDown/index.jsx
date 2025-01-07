const DropDown = ({ 
    label = 'Label',
    name = '',
    value = '',
    options = [],
    onValueChange = () => {},
}) => {
    const handleValueChange = (e) => onValueChange(e);
    return(
        <div className="relative w-1/2 h-14 rounded-lg flex items-center">
            <select className={`bg-backgroundGray w-full h-full border border-white focus:border-mainGreen outline-none rounded-lg p-2`} name={name} placeholder={label} value={value} onChange={(e) => handleValueChange(e)}>
                {
                    options.map((option, index) => <option key={index} value={option}>{option}</option>)
                }
            </select>
            <span className="absolute bg-backgroundGray -top-3 left-3 px-1">{label}</span>
        </div>
    )
}

export default DropDown;