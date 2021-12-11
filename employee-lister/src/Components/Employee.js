import axios from 'axios';
import { useEffect, useState } from 'react';

function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
        }, [selectedEmployee]);

    if(!selectedEmployeeData){
        return <p>Loading...</p>;
    }

    console.log(selectedEmployeeData)

    const {
        id,
        name, 
        startDate, 
        role, 
        department, 
        photo
    } = selectedEmployeeData;

    return ( 
        <div>
            <div>
                <p><img style={{maxHeight: '300px'}} src={photo} alt={name}></img></p>
                <p>Name: {name}</p>
                <p>Employee ID: {id}</p>
                <p>Starting Date: {startDate}</p>
                <p>Job Role: {role}</p>
                <p>Department: {department}</p>
            </div>
        </div>
    );
}

export default Employee;