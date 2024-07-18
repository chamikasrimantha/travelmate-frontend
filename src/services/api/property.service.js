import axios from "axios";

export const createProperty = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding property", error);
        return error;
    }
}

export const getAllProperties = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all properties", error);
        return error;
    }
}

export const getPropertiesById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting property by id", error);
        return error;
    }
}

export const updateProperty = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating property", error);
        return error;
    }
}

export const deleteProperty = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting property", error);
        return error;
    }
}

export const getPropertiesByUser = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/properties`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting properties by user", error);
        return error;
    }
}

export const getPropertiesByCategory = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories/${id}/properties`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting properties by category", error);
        return error;
    }
}

export const getPropertiesByDistrict = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/districts/${id}/properties`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting properties by district", error);
        return error;
    }
}

export const getPropertiesByCity = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/cities/${id}/properties`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting properties by city", error);
        return error;
    }
}