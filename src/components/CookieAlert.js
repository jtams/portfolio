import React from "react";

function CookieAlert() {
    return (
        <div
            style={{
                width: "100%",
                height: "80px",
                backgroundColor: "#2e344d",
                position: "fixed",
                bottom: "0px",
                color: "white",
                textAlign: "center",
            }}>
            <div style={{ display: "flex", margin: "auto", width: "40%", justifyContent: "space-around" }}>
                <p style={{ lineHeight: "55px", verticalAlign: "middle" }}>This site uses cookies.</p>
                <div style={{ display: "flex" }}>
                    <button style={{ height: "50px", width: "100px" }}>Allow</button>
                    <button style={{ height: "50px", width: "100px" }}>Deny</button>
                    <button style={{ height: "50px", width: "100px" }}>More Info</button>
                </div>
            </div>
        </div>
    );
}

export default CookieAlert;
