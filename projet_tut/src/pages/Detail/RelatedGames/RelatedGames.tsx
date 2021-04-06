import React from "react";
import Table from "../../../componant/Table/Table";

const RelatedGames = (props: {
    relatedGames: any[];
    setIsClickForDetail: any;
    isClickForDetail: string;
}) => {
    return (
        <div className="mt-4 bg-white rounded-xl">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Related Games</p>
            </div>
            <div className="mx-4 text-black">
                <div className="place-items-auto  rounded-3xl">
                    <div className="my-2 pb-4">
                        <div className="flex overflow-y-scroll max-h-96">
                            <Table tableInfo={props.relatedGames}
                                   setIsClickForDetail={props.setIsClickForDetail}
                                   isClickForDetail={props.isClickForDetail}
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RelatedGames;