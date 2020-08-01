import React, { useEffect } from "react";
import Particles from "react-particles-js";
import "./Head.css";

function Home() {
    const [titleSlide, setTitleSlide] = React.useState("name-start-animation-begin");
    const [titleSlide2, setTitleSlide2] = React.useState("name-start-animation-begin");

    useEffect(() => {
        document.title = "Joseph Tams";
        setTimeout(function () {
            setTitleSlide("name-start-animation");
            setTimeout(function () {
                setTitleSlide2("name-start-animation");
            }, 130);
        }, 0);
    });

    var particleCount;
    if (window.innerWidth > 800) {
        particleCount = 100;
    } else {
        particleCount = window.innerWidth / 14;
    }

    return (
        <div className="header">
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#D9B08C",
                                blur: 5,
                            },
                        },
                        number: {
                            value: particleCount,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "20%",
                }}
            />
            <div className="header-container">
                <div className="name">
                    <h1 className={titleSlide}>Joseph</h1>
                    <h1 className={titleSlide2}>Tams</h1>
                </div>
                <div className="header-info">
                    <p>BLah blah blah</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
