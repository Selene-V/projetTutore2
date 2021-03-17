import React from "react";

const Switch = (props: { switchButton: (arg0: boolean) => void; }) => {
    function changeBoolean(bool: boolean){
        props.switchButton(bool);
        console.log(bool);
        if(bool){
            //forme  tableau en 3 colone
        }
        else{
            //forme vignette
        }
    }
    return (
        <div className="kk">
            <div>
                <div className="flex flex-row-reverse rounded-xl">
                    <div className=" flex border-4 border-gray-400 rounded-xl">
                        <div className="border-4 border-gray-400 bg-gray-500 hover:bg-yellow-600 p-1">
                            <label className="inline-flex items-center">
                                <input name="test" type="radio"
                                       className=" test form-radio h-5 w-5 text-gray-600"
                                       checked/>
                                <i className="fa fa-bars fa-3x" aria-hidden="true" onClick={()=>changeBoolean(true)}/>

                            </label>
                        </div>
                        <div className="border-4 border-gray-400 bg-gray-500 hover:bg-yellow-600 p-1">
                            <label className="inline-flex items-center">
                                <input name="test" type="radio"
                                       className=" test form-radio h-5 w-5 text-red-600"
                                       checked/>
                                <i className="fa fa-th fa-3x" aria-hidden="true" onClick={()=>changeBoolean(false)}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Switch;