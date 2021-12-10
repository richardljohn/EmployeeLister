import axios from "axios";
import { useEffect, useState } from 'react';
import Employee from "./Employee"

function Employees() {

    const [employeeData, setEmployeeData] = useState([]); 
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees, []);


    function getEmployees() { 
        axios.get('https://statenweb.mockable.io/employees')
        .then(function(response){
            setEmployeeData(response.data);
        });
    }

    function getEmployeeById(id){
        setSelectedEmployee(id);
    }

    if(selectedEmployee){
        return <p>You have selected {selectedEmployee}</p>
    }

    return <div>
        <button onClick={getEmployees}>Click for Employees</button>
        {employeeData.map((employee) => <p key={employee.id}><button>{employee.name} - {employee.departmnet}</button></p>)}
    </div>;
}

export default Employees;