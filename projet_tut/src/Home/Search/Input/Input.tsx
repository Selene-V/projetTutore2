import React, {useEffect, useState} from "react";

const Input = (props: { setSearchInfo: any; searchInfo: any; name: any; type: any; select: any; contentTable: boolean; }) => {

    const [saveContent, setSaveContent] = useState("");

    function deleteInTable(index: number) {
        let table = {...props.searchInfo}
        delete table[props.name][index]
        props.setSearchInfo(table);
    }

    function addInTable(id: string, value: string, addInTable: boolean) {
        // bug if you have add identique value 2 times
        if(value!==""){
            let table = {...props.searchInfo};
            if (addInTable) {
                if (table[id] === undefined)
                    table[id] = [];
                table[id].push(value);
            } else {
                table[id] = value;
            }
            setSaveContent("");
            props.setSearchInfo(table);
        }
    }

    console.log(props.searchInfo)
    return (
        <div className="p-1 text-left" role="none">
            <div className="my-auto">
                <p className="block px-1 py-2"
                   role="menuitem">{props.name}</p>
            </div>
            <div className="my-auto">
                {!props.contentTable ?
                    <div>
                        {props.select === null ?
                            <label>
                                <input type={props.type}
                                       className="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"
                                       onChange={(event) => addInTable(props.name, event.target.value, false)}/>

                            </label>
                            :
                            <select className="text-black w-full"
                                    onChange={(event) => addInTable(props.name, event.target.value, false)}>
                                {props.select.map((value: any, index: number) => <option value={value.return}
                                                                                         key={index}>{value.content}</option>)}
                            </select>
                        }
                    </div>
                    :
                    <div>
                        <label>
                            <input type={props.type}
                                   className="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"
                                   onChange={(event) => setSaveContent(event.target.value)}/>
                            <button className="bg-gray-200 hover:bg-green-400 px-2 py-1 rounded-lg"
                                    onClick={() => addInTable(props.name, saveContent, true)}>Send
                            </button>
                        </label>
                        {
                            props.searchInfo[props.name] !== undefined ?
                                <div>{props.searchInfo[props.name].map((value: string, index: number) =>
                                    <div className="bg-gray-100 rounded-lg duration-300 hover:bg-green-200" key={value}>
                                        <button className="transform hover:-rotate-90 duration-300"
                                                onClick={() => deleteInTable(index)}>
                                            <i className="fa fa-times" aria-hidden="true"/>
                                        </button>
                                        {value}</div>)}
                                </div>
                                :
                                ""
                        }
                    </div>
                }
            </div>
        </div>)
}
export default Input;