import React, { useRef } from "react";
import Head from "./Head.js";
import Body from "./components/Body";

function App() {
    const bodyRef = useRef(null);

    return (
        <>
            <Head ref={bodyRef} />
            <Body ref={bodyRef} />
        </>
    );
}

export default App;
