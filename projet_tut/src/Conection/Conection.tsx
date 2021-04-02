import React from "react";

const Connection = (props: { setOnclickConection: any; }) => {
    return (
        <div className="flex">
            <div className=" px-6 w-full
            xl:w-5/12 min-h-screen flex items-center justify-center py-12 px-4 block
            lg:w-5/12 block
            ">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto hover:bg-gray-700 transition duration-500 ease-in-out"
                             onClick={()=>props.setOnclickConection(false)}
                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
                            Sign in to your account
                        </h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <input id="email-address" name="email" type="email" autoComplete="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Username"/>
                            </div>
                            <div>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <img className="hidden
            xl:block w-7/12 object-cover h-screen 
            lg:block w-7/12 h-screen
            " src="/videoGames.jpg" alt="img video"/>
        </div>
    );
}
export default Connection;