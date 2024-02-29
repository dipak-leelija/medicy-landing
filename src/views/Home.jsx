import React from 'react'
import {motion} from 'framer-motion';
import img1 from '/assets/img/HDR.png';


export default function Home() {
    return (
        <>
            <section className='w-100 h-100 '>
                <div>
                    <div className='d-flex justify-content-around flex-wrap' style={{marginTop:'8%'}}>
                        <div className='baner-left w-50 mt-5'>
                            <div className='ractangle1'></div>
                            <div className='ractangle2'></div>
                            <div className='heading text-start'>
                                <h1>Pharmacy Management Solved In a Click</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            </div>
                        </div>
                        <div className='baner-right d-flex justify-content-end'>
                            <div className='circle1'></div>
                            <div className='circle2'></div>
                            <div className='heroimg'>
                              {/* <img src={img1} className='w-75' alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
