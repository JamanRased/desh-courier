import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    useEffect(()=>{
        fetch(`services.json/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    })
    return (
        <div className='p-5 '>
            <div className='booking-container text-center'>
                    <h3> Submit Your Booking Detailes</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='name' {...register("name")} placeholder='Name' />     
                        <input type='email' {...register("email", { required: true })} placeholder="Email"  />
                        <input type='date' {...register("date", { required: true })} placeholder="Date"  />
                
                        {errors && <span>This field is required</span>} 
                        <input className="bg-success mb-5" type="submit" value='Book'/>
                    </form> 
            </div>  
        </div> 
    );
};

export default Booking;