import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormControl, Table } from 'react-bootstrap';
import { Box, Typography, Rating, Button, useMediaQuery, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import BalconyIcon from '@mui/icons-material/Balcony';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DeckIcon from '@mui/icons-material/Deck';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined';
import GroupIcon from '@mui/icons-material/Group';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import PaymentIcon from '@mui/icons-material/Payment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RateCard from '../rate/RateCard';
import { useNavigate, useParams } from 'react-router-dom';
import PartnerAnnouncementCard from '../announcement/PartnerAnnouncementCard';
import { getPropertiesById } from '../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../services/api/property_rating.service';
import { getPartnerAnnouncementsByProperty } from '../../services/api/partner_announcement.service';

export default function Property() {

    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const [propertyData, setPropertyData] = useState(null);
    const [rateData, setRatings] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    const [averageRating, setAverageRating] = useState(null);
    const [reviewCount, setReviewCount] = useState(0);

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

        const fetchAnnouncements = async () => {
            try {
                const announcementsResponse = await getPartnerAnnouncementsByProperty(id);
                setAnnouncements(announcementsResponse.data);
                // Set the count of properties
                // setPropertyData((prevData) => ({
                //     ...prevData,
                //     propertiesCount: announcementsResponse.data.length,
                // }));
            } catch (error) {
                console.error("Error fetching property announcements:", error);
            }
        };

        fetchPropertyData();
        fetchRatings();
        fetchAnnouncements();
    }, []);

    const handleBooking = () => {
        // Save dates to localStorage or state management solution
        localStorage.setItem('checkinDate', checkinDate);
        localStorage.setItem('checkoutDate', checkoutDate);
        localStorage.setItem('propertyId', id);
        // Navigate to the booking page
        navigate('/book');
    };

    // const rateData = [
    //     {
    //         name: 'Jane Doe',
    //         rate: 3.5,
    //         comment: 'Nice place, but could be better. Nice place, but could be better.',
    //     },
    //     {
    //         name: 'Jane Doe',
    //         rate: 3.5,
    //         comment: 'Nice place, but could be better. Nice place, but could be better.',
    //     },
    //     {
    //         name: 'Jane Doe',
    //         rate: 3.5,
    //         comment: 'Nice place, but could be better. Nice place, but could be better.',
    //     }
    // ];

    // const propertyData = {
    //     id: '1',
    //     image: 'https://via.placeholder.com/150',
    //     name: 'Luxury Hotel',
    //     category: 'Normal Hotel',
    //     rate: 4.3,
    //     reviews: 231,
    //     district: 'Colombo District',
    //     city: 'Colombo',
    //     location: '123 Main Street, Colombo, Sri Lanka',
    //     sentence: 'A luxurious hotel with stunning views and excellent amenities.',
    //     description: 'Colombo, the bustling commercial capital of Sri Lanka, offers a rich tapestry of cultural, historical, and contemporary attractions. From its colonial-era buildings to modern skyscrapers, the city blends the old and new in a vibrant mix. The citys diverse population and historical significance make it a fascinating destination for travelers. Whether exploring the markets, enjoying the beach, or visiting temples and museums, Colombo provides a dynamic urban experience that captivates visitors.',
    //     latitude: '6.9271',
    //     longitude: '79.8612',
    //     email: 'luxury@gmail.com',
    //     hotline: '+94 76 163 5652',
    //     price: 12000,
    //     airconditioning: true,
    //     heating: false,
    //     wifi: true,
    //     kitchen: true,
    //     breakfast: true,
    //     washingmachine: false,
    //     tv: true,
    //     swimmingpool: true,
    //     hottub: false,
    //     balcony: true,
    //     parking: true,
    //     terrace: true,
    //     checkin: '02:00 PM',
    //     checkout: '11:00 AM',
    //     agerestriction: false,
    //     smoking: false,
    //     pets: false,
    //     parties: true,
    //     paymentmethods: 'Visa, Cash',
    // }

    // const announcements = [
    //     {
    //         id: 1,
    //         title: 'Maintenance Notice',
    //         message: 'The pool will be closed for maintenance on July 20th.',
    //         propertyId: 101
    //     },
    //     {
    //         id: 2,
    //         title: 'Maintenance Notice',
    //         message: 'The pool will be closed for maintenance on July 20th.',
    //         propertyId: 101
    //     },
    //     {
    //         id: 3,
    //         title: 'Maintenance Notice',
    //         message: 'The pool will be closed for maintenance on July 20th.',
    //         propertyId: 101
    //     },
    // ];

    const isMobile = useMediaQuery('(max-width: 600px)');

    const facilities = [
        { name: 'Air Conditioning', available: propertyData?.airconditioning, icon: <AcUnitIcon /> },
        { name: 'Heating', available: propertyData?.heating, icon: <WhatshotIcon /> },
        { name: 'WiFi', available: propertyData?.wifi, icon: <WifiIcon /> },
        { name: 'Kitchen', available: propertyData?.kitchen, icon: <KitchenIcon /> },
        { name: 'Washing Machine', available: propertyData?.washingmachine, icon: <LocalLaundryServiceIcon /> },
        { name: 'TV', available: propertyData?.tv, icon: <TvIcon /> },
        { name: 'Swimming Pool', available: propertyData?.swimmingpool, icon: <PoolIcon /> },
        { name: 'Hot Tub', available: propertyData?.hottub, icon: <HotTubIcon /> },
        { name: 'Balcony', available: propertyData?.balcony, icon: <BalconyIcon /> },
        { name: 'Parking', available: propertyData?.parking, icon: <LocalParkingIcon /> },
        { name: 'Terrace', available: propertyData?.terrace, icon: <DeckIcon /> },
        { name: 'Breakfast', available: propertyData?.breakfast, icon: <BreakfastDiningIcon /> }
    ];

    const houseRules = [
        { name: 'Check-in', value: `From ${propertyData?.checkin}`, icon: <AccessTimeIcon /> },
        { name: 'Check-out', value: `Until ${propertyData?.checkout}`, icon: <AccessTimeIcon /> },
        { name: 'Age Restriction', value: propertyData?.agerestriction ? 'Age restriction applies' : 'No age restriction', icon: <GroupIcon /> },
        { name: 'Smoking', value: propertyData?.smoking ? 'Smoking allowed' : 'Smoking not allowed', icon: propertyData?.smoking ? <SmokingRoomsIcon /> : <SmokingRoomsOutlinedIcon /> },
        { name: 'Pets', value: propertyData?.pets ? 'Pets allowed' : 'Pets are not allowed', icon: <PetsIcon /> },
        { name: 'Parties', value: propertyData?.parties ? 'Parties/events allowed' : 'Parties/events are not allowed', icon: <LocalBarIcon /> },
        { name: 'Payment Methods', value: `Accepted payment methods: ${propertyData?.paymentMethods}`, icon: <PaymentIcon /> },
    ];

    // Function to get the rating label
    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
    };

    // Function to generate the Google Maps URL
    const generateMapUrl = (lat, lon) => {
        return `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
    };

    return (
        <div>
            <div style={{ height: '140px', backgroundColor: '#184D9D', width: '100%' }}>
                <Container fluid>
                    {/* For larger screens */}
                    <Row className="align-items-center d-none d-md-flex" style={{ height: '50%' }}>
                        <Col xs={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {propertyData?.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {propertyData?.categoryEntity?.name} - {propertyData?.districtEntity?.name}
                            </Typography>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '25px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more properties" className="mr-sm-2" style={{ borderRadius: '20px' }} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-none d-md-flex" style={{ height: '50%' }}>
                        <Col xs={12} md={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {propertyData?.location}
                            </Typography>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: '#184D9D',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    marginRight: '15px'
                                }}
                            >
                                {averageRating ? averageRating : 'N/A'}
                            </Box>
                            <Rating
                                value={averageRating || 0}
                                readOnly
                                sx={{
                                    color: 'white',
                                    '& .MuiRating-iconEmpty': {
                                        color: 'white',
                                    }
                                }}
                            />
                            <Typography variant="body1" style={{ color: 'white', marginLeft: '15px' }}>
                                {averageRating ? getRatingLabel(averageRating) : 'N/A'} . {reviewCount} Reviews - Read all reviews
                            </Typography>
                        </Col>
                    </Row>

                    {/* For mobile screens */}
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {propertyData?.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {propertyData?.districtEntity?.name}
                            </Typography>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '10px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more cities" className="mr-sm-2" style={{ borderRadius: '4px' }} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: '#184D9D',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    marginRight: '10px'
                                }}
                            >
                                {averageRating ? averageRating : 'N/A'}
                            </Box>
                            <Rating
                                value={averageRating || 0}
                                readOnly
                                sx={{
                                    color: 'white',
                                    '& .MuiRating-iconEmpty': {
                                        color: 'white',
                                    }
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Image and Map Section */}
            <div style={{ display: 'flex', height: '300px', width: '100%' }}>
                <div style={{ flex: '40%' }}>
                    <img src={propertyData?.img || 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'} alt={propertyData?.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '60%' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={generateMapUrl(propertyData?.latitude, propertyData?.longitude)}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Description Section */}
            <Container>
                <Row>
                    <Col>
                        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'justify' }}>
                            {propertyData?.description}
                        </Typography>
                        <Button
                            className="d-flex justify-content-between align-items-center mt-3"
                            style={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            I'll Serve
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* Facilities Section */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Most popular facilities</h4>

                        <p style={{ textAlign: 'left', fontSize: '1rem' }}>
                            <CheckCircleIcon style={{ color: '#043E96', marginRight: '5px' }} />
                            : Included
                            <CancelIcon style={{ color: '#D9241F', marginLeft: '10px', marginRight: '5px' }} />
                            : Excluded
                        </p>

                    </div>
                </div>
                <Row style={{ marginTop: '7px', marginLeft: '4%', marginRight: '4%' }} xs={2} md={4} className="g-1 justify-content-center">
                    {facilities.map((facility, index) => (
                        <Col key={index} className="d-flex align-items-center mb-2">
                            <Typography
                                variant="body1"
                                style={{ color: facility.available ? '#043E96' : '#D9241F', marginLeft: '8px', fontSize: isMobile ? '0.75rem' : '1rem' }}
                            >
                                {facility.icon}
                                {facility.name}
                            </Typography>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Price Section */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Price and contact Details</h4>
                        <p style={{ textAlign: 'left', fontSize: '1rem' }}>Price per day: {propertyData?.price} LKR | Email: {propertyData?.email} | Hotline: {propertyData?.hotline}</p>
                    </div>
                </div>
            </Container>

            {/* Availability */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Availability</h4>
                    <p style={{ textAlign: 'left' }}>Select dates to see this property's availability and prices</p>
                </div>
                <Row style={{ marginLeft: '5%', marginRight: '5%' }} xs={1} md={1} className="g-1 justify-content-center">
                    <Col className="d-flex flex-column flex-md-row align-items-center mb-2">
                        <div className="d-flex align-items-center" style={{ marginBottom: '10px', marginRight: '15px' }}>
                            <label style={{ marginRight: '10px' }}>Check-in Date:</label>
                            <DatePicker
                                selected={checkinDate}
                                onChange={(date) => setCheckinDate(date)}
                                dateFormat="MM/dd/yyyy"
                                className="form-control"
                            />
                        </div>
                        <div className="d-flex align-items-center" style={{ marginBottom: '10px', marginRight: '20px' }}>
                            <label style={{ marginRight: '10px' }}>Check-out Date:</label>
                            <DatePicker
                                selected={checkoutDate}
                                onChange={(date) => setCheckoutDate(date)}
                                dateFormat="MM/dd/yyyy"
                                className="form-control"
                            />
                        </div>
                        <div className="d-flex align-items-center" style={{ marginBottom: '10px', marginRight: '10px' }}>
                            <Button
                                variant="primary"
                                onClick={handleBooking}
                                className="mt-md-0 mt-2"
                                disabled={!checkinDate || !checkoutDate}
                                style={{
                                    backgroundColor: checkinDate && checkoutDate ? '#184D9D' : 'transparent',
                                    color: checkinDate && checkoutDate ? 'white' : 'black',
                                    border: !checkinDate || !checkoutDate ? '1px solid black' : 'none'
                                }}
                            >
                                Check Availability
                            </Button></div>
                    </Col>
                </Row>
            </Container>

            {/* Reviews */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Guest reviews</h4>
                    </div>
                </div>
                <div style={{ marginTop: '7px', textAlign: 'left', display: 'flex', alignItems: 'center', marginLeft: '5%' }}>
                    <div style={{ backgroundColor: '#184D9D', color: 'white', borderRadius: '4px', padding: '4px 8px', marginRight: '10px' }}>
                        {averageRating ? averageRating : 'N/A'}
                    </div>
                    <span>{averageRating ? getRatingLabel(averageRating) : ''}</span>
                    <span style={{ marginLeft: '10px' }}>. {reviewCount} reviews</span>
                    <span style={{ marginLeft: '10px', color: '#184D9D', cursor: 'pointer' }}> Read all reviews</span>
                </div>
                <Row style={{ marginLeft: '02%', marginRight: '02%', marginTop: '10px' }} xs={1} md={2} lg={3} className="g-1 justify-content-center">
                    {rateData.slice(-3).map((rate, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <RateCard rateData={rate} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* House Rules */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>House rules</h4>
                    <p style={{ textAlign: 'left' }}>{propertyData?.name} takes special requests - add in the next step!</p>
                </div>
                <Row style={{ marginLeft: '5%', marginRight: '5%' }} xs={1} md={1} className="g-1 justify-content-center">
                    <Table bordered style={{ borderColor: '#DEDDDD' }}>
                        <tbody>
                            {houseRules.map((rule, index) => (
                                <tr key={index}>
                                    <td className="d-flex align-items-center">
                                        {React.cloneElement(rule.icon, { style: { marginRight: '12px' } })}
                                        <Typography variant="body1" style={{}}>{rule.name}</Typography>
                                    </td>
                                    <td style={{ textAlign: 'left' }}>
                                        <Typography variant="body1">{rule.value}</Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>

            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Announcements</h4>
                    <p style={{ textAlign: 'left' }}>Special announcements</p>
                </div>
                <Row style={{ marginLeft: '02%', marginRight: '02%', marginTop: '10px' }} xs={1} md={3} className="g-1 justify-content-center">
                    {announcements.slice(-3).map((announcement, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PartnerAnnouncementCard announcement={announcement} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}
