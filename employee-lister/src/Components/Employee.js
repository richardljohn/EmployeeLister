import axios from 'axios';
import { useEffect, useState } from 'react';

function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
        }, [selectedEmployee]);

    if(!selectedEmployeeData){
        return <h1 class="loading-text text-light">Loading...</h1>;
    }
    
    const {
        id,
        name, 
        startDate, 
        role, 
        department, 
        photo
    } = selectedEmployeeData;

    return ( 
        <div class="container">
            <h2 class ="text-light m-2">This is {name}, one of our valued employees:</h2>
            <div class="card bg-dark text-center my-3" style={{width: "35rem"}}>
                    <p><img class=""style={{maxHeight: '400px', maxWidth: "300px"}} src={photo} alt={name}></img></p>
                    <div class="card-body bg-dark text-light">
                        <h3>{name}</h3>
                        <p>Employee ID: {id}</p>
                        <p>Starting Date: {startDate}</p>
                        <p>Job Role: {role}</p>
                        <p>Department: {department}</p>
                    </div>
            </div> 
        </div>
    );
}

export default Employee;