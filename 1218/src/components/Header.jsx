import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}
