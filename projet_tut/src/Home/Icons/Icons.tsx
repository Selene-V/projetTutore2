import React from "react";

const Icons = (props: { 
    tableInfo: any[];
    imageInfo:any;
    setIsClickForDetail: any; 
    isClickForDetail: any;
}) => {

    console.log(props.tableInfo)
    return (
        <div className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-12 xl:-mx-12">
            {props.tableInfo.map((value, index) => (
                <div key={"case-" + (value._id).toString()}
                     className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                    <img
                        src={props.imageInfo[index]._source.data.header_image}
                        onClick={()=>props.setIsClickForDetail(value._id)}
                        className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                        alt={value._source.data.header_image}/>
                </div>

            ))}
        </div>
    );
}
export default Icons;