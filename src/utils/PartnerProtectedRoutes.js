import React from 'react';
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const PartnerProtectedRoutes = () => {

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    if (!token) {
        navigate('/partner/signin');
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return <Outlet />

}

export default PartnerProtectedRoutes;