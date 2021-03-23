import React, {useState} from "react";


const Search = () => {
    const [classCss, setClassCss] = useState("transition ease-out duration-100 transform opacity-0 scale-95");
    const [changeZIndex, setChangeZIndex] = useState("h-0 overflow-hidden");

    function change() {
        if (classCss === "transition ease-out duration-100 transform opacity-0 scale-95") {
            setClassCss("transition ease-in duration-75 transform opacity-100 scale-100")
            setChangeZIndex("z-40")
        } else {
            setClassCss("transition ease-out duration-100 transform opacity-0 scale-95")
            setChangeZIndex("h-0 overflow-hidden")
        }
    }

    return (
        <div className={changeZIndex+" fixed w-4/12 relative inline-block min-w-min h-full text-black"}>
            <div>
                <button type="button"
                        onClick={() => change()}
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
                className={classCss + " w-full text-sm Forigin-top-right absolute right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"}
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
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
                <div className="p-1 flex justify-center flex-wrap" role="none">
                    <div className="my-auto">
                        <p className="block px-4 py-2"
                           role="menuitem">positive reviews</p>
                    </div>
                    <div className="my-auto">
                        <label>
                            <input type="text" placeholder="10%"
                                   className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Search;