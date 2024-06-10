import React from "react";
import circleCheckWhite from '/assets/icon/circleCheck-white.svg';
import freeService from '/assets/img/freepricing.png';

const FreeOfferBanner = () => {
  return (
    <>
      <div className="main-pricehead text-center m-4 mb-5">
        <h1>Pick Your Perfect Plan</h1>
        <p>Choose the ideal plan for your needs. Streamline operations, enhance patient care, and boost efficiency with our tailored solutions.</p>
      </div>

      <div className="free-priceCard card mb-5">
        <div className="row  g-0">
          <div className="col-md-5 order-2 order-md-1">
            <div className="card-body free-pricebody p-4">
              <div className=" text-white free-pricehead">
                <div className="mb-4">
                  <h5 className="text-white fw-semibold m-3 ms-2 fs-2">
                    Free for 15 Days
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    OPD Management
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" /> 
                    Pharmacy Management
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Electronic Health Records (EHR)
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" /> 
                    Billing & Invoicing
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Report Generation
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Reporting & Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 order-1 order-md-2">
            <div className="free-priceImgsec mt-5">
              <div className="d-grid col-3 tffbtn">
                <a href="" className="btn btn-light btn-lg">
                  Try for FREE
                </a>
              </div>
              <div>
                <img
                  src={freeService}
                  className="img-fluid rounded-start "
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeOfferBanner;
