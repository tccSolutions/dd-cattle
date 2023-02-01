import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getHorseById, getHorseImages } from "../../api/ApiService";
import { random } from "../../tools";


export default function HorsePage() {
    const [horse, setHorse] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([{ secure_url: "" }])
    const { id } = useParams();

    const getHorse = (data) => {
        if (data != null) {
            setHorse(data)
            getHorseImages(data.name)
                .then(res => setImages(res.data.resources))
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getHorseById(id)
            .then(res => getHorse(res.data))


    },[])


    return (
        <div className="container">
            {isLoading && <div><h1>Loading</h1></div>}
            {!isLoading &&
                <div className="container mb-5">
                    <div className="row mb-5">
                        <h1>{horse.name}</h1>
                        <h3>{horse.breed}</h3>
                        <h3>{horse.brand < 0 ? horse.brand : ""}</h3>
                        <div className="rounded">
                            {images.length > 0 && <img className="mx-auto rounded" src={images[random(images.length)].secure_url} alt="uh-oh" style={{ height: '20vh', width: 'auto' }} />}
                            {images.length === 0 && <h6>Loading Image ....</h6>}
                        </div>
                    </div>
                    <div className="row justify-contnet-center">
                        <h4 className="col-lg-6 mx-auto" >{horse.bio}</h4>
                    </div>
                    <hr style={{border:"15px dotted", borderTop:'none'}}/>
                    <div className="row">
                        <div className="col-12">
                            <h3>Training Accomplishments</h3>
                        </div>
                    </div>
                    <hr style={{border:"15px dotted", borderTop:'none'}}/>
                    <div className="row">
                        <div className="mb-3">
                            <h3>Gallery</h3>
                        </div>
                        {images.map(image => (
                            <div className="col-lg-3 rounded  mb-3" key={image.secure_url}>
                                <img src={image.secure_url} style={{ height: '25vh',  maxWidth:"100%"}} alt="uh-oh"/>
                            </div>
                        ))}

                    </div>


                </div>
            }
        </div>
    );
}