import axios from "axios";
import { useEffect, useState } from 'react';

function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`https://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
    }, [selectedEmployee]);

    if(!selectedEmployeeData){
        return <p>Loading...</p>;
    }

    return <p>{selectedEmployeeData.name}</p>
}

export default Employee;