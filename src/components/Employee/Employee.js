import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './Employee.css';

const Employee = (props) => {
    const { name ,email,phone, img, yearlyIncome}=props.user;
    
    return (
        <div className="showEmployee">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="employee">
                <h3><b>Name: </b>{name}</h3>
                <p><b>email: </b>{email}</p>
                <p><b>phonenumber: </b>{phone}</p>
                <p><b>Yearly-Income: </b>{yearlyIncome}</p>
                <button onClick={()=> props.addClient(props.user)} className="addBtn"><FontAwesomeIcon icon={faUser} /> Add Client</button>
             </div>
             
        </div>
    );
};

export default Employee;