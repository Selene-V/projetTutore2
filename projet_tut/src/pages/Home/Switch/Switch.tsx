import React, {useState} from "react";

const Switch = (props: { switchButton: (arg0: boolean) => void; }) => {

    const [classCss, setClassCss] = useState(["bg-gray-500", "bg-yellow-600"]);

    function changeBoolean(bool: boolean) {
        props.switchButton(bool);
        if (bool) {
            setClassCss(["bg-yellow-600", "bg-gray-500"]);
        } else {
            setClassCss(["bg-gray-500", "bg-yellow-600"]);
        }
    }

    return (
        <div className="kk">
                <div className="flex flex-row-reverse rounded-xl">
                    <div className=" flex border-4 border-gray-400 rounded-xl">
                        <div className={classCss[0]+" border-4 border-gray-400 hover:bg-yellow-600 p-1"}>
                            <label className="inline-flex items-center">
                                <input name="test" type="radio"
                                       className=" test form-radio h-5 w-5 text-gray-600"
                                       />
                                <i className="fa fa-bars fa-3x" aria-hidden="true" onClick={() => changeBoolean(true)}/>

                            </label>
                        </div>
                        <div className={classCss[1]+" border-4 border-gray-400 hover:bg-yellow-600 p-1"}>
                            <label className="inline-flex items-center">
                                <input name="test" type="radio"
                                       className=" test form-radio h-5 w-5 text-red-600"
                                       />
                                <i className="fa fa-th fa-3x" aria-hidden="true" onClick={() => changeBoolean(false)}/>
                            </label>
                        </div>
                    </div>
            </div>
        </div>);
}
export default Switch;