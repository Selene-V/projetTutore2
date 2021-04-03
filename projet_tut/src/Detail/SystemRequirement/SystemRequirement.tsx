import React from "react";

const SystemRequirement = (props: { system_requirement: React.ReactNode[]; }) => {
    return (<div className="bg-white rounded-xl lg:w-4/12 xl:w-4/12">
        <div className="bg-green-500 rounded-t-xl">
            <p className="ml-2">System Requirement</p>
        </div>
        <div className="m-1 p-2 text-black">
            {props.system_requirement}
        </div>
    </div>);
}
export default SystemRequirement;
