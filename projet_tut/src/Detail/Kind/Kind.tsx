import React from "react";

const Kind = (props: { kind: string[]; }) => {
    return (
        <div className="bg-white rounded-xl w-4/12">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Kind</p>
            </div>
            <div className="m-1 p-2 text-justify text-black">
                {props.kind.map((value,index)=><div key={index}>{value}</div>)}
            </div>
        </div>
    );
}
export default Kind;
