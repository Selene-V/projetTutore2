import React from "react";

const Input = (props: { searchInfo: (arg0: any, arg1: string) => void; name: string; type: any; select: any }) => {
    return (
        <div className="p-1 text-left" role="none">
            <div className="my-auto">
                <p className="block px-1 py-2"
                   role="menuitem">{props.name}</p>
            </div>
            <div className="my-auto">
                {props.select === null ?
                    <label>
                        <input type={props.type}
                               className="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"
                               onChange={(event) => props.searchInfo(props.name, event.target.value)}/>

                    </label>
                    :
                    <select className="text-black w-full"
                            onChange={(event) => props.searchInfo(props.name, event.target.value)}>
                        {props.select.map((value:any, index:number) => <option value={value.return} key={index}>{value.content}</option>)}
                    </select>}
            </div>
        </div>)
}
export default Input;