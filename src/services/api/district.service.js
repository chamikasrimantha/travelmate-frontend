import axios from "axios";

export const addDistrict = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/districts`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding district", error);
        return error;
    }
}

export const getAllDistricts = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/districts`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all districts", error);
        return error;
    }
}

export const getDistrictById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/districts/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting district by id", error);
        return error;
    }
}

export const getDistrictsByProvince = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/provinces/${id}/districts`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting districts by province", error);
        return error;
    }
}