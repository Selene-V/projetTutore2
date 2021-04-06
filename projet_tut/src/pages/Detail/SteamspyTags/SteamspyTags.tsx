import React from "react";

const SteamspyTags = (props: { steamspy_tags: string[]; }) => {
    return (
        <div className="bg-white rounded-xl lg:w-1/3 xl:w-1/3">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Steamspy Tags</p>
            </div>
            <div className="flex flex-wrap space-x-3 p-2 text-black">
                {
                    props.steamspy_tags.map((value: string, index: number) =>
                        <div key={index}
                             className="bg-green-100 px-2 py-1 rounded-md mt-2">
                            <p>{value}</p>
                        </div>)
                }
            </div>
        </div>);
}
export default SteamspyTags;
