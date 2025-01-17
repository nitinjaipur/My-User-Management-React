const Button = ({
    title = 'Title',
    buttonColorClass = `bg-mainGreen`,
    buttonColorDisabledClass = `bg-neutral-500`,
    buttonClass = ``,
    onClickButton = () => {},
    allowed = true,
}) => {
    const handleClickButton = () => onClickButton();
    return(
        <button
            className={`${!allowed && 'hover:cursor-not-allowed'} ${allowed ? buttonColorClass : buttonColorDisabledClass} ${buttonClass} px-2 py-1 rounded-md`}
            onClick={handleClickButton}
        >
            <p className="text-white">{title}</p>
        </button>
    )
}

export default Button;