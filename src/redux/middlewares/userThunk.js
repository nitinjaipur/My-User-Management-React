import { userRegister, userLogin, userLogout, getUserDetail, deleteUser, updateUser, updateUserImage } from '../../api/userApi';
import { setUserReducer, logoutUserReducer } from '../reducers/userReducer';

export const signupThunk = (data) => async (dispatch) => {
  const response = await userRegister(data);
  if(response?.status == 201) {
    localStorage.setItem('isAuthenticated', 'true');
    dispatch(setUserReducer(response?.data?.data));
    window.location.href = '/';
  }
};

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

export const getUserDetailThunk = () => async (dispatch) => {
  const response = await getUserDetail();
  // if(response?.status == 200) {
  //   onSuccess();
  // }
  // else {
  //   onFail();
  // }
};

export const deleteUserThunk = () => async (dispatch) => {
  const response = await deleteUser();
  if(response?.status == 200) {
    localStorage.setItem('isAuthenticated', 'false');
    dispatch(logoutUserReducer());
    window.location.href = '/';
  }
};

export const updateUserThunk = (data) => async (dispatch) => {
  const response = await updateUser(data);
  if(response?.status == 200) {
    dispatch(setUserReducer(response?.data?.data));
    window.location.reload();
  }
};

export const updateUserImageThunk = (data) => async (dispatch) => {
  const response = await updateUserImage(data);
  if(response?.status == 200) {
    dispatch(setUserReducer(response?.data?.data));
    window.location.reload();
  }
};