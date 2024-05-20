import React, { useState, useEffect } from "react";

const HeroTextSlider = () => {

  const textItems = [
    {
      id: 1,
      point: "",
      text: "Medicy is the No. 1 healthcare management software in India. Our comprehensive software solutions are designed to fulfil the needs of Pharmacy Management, Diagnostic or Pathology Lab Management, Polyclinic Management, and Online Doctor Prescription Management. We offer effortless inventory management and OPD management software that can optimise your workflow and enhance patient care."
    },
    {
      id: 2,
      point: "Pharmacy Management",
      text: "Our Pharmacy Management software is dedicated to empowering your pharmacy management system efficiently. We provide an online pharmacy solution that can streamline customer and supplier billing, manage low stocks and overstocks, handle expiry reporting, and elevate your patient service standards."
    },
    {
      id: 3,
      point: "Diagnostic or Pathology Lab Management",
      text: "We present excellent Diagnostic or Pathology Lab Management software to revolutionise your lab operations. Experience our automated testing process, manage patient data, and deliver accurate analytics. We offer one of the best diagnostic billing software in India."
    },
    {
      id: 4,
      point: "Polyclinic Management",
      text: "Medicy is India’s best Polyclinic Management software system. It streamlines appointment scheduling, patient records management, billing, and report management efficiently. Enhance your polyclinic control and patient satisfaction with our tailored clinic management software in India."
    },
    {
      id: 5,
      point: "OPD Management Software",
      text: "We offer top-quality OPD Management Software for enhanced Outpatient Management (OPD Module) to healthcare providers. This software solution simplifies appointment scheduling, patient record management, and prescription processing. With seamless integration of the doctor chamber management software, you can focus on delivering quality care."
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
        {[{ ...textItems[textItems.length - 1], id: `${textItems[textItems.length - 1].id}-prev` },
        ...textItems,
        { ...textItems[0], id: `${textItems[0].id}-next` }
        ].map((item) => (
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
        ))}

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
