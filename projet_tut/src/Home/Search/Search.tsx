import React, {useState} from "react";
import Input from "./Input/Input";
import Sort from "../Sort/Sort";


const Search = (props: {
    setSearchInfo: any
    searchInfo: any
}) => {
    const [classCss, setClassCss] = useState("transition ease-out duration-100 transform opacity-0 scale-95");
    const [changeZIndex, setChangeZIndex] = useState("h-0 overflow-hidden");
    const [choiceDate, setChoiceDate] = useState("Fork");

    function change() {
        if (classCss === "transition ease-out duration-100 transform opacity-0 scale-95") {
            setClassCss("transition ease-in duration-75 transform opacity-100 scale-100")
            setChangeZIndex("z-40")
        } else {
            setClassCss("transition ease-out duration-100 transform opacity-0 scale-95")
            setChangeZIndex("h-0 overflow-hidden")
        }
    }

    function displayDate() {
        switch (true) {
            case choiceDate === "Fork": {
                props.searchInfo.remove('Precise Date');
                props.searchInfo.remove('Year');
                props.setSearchInfo(props.searchInfo);
                return (
                    <div className="flex">
                        <Input searchInfo={searchInfo} name="Start Date" type="date" select={null}/>
                        <Input searchInfo={searchInfo} name="End Date" type="date" select={null}/>
                    </div>
                )
            }
            case choiceDate === "Precise Date": {
                props.searchInfo.remove('Start Date');
                props.searchInfo.remove('End Date');
                props.searchInfo.remove('Year');
                props.setSearchInfo(props.searchInfo);
                return (
                    <div>
                        <Input searchInfo={searchInfo} name="Precise Date" type="date" select={null}/>
                    </div>
                )
            }
            case choiceDate === "Year": {
                props.searchInfo.remove('Start Date');
                props.searchInfo.remove('End Date');
                props.searchInfo.remove('Precise Date');
                props.setSearchInfo(props.searchInfo);
                return (
                    <div>
                        <Input searchInfo={searchInfo} name="Year" type="number" select={null}/>
                    </div>
                )
            }
            default: {
                return (
                    <div>Error</div>
                )
            }
        }
    }

    /*
        async function searchName(name: string){
            console.log(name)
            return await fetch("http://projettutore2back/gameByName/" + name)
                .then(reponse => {
                    if (reponse.status === 200) {
                        return reponse.json()
                    } else {
                        return reponse.status
                    }
                })
                .then(function (json) {
                        console.log(json)
                        if(json.length !== 0)
                        {
                            props.setSearchInfo(json)
                        }
                        else console.log('is empty')
                });
        }
    */
    function searchInfo(id: string, value: string) {
        let table = props.searchInfo.slice();
        table[id] = value;
        props.setSearchInfo(table);
    }

    return (
        <div className={changeZIndex + " fixed w-5/12 relative inline-block min-w-min h-full text-black"}>
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
                <div className="bg-gray-50">
                    <div className="w-3/5 mx-auto">

                        <Input searchInfo={searchInfo} name="Game Name" type="text" select={null}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Input searchInfo={searchInfo} name="Publisher" type="text" select={null}/>
                    <Input searchInfo={searchInfo} name="Developer" type="text" select={null}/>
                </div>
                <div className="flex w-full justify-center bg-gray-50">
                    <Input searchInfo={searchInfo} name="Minimum Age" type={null} select={
                        [
                            {content: 3, return: 3},
                            {content: 7, return: 7},
                            {content: 12, return: 12},
                            {content: 16, return: 16},
                            {content: 18, return: 18}
                        ]}
                    />
                    <Input searchInfo={searchInfo} name="Positive Reviews" type={null} select={
                        [
                            {content: "Excellent", return: "90-100"},
                            {content: "Verry Good", return: "75-90"},
                            {content: "Good", return: "50-75"},
                            {content: "Bad", return: "25-50"},
                            {content: "Verry Bad", return: "10-25"},
                            {content: "Mediocre", return: "0-10"},

                        ]}
                    />
                </div>
                <div className="flex justify-center">
                    <Input searchInfo={searchInfo} name="Categories" type="text" select={null}/>
                    <Input searchInfo={searchInfo} name="Kind" type="text" select={null}/>
                    <Input searchInfo={searchInfo} name="User Tag" type="text" select={null}/>
                </div>
                <div className="flex bg-gray-50">
                    <div className="w-4/12 my-auto h-full">
                        <select className="text-black w-7/12 px-2"
                                onChange={(event) => setChoiceDate(event.target.value)}>
                            <option value="Fork">Fork</option>
                            <option value="precise date">precise date</option>
                            <option value="year">year</option>
                        </select>
                    </div>
                    <div className="mx-auto">
                        {displayDate()}
                    </div>
                </div>
                <Sort/>
            </div>
        </div>

    )
}
export default Search;