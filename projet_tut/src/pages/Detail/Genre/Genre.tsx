import React from "react";

const Genre = (props: { genre: string[]; }) => {
    return (
        <div className="mt-3 lg:mt-0 xl:mt-0 bg-white rounded-xl xl:h-1/2 lg:h-1/2 overflow-x-auto">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Genres</p>
            </div>
            <div className="flex flex-wrap space-x-3 p-2 text-black">
                {props.genre.map((value: string, index: number) =>
                    <div key={index}
                         className="bg-green-100 px-2 py-1 rounded-md mt-2"
                    >{value}</div>)}
            </div>
        </div>
    );
}
export default Genre;
