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
        <div class="card bg-dark text-center">
            <div>
                <p><img style={{maxHeight: '300px'}} src={photo} alt={name}></img></p>
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

// {/* <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}

export default Employee;