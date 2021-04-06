import React from "react";

const SystemRequirement = (props: { system_requirement: string; }) => {
    return (<div className="mt-3 lg:mt-8 xl:mt-8  bg-white rounded-xl">
        <div className="bg-green-500 rounded-t-xl">
            <p className="ml-2">System Requirement</p>
        </div>
        <div className="m-1 p-2 text-black">
            {props.system_requirement}
        </div>
    </div>);
}
export default SystemRequirement;
