import React from "react";

const TagClan = (props: { tag_clan: React.ReactNode[]; }) => {
    return (
        <div className="mt-3 lg:mt-8 xl:mt-8 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Tag Clan</p>
            </div>
            <div className="flex flex-wrap space-x-3 p-2 text-black">
                {
                    props.tag_clan.map((value: React.ReactNode, index) =>
                        <div key={index}
                             className="bg-green-100 px-2 py-1 rounded-md mt-2">
                            <p>{value}</p>
                        </div>)
                }
            </div>
        </div>);
}
export default TagClan;
