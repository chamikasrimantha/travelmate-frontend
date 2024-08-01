import React, { useEffect, useState } from 'react';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import CategoryCard from '../../../components/category/CategoryCard';
import { getAllCategories, createCategory } from '../../../services/api/category.service';

export default function AdminCategories() {

    const [categories, setCategories] = useState([]);

    const fetchAllCategories = async () => {
        const response = await getAllCategories();
        setCategories(response.data);
        console.log(response);
    }

    useEffect(() => {
        fetchAllCategories();
    }, []);

    // const categories = [
    //     {
    //         id: 1,
    //         name: 'Hotel'
    //     },
    //     {
    //         id: 2,
    //         name: 'Villa'
    //     },
    //     {
    //         id: 3,
    //         name: 'Home'
    //     },
    //     {
    //         id: 4,
    //         name: 'Tree'
    //     },
    //     {
    //         id: 5,
    //         name: 'Hotel'
    //     },
    // ];

    const [open, setOpen] = useState(false);
    const [newCategory, setNewCategory] = useState({
        name: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setNewCategory({
            ...newCategory,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        // Handle the form submission logic here
        console.log(newCategory);
        event.preventDefault();
        const data = {
            name: newCategory.name
        };
        const response = await createCategory(data);
        if (response.status === 200) {
            alert("Category added!");
            handleClose();
        } else {
            handleClose();
        }
    };

    return (
        <div>
            <NavBarAdmin />

            {/* Top */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage categories</h4>
                        <p style={{ textAlign: 'left' }}>Click on each category to edit/ update or delete</p>
                    </div>
                    <div>
                        <ButtonBase
                            style={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={handleClickOpen}
                        >
                            <AddCircleOutlineIcon style={{ marginRight: '10px' }} />Add new category
                        </ButtonBase>
                    </div>
                </div>
            </Container>

            {/* Categories */}
            <Container fluid>
                <Row style={{ marginLeft: '02%', marginRight: '02%', marginTop: '10px' }} xs={1} md={5} className="g-1 justify-content-center">
                    {categories.map((category, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <CategoryCard category={category} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br />
            <Footer />

            {/* Add Announcement Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newCategory.name}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
