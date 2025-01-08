import {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk
} from './userThunk';

const rootThunk = {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk
};

export {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk,
    updateUserThunk
};

export default rootThunk;