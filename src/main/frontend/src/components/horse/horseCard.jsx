
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHorseImages } from '../../api/ApiService';

import { capitalize } from '../../tools';



export default function HorseCard({ horse, imageUrl }) {
    const [images, setImages] = useState(null);

    const horseName = capitalize(horse.name);



    useEffect(() => {
        getHorseImages(horseName)
            .then(response => {
                if (response.data.total_count > 0) {
                    setImages(response.data.resources);
                }})
            .catch(error => console.log(error))
            .finally()


    }, [horseName])


    return (
        <div className="card col-lg-3 mb-3 ms-5 p-2" style={{ maxHeight: "50vh", height: '35em', backgroundColor: "rgba(0,0,0,.095)" }}>
            <div className='border border-5 border-white bg-white' style={{ maxHeight: "45%", height: "45%" }}>
                {images && <img className='mx-auto rounded border border-5 border-white' src={images[0].secure_url} alt="horse_img" style={{ height: 'auto', width: 'auto', maxHeight: "100%", maxWidth: "100%" }} />}
            </div>
            <div className="card-body text-start" style={{ height: '35%', maxHeight: "35%", overflow: "hidden" }}  >
                <h5 className="card-title" >Name: {horseName} </h5>
                <h6 className="" >Breed: {horse.breed} </h6>
                <h6 className="" >Color: {horse.color} </h6>
                <h6 className="" >Sex: {horse.sex} </h6>
                {horse.hands === 0 && <h6 className="card-title" >Hands: N/A </h6>}
                {horse.hands > 0 && <h6 className="card-title" >Hands: {horse.hands} </h6>}
            </div>
            <hr className='mt-0' />
            <Link to={`/about/${horse.id}`} className="btn btn-primary w-100 mt-auto" > More Info </Link>
        </div>
    );
}