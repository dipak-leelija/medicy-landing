import React, { useEffect, useState } from "react";
import axios from "axios";
import circleCheck from "/assets/icon/circle-check.svg";
import circleUnCheck from "/assets/icon/circle-uncheck.svg";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/plans/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.plans));
        setPlans(response.data.plans);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuyNowClick = async (planId) => {
    try {
      const response = await fetch("http://localhost:5173/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: planId,
        }),
      });
      if (response.ok) {
        console.log("request send success");
      } else {
        console.log("request not send ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {plans.map((plan) => (
          <div className="col" key={plan.id}>
            <div className="card price-card">
              <div>
                <div className="pricebdg text-center text-white p-1">
                  popular
                </div>
              </div>
              <div className="card-body">
                <div className="head text-center mb-4 p-4 pb-0">
                  <h3 className="mb-0 fw-semibold">{plan.name}</h3>
                  <p className="text-center">starter</p>
                </div>

                <div className="show-price text-center mb-4">
                  <h4>
                    <label htmlFor="">&#x20b9;</label>
                    <span className="fw-bold dark-primary">{plan.price}</span>/
                    year
                  </h4>
                </div>

                <div className="p-3">
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Lab Test</span>
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Report</span>
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Product</span>
                    <img src={circleUnCheck} alt="" />
                  </div>
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Sale Management</span>
                    <img src={circleUnCheck} alt="" />
                  </div>
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Purchase Management</span>
                    <img src={circleUnCheck} alt="" />
                  </div>
                  <div className="feature-head d-flex justify-content-between align-items-center mb-2">
                    <span>Stock Details</span>
                    <img src={circleUnCheck} alt="" />
                  </div>
                </div>

                <div className="d-flex justify-content-center m-4">
                  <button
                    type="submit"
                    id={`buyNow-${plan.id}`}
                    onClick={() => handleBuyNowClick(plan.id)}
                    className="btn btn-primary price-btn btn-lg"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
