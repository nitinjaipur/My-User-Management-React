import axiosInstance from './index';

export const userLogin = async (data) => {
    const { email, password} = data;
    try {
        return await axiosInstance.post(`/login/`,
            {
                email: email, password: password
            }
        );
    } catch (err) {
        return { status: err?.status, message: err?.response?.data?.message };
    }
};

export const userLogout = async () => {
    try {
        return await axiosInstance.post(`/logout/`, {} );
    } catch (err) {
        return { status: err?.status, message: err?.response?.data?.message };
    }
};
