import { userLogin, userLogout, getUserDetail } from '../../api/userApi';
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
    window.location.href = '/';
  }
};

export const getUserDetailThunk = ({onSuccess=() => {}, onFail=() => {}}) => async (dispatch) => {
  const response = await getUserDetail();
  if(response?.status == 200) {
    onSuccess();
  }
  else {
    onFail();
  }
};