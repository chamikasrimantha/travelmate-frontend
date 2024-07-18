import axios from "axios";

export const createAdminAnnouncement = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin-announcements`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding admin announcement", error);
        return error;
    }
}

export const getAllAdminAnnouncements = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin-announcements`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all admin announcements", error);
        return error;
    }
}

export const getAdminAnnouncementsById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin-announcements/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting admin announcement by id", error);
        return error;
    }
}

export const updateAdminAnnouncement = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin-announcements/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating admin announcement", error);
        return error;
    }
}

export const deleteAdminAnnouncement = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/admin-announcements/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting admin announcement", error);
        return error;
    }
}