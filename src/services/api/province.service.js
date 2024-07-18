import axios from "axios";

export const addProvince = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/provinces`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding province", error);
        return error;
    }
}

export const getAllProvinces = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/provinces`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all provinces", error);
        return error;
    }
}

export const getProvinceById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/provinces/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting province by id", error);
        return error;
    }
}