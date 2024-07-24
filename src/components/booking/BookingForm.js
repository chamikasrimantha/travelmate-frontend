import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TextField, Checkbox, FormControlLabel, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { Rating, Typography, Box, useMediaQuery } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, useParams } from 'react-router-dom';
import { getPropertiesById } from '../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../services/api/property_rating.service';
import { createBooking } from '../../services/api/booking.service';

export default function BookingForm() {
    const [step, setStep] = useState(1); // Step 1: Your Selection, Step 2: Enter Your Details, Step 3: Confirm Your Reservation
    const [confirmed, setConfirmed] = useState(false); // To track if the booking is confirmed
    const checkinDate = localStorage.getItem('checkinDate');
    const checkoutDate = localStorage.getItem('checkoutDate');
    const id = localStorage.getItem('propertyId');
    const [paymentMethod, setPaymentMethod] = useState('cash'); // Default to 'cash'

    // const [totalPrice, setTotalPrice] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [bookingFor, setBookingFor] = useState("");
    const [airportShuttle, setAirportShuttle] = useState(false);
    const [rentingCar, setRentingCar] = useState(false);
    const [rentingBicycle, setRentingBicycle] = useState(false);
    const [specialRequests, setSpecialRequests] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");

    const [propertyData, setPropertyData] = useState(null);
    const [rateData, setRatings] = useState([]);

    const [averageRating, setAverageRating] = useState(null);
    const [reviewCount, setReviewCount] = useState(0);

    // const propertyData = {
    //     name: 'Luxury Hotel',
    //     location: 'Colombo, Sri Lanka',
    //     rate: 4.5,
    //     reviews: 120,
    //     checkinDate: '2024-07-01',
    //     checkoutDate: '2024-07-07',
    //     totalPrice: '$1200',
    // };

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const propertyResponse = await getPropertiesById(id);
                setPropertyData(propertyResponse.data);
            } catch (error) {
                console.error("Error fetching property data:", error);
            }
        };

        const fetchRatings = async () => {
            try {
                const ratingsResponse = await getPropertyRatingsByProperty(id);
                setRatings(ratingsResponse.data);

                // Calculate average rating
                const totalRating = ratingsResponse.data.reduce((sum, rating) => sum + rating.rate, 0);
                const avgRating = ratingsResponse.data.length ? (totalRating / ratingsResponse.data.length).toFixed(1) : 0;
                setAverageRating(avgRating);
                setReviewCount(ratingsResponse.data.length);
            } catch (error) {
                console.error("Error fetching property ratings:", error);
            }
        };

        fetchPropertyData();
        fetchRatings();
    }, [])

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const isMobile = useMediaQuery('(max-width: 600px)');

    const navigate = useNavigate();

    const Bookings = () => {
        navigate('/bookings');
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

    const handleConfirm = async (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('userId');
        const propertyId = localStorage.getItem('propertyId');
        // Convert dates to ISO format for consistency
        const formattedCheckinDate = new Date(checkinDate).toISOString();
        const formattedCheckoutDate = new Date(checkoutDate).toISOString();
        const data = {
            "checkinDate": formattedCheckinDate,
            "checkoutDate": formattedCheckoutDate,
            "totalPrice": totalPrice,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "address": address,
            "phoneNo": phoneNo,
            "bookingFor": bookingFor,
            "airportShuttle": airportShuttle,
            "rentingCar": rentingCar,
            "rentingBicycle": rentingBicycle,
            "specialRequests": specialRequests,
            "arrivalTime": arrivalTime,
            "paymentMethod": paymentMethod,
            "userId": userId,
            "propertyId": propertyId
        };
        const response = await createBooking(data);
        if (response.status === 200) {
            console.log(response);
            setConfirmed(true);
            setStep(4);
        } else {

        }

    };

    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
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

    const totalNights = Math.ceil((new Date(checkoutDate) - new Date(checkinDate)) / (1000 * 60 * 60 * 24));
    const totalPrice = totalNights * (propertyData?.price || 0);

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
                        <p>Your Selection</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {step > 2 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 2 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Enter Your Details</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {confirmed ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 3 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Confirm Your Reservation</p>
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
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your Selection</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{propertyData?.name}</h4>
                                        <p>{propertyData?.location}</p>
                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                            <Box style={{ backgroundColor: '#184D9D', color: 'white', padding: '5px', borderRadius: '5px', width: '50px', textAlign: 'center' }}>
                                                {averageRating ? averageRating : 'N/A'}
                                            </Box>
                                            <Rating value={averageRating || 0} precision={0.1} readOnly style={{ marginLeft: '10px', color: '#FFD700' }} />
                                            <Typography variant="body2" style={{ marginLeft: '10px', fontSize: '1rem' }}>
                                                {averageRating ? getRatingLabel(averageRating) : 'N/A'}
                                            </Typography>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your booking details</h4>
                                        <p>Check-in Date: {checkinDate}</p>
                                        <p>Check-out Date: {checkoutDate}</p>
                                        <p>Total Length of Stay: {totalNights} nights</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your price summary</h4>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Total: {totalPrice}</h4>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        <Button style={{ textAlign: 'left' }} variant="primary" onClick={handleNextStep}>
                                            I'll Serve
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
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Enter your details</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Almost done! Just fill in the required info</h4>
                                        <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email address" variant="outlined" className="mb-2" fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your address</h4>
                                        <TextField value={address} onChange={(e) => setAddress(e.target.value)} label="Address" variant="outlined" className="mb-3" fullWidth />
                                        <TextField value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} label="Phone number" variant="outlined" className="mb-2" fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Who are you booking for?</h4>
                                        <FormControl fullWidth>
                                            <InputLabel id="bookingFor-label">Who are you booking for?</InputLabel>
                                            <Select
                                                labelId="bookingFor-label"
                                                value={bookingFor}
                                                onChange={(e) => setBookingFor(e.target.value)}
                                                required
                                            >
                                                <MenuItem value="mainGuest">I'm the main guest</MenuItem>
                                                <MenuItem value="someoneElse">I'm booking for someone else</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Add to your stay</h4>
                                        <FormControlLabel
                                            control={<Checkbox checked={airportShuttle} onChange={(e) => setAirportShuttle(e.target.checked)} />}
                                            label="Airport Shuttle"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={rentingCar} onChange={(e) => setRentingCar(e.target.checked)} />}
                                            label="Rent a Car"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={rentingBicycle} onChange={(e) => setRentingBicycle(e.target.checked)} />}
                                            label="Rent a Bicycle"
                                        />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Special requests</h4>
                                        <TextField value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} label="Special requests" variant="outlined" multiline rows={3} fullWidth />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your arrival time</h4>
                                        <FormControl fullWidth margin="dense" variant="outlined">
                                            <InputLabel>Check-in Time</InputLabel>
                                            <Select
                                                name="Select Arrival Time"
                                                value={arrivalTime}
                                                onChange={(e) => setArrivalTime(e.target.value)}
                                                label="Select Arrival Time"
                                                className="mb-3"
                                                fullWidth
                                            >
                                                <MenuItem value="I don't know">I don't know</MenuItem>
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
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        <Button style={{ textAlign: 'left' }} variant="primary" onClick={handleNextStep}>
                                            Next: Final details
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
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{propertyData?.name}</h4>
                                        <p>{propertyData?.location}</p>
                                        <div className="d-flex align-items-center mt-2">
                                            <Box style={{ backgroundColor: '#184D9D', color: 'white', padding: '5px', borderRadius: '5px', width: '50px', textAlign: 'center' }}>
                                                {averageRating ? averageRating : 'N/A'}
                                            </Box>
                                            <Rating value={averageRating || 0} precision={0.1} readOnly style={{ marginLeft: '10px', color: '#FFD700' }} />
                                            <Typography variant="body2" style={{ marginLeft: '10px', fontSize: '1rem' }}>
                                                {averageRating ? getRatingLabel(averageRating) : 'N/A'}
                                            </Typography>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Total Price Summary</h4>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Total: {totalPrice}</h4>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Payment Details</h4>
                                        <p>Your payment can be made using credit/debit card right now. Or, your payment can be handled by "{propertyData.name}". If so, you don't need to enter any payment details for this booking.</p>
                                        <div>
                                            <label htmlFor="paymentMethod" style={{ display: 'block', marginBottom: '10px' }}>Select Payment Type</label>
                                            <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
                                                <option value="cash">Cash</option>
                                                <option value="card">Card</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={handleBackStep}>
                                            Back
                                        </Button>
                                        {paymentMethod === 'card' && (
                                            <Button variant="primary" style={{ marginRight: '20px' }} onClick={handleConfirm}>
                                                <CreditCardIcon style={{ marginRight: '5px' }} /> Pay now
                                            </Button>
                                        )}
                                        {paymentMethod === 'cash' && (
                                            <Button variant="primary" onClick={handleConfirm}>
                                                <LockIcon style={{ marginRight: '5px' }} /> Complete booking
                                            </Button>
                                        )}
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
                                <Col md={6} className="mb-1" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Reservation confirmed!</h4>
                                        <p>Your reservation with {propertyData.name} is succesfully completed</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-1" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Now what?</h4>
                                        <p>You can download the receipt by clicking the View Receipt.</p>
                                        <p>You can make the payment directly to the property on checkin day by cash or also you can make the payment now via online using credit/ debit card.</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <Button variant="secondary" style={{ marginRight: '20px' }} onClick={Bookings}>
                                            Go to Bookings
                                        </Button>
                                        {/* <Button variant="primary" style={{ marginRight: '20px' }} onClick={handleConfirm}>
                                            <CreditCardIcon style={{ marginRight: '5px' }} /> Pay now
                                        </Button> */}
                                        <Button variant="primary" onClick={handleConfirm}>
                                            View Receipt
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
