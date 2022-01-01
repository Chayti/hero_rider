import React from "react";
import './Lesson.css';

const Lesson = (props) => {
    const { _id, name, price, description, img } = props.product;
    return (
        <div className="lesson py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <h3 className="px-3">{price}</h3>
            <p className="px-3">{description}</p>
            <br />
            <button className="btn delete-btn mx-3 mt-0" onClick={() => props.handleDelete(_id)}>Delete</button>
        </div>
    );
}

export default Lesson;