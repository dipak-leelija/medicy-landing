import React from 'react'
import keymarmaimg from '../../public/assets/img/pharmamamage.png'

export default function KeyFeature() {
  return (
    <section>
            <div className='featuresmain'>
                <div className='mainhead'>
                    <div className='featureHead'>
                        <h1>Key Features Of Medicy</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                </div>
                <div className='main-card'>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> <img src={keymarmaimg} style={{width:'80px', marginLeft:'-20px'}} alt='' />Patient Reecords Management </h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title"><img src={keymarmaimg} style={{width:'80px', marginLeft:'-20px'}} alt='' />Patient Reecords Management </h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title"><img src={keymarmaimg} style={{width:'80px', marginLeft:'-20px'}} alt='' />Patient Reecords Management </h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title"><img src={keymarmaimg} style={{width:'80px', marginLeft:'-20px'}} alt='' />Patient Reecords Management </h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
