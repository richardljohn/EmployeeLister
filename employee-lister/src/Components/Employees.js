import axios from 'axios';
import { useEffect, useState } from 'react';
import Employee from "./Employee"

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

    if(selectedEmployee){
        return (
            <div>
                <p><Employee selectedEmployee={selectedEmployee} /></p>
                <button class="home-btn btn-primary"onClick={() => setSelectedEmployee(null)}>Home</button>
            </div>
        );
    }

    return <div>
        <p class ="banner text-dark"><h2>Welcome to the King Kamehameha Country Club. Here are some of our wonderful Employees...</h2></p>
        {employeeData.map((employee) => <p key={employee.id}><button class="employee-btn btn-primary w-50"onClick={() => getEmployeeById(employee.id)}>{employee.name}</button></p>)}
    </div>;
}

export default Employees;