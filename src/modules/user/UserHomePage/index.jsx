import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../../redux/middlewares/index';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
const ItemCard = lazy(() => import('../../../components/ItemCard'));
const cardData = [1, 2, 3, 4, 5, 6, 7];

const UserHomePage = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleLogout = () => {
        dispatch(logoutThunk());
    }

    return(
        <div className="bg-backgroundGray w-full h-full overflow-x-auto">
            <p>{t('userHomePage')}</p>
            <p onClick={handleLogout}>{'Logout'}</p>
            <div className="p-4 flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    cardData.map((item, index) => <ItemCard key={index} />)
                }
            </div>
        </div>
    )
}

export default UserHomePage;