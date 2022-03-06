import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('services.json/services', data)
        .then(res =>{
           if(res.data.insertedId){
               alert("Successfully added a Service")
               reset();
           }
        })
    }
  console.log(watch("example"));
    return (
        <div className='py-4 m-1'>
            <Container>
                <div className="add-services">
                    <h2>Add Your Services</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input {...register("name")} placeholder="Enter Your Service Name " />
                        <input {...register("imageurl", { required: true })} placeholder="image url"  />
                
                        {errors && <span>This field is required</span>} 
                        <input className="bg-info mb-5" type="submit" />
                    </form>
                </div>
            </Container>
           
        </div>
    );
};

export default AddServices;