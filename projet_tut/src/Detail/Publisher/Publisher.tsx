import Developer from "../Developer/Developer";
import React from "react";

const Publicher = (props: { publisher: React.ReactNode; }) => {
    return (
        <div className="mt-8 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Publisher</p>
            </div>
            <div className="m-1 p-2 text-black">
                <p>{props.publisher}</p>
            </div>
        </div>
    );
}
export default Publicher;
