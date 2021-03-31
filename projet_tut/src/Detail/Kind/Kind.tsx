import React from "react";

const Kind = (props: { kind: string[]; }) => {
    return (
        <div className="bg-white rounded-xl w-2/12">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Kind</p>
            </div>
            <div className="p-2 text-black text-center">
                {props.kind.map((value, index) =>
                    <div key={index}
                         className="bg-green-100 px-2 py-1 rounded-md mt-2"
                    >{value}</div>)}
            </div>
        </div>
    );
}
export default Kind;
