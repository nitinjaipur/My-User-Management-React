import { useState, lazy } from "react";
import { useTranslation } from 'react-i18next';
const InputBox = lazy(() => import('../../../components/InputBox'));
const FileInputBox = lazy(() => import('../../../components/FileInputBox'));
const Button = lazy(() => import('../../../components/Button'));
const SignupImageContainer = lazy(() => import('../../../components/SignupImageContainer'));
const LanguageDropdown = lazy(() => import('../../../components/LanguageDropdown'));

const SignUp = () => {
    const [state, setState] = useState({});
    const [imageName, setImageName] = useState('');
    const { t } = useTranslation(); 

    const resetState = () => {
        setState({});
        setImageName('');
    };

    const onStateChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState(prev => ({...prev, [name]: value}));
    };

    const onImageChange = (e) => {
        let file = e?.target?.files[0];
        let fileName = file?.name || '';        
        fileName && setImageName(fileName);
        fileName && setState(prev => ({...prev, 'image': file}));
    }

    const removeImage = () => {
        setImageName('');
        setState(prev => ({...prev, 'image': ''}));
    }

    return(
        <div className="bg-mainGreen w-full h-[100vh] overflow-y-scroll flex flex-col p-6 items-center justify-center">
            <div className="bg-backgroundGray flex flex-col w-1/2 border-2 rounded-lg p-4 gap-4 items-center overflow-auto">
                <p>{t('signUpForm')}</p>
                <div className="flex flex-col w-full gap-4 items-center">
                    <InputBox label={t('name')} name={'name'} value={state.name} onValueChange={onStateChange}/>
                    <InputBox label={t('email')} type="email" name={'email'} value={state.email} onValueChange={onStateChange}/>
                    <InputBox label={t('password')} type='password' name={'password'} value={state.password} onValueChange={onStateChange}/>
                    <FileInputBox label={t('profileImage')} name={'image'} value={imageName} onValueChange={onImageChange}/>
                </div>
                { state.image ? <SignupImageContainer image={state?.image} onCancel={removeImage} /> : null }
                <div className="mt-4 flex w-[60%] justify-between">
                    <Button title={t('resetForm')} buttonClass={'bg-red-700'} onClickButton={resetState}/>
                    <Button title={t('register')} buttonClass={'bg-slate-700'}/>
                </div>
                <LanguageDropdown />
            </div>
        </div>
    )
}

export default SignUp;