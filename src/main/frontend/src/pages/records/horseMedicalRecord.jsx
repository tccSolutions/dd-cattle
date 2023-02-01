import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteRecord, getMedicalRecordsByHorseId } from "../../api/ApiService";
import { useAuth } from "../../api/AuthContext";
import { calculateWeight, formatDate } from "../../tools";

export default function HorseMedicalRecords() {
    const [records, setRecords] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const auth = useAuth();

    function getRecords(data) {
        if (data != null) {
            setRecords(data)
            setIsLoading(false)
        }
    }

    const refreshRecords = () => {
        getMedicalRecordsByHorseId(id)
            .then(res => getRecords(res.data))
            .catch(err=>console.log(err))
    }

    const deleteBtnOnClick = (id) => {
        const yesDelete = window.confirm("Are you sure? This can not be undone!");
        if (yesDelete) {
            deleteRecord(id)
                .then(res => {
                    refreshRecords()
                    alert("Record Successfully Deleted")
                })
                .catch(err=>console.log(err))
        }
    }

    useEffect(() => refreshRecords(), []);

    return (
        <div>
            {!isLoading &&
                <div className="container mb-5">
                    <div>
                        <h1>{records[0].horse.name}</h1>
                    </div>
                    <table className="table table-responsive mx-auto" >
                        <thead className="">
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Height</th>
                                <th>Red Tape</th>
                                <th>Black Tape</th>
                                <th>Heart Girth</th>
                                <th>Length</th>
                                <th>Weight</th>
                                <th>Wormed</th>
                                <th>Coggins</th>
                                <th>Vaccinated</th>
                                <th>Rabies Shot</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map(record => (
                                <tr key={record.id}>
                                    <td>{formatDate(record.date)}</td>
                                    <td>{record.description}</td>
                                    <td>{record.height > 0 ? record.height : ""}</td>
                                    <td>{record.redTape > 0 ? record.redTape : ""}</td>
                                    <td>{record.blackTape > 0 ? record.blackTape : ""}</td>
                                    <td>{record.girth > 0 ? record.girth : ""}</td>
                                    <td>{record.length > 0 ? record.length : ""}</td>
                                    <td>{calculateWeight(record.girth, record.length, record.blackTape, record.redTape)}</td>
                                    {record.wasWormed && <td>X</td>}
                                    {!record.wasWormed && <td></td>}
                                    {record.cogginsPulled && <td>X</td>}
                                    {!record.cogginsPulled && <td></td>}
                                    {record.wasVaccinated && <td>X</td>}
                                    {!record.wasVaccinated && <td></td>}
                                    {record.rabiesShot && <td>X</td>}
                                    {!record.rabiesShot && <td></td>}
                                    {auth.isAuthenticated && <td><Link className="btn btn-warning" to={`/records/update/${record.id}`}>Edit</Link></td>}
                                    {auth.isAuthenticated &&  <td><button className="btn btn-danger" onClick={() => deleteBtnOnClick(record.id)}  >X</button></td>}
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>


    );
}