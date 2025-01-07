import axiosInstance from './index';

export const userRegister = async (data) => {
    const { name, email, password, age, gender, image } = data;
    try {
        // Convert the data to form-data format
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('age', Number(age));
        formData.append('gender', gender);
        formData.append('image', image);
        return await axiosInstance.post(`/register/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (err) {
        return { status: err?.status, message: err?.response?.data?.message };
    }
};

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

export const getUserDetail = async () => {
    try {
        return await axiosInstance.get(`/get_user_details/`);
    } catch (err) {
        return { status: err?.status, message: err?.response?.data?.message };
    }
};
