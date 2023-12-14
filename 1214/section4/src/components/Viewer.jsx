import React, { useState } from "react";

export default function viewer(props) {
    return (
        <div>
            <div>현재카운트 :</div>
            <h1>{props.count}</h1>
        </div>
    );
}
