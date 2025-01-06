import { useEffect, useState, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSideBarData } from '../../routes/AppRoutes/sideBarData';
const UserDetail = lazy(() => import('../UserDetail'));
const Button = lazy(() => import('../Button'));

const UserSideBar = ({childComponent}) => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(userSideBarData[0]);

    useEffect(() => {
        let windowLocationName = window.location.pathname;
        setCurrentTab(windowLocationName);
    }, [])

    const handleClick = (path) => {
        if(currentTab != path) {
            navigate(path);
            let windowLocationName = window.location.pathname;
            setCurrentTab(windowLocationName);
        }
    }

    return(
        <div className="flex flex-col h-[100vh] w-full">
            <div className="bg-mainGreen flex flex-row-reverse h-[30%] w-full">
                <div className="flex items-center justify-center pr-4">
                    <UserDetail />
                </div>
            </div>
            <div className="flex h-[70%] w-full">
                <div className="bg-slate-900 flex flex-col h-full w-[25%] items-center pt-4 gap-4">
                    {
                        userSideBarData.map((item, index) => {
                            return(
                                <p
                                    key={index}
                                    className={`text-mainGreen hover:cursor-pointer border-mainGreen hover:border-b ${currentTab == item.path ? 'border-b border-solid' : 'border-dashed'}`}
                                    onClick={() => handleClick(item.path)}
                                >
                                    {item.title}
                                </p>
                            )
                        })
                    }
                </div>
                {childComponent}
            </div>
        </div>
    )
}

export default UserSideBar;