import { GENDERS } from '../../../utils/data';
import { lazy, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk, updateUserImageThunk } from '../../../redux/middlewares/index';
const Button = lazy(() => import('../../../components/Button'));
const InputBox = lazy(() => import('../../../components/InputBox'));
const FileInputBox = lazy(() => import('../../../components/FileInputBox'));
const DropDown = lazy(() => import('../../../components/DropDown'));
const SignupImageContainer = lazy(() => import('../../../components/SignupImageContainer'));

const EditUserDetailsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { name, email, age, gender, profileImg } = user;
    const [allowed, setAllowed] = useState({ image: false, details: false});
    const [state, setState] = useState({
        name: name,
        email: email,
        age: age,
        gender: gender || GENDERS[0],
        profileImage: profileImg
    });
    const [imageName, setImageName] = useState('');

    const onStateChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState(prev => ({...prev, [name]: value}));
    };

    const onImageChange = (e) => {
        let file = e?.target?.files[0];
        let fileName = file?.name || '';        
        fileName && setImageName(fileName);
        fileName && setState(prev => ({...prev, 'profileImage': file}));
        setAllowed(prev => ({...prev, 'image': true}));
    }

    const removeImage = () => {
        setImageName('');
        setState(prev => ({...prev, 'profileImage': ''}));
    }

    const handleUpdateUser = () => dispatch(updateUserThunk(state));
    const handleUpdateUserImage = () => dispatch(updateUserImageThunk(state.profileImage));

    useEffect(() => {
        let stateData = { name: state.name, email: state.email, age: String(state.age), gender: state.gender };
        let userData = { name, email, age: String(age), gender };
        if (JSON.stringify(stateData) === JSON.stringify(userData)) {
            allowed.details && setAllowed(prev => ({...prev, 'details': false}));
        } else {
            !allowed.details && setAllowed(prev => ({...prev, 'details': true}));
        }
    }, [state]);

    return(
        <div className="flex flex-col bg-backgroundGray w-full h-full items-center py-8 gap-4 overflow-x-auto">
            <div className='flex w-full h-full'>
                <div className='flex flex-col h-full w-1/2 justify-center items-center gap-8'>
                    { state.profileImage ? <SignupImageContainer image={state?.profileImage} onCancel={removeImage} /> : null }
                    <FileInputBox label={t('profileImage')} name={'image'} value={imageName} onValueChange={onImageChange}/>
                    <Button title={t('updateImage')} allowed={allowed.image} onClickButton={handleUpdateUserImage} buttonColorClass={'bg-mainGreen'} buttonClass={'mt-2'}/>
                </div>
                <div className='flex flex-col w-full h-full items-center gap-4'>
                    <InputBox label={t('name')} name={'name'} value={state.name} onValueChange={onStateChange}/>
                    <InputBox label={t('email')} type="email" name={'email'} value={state.email} onValueChange={onStateChange}/>
                    <InputBox label={t('age')} type="number" name={'age'} value={state.age} onValueChange={onStateChange}/>
                    <DropDown label={t('gender')} name='gender' options={GENDERS} value={state.gender} onValueChange={onStateChange}/>
                </div>
            </div>
            <Button title={t('updateUser')} allowed={allowed.details} onClickButton={handleUpdateUser} buttonColorClass={'bg-mainGreen'} buttonClass={'mt-2'}/>
        </div>
    )
}

export default EditUserDetailsPage;