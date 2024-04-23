import React, { useState, useEffect } from "react";

const HeroTextSlider = () => {
  const textItems = [
    {
      id: 1,
      point: "Slide 1",
      text: "Reprehenderit eius laboriosam veniam modi id ullam mollitia nam neque, error asperiores ab fugit."
    },
    {
      id: 2,
      point: "Slide 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam."
    },
    {
      id: 3,
      point: "Slide 1",
      text: "Sapiente libero hic tempore quasi laborum cum dicta distinctio amet dolores, repellat."
    },
    {
      id: 4,
      point: "Slide 4",
      text: "Dolore delectus quam eaque perspiciatis beatae voluptate explicabo nam."
    },
    {
      id: 5,
      point: "Slide 5",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === textItems.length ? 1 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [textItems.length]);

  useEffect(() => {
    // Check if currentSlide reaches the duplicated last slide (last one of the copied array)
    if (currentSlide === textItems.length + 1) {
      // If reached, set currentSlide to the first slide
      setTimeout(() => {
        setCurrentSlide(1);
      }, 500); // Delay to ensure smooth transition
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
                <b>{item.point}:</b> {item.text}
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
