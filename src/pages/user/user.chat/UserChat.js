import React, { useEffect, useState } from 'react';
import { sendMessage, getMessagesBySender, getMessagesByReceiver } from '../../../services/api/chat.service';
import NavBarUser from '../../../components/navbar/NavBarUser';

export default function UserChat() {

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);
    const [receiverId, setReceiverId] = useState("");

    useEffect(() => {
        fetchAllMessagesBySender();
    }, []);

    const fetchAllMessagesBySender = async () => {
        const id = localStorage.getItem('userId');
        const response = await getMessagesBySender(id);
        setMessages(response.data);
        console.log(response);
    }

    const fetchAllMessagesByReceiver = async () => {
        const receiverId = localStorage.getItem('userId');
        const response = await getMessagesByReceiver(receiverId);
        setMessages(response.data);
        console.log(response);
    }

    const send = async (event) => {
        event.preventDefault();
        const senderId = localStorage.getItem('userId');
        const data = {
            senderId: senderId,
            receiverId: receiverId,
            message: message
        }
        const response = await sendMessage(data);
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.log("error");
        }
    }

    return (
        <div>
            <NavBarUser />
        </div>
    )
}
