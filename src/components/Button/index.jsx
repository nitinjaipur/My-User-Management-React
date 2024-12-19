const Button = ({
    title = 'Title',
    buttonClass = `bg-mainGreen`,
    onClickButton = () => {}
}) => {
    const handleClickButton = () => onClickButton();
    return(
        <button
            className={`${buttonClass} px-2 py-1 rounded-md`}
            onClick={handleClickButton}
        >
            <p className="text-white">{title}</p>
        </button>
    )
}

export default Button;