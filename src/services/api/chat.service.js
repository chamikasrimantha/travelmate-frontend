import axios from "axios";

export const sendMessage = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/chat/send`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while sending message", error);
        return error;
    }
}

export const getMessagesBySender = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/chat/sender/${id}`
        );
        // Return the response data
        return response.data;
    } catch (error) {
        console.error("Error while getting messages by sender", error);
        throw error; // Propagate the error for further handling if needed
    }
}

export const getMessagesByReceiver = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/chat/receiver/${id}`
        );
        // Return the response data
        return response.data;
    } catch (error) {
        console.error("Error while getting messages by receiver", error);
        throw error; // Propagate the error for further handling if needed
    }
}

