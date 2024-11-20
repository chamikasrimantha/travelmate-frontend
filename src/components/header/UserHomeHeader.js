import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import img from './img.png';

export default function UserHomeHeader() {
    const [showChat, setShowChat] = useState(false); // State to toggle chatbot visibility
    const [userMessage, setUserMessage] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    // Access API key from .env file
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: userMessage }],
                }),
            });

            const data = await response.json();
            setChatResponse(data.choices[0]?.message?.content || 'Sorry, I couldn’t understand your question.');
        } catch (error) {
            setChatResponse('Error communicating with the AI.');
        }

        setUserMessage('');
    };

    return (
        <div>
            <div style={{ position: 'relative', color: 'white' }}>
                <img src={img} alt="Vacation" style={{ width: '100%', height: '300px' }} />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '6%',
                        transform: 'translateY(-50%)',
                        textAlign: 'left',
                    }}
                >
                    <h1 style={{ fontSize: '2.5rem' }}>Experience Sri Lanka's Magic</h1>
                    <p style={{ fontSize: '1.2rem' }}>
                        Explore Sri Lanka's Beauty. Your Journey Begins Here!
                    </p>
                    <Button
                        variant="primary"
                        style={{
                            backgroundColor: '#1B68DD',
                            borderColor: '#1B68DD',
                            height: '40px',
                            fontWeight: 'bold',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#1456A0';
                            e.target.style.borderColor = '#1456A0';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#1B68DD';
                            e.target.style.borderColor = '#1B68DD';
                        }}
                    >
                        Discover vacation rentals
                    </Button>
                </div>
                <div
                    className="custom-container desktop-only"
                    style={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '50px',
                        backgroundColor: 'white',
                        borderRadius: '7px',
                        border: '4px solid #DAA520',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="desktop-only"
                        style={{
                            flex: 1,
                            color: 'black',
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                        }}
                    >
                        Where do you want to go?
                    </div>
                    <div
                        className="desktop-only"
                        style={{
                            flex: 0.75,
                            color: 'black',
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                        }}
                    >
                        Don't you have plans?
                    </div>
                    <div
                        className="desktop-only"
                        style={{
                            flex: 1.25,
                            color: 'black',
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                        }}
                    >
                        Try TravelMate AI Assistant, It's free!
                    </div>
                    <div className="desktop-only" style={{ flex: 1, textAlign: 'center' }}>
                        <Button
                            variant="primary"
                            style={{
                                width: '98%',
                                borderRadius: '7px',
                                backgroundColor: '#043E96',
                                color: 'white',
                                borderColor: '#043E96',
                                height: '40px',
                                fontWeight: 'bold',
                            }}
                            onClick={() => setShowChat(true)}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#032C70';
                                e.target.style.borderColor = '#032C70';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#043E96';
                                e.target.style.borderColor = '#043E96';
                            }}
                        >
                            Ask TravelMate AI
                        </Button>
                    </div>
                </div>
            </div>

            {/* Chatbot Modal */}
            <Modal show={showChat} onHide={() => setShowChat(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>TravelMate AI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginBottom: '10px' }}>
                        <textarea
                            rows="4"
                            style={{ width: '100%', padding: '10px' }}
                            placeholder="Ask me anything about travel..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <Button variant="primary" onClick={handleSendMessage}>
                        Send
                    </Button>
                    <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
                        <strong>Response:</strong> {chatResponse}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
