import axios from "axios";

export const createPartnerAnnouncement = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partner-announcements`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while adding partner announcement", error);
        return error;
    }
}

export const getAllPartnerAnnouncements = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partner-announcements`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all partner announcements", error);
        return error;
    }
}

export const getPartnerAnnouncementsById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partner-announcements/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting partner announcement by id", error);
        return error;
    }
}

export const updatePartnerAnnouncement = async (id, data) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partner-announcements/${id}`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while updating partner announcement", error);
        return error;
    }
}

export const deletePartnerAnnouncement = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/partner-announcements/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting partner announcement", error);
        return error;
    }
}

export const getPartnerAnnouncementsByProperty = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}/partner-announcements`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting partner announcements by property", error);
        return error;
    }
}