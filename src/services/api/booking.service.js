import axios from "axios";

export const createBooking = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/bookings`,
            data
        );
        return response;
    } catch (error) {
        console.log("Error: while creating booking", error);
        return error;
    }
}

export const getAllBookings = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/bookings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting all bookings", error);
        return error;
    }
}

export const getBookingsById = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/bookings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting booking by id", error);
        return error;
    }
}

export const getBookingsByUser = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/bookings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting bookings by user", error);
        return error;
    }
}

export const getBookingsByProperty = async (id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/properties/${id}/bookings`
        );
        return response;
    } catch (error) {
        console.log("Error: while getting bookings by property", error);
        return error;
    }
}

export const deleteBooking = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/bookings/${id}`
        );
        return response;
    } catch (error) {
        console.log("Error: while deleting booking", error);
        return error;
    }
}