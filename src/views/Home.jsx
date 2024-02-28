import React from 'react'
import {motion} from 'framer-motion';
import img1 from '/assets/img/HDR.png';


export default function Home() {
    return (
        <>
            <section className='w-100 h-100 '>
                <div>
                    <div className='d-flex justify-content-around flex-wrap' style={{marginTop:'8%'}}>
                        <div className='text-center w-25 mt-5'>
                            <h1 style={{color:'#0d6efd'}}>Medicy</h1>
                            <p>Health Care</p>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <img src={img1} className='w-75' alt="" />
                        </div>
                    </div>
                    {/* <img src={img2} className='vh-100 vw-100' alt="" /> */}
                </div>
            </section>
        </>
    );
}
