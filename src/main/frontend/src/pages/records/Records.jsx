import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHorses } from "../../api/ApiService";
import RecordRow from "./recordRow";

export default function Records() {
    const [horses, setHorses] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);

   const refreshRecords=()=>{
        getHorses()
        .then(res => { setHorses(res.data); setIsLoading(false);})
        .catch(error => console.log(error))
    }
    
    useEffect(() => refreshRecords(), [])
    return (
        <div className="container" >
            {isLoading && <h1>Loading</h1>}
            {!isLoading &&
                <div>
                    <h1>Records</h1>
                    <Link className="btn btn-success" to="/records/add">+ New Record</Link>
                    <table className=" table table-striped col-lg-6 mx-auto">
                        <thead>
                            <tr>                                
                                <th>Horse</th>                                
                                <th>Weight</th>
                                <th>Height</th>
                                <th>Last Wormed</th>
                                <th>Rabies Shot</th>
                                <th>Last Vaccinated</th>
                                <th>Coggins Pulled</th>
                                <th></th>   
                                <th></th>                             
                            </tr>
                        </thead>
                        <tbody>
                            {horses.map(horse => (                           
                                                        
                                <RecordRow key={horse.id} horse={horse}/>
                            ))}
                           

                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}