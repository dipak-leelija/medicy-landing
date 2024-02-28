import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-dark w-100 h-auto tect-center tex-white'>
                <section className='d-flex justify-content-around flex-wrap'>
                    <div className='w-25'>
                        <img className='' src='../../public/image/logo.png'></img>
                    </div>
                    <div className='d-flex w-50 text-white justify-content-around flex-wrap'>
                        <div><h4>Customer</h4>
                            <p>Refer a chemist friend</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                        </div>
                        <div>
                            <h4>Product</h4>
                            <p>Refer a chemist friend</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                        </div>
                        <div>
                            <h4>About Us</h4>
                            <p>Refer a chemist friend</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                </section>
                <section className='w-100 text-white mt-5'>
                    <div className='d-flex justify-content-around align-item-center'>
                        <p>Privacy Policy</p>
                        <p>Terms and conditions</p>
                        <p>© 2023-2024 Medicy Health Care.</p>
                    </div>
                </section>
            </div>
        </>
    )
}
