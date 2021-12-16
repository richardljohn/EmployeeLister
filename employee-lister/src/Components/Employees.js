import axios from 'axios';
import { useEffect, useState } from 'react';
import Employee from "./Employee";

function Employees() {

    const [employeeData, setEmployeeData] = useState([]); 
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees, []);


    function getEmployees() { 
        axios.get('https://statenweb.mockable.io/employees').then(function(response){
            setEmployeeData(response.data);
        });
    }

    function getEmployeeById(id){
        setSelectedEmployee(id);
    }

    if(employeeData.length === 0){
        return <h1 class="loading-text text-light p-5">Loading...Gimme A Minute</h1>;
    }

    if(selectedEmployee){
        return (
            <div>
                <p><Employee selectedEmployee={selectedEmployee} /></p>
                <button class="home-btn btn-primary"onClick={() => setSelectedEmployee(null)}>Go Back</button>
            </div>
        );
    }

    return (
        <div>
            <p class ="banner text-light"><h2 class ="animate__animated animate__fadeIn">Welcome to the King Kamehameha Country Club.</h2></p>
            <p class ="sub-banner text-light"><h3 class = "animate__animated animate__fadeIn">Here are some of our wonderful Employees...</h3></p>
            {employeeData.map((employee) => <p key={employee.id}><button class="employee-btn btn-primary w-50 animate__animated animate__fadeIn"onClick={() => getEmployeeById(employee.id)}>{employee.name}</button></p>)}
        </div>
    );
}

export default Employees;