import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TextField, Checkbox, FormControlLabel, MenuItem } from '@mui/material';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { Rating, Typography, Box, useMediaQuery } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { createProperty } from '../../services/api/property.service';
import { getAllCategories } from '../../services/api/category.service';
import { getAllDistricts } from '../../services/api/district.service';
import { getAllCities } from '../../services/api/city.service';

export default function AddProperty() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hotline, setHotline] = useState("");
    const [location, setLocation] = useState("");
    const [sentence, setSentence] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [guests, setGuests] = useState("");
    const [airconditioning, setAirconditioning] = useState("");
    const [heating, setHeating] = useState("");
    const [wifi, setWifi] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [breakfast, setBreakfast] = useState("");
    const [washingmachine, setWashingmachine] = useState("");
    const [tv, setTv] = useState("");
    const [swimmingpool, setSwimmingpool] = useState("");
    const [hottub, setHottub] = useState("");
    const [balcony, setBalcony] = useState("");
    const [parking, setParking] = useState("");
    const [terrace, setTerrace] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [agerestriction, setAgerestriction] = useState("");
    const [smoking, setSmoking] = useState("");
    const [pets, setPets] = useState("");
    const [parties, setParties] = useState("");
    const [paymentMethods, setPaymentMethods] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [livingAddress, setLivingAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [status, setStatus] = useState("");
    const [userId, setUserId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [cityId, setCityId] = useState("");

    const [categories, setCategories] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);

    const [step, setStep] = useState(1); // Step 1: Your Selection, Step 2: Enter Your Details, Step 3: Confirm Your Reservation
    const [confirmed, setConfirmed] = useState(false); // To track if the booking is confirmed
    const inputRef = useRef();
    const isMobile = useMediaQuery('(max-width: 600px)');

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            console.log(place.formatted.address);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
        }
    }

    const navigate = useNavigate();

    const Properties = () => {
        navigate('/partner/properties');
    }

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else if (step === 3) {
            handleConfirm();
        }
    };

    const handleBackStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const fetchAllCategories = async () => {
        const response = await getAllCategories();
        setCategories(response.data);
        console.log(response);
    }

    const fetchAllDistricts = async () => {
        const response = await getAllDistricts();
        setDistricts(response.data);
        console.log(response);
    }

    const fetchAllCities = async () => {
        const response = await getAllCities();
        setCities(response.data);
        console.log(response);
    }

    useEffect(() => {
        fetchAllCategories();
        fetchAllDistricts();
        fetchAllCities();
    }, []);

    const handleConfirm = () => {
        setConfirmed(true);
        setStep(4); // Step 4 indicates the final confirmation step
    };

    const squareStyle = {
        backgroundColor: 'white',
        border: '1px solid #DEDCDD',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '02px',
        textAlign: 'left',
    };

    const circleStyle = {
        fontSize: '1.5rem', // Increase size of the circles
    };

    const stepLineStyle = {
        flexGrow: 1,
        height: '2px',
        backgroundColor: '#000',
        margin: '0 8px',
    };

    const activeStepStyle = {
        fontSize: '1.5rem',
        color: '#28a745',
    };

    const activeStepCircleStyle = {
        fontSize: '1.5rem',
        color: '#fff',
        backgroundColor: '#28a745',
        borderRadius: '50%',
        padding: '2px',
    };

    return (
        <Container fluid>
            <div style={{ marginLeft: '5%', marginRight: '5%' }} className="text-center mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        {step > 1 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 1 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Property details</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {step > 2 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 2 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Property services</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {confirmed ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 3 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Host profile</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                {step === 1 && (
                    <div>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Property details</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        {/* should take user id */}
                                        <TextField value={name} onChange={(e) => setName(e.target.value)} label="Property name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Property Email" variant="outlined" className="mb-3" fullWidth />
                                        <TextField value={hotline} onChange={(e) => setHotline(e.target.value)} label="Property Hotline" variant="outlined" className="mb-3" fullWidth />
                                        <TextField
                                            select
                                            label="Select category"
                                            variant="outlined"
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            className="mb-3"
                                            fullWidth
                                        >
                                            <MenuItem value="I't know">I don't know</MenuItem>
                                        </TextField>
                                        <TextField
                                            select don
                                            label="Select district"
                                            variant="outlined"
                                            value={districtId}
                                            onChange={(e) => setDistrictId(e.target.value)}
                                            className="mb-3"
                                            style={{ width: isMobile ? '100%' : '47%', marginRight: isMobile ? '0' : '42px' }}
                                        >
                                            <MenuItem value="I don't know">I don't know</MenuItem>
                                        </TextField>
                                        <TextField
                                            select
                                            label="Select city"
                                            variant="outlined"
                                            value={cityId}
                                            onChange={(e) => setCityId(e.target.value)}
                                            className="mb-3"
                                            style={{ width: isMobile ? '100%' : '47%' }}
                                        >
                                            <MenuItem value="I don't know">I don't know</MenuItem>
                                        </TextField>
                                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
                                            <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
                                                <TextField
                                                    variant='outlined'
                                                    className='mb-3'
                                                    label="Enter location"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    fullWidth
                                                />
                                            </StandaloneSearchBox>
                                        </LoadScript>
                                        <TextField label="About property in one sentence" variant="outlined" className="mb-3" fullWidth />
                                        <TextField name="description" label="Description" variant="outlined" className="mb-3" fullWidth multiline rows={4} />
                                        <input type="file" name="image" className="mb-3" />
                                        <TextField name="price" label="Price (Per day in LKR)" variant="outlined" className="mb-3" fullWidth />
                                        <TextField name="bedrooms" label="Number of bedrooms" variant="outlined" className="mb-3" fullWidth />
                                        <TextField name="guests" label="Guests per bedroom" variant="outlined" className="mb-3" fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        <Button style={{ textAlign: 'left' }} variant="primary" onClick={handleNextStep}>
                                            Next: Services
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Property services</h4>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>services</h4>
                                        {['airconditioning', 'heating', 'wifi', 'kitchen', 'breakfast', 'washingmachine', 'tv', 'swimmingpool', 'hottub', 'balcony', 'parking', 'terrace'].map((service) => (
                                            <FormControlLabel
                                                key={service}
                                                control={
                                                    <Checkbox />
                                                }
                                                label={service.charAt(0).toUpperCase() + service.slice(1)}
                                            />
                                        ))}
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>rules</h4>
                                        <TextField select name="checkin" label="Check-in Time" variant="outlined" className="mb-3" fullWidth  >
                                            <MenuItem value="12:00 AM - 01:00 AM">12:00 AM - 01:00 AM</MenuItem>
                                            <MenuItem value="01:00 AM - 02:00 AM">01:00 AM - 02:00 AM</MenuItem>
                                            <MenuItem value="02:00 AM - 03:00 AM">02:00 AM - 03:00 AM</MenuItem>
                                            <MenuItem value="03:00 AM - 04:00 AM">03:00 AM - 04:00 AM</MenuItem>
                                            <MenuItem value="04:00 AM - 05:00 AM">04:00 AM - 05:00 AM</MenuItem>
                                            <MenuItem value="05:00 AM - 06:00 AM">05:00 AM - 06:00 AM</MenuItem>
                                            <MenuItem value="06:00 AM - 07:00 AM">06:00 AM - 07:00 AM</MenuItem>
                                            <MenuItem value="07:00 AM - 08:00 AM">07:00 AM - 08:00 AM</MenuItem>
                                            <MenuItem value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</MenuItem>
                                            <MenuItem value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</MenuItem>
                                            <MenuItem value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</MenuItem>
                                            <MenuItem value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</MenuItem>
                                            <MenuItem value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</MenuItem>
                                            <MenuItem value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</MenuItem>
                                            <MenuItem value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</MenuItem>
                                            <MenuItem value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</MenuItem>
                                            <MenuItem value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</MenuItem>
                                            <MenuItem value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</MenuItem>
                                            <MenuItem value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</MenuItem>
                                            <MenuItem value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</MenuItem>
                                            <MenuItem value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM</MenuItem>
                                            <MenuItem value="09:00 PM - 10:00 PM">09:00 PM - 10:00 PM</MenuItem>
                                            <MenuItem value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</MenuItem>
                                            <MenuItem value="11:00 PM - 12:00 AM">11:00 PM - 12:00 AM</MenuItem>
                                        </TextField>
                                        <TextField select name="checkout" label="Check-out Time" variant="outlined" className="mb-3" fullWidth >
                                            <MenuItem value="12:00 AM - 01:00 AM">12:00 AM - 01:00 AM</MenuItem>
                                            <MenuItem value="01:00 AM - 02:00 AM">01:00 AM - 02:00 AM</MenuItem>
                                            <MenuItem value="02:00 AM - 03:00 AM">02:00 AM - 03:00 AM</MenuItem>
                                            <MenuItem value="03:00 AM - 04:00 AM">03:00 AM - 04:00 AM</MenuItem>
                                            <MenuItem value="04:00 AM - 05:00 AM">04:00 AM - 05:00 AM</MenuItem>
                                            <MenuItem value="05:00 AM - 06:00 AM">05:00 AM - 06:00 AM</MenuItem>
                                            <MenuItem value="06:00 AM - 07:00 AM">06:00 AM - 07:00 AM</MenuItem>
                                            <MenuItem value="07:00 AM - 08:00 AM">07:00 AM - 08:00 AM</MenuItem>
                                            <MenuItem value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</MenuItem>
                                            <MenuItem value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</MenuItem>
                                            <MenuItem value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</MenuItem>
                                            <MenuItem value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</MenuItem>
                                            <MenuItem value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</MenuItem>
                                            <MenuItem value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</MenuItem>
                                            <MenuItem value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</MenuItem>
                                            <MenuItem value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</MenuItem>
                                            <MenuItem value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</MenuItem>
                                            <MenuItem value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</MenuItem>
                                            <MenuItem value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</MenuItem>
                                            <MenuItem value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</MenuItem>
                                            <MenuItem value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM</MenuItem>
                                            <MenuItem value="09:00 PM - 10:00 PM">09:00 PM - 10:00 PM</MenuItem>
                                            <MenuItem value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</MenuItem>
                                            <MenuItem value="11:00 PM - 12:00 AM">11:00 PM - 12:00 AM</MenuItem>
                                        </TextField>
                                        {['agerestriction', 'smoking', 'pets', 'parties'].map((rule) => (
                                            <FormControlLabel
                                                key={rule}
                                                control={
                                                    <Checkbox />
                                                }
                                                label={rule.charAt(0).toUpperCase() + rule.slice(1)}
                                            />
                                        ))}
                                        <TextField name="paymentMethods" label="Payment Methods" variant="outlined" className="mb-3 mt-3" fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        <Button style={{ textAlign: 'left' }} variant="primary" onClick={handleNextStep}>
                                            Next: Host profile
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Host profile</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <TextField label="First name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Last name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Business name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Living address" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Phone number" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Email address" variant="outlined" className="mb-3" fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        <Button style={{ textAlign: 'left' }} variant="primary" onClick={handleConfirm}>
                                            List property
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Congratulations!</h4>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>Your property was listed on TravelMate successfully.</h4>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={Properties}>
                                            Go to properties
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </div>
        </Container>
    );
}
