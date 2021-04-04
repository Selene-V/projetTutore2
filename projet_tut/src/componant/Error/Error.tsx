import Error404 from "./Error404/Error404";
import Error500 from "./Error500/Error500";
import React from "react";

const Error = (props: { error: number; }) => {
    switch (props.error) {
        case 404:
            return (<Error404/>);
        case 500:
            return (<Error500/>);
        default:
            return (
                <div className="justify-center self-center justify-self-center my-auto">
                    <p>Error</p>
                    <p>An error has occurred</p>
                </div>
            );
    }
}
export default Error;