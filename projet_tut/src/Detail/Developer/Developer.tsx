import React from "react";

const Developer = (props: { developer: string; }) => {

    return (
        <div className="mt-3 lg:mt-8 xl:mt-8 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Developer</p>
            </div>
            <div className="m-1 p-2 text-black">
                <p>{props.developer}</p>
            </div>
        </div>
    );
}
export default Developer;
