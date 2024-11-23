import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form, Spinner } from 'react-bootstrap';
import img from './img.png';

// Replace with actual API calls
import { getAllCities } from '../../services/api/city.service';
import { getAllProperties } from '../../services/api/property.service';

export default function UserHomeHeader() {
    const [showChat, setShowChat] = useState(false); // Chatbot Modal
    const [showRecommendations, setShowRecommendations] = useState(false); // Recommendations Modal
    const [userMessage, setUserMessage] = useState(''); // Chatbot user input
    const [chatResponse, setChatResponse] = useState(''); // Chatbot response
    const [budget, setBudget] = useState(''); // User's budget
    const [selectedCity, setSelectedCity] = useState(''); // User's selected city
    const [cities, setCities] = useState([]); // List of cities
    const [recommendations, setRecommendations] = useState([]); // Filtered properties
    const [loading, setLoading] = useState(false); // Loading state for recommendations

    // Chatbot API key from .env
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    // Fetch cities when the recommendations modal opens
    useEffect(() => {
        if (showRecommendations) {
            const fetchCities = async () => {
                try {
                    const response = await getAllCities();
                    setCities(response.data || []);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                }
            };
            fetchCities();
        }
    }, [showRecommendations]);

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
                    messages: [
                        {
                            role: 'system',
                            content: 'You are TravelMate, an intelligent travel assistant. Your role is to help users explore travel destinations, plan trips, manage bookings, and provide travel tips for Sri Lanka. Respond politely and provide relevant, concise information.'
                        },
                        { role: 'user', content: userMessage },
                    ],
                }),
            });

            const data = await response.json();
            setChatResponse(data.choices[0]?.message?.content || 'Sorry, I couldn’t understand your question.');
        } catch (error) {
            setChatResponse('Error communicating with the TravelMate AI.');
        }

        setUserMessage('');
    };

    const handleGetRecommendations = async () => {
        if (!budget || !selectedCity) {
            alert('Please provide a budget and select a city.');
            return;
        }

        setLoading(true);
        try {
            const response = await getAllProperties();
            const filteredProperties = response.data.filter(
                (property) =>
                    property.cityEntity.id === parseInt(selectedCity) &&
                    property.price <= parseInt(budget)
            );
            setRecommendations(filteredProperties);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Main Header with Image */}
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
                        onClick={() => setShowRecommendations(true)}
                    >
                        Get Recommendations
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
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                            color: 'black'
                        }}
                    >
                        Where do you want to go?
                    </div>
                    <div
                        style={{
                            flex: 0.75,
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                            color: 'black'
                        }}
                    >
                        Don't you have plans?
                    </div>
                    <div
                        style={{
                            flex: 1.25,
                            textAlign: 'center',
                            borderRight: '3px solid #DAA520',
                            color: 'black'
                        }}
                    >
                        Try TravelMate AI Assistant, It's free!
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
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
                        >
                            Ask TravelMate AI
                        </Button>
                    </div>
                </div>
            </div>

            {/* Chatbot Modal */}
            <Modal
                show={showChat}
                onHide={() => setShowChat(false)}
                centered
                style={{
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            >
                <Modal.Header
                    closeButton
                    style={{
                        backgroundColor: '#043E96',
                        color: 'white',
                        borderRadius: '0px 0px 0 0',
                    }}
                >
                    <Modal.Title style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem' }}>
                        TravelMate AI Assistant
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        padding: '30px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '0 0 10px 10px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <textarea
                        rows="4"
                        style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            fontFamily: 'Arial, sans-serif',
                            marginBottom: '20px',
                            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        placeholder="Ask me anything about travel..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                    ></textarea>
                    <Button
                        variant="primary"
                        onClick={handleSendMessage}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '10px 15px',
                            background: 'linear-gradient(90deg, #1B68DD, #1456A0)',
                            border: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #1456A0, #1B68DD)'}
                        onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #1B68DD, #1456A0)'}
                    >
                        Send
                    </Button>
                    <div
                        style={{
                            marginTop: '20px',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '1rem',
                            color: '#333',
                            lineHeight: '1.5',
                        }}
                    >
                        <strong>Response:</strong>
                        <div style={{ marginTop: '10px', whiteSpace: 'pre-wrap', color: '#555' }}>
                            {chatResponse}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Recommendations Modal */}
            <Modal
                show={showRecommendations}
                onHide={() => setShowRecommendations(false)}
                size="lg"
                centered
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                }}
            >
                <Modal.Header
                    closeButton
                    style={{
                        background: 'linear-gradient(90deg, #1B68DD, #4A90E2)',
                        color: 'white',
                        borderBottom: 'none',
                        borderRadius: '0px 0px 0 0',
                        padding: '15px',
                    }}
                >
                    <Modal.Title style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem' }}>
                        Get Travel Recommendations
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        fontFamily: 'Arial, sans-serif',
                        maxHeight: '400px', // Limit height
                        overflowY: 'auto',  // Enable scrolling
                    }}
                >
                    <Form>
                        <Form.Group style={{ marginBottom: '15px' }}>
                            <Form.Label style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>
                                Budget
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                style={{
                                    borderRadius: '5px',
                                    padding: '8px',
                                    fontSize: '0.9rem',
                                    border: '1px solid #ddd',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '15px' }}>
                            <Form.Label style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>
                                Preferred City
                            </Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                style={{
                                    borderRadius: '5px',
                                    padding: '8px',
                                    fontSize: '0.9rem',
                                    border: '1px solid #ddd',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button
                            variant="success"
                            className="mt-3"
                            onClick={handleGetRecommendations}
                            disabled={loading}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '10px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                background: 'linear-gradient(90deg, #28A745, #36D77C)',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) =>
                                (e.target.style.background = 'linear-gradient(90deg, #36D77C, #28A745)')
                            }
                            onMouseOut={(e) =>
                                (e.target.style.background = 'linear-gradient(90deg, #28A745, #36D77C)')
                            }
                        >
                            {loading ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                'Get Recommendations'
                            )}
                        </Button>
                    </Form>
                    <div
                        className="mt-4"
                        style={{
                            marginTop: '20px',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '0.9rem',
                            color: '#333',
                            lineHeight: '1.5',
                        }}
                    >
                        <h5
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                marginBottom: '15px',
                            }}
                        >
                            Recommendations:
                        </h5>
                        {loading ? (
                            <Spinner
                                animation="border"
                                style={{
                                    display: 'block',
                                    margin: '0 auto',
                                    color: '#28A745',
                                }}
                            />
                        ) : recommendations.length > 0 ? (
                            recommendations.map((rec) => (
                                <div
                                    key={rec.id}
                                    style={{
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        marginBottom: '10px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#F9F9F9',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) =>
                                        (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')
                                    }
                                >
                                    <strong style={{ fontSize: '1rem', color: '#333' }}>{rec.name}</strong>
                                    <p style={{ fontSize: '0.9rem', color: '#555' }}>
                                        Price: Rs. {rec.price} Per Night
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    color: '#999',
                                    textAlign: 'center',
                                }}
                            >
                                No recommendations found for the given criteria.
                            </p>
                        )}
                    </div>
                </Modal.Body>
            </Modal>



        </div>
    );
}
