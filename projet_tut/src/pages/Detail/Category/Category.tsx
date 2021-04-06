import React from "react";

const Category = (props: { categories: string[]; }) => {
    return (
        <div className="mt-3 lg:mt-0 xl:mt-0 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Categories</p>
            </div>
            <div className="flex flex-wrap space-x-2 p-2 text-black">
                {props.categories.map((value: string, index: number) =>
                    <div key={index}
                         className="bg-green-100 rounded-md mt-2"
                    >{value}</div>)}
            </div>
        </div>
    );
}
export default Category;
