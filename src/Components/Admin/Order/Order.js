import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Order = () => {
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`services.json/myOrders/`)
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`services.json/booking/${id}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
            setControl(!control);
            }
        });
        console.log(id);
    };
    return (
        <div>
            <Container className='p-2'>
            <h1>Our Bookings </h1>
            <div  className=' services bg-warning p-2'>
                <h2 className='p-3 m-3'>Booking Order Manage</h2>
                <div className=''>
                    {services.map((services) =>(
                        <div key = {services.id}className='row'>
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between border shadow bg-white rounded m-2 p-2">
                                    <h6>{services?.name}</h6>
                                    <p>{services?.Description}</p>
                                    <h3 className="text-danger"> Price :{services?.Price}Tk</h3>

                                    <button
                                        onClick={() => handleDelete(services?.id)}
                                        className="btn btn-danger">Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </div>
    );
};

export default Order;