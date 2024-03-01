import React from 'react'
import { motion } from 'framer-motion';
import img1 from '/assets/img/hero-image.jpg';
import tap from '/assets/img/tap.png';


export default function Home() {
    return (
        <>
            <section className='w-100 h-100 '>
                <div>
                    <div className='d-flex justify-content-around flex-wrap' style={{ marginTop: '8%' }}>
                        <div className='baner-left mt-5'>
                            <div className='ractangle1'></div>
                            <div className='ractangle2'></div>
                            <div className='heading text-start'>
                                <div className='mb-4'>
                                    <h1>Pharmacy Management Solved In a Click
                                        <img src={tap} alt="" />
                                    </h1>
                                </div>
                                <div className='baner-text'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                </div>

                                <div>
                                    <button className='btn pricebtn'>See Pricing</button>
                                </div>
                            </div>

                        </div>
                        <div className='baner-right d-flex justify-content-end'>
                            <div className='circle1'></div>
                            <div className='circle2'></div>
                            <div className='heroimg'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
