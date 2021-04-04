import React from "react";

const Icons = (props: {
    tableInfo: any[];
    setIsClickForDetail: any;
    isClickForDetail: string;
}) => {
    return (
        <div className="text-sm flex flex-wrap -mx-6 overflow-hidden mt-2 lg:-mx-12 lg:text-xl xl:-mx-12 xl:text-xl">
            {props.tableInfo.map((value:any) => (
                    <div key={"case-" + (value.id).toString()}
                         onClick={() => props.setIsClickForDetail(value.id)}
                         className="my-2 px-6 w-2/5 overflow-hidden sm:my-4 sm:px-2 sm:w-1/2 md:my-4 md:px-2 md:w-1/2 lg:my-10 lg:px-6 lg:w-1/4 xl:my-10 xl:px-6 xl:w-1/4
                         transform hover:scale-110 transition ease-in-out duration-700">
                        <div className="text-black bg-white h-full rounded-md">
                            <div>
                                <img
                                    src={(value.image.headerImage)}
                                    className="p-3 h-2/3 w-full"
                                    alt={value.name}/>
                            </div>
                            <div><p className="py-1">{value.name}</p></div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
export default Icons;