import React from 'react';
import { Link } from "react-router-dom"
import './App.css'


function GetStarted() {

    return (
        <div className='get-started'>
            <div className="get">
                <h1><span className='t'>t</span><span className='o'>o</span><span className='d'>d</span><span className='oo'>o</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit nulla nesciunt, ex voluptate nemo reprehenderit. Assumenda cum id illum?</p>
                <br /><br />

                 <Link to="/started"   className='get-btn'> Get started</Link>

            </div>
        </div>
    )
}


export default GetStarted
