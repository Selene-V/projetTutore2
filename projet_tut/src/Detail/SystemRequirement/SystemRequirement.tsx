import React from "react";

const SystemRequirement = (props: { system_requirement: React.ReactNode[]; }) => {
    return (<div className="bg-white rounded-xl w-4/12">
        <div className="bg-green-500 rounded-t-xl">
            <p className="ml-2">System Requirement</p>
        </div>
        <div className="m-1 p-2 text-black">
            <ul>
                {props.system_requirement.map((value: React.ReactNode) =>
                    <li>{value}</li>)}
            </ul>
        </div>
    </div>);
}
export default SystemRequirement;
