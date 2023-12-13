import React, { useState } from "react";
import "./Body.css";

function Lightbulb({ light }) {
    return (
        <>
            {light === "ON" ? (
                <div style={{ backgroundColor: "yellow" }}>ON</div>
            ) : (
                <div style={{ backgroundColor: "blueviolet" }}>OFF</div>
            )}
        </>
    );
}
function OffLightBulb(params) {
    return <div style={{ backgroundColor: "blueviolet" }}>OFF</div>;
}

export default function Body() {
    const [light, setLight] = useState("OFF");
    console.log(light);
    return (
        <div className="body">
            <Lightbulb light={light} />
            <OffLightBulb />
            <button
                onClick={() => {
                    setLight("ON");
                }}
            >
                켜기
            </button>
            <button
                onClick={() => {
                    setLight("OFF");
                }}
            >
                끄기
            </button>
        </div>
    );
}
