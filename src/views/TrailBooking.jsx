import React from "react";
import freeTrail from '../../public/assets/img/freetrial.png';

export default function TrailBooking() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	// const [showImage, setShowImage] = useState(window.innerWidth > 767);

	// useEffect(() => {
	// 	window.addEventListener('resize', handleResize);
	// 	return function cleanup() {
	// 		window.removeEventListener('resize', handleResize);
	// 	};
	// }, []);

	// const handleResize = () => {
	// 	setWindowWidth(window.innerWidth);
	// 	setShowImage(window.innerWidth > 767);
	// };
  return (
    <section className="px-4">
      <div className="main-trail d-flex justify-content-around">
        {/* {showImage && ( */}
          <div className="col-2 trialImg"><img src={freeTrail} alt="" /></div>
        {/* )} */}
        <div className="sub-trail">
          <div className="trailhead">
            <div className="h1 sec-heading text-light">Book Your Free Trail</div>
          </div>
          <div className="trail-text">
            Talk to an expert today and learn how Medicy can help your business
          </div>
          <div className="trailButton">
            <a
              href=""
              className="btn btn-primary text-white fw-bold  btn-lg tbtn"
            >
              Get Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
