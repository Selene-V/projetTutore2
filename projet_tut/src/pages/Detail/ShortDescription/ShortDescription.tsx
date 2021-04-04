import React from "react";

const ShortDescription = (props: { short_description: string; }) => {

    return (
        <div className="mt-3 lg:mt-0 xl:mt-0 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Short Description</p>
            </div>
            <div className="m-1 p-2 text-justify text-black">
                <p>{props.short_description}</p>
            </div>
        </div>);
}
export default ShortDescription;
