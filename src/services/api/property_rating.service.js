import axios from "axios";

export const addPropertyRate = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/property-ratings`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding property rate", error);
        return error;
    }
}

export const getAllPropertyRatings = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/property-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all property rates", error);
        return error;
    }
}

export const getPropertyRatingsById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/property-ratings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting property rate by id", error);
        return error;
    }
}

export const updatePropertyRate = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/property-ratings/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating property rate", error);
        return error;
    }
}

export const deletePropertyRate = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/property-ratings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting property rate", error);
        return error;
    }
}

export const getPropertyRatingsByUser = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/property-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting property rates by user", error);
        return error;
    }
}

export const getPropertyRatingsByProperty = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}/property-ratings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting property rates by property", error);
        return error;
    }
}