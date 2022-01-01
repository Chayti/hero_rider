import { Typography, TextField, Button, CircularProgress, Alert, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import React, { useState } from 'react';
import './Register.css';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [rider, setRider] = useState(false);
    const [learner, setLearner] = useState(true);
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleRider = e => {
        setRider(true)
        setLearner(false)
        const field = "role";
        const value = "rider";
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLearner = e => {
        setLearner(true)
        setRider(false)
        const field = "role";
        const value = "learner";
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.age, loginData.address, loginData.phone, loginData.vehicle, loginData.profile, loginData.nid, loginData.vehicle_name_palate, loginData.vehicle_model, loginData.vehicle_name, loginData.area, loginData.licence, loginData.role, history);
        e.preventDefault();
    }
    console.log(loginData)
    return (
        <Box>
            <Grid container className="register-box" spacing={2}>
                <Grid item className="front-bg-login-page my-5" sx={{ width: '50%' }}>
                    <Typography variant="h4" gutterBottom>Sign Up to Join With Us</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <FormControl component="fieldset" required>
                            <FormLabel component="legend">Join As</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="rider" control={<Radio onClick={handleRider} />} label="Rider" />
                                <FormControlLabel value="learner" control={<Radio onClick={handleLearner} />} label="Learner" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Age"
                            name="age"
                            type="number"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Address"
                            name="address"
                            type="address"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Phone No."
                            name="phone"
                            type="phone"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        {rider && <>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Driving Licence Picture link"
                                name="licence"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Comfort Area"
                                name="area"
                                onBlur={handleOnBlur}
                                variant="standard" />
                        </>}

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Profile Picture link"
                            name="profile"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your NID Picture link"
                            name="nid"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <label for="vehicle" className="mt-4">Choose a vehicle:&emsp;</label>
                        <select name="vehicle" id="vehicle" onBlur={handleOnBlur}>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </select>
                        <br />

                        {rider && <>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Vehicle Name"
                                name="vehicle_name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Vehicle Model"
                                name="vehicle_model"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Vehicle Name Palate Picture Link"
                                name="vehicle_name_palate"
                                onBlur={handleOnBlur}
                                variant="standard" />
                        </>}

                        <Button sx={{ width: '75%', mt: 3 }} type="submit" variant="contained">Sign Up</Button>

                        <br />

                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already Sign Up? Please Sign In</Button>
                        </NavLink>
                    </form>}

                    {isLoading && <div className="d-flex justify-content-center vh-100"><CircularProgress /></div>}

                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;