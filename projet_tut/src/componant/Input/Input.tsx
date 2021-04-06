import React, {useEffect, useState} from "react";

const Input = (props: { setTable: any; table: any; name: string; type: string | undefined; select: { content: any, return: any }[] | null; contentTable: boolean; }) => {

    const [saveContent, setSaveContent] = useState("");
    const [stringSearch, setStringSearch] = useState("");

    function deleteInTable(index: number) {
        let table = {...props.table}
        table[props.name].splice(index, 1)
        props.setTable(table);
    }

    function addInTable(id: string, value: string, addInTable: boolean) {
        if (value !== "") {
            let table = {...props.table};
            if (addInTable) {
                if (table[id] === undefined) {
                    table[id] = [];
                }

                let condition = false;
                table[id].map((res: string) => {
                    if (res === value) {
                        condition = true
                    }
                })
                if (!condition) {
                    table[id].push(value);
                    setSaveContent("");
                }
            } else {
                table[id] = value;
            }
            props.setTable(table);
        }
    }

    async function fuzzyAndAutocomplite() {
        let choice = "";
        switch (true) {
            case props.name === "Game Name": {
                choice = "name"
            }
                break;
            case props.name === "Publisher": {
                choice = "publisher"
            }
                break;
            case props.name === "Developer": {
                choice = "developer"
            }
                break;
            case props.name === "Steamspy Tags": {
                choice = "steamspy_tags"
            }
                break;
            default: {
                return "Not Conforme"
            }
        }
        return await fetch("http://projettutore2back/fuzzySearch",
            {
                method: 'post',
                body: choice + "=" + saveContent
            })
            .then(reponse => {
                if (reponse.status === 200) {
                    return reponse.json()
                } else {
                    return reponse.status
                }
            })
            .then(function (json) {
                return json;
            });

    }

    useEffect(() => {
        if (saveContent.length > 2) {
            fuzzyAndAutocomplite().then(
                (x: any) => {
                    if (x !== "Not Conforme") {
                        if (typeof x === 'number') {
                            //on ne fait rien
                        } else {
                            setStringSearch(x.map(
                                (value: string) =>
                                    (
                                        `<div>${value}</div>`
                                    )
                            ).join(""))
                            const te = document.getElementById(props.name) as HTMLElement;
                            if (te !== null)
                                te.innerHTML = stringSearch;
                        }
                    }
                }
            );
        } else {
            const te = document.getElementById(props.name) as HTMLElement;
            if (te !== null)
                te.innerHTML = "";
        }

    }, [saveContent])

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
                            <div
                                onBlur={() => {
                                    let div = document.getElementById(props.name)
                                    if (div !== null) {
                                        div.hidden = true
                                    }
                                }
                                }
                                onFocus={() => {
                                    let div = document.getElementById(props.name)
                                    if (div !== null) {
                                        div.hidden = false
                                    }
                                }
                                }>
                                <label>
                                    <input type={props.type}
                                           className="w-full border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200"
                                           value={saveContent}
                                           onChange={(event) => {
                                               {
                                                   setSaveContent(event.target.value)
                                                   addInTable(props.name, event.target.value.trim(), false)
                                               }
                                           }}/>

                                </label>
                                <div id={props.name} className="text-sm bg-gray-300"/>
                            </div>
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
                        <label className="flex">
                            <input type={props.type}
                                   className="w-full border border-gray-300 p-2 my-2 rounded-l-lg focus:outline-none focus:ring-2 ring-blue-200"
                                   value={saveContent}
                                   onChange={(event) => setSaveContent(event.target.value)}/>
                            <button className="bg-gray-300 hover:bg-green-400 px-2 rounded-r-lg h-10 my-auto"
                                    onClick={() => {
                                        addInTable(props.name, saveContent.trim(), true);
                                    }}>Send
                            </button>
                        </label>
                        <div id={props.name} className="bg-gray-200 text-sm"/>
                        {
                            props.table[props.name] !== undefined ?
                                <div
                                    className="flex flex-wrap space-x-1">{props.table[props.name].map((value: string, index: number) =>
                                    <div className="bg-gray-100 rounded-lg duration-300 hover:bg-green-200" key={value}>
                                        <button className="transform hover:-rotate-90 duration-300"
                                                onClick={() => {
                                                    deleteInTable(index)
                                                }}>
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