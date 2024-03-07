import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import chooseImg from '/assets/img/chooseus.png';

export default function Chooseus() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [showImage, setShowImage] = React.useState(window.innerWidth > 767);

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return function cleanup() {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setShowImage(window.innerWidth > 767); // Update showImage state based on window width
    };

    return (
        <section>
            <div className="wby-choose-us">
                <div className="main-div">
                    <div className="frame mt-4">
                        <div className="why-choose-us-wrapper">
                            <h1 className="why-choose-us">Why Choose Us?</h1>
                        </div>
                    </div>
                    <div className="frame-parent ">
                        {!showImage && (
                            <div className="frame1">
                                <div className="frame2">
                                    <img
                                        className="removebg-preview-1-icon"
                                        alt=""
                                        src={chooseImg}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="frame3">
                            <div className="frame4">
                                <div className="frame5">
                                    <div className="cloud-based-software-wrapper">
                                        {/* <div className="cloud-based-software">
                                        Cloud Based Software
                                    </div> */}
                                        <h4> Cloud Based Software</h4>
                                    </div>
                                    <div className="be-always-connected-with-your-wrapper">
                                        <div className="be-always-connected">
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame6">
                                <div className="frame7">
                                    <div className="cloud-based-software-wrapper">
                                        {/* <div className="cloud-based-software">
                                        Cloud Based Software
                                    </div> */}
                                        <h4> Cloud Based Software</h4>
                                    </div>
                                    <div className="be-always-connected-with-your-wrapper">
                                        <div className="be-always-connected">
                                            Be Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showImage && (
                            <div className="frame1">
                                <div className="frame2">
                                    <img
                                        className="removebg-preview-1-icon"
                                        alt=""
                                        src={chooseImg}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="frame8">
                            <div className="frame9">
                                <div className="frame10">
                                    <div className="cloud-based-software-wrapper">
                                        {/* <div className="cloud-based-software2">
                                        Cloud Based Software
                                    </div> */}
                                        <h4> Cloud Based Software</h4>
                                    </div>
                                    <div className="be-always-connected-with-your-frame">
                                        <div className="be-always-connected">
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame12">
                                <div className="frame13">
                                    <div className="cloud-based-software-wrapper">
                                        {/* <div className="cloud-based-software3">
                                        Cloud Based Software
                                    </div> */}
                                        <h4> Cloud Based Software</h4>
                                    </div>
                                    <div className="be-always-connected-with-your-frame">
                                        <div className="be-always-connected">
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                            Be always connected with your Pharmacy with cloud
                                            technology. Monitor your Medical store from anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
