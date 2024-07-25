import axios from "axios";


export const addCity = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/cities`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding city", error);
        return error;
    }
}

export const getAllCities = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/cities`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all cities", error);
        return error;
    }
}

export const getCityById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/cities/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting city by id", error);
        return error;
    }
}

export const getCitiesByDistrict = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/districts/${id}/cities`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting cities by district", error);
        return error;
    }
}