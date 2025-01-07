import {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk
} from './userThunk';

const rootThunk = {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk
};

export {
    loginThunk,
    logoutThunk,
    getUserDetailThunk,
    deleteUserThunk
};

export default rootThunk;