import { userLogin, userLogout } from '../../api/userApi';
import { setUserReducer, logoutUserReducer } from '../reducers/userReducer';

export const loginThunk = (data) => async (dispatch) => {
  const response = await userLogin(data);
  if(response?.status == 200) {
    localStorage.setItem('isAuthenticated', 'true');
    dispatch(setUserReducer(response?.data?.data));
    window.location.reload();
  }
};

export const logoutThunk = () => async (dispatch) => {
  const response = await userLogout();
  if(response?.status != 405) {
    localStorage.setItem('isAuthenticated', 'false');
    dispatch(logoutUserReducer());
    window.location.reload();
  }
};