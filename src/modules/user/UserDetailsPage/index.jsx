import { useTranslation } from 'react-i18next';

const UserDetailsPage = () => {
    const { t } = useTranslation();
    return(
        <div className="flex bg-backgroundGray w-full h-full">
            <p>{t('userDetailsPage')}</p>
        </div>
    )
}

export default UserDetailsPage;