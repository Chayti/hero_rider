import React, { useState, useEffect } from 'react';
import './Users.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';

const Users = () => {
    const [allUser, setAllUser] = useState([])
    const [anotherContainer, setAnotherContainer] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/users`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllUser(data)
                setAnotherContainer(data)
            });
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log( JSON.parse(JSON.stringify(data))

        const remaining = anotherContainer.filter(allU => allU.email == JSON.parse(JSON.stringify(data))?.data || allU.displayName == JSON.parse(JSON.stringify(data))?.data || allU.phone == JSON.parse(JSON.stringify(data))?.data)
        setAllUser(remaining)
        reset()
    };

    return (
        <div>
            <h2>Total Registered User: {allUser.length}</h2>

            <h6 className="mt-4 fw-bold text-success">Search by email, phone, full names of users...</h6>
            <div className="login-form front-bg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 p-2" placeholder="search by email/ phone/ name..." {...register("data", { required: true })} />
                    <input className="btn btn-success ms-3" type="submit" value="Search" /><br />
                </form>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUser.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.displayName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Users;