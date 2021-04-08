import React from "react";

const Menu = (props: { isConected: any; setOnclickConection: any; setIsConected: any }) => {

    return (
        <nav className="bg-gray-800 w-full">
            <div className="mx-4">
                <div className="relative flex items-center justify-end h-16 w-full">
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div>
                                {props.isConected === undefined ?
                                    <button className="bg-gray-500 p-2 flex text-sm rounded-lg text-lg font-medium text-gray-100
                                                   transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none delay-100 hover:bg-gray-100 hover:text-gray-500"
                                            aria-haspopup="true"
                                            onClick={() => props.setOnclickConection(true)}>
                                        Sign in
                                    </button>
                                    :
                                    <button className="bg-gray-500 p-2 flex text-sm rounded-lg text-lg font-medium text-gray-100
                                                   transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none delay-100 hover:bg-gray-100 hover:text-gray-500"
                                            aria-haspopup="true"
                                            onClick={() => {
                                                props.setOnclickConection(true)
                                                props.setIsConected(undefined)
                                                localStorage.removeItem('jwt')
                                            }
                                            }>
                                        Sign out
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Menu;
