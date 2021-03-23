import React from "react";

const Category = (props: { category: React.ReactNode; }) => {
    return (
        <div className="bg-white rounded-xl w-4/12">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Category</p>
            </div>
            <div className="m-1 p-2 text-justify text-black">
                <p>{props.category}</p>
            </div>
        </div>
    );
}
export default Category;
