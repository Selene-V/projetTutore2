import React from "react";

const LongDescription=(props: { long_description: React.ReactNode; })=>{
    return(
        <div className="mt-8 bg-white rounded-xl w-12/12">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Long description</p>
            </div>
            <div className=" text-base m-1 p-2 text-justify text-black">
                <p>{props.long_description}</p>
            </div>
        </div>
    );
}
export default LongDescription;
