import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Employee from '../Employee/Employee';
import './User.css';

const User = () => {
    const userData = fakeData.splice(0, 15);
    console.log(userData);

    const [users, setUser] = useState(userData);

    const [client, setClient] = useState([]);
    const addClient = () => setClient(client + 1);

    let total = 0;
    for (let i = 0; i < userData.length; i++) {
        let totalIncome = userData[i].yearlyIncome;
        let totalYearlyIncome = parseInt(totalIncome,10);

        total = totalYearlyIncome +total;
        console.log(total);

    }
    

    return (
        <div className="userContainer">
            <div className="employeeContainer">
                {
                    userData.map(user => <Employee user={user} addClient={addClient}></Employee>)
                }

            </div>
            <div className="totalContainer">
                <h3>Total information</h3>
                <p><b>Total Client:{client}</b></p>
                <p><b>Total Employee Income:{total}</b></p>
            </div>
        </div>
    );
};

export default User;