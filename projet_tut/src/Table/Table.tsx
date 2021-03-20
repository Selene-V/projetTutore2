import React from "react";

const Table = (props: {
    tableInfo: any[];
    setIsClickForDetail: any;
}) => {
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
                    onClick={()=>props.setIsClickForDetail(true)}
                    className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                    <td className="px-4 py-3">{value.name}</td>
                    <td className="px-4 py-3">{value.release_date}</td>
                    <td className="px-4 py-3">{value.score}</td>
                </tr>
            ))}
            </tbody>
        </table>);
}
export default Table;
