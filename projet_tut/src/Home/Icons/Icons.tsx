import React from "react";

const Icons = (props: { 
    tableInfo: any[];
    setIsClickForDetail: any; 
    isClickForDetail: any;
}) => {

    return (
        <div className="flex flex-wrap mx-6 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-12 xl:-mx-12">
            {props.tableInfo.map((value, index) => (
                <div key={"case-" + (value.id).toString()}
                    onClick={()=>props.setIsClickForDetail(value.id)}
                    className="bg-white rounded-lg grid grid-cols-1  my-6 px-6 w-1/4 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4  transform hover:scale-105 transition ease-in-out duration-700">
                    <img
                        src={value.image.headerImage}
                        className="p-1 h-full w-full"
                        alt={value.name}/>
                    <div className="font-semibold text-gray-700">{value.name}</div>
                </div>

            ))}
        </div>
    );
}
export default Icons;