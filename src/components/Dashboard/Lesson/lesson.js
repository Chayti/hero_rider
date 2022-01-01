import React from "react";
import './lesson.css';

const Lesson = (props) => {
    const { _id, name, price, img } = props.myLesson;
    return (
        <div className="lesson py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <br />
            <h4 className="px-3 text-primary fw-bold">${price}</h4>
            <button className="btn btn-success mx-3 mt-0 " onClick={() => props.handlePayment(_id)}>Pay Now</button>
        </div>
    );
}

export default Lesson;