import React from 'react'
import "./Style.scss"
import { TitlePage } from '../../Components'
import data from "./data"
// import { TitlePage } from ""

const Difference = () => {
    return (
        <div className='difference containerElement mt-5'>
            <TitlePage text="Why Choose Us" boolean={false} />
            <h1>What makes us different</h1>

            <div className="difference-box">

                <div className="difference-item">

                </div>
            </div>
        </div>
    )
}

export default Difference