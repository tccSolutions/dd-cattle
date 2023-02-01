import React from "react";
import { Link } from "react-router-dom";

import brand from '../../images/ddcc.png'



function Home() {


    return (
        <div className="container ">
            <div>
        <h1 className='title_font'>Double D Cattle Company</h1>
    </div>
    <div className="container">
        <p className='fs-3'>Founded by David Jones and Dwight Mobley. Friends for over 15 years and partners for life. That sounds gay. They are not gay.
            They both have women. And they like them. They do not like wieners. Well, they like hotdogs. Anyways, I digress....
        </p>
    </div>

    <div className=" row">
        <div className='container text-shadow text-start col-lg-4'>
            <div className='image_container  rounded w-50'>
                <img className="rounded border border-dark border-1" src="https://res.cloudinary.com/dmobley0608/image/upload/w_300/v1658027414/double_d_ranch/Henry/wbybcrne1rpfvc0dvp2k.jpg"/>
            </div>
            <div>
                <p className="fs-4 ">
                    David has had a passion for animals all of his life. He is pictured above desensitizing his newest mustang, Henry. More information on Henry
                    can be found <Link className="link-primary" to="/about/26">HERE</Link>
                </p>
            </div>
        </div>
        <div className='col-lg-4 p-4' >
            <img className='animate__animated animate__rotateIn' src={brand} width='75%' />
        </div>
        <div className='container text-shadow  text-end col-lg-4 mb-0'>
            <div className='image_container  rounded w-50 ms-auto'>
                <img className="rounded border border-dark border-1" src="https://tccs.tech/images/headshot.jpg" height="300px" />
            </div>
            <div>
                <p className="fs-4  ms-auto">
                    Dwight has also had a passion for animals since a very early age. He can be seen above with a filly that he recently tamed.
                    He also has a farely new mustang, Titus. More information on Titus can be found <Link className="link-primary" to="/about/24">HERE</Link>
                </p>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Home;
