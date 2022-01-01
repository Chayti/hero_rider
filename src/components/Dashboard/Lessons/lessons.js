import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Lesson from "../Lesson/lesson";
import './lessons.css';

const Lessons = () => {
    const [myLessons, setMyLessons] = useState([])
    useEffect(() => {
        fetch('https://frozen-river-39826.herokuapp.com/lessons')
            .then((res) => res.json())
            .then((data) => setMyLessons(data));
    }, [myLessons]);

    return (
        <div id="lessons">
            <h1>Available Driving Lessons</h1>
            <div className="lessons-container">
                <Row xs={1} md={2}>
                    {
                        myLessons.map(myLesson => <Lesson
                            key={myLesson.id}
                            myLesson={myLesson}
                        ></Lesson>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default Lessons;