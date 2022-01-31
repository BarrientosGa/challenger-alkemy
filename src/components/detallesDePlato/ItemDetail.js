import React from 'react';
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
    return (
        <>
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            <Link to="/"> <button>volver al inicio</button></Link>
        </>

    )
}

export default ItemDetail;
