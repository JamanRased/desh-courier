import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const AllOrder = () => {
    const [events, setEvents] = useState([])

    useEffect(() =>{
        fetch('services.json/services')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[])

    const handleDelet = id =>{
        const url = `services.json/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remainingEvents = events.filter(event=> event._id !==id);
                setEvents(remainingEvents);
            }
        })
    }
    return (
        <div>
            <Container className='bg-warning p-3 '>
            <h2 className='p-3 m-3'>Manage all Bookings</h2>
            <div className=''>
                {events.map((event) =>(
                    <div key = {event.id}className='row'>
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between border shadow bg-white rounded m-2 p-2">
                                <h4 className='ms-5 ps-3'> Tour : {event.name}</h4>
                                <Button className='p-2 my-auto' onClick={() => handleDelet(event._id)} variant="danger">Delet Event</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Container>
        </div>
    );
};

export default AllOrder;