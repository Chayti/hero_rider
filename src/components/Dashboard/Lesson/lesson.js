import React from "react";
import { Link } from "react-router-dom";
import './lesson.css';

const Lesson = (props) => {
    const { _id, name, price, img } = props.myLesson;
    return (
        <div className="lesson py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <br />
            <h4 className="px-3 text-primary fw-bold">${price}</h4>

            <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn btn-warning mx-3 mt-0 ">Pay Now</button>
            </Link>

        </div>
    );
}

export default Lesson;