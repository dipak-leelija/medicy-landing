import React from "react";
import circleCheckWhite from '/assets/icon/circleCheck-white.svg';
import freeService from '/assets/img/freepricing.png';

const FreeOfferBanner = () => {
  return (
    <>
      <div className="main-pricehead text-center m-4 mb-5">
        <h1>Pick Your Perfect Plan</h1>
        <p>All plan FREE for first 7days</p>
      </div>

      <div className="free-priceCard card mb-5">
        <div className="row  g-0">
          <div className="col-md-5 order-2 order-md-1">
            <div className="card-body free-pricebody p-4">
              <div className=" text-white free-pricehead">
                <div className="mb-4">
                  <h5 className="text-white fw-semibold m-3 ms-2 fs-2">
                    Free for one year
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Lab Test
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Report
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Product
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Sale Management
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Purchase Management
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center  mb-2 fs-5">
                  <span>
                    <img src={circleCheckWhite} className="me-4" alt="" />
                    Stock Details
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
