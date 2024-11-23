import React, { useEffect, useState } from 'react';
import { sendMessage, getMessagesBySender, getMessagesByReceiver } from '../../../services/api/chat.service';
import NavBarUser from '../../../components/navbar/NavBarUser';
import { getAllPartners } from '../../../services/api/user.service';

export default function UserChat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        if (currentChat) {
            fetchMessages();
        }
    }, [currentChat]);

    const fetchContacts = async () => {
        try {
            const response = await getAllPartners();
            if (response.status === 200) {
                setContacts(response.data);
            } else {
                console.error("Error fetching partners:", response);
            }
        } catch (error) {
            console.error("Error fetching partners:", error);
        }
    };

    const fetchMessages = async () => {
        if (!currentChat) return;
        try {
            const senderId = localStorage.getItem('userId');
            const receiverId = currentChat.id;
            const sentMessages = await getMessagesBySender(senderId);
            const receivedMessages = await getMessagesByReceiver(receiverId);

            const allMessages = [...sentMessages.data, ...receivedMessages.data].sort(
                (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
            );
            setMessages(allMessages);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const send = async (event) => {
        event.preventDefault();
        const senderId = localStorage.getItem('userId');
        const data = {
            senderId,
            receiverId: currentChat.id,
            message,
        };
        try {
            const response = await sendMessage(data);
            if (response.status === 200) {
                setMessages((prev) => [...prev, response.data]);
                setMessage("");
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div >
            <NavBarUser />
            <div style={styles.page}>
                <div style={styles.container}>
                    {/* Contacts Sidebar */}
                    <div style={styles.sidebar}>
                        <h4>Partners</h4>
                        <ul style={styles.contactList}>
                            {contacts.map((contact) => (
                                <li
                                    key={contact.id}
                                    onClick={() => setCurrentChat(contact)}
                                    style={{
                                        ...styles.contactItem,
                                        backgroundColor: currentChat?.id === contact.id ? "#ddd" : "transparent",
                                    }}
                                >
                                    {contact.firstName} {contact.lastName}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chat Area */}
                    <div style={styles.chatArea}>
                        {currentChat ? (
                            <>
                                <div style={styles.chatHeader}>
                                    <h5>Chat with {currentChat.firstName} {currentChat.lastName}</h5>
                                </div>
                                <div style={styles.chatBox}>
                                    {messages.length > 0 ? (
                                        messages.map((msg, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    ...styles.message,
                                                    alignSelf: msg.senderId === localStorage.getItem('userId') ? "flex-end" : "flex-start",
                                                    backgroundColor: msg.senderId === localStorage.getItem('userId') ? "#007bff" : "#e9ecef",
                                                    color: msg.senderId === localStorage.getItem('userId') ? "white" : "black",
                                                }}
                                            >
                                                {msg.message}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No messages yet.</p>
                                    )}
                                </div>
                                <form style={styles.inputArea} onSubmit={send}>
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        style={styles.input}
                                    />
                                    <button type="submit" style={styles.sendButton}>
                                        Send
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={styles.noChat}>
                                <p>Select a contact to start chatting.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "0 15px",
    },
    container: {
        display: "flex",
        height: "80vh",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
    },
    sidebar: {
        width: "25%",
        backgroundColor: "#fff",
        borderRight: "1px solid #ccc",
        padding: "10px",
        overflowY: "auto",
    },
    contactList: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    contactItem: {
        padding: "10px",
        cursor: "pointer",
        borderBottom: "1px solid #ccc",
    },
    chatArea: {
        width: "75%",
        display: "flex",
        flexDirection: "column",
    },
    chatHeader: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
    },
    chatBox: {
        flex: 1,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        backgroundColor: "#f9f9f9",
    },
    message: {
        maxWidth: "60%",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "15px",
    },
    inputArea: {
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ccc",
    },
    input: {
        flex: 1,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginRight: "10px",
    },
    sendButton: {
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    noChat: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
};
