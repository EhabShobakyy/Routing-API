import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return <div>
        <h1>404, Not Found</h1>
        <p>No Match for {props.location.pathname }</p>
    </div>
}