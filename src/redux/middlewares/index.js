import { loginThunk, logoutThunk } from './userThunk';

const rootThunk = {
    loginThunk,
    logoutThunk
};

export { loginThunk, logoutThunk };
export default rootThunk;