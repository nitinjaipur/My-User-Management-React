const SignupImageContainer = ({
    image = '',
    onCancel = () => {}
}) => {
    const handleCancel = () => onCancel();
    return(
        <div className="relative w-1/4">
            <img src={URL.createObjectURL(image)} className="rounded-lg"/>
            <img src='/images/auth/cross.png' className="absolute top-1 right-1" onClick={handleCancel}/>
        </div>
    )
}

export default SignupImageContainer;