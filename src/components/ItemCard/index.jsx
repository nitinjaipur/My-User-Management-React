import { useState } from "react";
import { useTranslation } from 'react-i18next';

const ItemCard = ({ modalVisible = false }) => {
    const [showModal, setShowModal] = useState(modalVisible);
    const { t } = useTranslation();
    const toggleModal = () => { setShowModal(!showModal); }

    return(
        <div onClick={toggleModal} className="h-64 w-48 rounded-xl border border-slate-950 hover:cursor-pointer">
            <div className="h-[75%] rounded-lg">
                <img src='/images/user/card-Image.png' className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="flex h-[25%] items-center justify-between px-1">
                <span>{t('title')}</span>
                <span>{t('cost')}</span>
            </div>
            {
                showModal &&
                <div className='z-auto fixed flex inset-0 bg-[#3A204657] bg-opacity-30 backdrop-blur-sm justify-center items-center'>
                    <div className="w-3/4 h-3/4 overflow-auto rounded-lg">
                        <div className="bg-mainGreen flex w-full h-[15%] pl-4 items-center overflow-hidden">
                            <p className="text-white text-2xl font-bold">{t('title')}</p>
                        </div>
                        <div className="bg-slate-500 h-[85%] w-full pt-4">
                            <div className="h-[75%] rounded-lg flex justify-center">
                                <img src='/images/user/card-Image.png' className="h-full w-3/4 object-cover rounded-lg" />
                            </div>
                            <div className="h-[25%] w-full flex items-center justify-between px-8">
                                <p>{t('title')}</p>
                                <p>{'Price'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemCard;