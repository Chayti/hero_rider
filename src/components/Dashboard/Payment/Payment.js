import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JwNMjCkzxdRkj23qr3OLpL8mH2txMbFejo5CovtCsILegRoibRsju0jBMwJSba59j9Tbr6stT94lexolj6ibVmB00lRH7Vr2e')

const Payment = () => {
    const { lessonId } = useParams();
    const [lesson, setLesson] = useState({});
    useEffect(() => {
        fetch(`https://frozen-river-39826.herokuapp.com/lessons/${lessonId}`)
            .then(res => res.json())
            .then(data => setLesson(data));
    }, [lessonId]);
    return (
        <div>
            <h3 className="fw-bold mb-5">Please Pay ${lesson.price} for {lesson.name}</h3>
            {lesson?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    lesson={lesson}
                />
            </Elements>}
        </div>
    );
};
export default Payment;