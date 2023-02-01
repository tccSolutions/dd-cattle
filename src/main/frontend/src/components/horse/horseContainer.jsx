import React from "react"
import HorseCard from "./horseCard"

export default function HorseContainer({ horses }) {
    return (
        <div className="container mb-5">
           
                <div className="row justify-content-start ">
                    {horses.map(horse => (
                        <HorseCard key={horse.id} horse={horse} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDAqoCBvk6jaZJhU5gxqSOA8xU4MyUPfY5g&usqp=CAU"} />
                    ))}
                </div>

           
        </div>
    )
}