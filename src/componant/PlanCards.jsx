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
      url: "https://app.medicy.in/api/plans.php",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data.plans));
        setPlans(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuyNowClick = async (planId) => {
    try {
      const url = "https://app.medicy.in//register.php";
      const postData = { pid: planId };

      // Create a form element
      const form = document.createElement("form");
      form.method = "post";
      form.action = url;

      // Add input fields for each data key
      Object.keys(postData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = postData[key];
        form.appendChild(input);
      });

      // Append the form to the document body
      document.body.appendChild(form);

      // Submit the form
      form.submit();

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
                  {plan.features.map((feature) => (
                    <div
                      className="feature-head d-flex justify-content-between align-items-center mb-2"
                      key={feature.id}
                    >
                      <span>{feature.feature}</span>
                      {feature.status === 1 ? (
                        <img src={circleCheck} alt="" />
                      ) : (
                        <img src={circleUnCheck} alt="" />
                      )}
                    </div>
                  ))}
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
