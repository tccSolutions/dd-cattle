import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHorsesForSale, getHorsesNotForSale } from "../../api/ApiService";
import HorseContainer from "../../components/horse/horseContainer";



function OurBarn({ isForSale }) {
    const [horses, setHorses] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const refreshHorses = async () => {
        setIsLoading(true)
        await getHorsesNotForSale()
            .then((response) => setHorses(response.data))
            .catch((error) => console.log(error))
            .finally(() => "")
        setIsLoading(false)
    }

    useEffect(() => {
        refreshHorses();


    }, [])


    //Display
    return (
        <div className="container">
            <div >
                <h1>Our Barn</h1>
                

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

export default OurBarn;