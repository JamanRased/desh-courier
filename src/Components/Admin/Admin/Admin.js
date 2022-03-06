import React from 'react';
import AddServices from '../AddServices/AddServices';
import AllOrder from '../AllOrder/AllOrder';
import Order from '../Order/Order';

const Admin = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AllOrder></AllOrder>
            <Order></Order>
            <AddServices></AddServices>
        </div>
    );
};

export default Admin;