import React from "react";

const Table = (props: { related_games: any[]; }) => {
    return (
        <table className="rounded-t-lg m-4 w-11/12 mx-auto bg-gray-500 text-center">

            {props.related_games.map((value,index) => (
                <tr key={index} className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                    <td className="px-4 py-3">{value.title}</td>
                    <td className="px-4 py-3">{value.release_date}</td>
                    <td className="px-4 py-3">{value.score}</td>
                </tr>
            ))}
        </table>);
}
export default Table;
