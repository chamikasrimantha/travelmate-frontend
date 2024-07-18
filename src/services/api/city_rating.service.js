import axios from "axios";

export const addCityRate = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/city-ratings`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding city rate", error);
        return error;
    }
}

export const getAllCityRatings = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/city-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all city rates", error);
        return error;
    }
}

export const getCityRatingsById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/city-ratings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting city rate by id", error);
        return error;
    }
}

export const updateCityRate = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/city-ratings/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating city rate", error);
        return error;
    }
}

export const deleteCityRate = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/city-ratings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting city rate", error);
        return error;
    }
}

export const getCityRatingsByUser = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/city-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting city rates by user", error);
        return error;
    }
}

export const getCityRatingsByCity = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/cities/${id}/city-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting city rates by city", error);
        return error;
    }
}