import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Employee from '../Employee/Employee';
import './User.css';

const User = () => {
    const userData = fakeData.splice(0,15);
    console.log(userData);
    
    const [users,setUser] = useState(userData) ;

    const[client,setClient] = useState([]) ;
    const addClient = (user)=> {
        const newClient = [...client,user];
        setClient(newClient);
    } 

    
    return (
        <div className="userContainer">
            <div className="employeeContainer">
            {
                userData.map(user=> <Employee user={user} addClient={addClient}></Employee>)
            }

            </div>
            <div className="totalContainer">
                <h3>Total information</h3>
                <p><b>Total Client:{client}</b></p>
                <p><b>Total Employee Income:</b></p>
            </div>
        </div>
    );
};

export default User;