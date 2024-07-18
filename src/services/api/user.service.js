import axios from "axios";

export const userRegister = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/user/register`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while user registering", error);
        return error;
    }
}

export const userLogin = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/user/login`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while user login", error);
        return error;
    }
}

export const partnerRegister = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/partner/register`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while partner registering", error);
        return error;
    }
}

export const partnerLogin = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/partner/login`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while partner login", error);
        return error;
    }
}

export const adminRegister = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/admin/register`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while admin registering", error);
        return error;
    }
}

export const adminLogin = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/admin/login`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while admin login", error);
        return error;
    }
}

export const getAllUsers = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all usres", error);
        return error;
    }
}

export const getAllPartners = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partners`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all partners", error);
        return error;
    }
}

export const getAllAdmins = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admins`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all admins", error);
        return error;
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting user by id", error);
        return error;
    }
}

export const updateUser = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating user", error);
        return error;
    }
}

export const updatePartner = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partners/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating partner", error);
        return error;
    }
}

export const updateAdmin = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admins/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating admin", error);
        return error;
    }
}

export const changeUserPassword = async (id, password) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/change-password`,
            password
        );
        return response;
    } catch (error) {
        console.log("Error: while changing password of user", error);
        return error;
    }
}

export const changePartnerPassword = async (id, password) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partners/${id}/change-password`,
            password
        );
        return response;
    } catch (error) {
        console.log("Error: while changing password of partner", error);
        return error;
    }
}

export const changeAdminPassword = async (id, password) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admins/${id}/change-password`,
            password
        );
        return response;
    } catch (error) {
        console.log("Error: while changing password of admin", error);
        return error;
    }
}