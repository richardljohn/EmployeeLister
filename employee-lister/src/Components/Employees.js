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
                <Employee selectedEmployee={selectedEmployee} />
                <button class="btn-primary"onClick={() => setSelectedEmployee(null)}>Reset</button>
            </div>
        );
    }

    return <div>
        <p>Welcome to CSI. The Country Stinson Island. Here is our staff.</p>
        {employeeData.map((employee) => <p key={employee.id}><button onClick={() => getEmployeeById(employee.id)}>{employee.name}</button></p>)}
    </div>;
}

export default Employees;