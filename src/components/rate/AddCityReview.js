import React, { useState } from 'react';
import { Button, TextField, Box, Rating, DialogActions } from '@mui/material';
import { addCityRate } from '../../services/api/city_rating.service';

export default function AddCityReview({ userId, cityId, handleClose }) {
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "rate": rate,
            "comment": comment,
            "userId": userId,
            "cityId": cityId
        }
        const response = await addCityRate(data);
        console.log({ userId, cityId, rate, comment });
        if (response.status === 200) {
            handleClose();
        } else {
            handleClose();
        }
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
                style={{ marginBottom: '10px' }}
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
