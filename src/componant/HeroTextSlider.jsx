import React, { useState, useEffect } from "react";

const HeroTextSlider = () => {
  const textItems = [
    {
      id: 1,
      point: "",
      text: "Are you looking for a software that manages all your pharmacy functions and also does it at a lightning fast speed ? Well Medicy is here for you. Our engineers have solidified a software that would speed the distribution of medical supplies and would create an impeccable retail experience. Once you implement our software, a high performing lab is always guaranteed."
    },
    {
      id: 2,
      point: "Pharmacy Management",
      text: "Our retail management software is a game changer. We solve the two issues that have been troubling the pharmacy market for years which are billing and handling issues. With the use of our pharmacy management system, you will be able to counter the problems of handling and billing drug orders and patient orders at a lightning-fast rate. "
    },
    {
      id: 3,
      point: "Diagnostic or Pathology Lab Management",
      text: "With the use of our diagnostic lab management software, you can do various tests according to your business operations. So if you want basic diagnostic management such as digital X-ray, USG, and CT scan you can have that with a single click. Or if your business needs special diagnostic needs we can arrange that too."
    },
    {
      id: 4,
      point: "Polyclinic Management",
      text: "Our polyclinic management is an extremely powerful tool. We combine advanced technology and clinic expertise to provide you with premium healthcare. Once you register with us you will witness holistic patient records like e-prescriptions, referral consultants, and doctor consultations seamlessly."
    },
    {
      id: 5,
      point: "OPD Management Software",
      text: "The outpatient department has always been critical. It's the first point of contact between hospital staff and patients. Our Opd management software makes sure that your electronic health record or EMR is managed with ease and we back up with a brilliant support team that can manage any hiccups. "
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === textItems.length ? 1 : prevSlide + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [textItems.length]);

  useEffect(() => {
    // Check if currentSlide reaches the duplicated last slide (last one of the copied array)
    if (currentSlide === textItems.length + 1) {
      // If reached, set currentSlide to the first slide
      setTimeout(() => {
        setCurrentSlide(1);
      }, 5000); // Delay to ensure smooth transition
    }
  }, [currentSlide, textItems.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {[textItems[textItems.length - 1], ...textItems, textItems[0]].map(
          (item) => (
            <div
              key={item.id}
              style={{
                flex: "0 0 100%",
              }}
            >
              <p>
              {item.point && <b>{item.point}:</b>} {item.text}
              </p>
            </div>
          )
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {textItems.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index + 1)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: currentSlide === index + 1 ? "black" : "gray",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroTextSlider;
