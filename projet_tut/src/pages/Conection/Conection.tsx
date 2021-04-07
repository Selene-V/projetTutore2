import React, {useState} from "react";
import Input from "../../componant/Input/Input";

const Connection = (props: { setOnclickConection: any; setOnclickRegister: any }) => {

    const [takeInfo,setTakeInfo]=useState([]);
    return (
        <div className="flex bg-white">
            <div className=" px-6 w-full
            xl:w-5/12 min-h-screen flex items-center justify-center py-12 px-4 block
            lg:w-5/12 block
            ">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                            Sign in
                        </h2>

                    </div>
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm -space-y-px text-black text-lg">
                            <Input setTable={setTakeInfo} table={takeInfo} name={"Username"} type={"text"} select={null} contentTable={false}/>
                            <Input setTable={setTakeInfo} table={takeInfo} name={"Password"} type={"text"} select={null} contentTable={false}/>
                        </div>

                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => {
                                props.setOnclickRegister(true);
                                props.setOnclickConection(false);
                            }}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                        <button
                            onClick={() => props.setOnclickConection(false)}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <img className="hidden my-auto
            xl:block w-7/12 object-cover h-screen
            lg:block w-7/12 h-screen
            " src="/videoGames.jpg" alt="img video"/>
        </div>
    );
}
export default Connection;