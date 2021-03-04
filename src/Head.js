import React, { useEffect, forwardRef } from "react";
import Particles from "react-particles-js";
import Button from "@material-ui/core/Button";
import "./Head.css";

const Home = forwardRef((props, ref) => {
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
    if (window.innerWidth > 1000) {
        particleCount = 100;
    } else {
        particleCount = window.innerWidth / 20;
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
                                mode: "attract",
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
                    <p>Full Stack Web Developer</p>
                    <Button
                        style={{ width: "100%", height: "60px" }}
                        variant="contained"
                        onClick={() => {
                            ref.current.scrollIntoView({ behavior: "smooth" });
                        }}>
                        View My Work
                    </Button>
                </div>
            </div>
        </div>
    );
});
export default Home;
