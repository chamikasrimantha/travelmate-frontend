import React, { useState } from 'react';
import { Button, TextField, Box, Rating, DialogActions } from '@mui/material';

export default function AddCityReview({ userId, cityId, handleClose }) {
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ userId, cityId, rate, comment });
        handleClose(); // Close the dialog after submission
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating
                    name="rate"
                    value={rate}
                    onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                />
            </Box>
            <TextField
                style={{marginBottom: '10px'}}
                margin="dense"
                label="Comment"
                type="text"
                fullWidth
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </DialogActions>
        </form>
    );
}
