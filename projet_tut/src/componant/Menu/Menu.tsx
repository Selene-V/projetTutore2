import React from "react";

const Menu = (props: { setIsClickForDetail: any; isConected: boolean; setOnclickConection: any }) => {

    return (
        <nav className="bg-gray-800 w-full">
            <div className="mx-4">
                <div className="relative flex items-center justify-between h-16 w-full">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div
                            className="flex-shrink-0 flex items-center hover:bg-gray-700 transition duration-500 ease-in-out"
                            onClick={() => props.setIsClickForDetail(false)}>
                            <img className="block lg:hidden h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                            <img className="hidden lg:block h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                 alt="Workflow"/>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div>
                                <button className="bg-gray-500 p-2 flex text-sm rounded-lg text-lg font-medium text-gray-100
                                                   transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none delay-100 hover:bg-gray-100 hover:text-gray-500"
                                        aria-haspopup="true"
                                        onClick={()=>props.setOnclickConection(true)}>
                                    {props.isConected === false ? "Connection" : "Disconnection"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Menu;
