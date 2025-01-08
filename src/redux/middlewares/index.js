import {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk,
    updateUserImageThunk
} from './userThunk';

const rootThunk = {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk,
    updateUserImageThunk
};

export {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk,
    updateUserImageThunk
};

export default rootThunk;