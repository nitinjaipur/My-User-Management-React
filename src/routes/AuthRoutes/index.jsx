import {
    Routes,
    Route,
  } from "react-router-dom";
import { authRoutes } from '../../routes';
const USER_TYPE = 'user';

const AuthRoutes = () => {
    return(
        <div>
            {
                USER_TYPE == 'user' ?
                    <Routes>
                        {
                            authRoutes.map((item, index) => {                                
                                return item.component ? (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={<item.component />}
                                    />
                                ) : null
                            })
                        }
                    </Routes>
                    : null
            }
        </div>
    )
}

export default AuthRoutes;