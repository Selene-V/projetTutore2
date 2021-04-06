import React, {useEffect, useState} from "react";
import Input from "../../../componant/Input/Input";
import Sort from "./Sort/Sort";


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

                delete props.searchInfo['Precise Date'];
                delete props.searchInfo['Year'];
                props.setSearchInfo(props.searchInfo);
                return (
                    <div className="lg:flex xl:flex">
                        <Input table={props.searchInfo} name="Start Date" type="date" select={null}
                               contentTable={false} setTable={props.setSearchInfo}/>
                        <Input table={props.searchInfo} name="End Date" type="date" select={null}
                               contentTable={false}
                               setTable={props.setSearchInfo}/>
                    </div>
                )
            }
            case choiceDate === "Precise Date": {
                delete props.searchInfo['Start Date'];
                delete props.searchInfo['End Date'];
                delete props.searchInfo['Year'];
                props.setSearchInfo(props.searchInfo);
                return (
                    <div>
                        <Input table={props.searchInfo} name="Precise Date" type="date" select={null}
                               contentTable={false} setTable={props.setSearchInfo}/>
                    </div>
                )
            }
            case choiceDate === "Year": {
                delete props.searchInfo['Start Date'];
                delete props.searchInfo['End Date'];
                delete props.searchInfo['Precise Date'];
                props.setSearchInfo(props.searchInfo);
                return (
                    <div>
                        <Input table={props.searchInfo} name="Year" type="number" select={null}
                               contentTable={false}
                               setTable={props.setSearchInfo}/>
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
                className={classCss + " w-72 lg:w-full text-sm lg:Forigin-top-right absolute  mt-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none bg-white"}
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div>
                    <div className="w-3/5 mx-auto">

                        <Input table={props.searchInfo} name="Game Name" type="text" select={null}
                               contentTable={false}
                               setTable={props.setSearchInfo}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3">
                        <Input table={props.searchInfo} name="Publisher" type="text" select={null} contentTable={true}
                               setTable={props.setSearchInfo}/>
                    </div>
                    <div className="w-1/3">
                        <Input table={props.searchInfo} name="Developer" type="text" select={null} contentTable={true}
                               setTable={props.setSearchInfo}/>
                    </div>
                    <div className="w-1/3">
                        <Input setTable={props.setSearchInfo} table={props.searchInfo} name={"Platform"}
                               type={"text"} select={null} contentTable={true}/>
                    </div>

                </div>
                <div className="flex w-full justify-center">
                    <Input table={props.searchInfo} name="Minimum Age" type={undefined} select={
                        [
                            {content: 3, return: 3},
                            {content: 7, return: 7},
                            {content: 12, return: 12},
                            {content: 16, return: 16},
                            {content: 18, return: 18}
                        ]}
                           contentTable={false} setTable={props.setSearchInfo}
                    />
                    <Input table={props.searchInfo} name="Positive Reviews" type={undefined} select={
                        [
                            {content: "Excellent", return: "90-100"},
                            {content: "Verry Good", return: "75-90"},
                            {content: "Good", return: "50-75"},
                            {content: "Bad", return: "25-50"},
                            {content: "Verry Bad", return: "10-25"},
                            {content: "Mediocre", return: "0-10"},
                        ]}
                           contentTable={false} setTable={props.setSearchInfo}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3">
                        <Input table={props.searchInfo} name="Categories" type="text" select={null} contentTable={true}
                               setTable={props.setSearchInfo}/>
                    </div>
                    <div className="w-1/3">
                        <Input table={props.searchInfo} name="Genre" type="text" select={null} contentTable={true}
                               setTable={props.setSearchInfo}/>
                    </div>
                    <div className="w-1/3">
                        <Input table={props.searchInfo} name="Steamspy Tags" type="text" select={null} contentTable={true}
                               setTable={props.setSearchInfo}/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-4/12 my-auto h-full">
                        <select className="text-black w-7/12 px-2"
                                onChange={(event) => setChoiceDate(event.target.value)}>
                            <option value="Fork">Fork</option>
                            <option value="Precise Date">Precise Date</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>
                    <div className="mx-auto">
                        {displayDate()}
                    </div>
                </div>
                <Sort setSearchInfo={props.setSearchInfo} searchInfo={props.searchInfo}/>
            </div>
        </div>

    )
}
export default Search;