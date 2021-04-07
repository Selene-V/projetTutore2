import React from "react";
import Loading from "../Loading/Loading";
import Platform from "../../Platform";

const Table = (props: {
    tableInfo: any[];
    setIsClickForDetail: any;
    isClickForDetail: string;
    choiceDisign:boolean;
}) => {
    console.log(props.tableInfo[0])

    if (props.tableInfo !== undefined) {


        if(props.choiceDisign){
            return (
                <div>
                    {props.tableInfo.map((value, index) =>
                        <div key={index} className="bg-white rounded-lg xl:flex lg:flex lg:space-x-2 xl:space-x-2 w-11/12 mx-auto my-2 h-max">
                            <div className="lg:relative lg:flex-none xl:w-4/12 lg:w-4/12">
                                <img className="xl:absolute lg:absolute w-full h-full inset-0 xl:object-cover lg:object-cover"
                                     src={value.image.headerImage} alt={value.name}/>
                            </div>
                            <div className="text-left w-full px-5 py-3 space-y-4">
                                <div className="justify-center text-center lg:flex lg:justify-between xl:flex xl:justify-between">
                                    <div>{value.name}</div>
                                </div>
                                <div className="lg:flex lg:justify-between xl:flex xl:justify-between">
                                    <div className="space-y-2 lg:w-2/5 xl:w-2/5 text-left">
                                        <div className="flex space-x-3 text-base">
                                            <div className="w-1/3">{value.releaseDate}</div>
                                            <div
                                                className="2/3">{value.developer}</div>
                                        </div>
                                        <div className="text-lg text-center lg:text-left xl:text-left">Positive
                                            Review: {Math.round((parseInt(value.positiveRatings) / (parseInt(value.positiveRatings) + parseInt(value.negativeRatings))) * 100)}%
                                        </div>
                                        <div
                                            className="justify-center lg:jusitify-start xl:justify-start text-2xl flex space-x-2">{value.platforms.map((result: string, secondIndex: number) =>
                                            <div key={secondIndex}>
                                                <Platform platform={result}/>
                                            </div>
                                        )}</div>
                                    </div>
                                    <div className="text-sm lg:text-base xl:text-base lg:w-3/5 xl:w-3/5">
                                        <div className="text-justify">
                                            <p>
                                                {value.description.shortDescription}
                                            </p>
                                            <button
                                                onClick={() => props.setIsClickForDetail(value.id)}
                                                className="transition duration-500 xl:float-right lg:float-right hover:bg-green-200 px-5 py-2 rounded-lg border-2 hover:border-opacity-0 border-gray-400">Look
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>);
        }
        return (
            <table className="rounded-t-lg m-4 w-11/12 mx-auto bg-gray-500 text-center">
                <thead>
                <tr className="text-left border-b-2 border-gray-300 text-center text-gray-100">
                    <th className="px-2 py-3">Nom</th>
                    <th className="px-2 py-3">Date</th>
                    <th className="px-2 py-3">Score</th>
                </tr>
                </thead>
                <tbody>
                {props.tableInfo.map((value, index) => (
                    <tr key={index}
                        onClick={() => props.setIsClickForDetail(value.id)}
                        className={
                            index & 1?"bg-gray-200 border-b border-gray-200 hover:bg-green-400 hover:text-gray-50 transition ease-in-out duration-150"
                            :
                            "bg-gray-300 border-b border-gray-200 hover:bg-green-400 hover:text-gray-50 transition ease-in-out duration-150"
                        }>
                        <td className="w-1/2">{value.name}</td>
                        <td>{value.releaseDate}</td>
                        <td>{Math.round((parseInt(value.positiveRatings) / (parseInt(value.positiveRatings) + parseInt(value.negativeRatings))) * 100)}</td>
                    </tr>
                ))}
                </tbody>
            </table>);
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
