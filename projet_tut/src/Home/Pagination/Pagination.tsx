import React from "react";

const Pagination = () => {
    return (
        <div className="flex">
            <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px m-auto"
                aria-label="Pagination">
                <a href="#"
                   className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300  text-sm font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"/>
                    </svg>
                </a>
                <a href="#"
                   className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-lg font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                    1
                </a>
                <a href="#"
                   className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-lg font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                    2
                </a>
                <a href="#"
                   className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 text-lg font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                    3
                </a>
                <a href="#"
                   className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-lg font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"/>
                    </svg>
                </a>
            </nav>
        </div>
    );
}
export default Pagination;