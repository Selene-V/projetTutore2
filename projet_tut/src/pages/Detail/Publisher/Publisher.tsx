import React from "react";

const Publicher = (props: { publisher: string[]; }) => {
    return (
        <div className="mt-3 lg:mt-8 xl:mt-8 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Publishers</p>
            </div>
            <div className="m-1 p-2 text-black">
                {props.publisher.map((value: string, index: number) => <div key={index}>{value}</div>)}
            </div>
        </div>
    );
}
export default Publicher;
