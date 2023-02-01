import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHorsesForSale, getHorsesNotForSale } from "../../api/ApiService";
import HorseContainer from "../../components/horse/horseContainer";



function AdoptableHorsesPage() {
    const [horses, setHorses] = useState([])
    const [isLoading, setIsLoading] = useState(true);        
       
    const refreshHorses=async()=>{   
        setIsLoading(true)          
            await getHorsesForSale()
            .then((response) =>  setHorses(response.data))
            .catch((error) => console.log(error))
            .finally(() => "")    
        
        setIsLoading(false)
    }
    
    useEffect(()=> {         
        refreshHorses();
          
       
    },[])


    //Display
    return (
        <div className="container">
            <div >               
                 <h1>Up for Adoption</h1>                
            </div>
            {isLoading &&
                <div>
                    <h4>Loading</h4>
                </div>
            }
            {!isLoading &&
                <HorseContainer horses={horses} />
            }


        </div>
    )
}

export default AdoptableHorsesPage;