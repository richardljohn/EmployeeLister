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
            <h3 class ="text-light m-2"><strong>This is {name}, an integral part of the {department} department at the King Kamehameha Country Club.</strong></h3>
            <div class="card bg-dark text-center my-3" style={{width: "35rem"}}>
                    <p><img class=""style={{maxHeight: '400px', maxWidth: "300px"}} src={photo} alt={name}></img></p>
                    <div class="card-body bg-dark text-light">
                        <h3>{name}</h3>
                        <p><strong>Employee ID: </strong>{id}</p>
                        <p><strong>Starting Date: </strong>{startDate}</p>
                        <p><strong>Job Role: </strong>{role}</p>
                        <p><strong>Department: </strong>{department}</p>
                    </div>
            </div> 
        </div>
    );
}

export default Employee;