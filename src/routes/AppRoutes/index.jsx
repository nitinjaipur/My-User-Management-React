import { lazy } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import { appRoutes } from '../../routes';
const UserSideBar = lazy(() => import('../../components/UserSideBar'));
const USER_TYPE = 'user';

const RenderedRoutes = () => {
    const routesList = appRoutes[USER_TYPE];
    return(
        <Routes>
            {
                routesList.map((item, index) => {
                    return item.component ? (
                        <Route
                            key={index}
                            path={item.path}
                            element={<item.component />}
                        ></Route>
                    ) : null;
                })
            }
        </Routes>
    )
}

const AppRoutes = () => {
    return(
        <div>
            {
                USER_TYPE == 'user' ?
                    <Routes>
                        <Route
                            path='/*'
                            element={<UserSideBar childComponent={<RenderedRoutes/>}/>}
                        />
                    </Routes>
                    : null
            }
        </div>
    )
}

export default AppRoutes;