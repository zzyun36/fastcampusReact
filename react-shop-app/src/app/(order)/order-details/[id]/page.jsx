import React from 'react'

const OrderDetails = ({params, serchParams}) => {
    
    const {hello} = searchParams;
    const {id} = params;

    return (
        <div>{id}</div>
    )
}

export default OrderDetails