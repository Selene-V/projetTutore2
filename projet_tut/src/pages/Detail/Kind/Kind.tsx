import React from "react";

const Kind = (props: { kind: string[]; }) => {
    return (
        <div className="mt-3 lg:mt-0 xl:mt-0 bg-white rounded-xl lg:w-2/12 xl:w-2/12">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Kind</p>
            </div>
            <div className="p-2 text-black text-center">
                {props.kind.map((value: string, index: number) =>
                    <div key={index}
                         className="bg-green-100 px-2 py-1 rounded-md mt-2"
                    >{value}</div>)}
            </div>
        </div>
    );
}
export default Kind;
