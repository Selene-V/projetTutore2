import React from "react";

const TagCloud = (props: { tagCloud: string[]; }) => {
    return (
        <div className="bg-white rounded-xl lg:w-1/2 xl:w-1/2">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Tag Cloud</p>
            </div>
            <div className="flex flex-wrap space-x-3 p-2 text-black">
                {
                    props.tagCloud.map((value: string, index: number) =>
                        <div key={index}
                             className="bg-green-100 px-2 py-1 rounded-md mt-2">
                            <p>{value}</p>
                        </div>)
                }
            </div>
        </div>);
}
export default TagCloud;
