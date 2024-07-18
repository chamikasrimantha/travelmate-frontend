import axios from "axios";

export const createCategory = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding category", error);
        return error;
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all categories", error);
        return error;
    }
}

export const getCategoriesById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting category by id", error);
        return error;
    }
}

export const updateCategory = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating category", error);
        return error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/categories/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting category", error);
        return error;
    }
}