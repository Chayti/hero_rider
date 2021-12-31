import React, { useEffect, useState } from 'react';
import useAuth from "../../../hooks/useAuth";
import './DashboardHome.css';

const DashboardHome = () => {
    const { user } = useAuth();
    const [loggedin_user, setLoggedinUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setLoggedinUser(data));
    }, []);

    return (
        <div className="banner">
            <h1 className="fw-bold text-primary">Your Profile</h1>
            {
                loggedin_user.profile && <img width="150" style={{ borderRadius: "50%", border: "1px solid wheat", color: "white" }} src={loggedin_user.profile} alt="" />
            }
            <div className="front-bg-profile my-4 py-3">
                {
                    loggedin_user.displayName && <h4 className="fw-bold">Name: {loggedin_user.displayName}</h4>
                }
                {
                    loggedin_user.age && <h5>Age: {loggedin_user.age}</h5>
                }
                {
                    loggedin_user.address && <h5>Address: {loggedin_user.address}</h5>
                }
                {
                    loggedin_user.phone && <h5>Phone No: {loggedin_user.phone}</h5>
                }
            </div>
            {
                loggedin_user.nid && <img className="w-25 rounded" src={loggedin_user.nid} alt="" />
            }
            {
                loggedin_user.licence && <img className="w-25 rounded" src={loggedin_user.licence} alt="" />
            }
            <div className="front-bg-profile my-4 py-3">
                {
                    loggedin_user.vehicle && <h2>Vehicle Choosed: {loggedin_user.vehicle}</h2>
                }
                {
                    loggedin_user.vehicle_name && <h2>Vehicle Name: {loggedin_user.vehicle_name}</h2>
                }
                {
                    loggedin_user.vehicle_model && <h2>Vehicle Model: {loggedin_user.vehicle_model}</h2>
                }
            </div>
        </div>
    );
};

export default DashboardHome;