import React from "react";
import Loading from "../Loading/Loading";
import Platform from "../Platform";

const Table = (props: {
    tableInfo: any[];
    setIsClickForDetail: any;
    isClickForDetail: any;
}) => {

    console.log(props.tableInfo);

    if (props.tableInfo !== undefined) {
        return (
            <div>
                {props.tableInfo.map((value, index) =>
                    <div key={index} className="bg-white rounded-lg flex space-x-2 w-11/12 mx-auto my-2 h-max">
                        <div className="relative flex-none w-4/12">
                            <img className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                                 src={value.image.headerImage}/>
                        </div>
                        <div className="text-left w-full px-5 py-3 space-y-4 w-6/12">
                            <div className="flex justify-between">
                                <div>{value.name}</div>
                                <div className="font-semibold text-gray-700">${value.price}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="space-y-2 w-2/5 text-left">
                                    <div className="flex space-x-3 text-base">
                                        <div className="w-1/3">{value.releaseDate}</div>
                                        <div
                                            className="2/3">{value.developer.replace(';', ' and ')}</div>
                                    </div>
                                    <div className="text-lg">Positive
                                        Review: {Math.round((parseInt(value.positiveRatings) / (parseInt(value.positiveRatings) + parseInt(value.negativeRatings))) * 100)}%
                                    </div>
                                    <div
                                        className="text-2xl flex space-x-2">{value.platforms.split(";").map((result: string, secondIndex: number) =>
                                        <div key={secondIndex}>
                                            <Platform platform={result}/>
                                        </div>
                                    )}</div>
                                </div>
                                <div className="text-base w-3/5">
                                    <div className="text-justify">
                                        <p>
                                            {value.description.shortDescription}
                                        </p>
                                        <button
                                            onClick={() => props.setIsClickForDetail(value.id)}
                                            className="transition duration-500 float-right hover:bg-green-200 px-5 py-2 rounded-lg border-2 hover:border-opacity-0 border-gray-400">Look
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>);
    }

    return (<Loading/>)

    /*
    return (
        <table className="rounded-t-lg m-4 w-11/12 mx-auto bg-gray-500 text-center">
            <thead>
            <tr className="text-left border-b-2 border-gray-300 text-center text-gray-100">
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Score</th>
            </tr>
            </thead>
            <tbody>
            {props.tableInfo.map((value, index) => (
                <tr key={index}
                    onClick={() => props.setIsClickForDetail(value._id)}
                    className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                    <td className="px-4 py-3">{value.name}</td>
                    <td className="px-4 py-3">{value.release_date}</td>
                    <td className="px-4 py-3">{Math.round((parseInt(value.positive_ratings) / (parseInt(value.positive_ratings) + parseInt(value.negative_ratings))) * 100)}</td>
                </tr>
            ))}
            </tbody>
        </table>);*/
}
export default Table;
