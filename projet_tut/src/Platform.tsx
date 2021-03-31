import React from "react";

const Platform=(props: { platform: string; })=>{
    return(
        <div>
            {
                props.platform === "windows"
                    ?
                    <i className="fa fa-windows fa-2x" aria-hidden="true"/>
                    :
                    props.platform === "mac" ?
                        <i className="fa fa-apple fa-2x" aria-hidden="true"/>
                        :
                        <i className="fa fa-linux fa-2x" aria-hidden="true"/>
            }
        </div>
    )
}
export default Platform;