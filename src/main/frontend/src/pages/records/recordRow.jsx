import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { getHeight, getLastCoggins, getLastRabiesShot, getLastVaccination, getLastWormed, getWeight } from "../../api/ApiService";
import { calculateWeight, formatDate } from "../../tools";


export default function RecordRow({ horse }) {

    const [wormedDate, setWormedDate] = useState();
    const [vaccinationDate, setVaccinationDate] = useState();
    const [cogginsDate, setCogginsDate] = useState();
    const [currentWeight, setCurrentWeight] = useState();
    const [height, setHeight] = useState();
    const [rabiesShotDate, setRabiesShotDate] = useState();
    const [isLoading, setIsLoading] = useState(true);


    function dateExtract(data) {
        if (data.length > 0) {
            return (formatDate(data.slice(-1)[0].date))
        }
    }

    function heightExtraction(data) {
        if (data.length > 0) {
            return (data.slice(-1)[0].height)
        }
    }

    function weightExtraction(data) {
        if (data.length > 0) {
            let record = data.slice(-1)[0]
            return (calculateWeight(record.girth, record.length, record.redTape, record.blackTape))
        }
    }

   
   


    useEffect(() => {
        function refreshData(){
            getLastWormed(horse.id)
                .then(res => setWormedDate(dateExtract(res.data)))
    
            getLastVaccination(horse.id)
                .then(res => setVaccinationDate(dateExtract(res.data)))
    
            getLastCoggins(horse.id)
                .then(res => setCogginsDate(dateExtract(res.data)))
    
            getWeight(horse.id)
                .then(res => setCurrentWeight(weightExtraction(res.data)))
    
            getHeight(horse.id)
                .then(res => setHeight(heightExtraction(res.data)))
    
            getLastRabiesShot(horse.id)
                .then(res => setRabiesShotDate(dateExtract(res.data)))
            setIsLoading(false)
        }
       refreshData();
        
    }, [horse.id]);

    if(isLoading){
        return(
            <tr>
                <td>Loading...</td>
            </tr>
        )
    }else{
        return(
            <tr>
            <td className="" style={{ width: '15%' }}>{horse.name}</td>
            <td>{currentWeight}</td>
            <td>{height} </td>
            <td>{wormedDate}</td>
            <td>{rabiesShotDate}</td>
            <td>{vaccinationDate}</td>
            <td>{cogginsDate}</td>
            <td><Link className="btn btn-secondary" to={`/records/${horse.id}`} >View Records</Link></td>
        </tr>
        )
    }
        
           
}