import React, {useState} from "react";
import Switch from "./Switch/Switch";
import Table from "../Table/Table";

const Home = () => {
    const [switchButton, setSwitchButton] = useState(false);


    const info = [
        {
            id: 1,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 2,
            name: "fffortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 3,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 4,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 5,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 6,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 7,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 8,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
    ];
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-1/12"/>
                <div className="w-10/12">
                    <div className="flex mx-3 justify-between mt-5">
                        <div className="fixed w-3/12 relative inline-block min-w-min h-full z-40 text-black">
                            <div>
                                <button type="button"
                                        className="inline-flex justify-center
                     w-full rounded-md border border-gray-300
                      shadow-sm px-4 py-2 bg-white font-medium text-2xl
                       hover:bg-gray-50 focus:outline-none
                        focus:ring-2 focus:ring-offset-2
                         focus:ring-offset-gray-100 focus:ring-indigo-500"
                                        id="options-menu" aria-expanded="true" aria-haspopup="true">
                                    Search
                                    <svg className="-mr-1 ml-2 h-5 w-5 my-auto" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>

                            <div
                                className="w-full text-sm Forigin-top-right absolute right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Game Name</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>

                                    </div>

                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2 "
                                           role="menuitem">Release date</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="date" placeholder="date...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Developer</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Publisher</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Plateforme</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Minimum age</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="number" placeholder="Age...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Categories</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Kind</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">User tag</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="text...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-1 flex justify-left flex-wrap" role="none">
                                    <div className="my-auto">
                                        <p className="block px-4 py-2"
                                           role="menuitem">Percentage of positive reviews</p>
                                    </div>
                                    <div className="my-auto">
                                        <label>
                                            <input type="text" placeholder="123...."
                                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Switch switchButton={setSwitchButton}/>
                    </div>
                    <div className="w-auto bg-red-500">
                        {
                            !switchButton ?
                                <div className="z-30 mt-20 place-items-auto  rounded-3xl">
                                    <div
                                        className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-12 xl:-mx-12">

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://www.usinenouvelle.com/mediatheque/9/8/2/000847289_896x598_c.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://www.usinenouvelle.com/mediatheque/9/8/2/000847289_896x598_c.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://www.usinenouvelle.com/mediatheque/9/8/2/000847289_896x598_c.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>
                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>

                                        <div
                                            className="my-6 px-6 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-12 lg:px-12 lg:w-1/4 xl:my-12 xl:px-12 xl:w-1/4">
                                            <img
                                                src="https://www.usinenouvelle.com/mediatheque/9/8/2/000847289_896x598_c.jpg"
                                                className="p-3 h-full w-full transform hover:scale-110 transition ease-in-out duration-700"
                                                alt="test"/>
                                        </div>
                                    </div>
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
                                </div>
                                :
                                <div className="z-30 mt-20 place-items-auto rounded-3xl">
                                    <div>
                                        <div className="w-max py-10">
                                            <Table tableInfo={info}/>
                                        </div>
                                        <div className="flex">
                                            <nav
                                                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px m-auto"
                                                aria-label="Pagination">
                                                <a href="#"
                                                   className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300  text-sm font-medium bg-gray-500 hover:bg-gray-100 hover:text-gray-500 text-gray-100">
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 20 20"
                                                         fill="currentColor">

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
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="w-1/12"/>
            </div>
        </div>
    );
}
export default Home;
