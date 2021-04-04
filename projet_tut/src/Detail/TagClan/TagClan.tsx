import React from "react";

const TagClan = (props: { tag_clan: string[]; }) => {
    return (
        <div className="mt-8 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Tag Clan</p>
            </div>
            <div className="flex flex-wrap space-x-3 p-2 text-black">
                {
                    props.tag_clan.map((value: string, index: number) =>
                        <div key={index}
                             className="bg-green-100 px-2 py-1 rounded-md mt-2">
                            <p>{value}</p>
                        </div>)
                }
            </div>
        </div>);
}
export default TagClan;
