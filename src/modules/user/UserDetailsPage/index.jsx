import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const UserDetailsPage = () => {
    const { t } = useTranslation();
    const user = useSelector(state => state.user);
    useEffect(() => {
        console.log(user);
    }, []);
    return(
        <div className="flex bg-backgroundGray w-full h-full">
            <p>{t('userDetailsPage')}</p>
        </div>
    )
}

export default UserDetailsPage;