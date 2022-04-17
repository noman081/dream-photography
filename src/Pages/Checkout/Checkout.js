import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkOutName } = useParams();
    return (
        <div>
            <h1>Checkout: {checkOutName}</h1>
        </div>
    );
};

export default Checkout;