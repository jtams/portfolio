import React, { useEffect, forwardRef } from "react";
import SlideShow from "./SlideShow.js";
import About from "./About";
import Contact from "./Contact";

const Body = forwardRef((props, ref) => {
    return (
        <div ref={ref} style={{ marginBottom: "100px", backgroundColor: "#252934", marginTop: "200px" }}>
            <About />
            <SlideShow />
            <Contact />
        </div>
    );
});
export default Body;
