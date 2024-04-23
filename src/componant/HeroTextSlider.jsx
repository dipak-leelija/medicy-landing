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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === textItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [textItems.length]);

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
        {textItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 100%",
            }}
          >
            <p><b>{item.point}:</b> {item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroTextSlider;
