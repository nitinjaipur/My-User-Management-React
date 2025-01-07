import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../redux/middlewares/index';
import { useTranslation } from 'react-i18next';
import { useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
const InputBox = lazy(() => import('../../../components/InputBox'));
const Button = lazy(() => import('../../../components/Button'));
const LanguageDropdown = lazy(() => import('../../../components/LanguageDropdown'));

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [state, setState] = useState({});
    const resetState = () => setState({});
    const onStateChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState(prev => ({...prev, [name]: value}));
    };

    const handleLogin = () => {
        if (state.email && state.password) {            
            dispatch(loginThunk(state));
        }
    }

    return(
        <div className="bg-mainGreen w-full h-[100vh] overflow-y-scroll flex flex-col p-6 items-center justify-center">
            <div className="bg-backgroundGray flex flex-col w-1/2 border-2 rounded-lg p-4 gap-4 items-center overflow-auto">
                <p>{t('signInForm')}</p>
                <p>{t('welcome')}</p>
                <div className="flex flex-col w-full gap-4 items-center">
                    <InputBox label={t('email')} type="email" name={'email'} value={state.email} onValueChange={onStateChange}/>
                    <InputBox label={t('password')} type='password' name={'password'} value={state.password} onValueChange={onStateChange}/>
                </div>
                <div className="mt-4 flex w-[60%] justify-between">
                    <Button title={t('resetForm')} buttonClass={'bg-red-700'} onClickButton={resetState}/>
                    <Button title={t('logIn')} buttonClass={'bg-slate-700'} onClickButton={handleLogin}/>
                </div>
                <p className="text-sm flex">{t('newHereQuestion')}<p className="font-semibold px-1 hover:cursor-pointer" onClick={() => navigate('/signup')}>{t('signUp')}</p>{t('nowLower')}</p>
                <LanguageDropdown />
            </div>
        </div>
    )
}

export default SignIn;