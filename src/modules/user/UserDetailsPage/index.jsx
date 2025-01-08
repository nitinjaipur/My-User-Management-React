import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk, deleteUserThunk } from '../../../redux/middlewares/index';
const Button = lazy(() => import('../../../components/Button'));

const FieldComponent = ({label, value}) => {
    return(
        <div className='flex'>
            <p className='text-lg font-semibold'>{label}</p>
            <p className='text-lg font-semibold'>{':\u00A0'}</p>
            <p className='text-lg font-semibold'>{value}</p>
        </div>
    );
}

const UserDetailsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { profileImg } = user;

    const handleLogout = () => dispatch(logoutThunk());
    const handleDeleteUser = () => dispatch(deleteUserThunk());

    return(
        <div className="flex flex-col bg-backgroundGray w-full h-full items-center">
            <p className='text-2xl font-bold my-5'>{t('userDetailsPage')}</p>
            <div className='flex flex-col items-center'>
                <img
                    className='rounded-full'
                    width={150}
                    height={150}
                    src={profileImg}
                    alt="User Profile"
                />
                {
                    Object.keys(user).map((key) => (
                        (key != 'id' && key != 'profileImg') && <FieldComponent label={t(`${key}`)} value={user[`${key}`]} />
                    ))
                }
                <Button title={t('logout')} onClickButton={handleLogout} buttonColorClass={'bg-red-800'} buttonClass={'mt-2'}/>
                <Button title={t('deleteUser')} onClickButton={handleDeleteUser} buttonColorClass={'bg-red-800'} buttonClass={'mt-2'}/>
            </div>
        </div>
    )
}

export default UserDetailsPage;