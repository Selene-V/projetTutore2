import React, {useEffect, useState} from "react";

const Short = (props: { searchInfo: any; setSearchInfo: (arg0: any) => void; }) => {
    const listOption = [
        {option: "Pertinence", value: "", sorder: "", disorder: ""},
        {option: "Game Name", value: "name", sorder: "A - Z", disorder: "Z - A"},
        {option: "Release Date", value: "release_date", sorder: "Recent - Old", disorder: "Old - Recent"},
        {option: "Developer", value: "developer", sorder: "A - Z", disorder: "Z - A"},
        {option: "Publisher", value: "publisher", sorder: "A - Z", disorder: "Z - A"},
        {option: "Minimum Age", value: "required_age", sorder: "Ascending", disorder: "Descending"},
        {option: "Positive Reviews", value: "positive_ratings", sorder: "Scending", disorder: "Descending"}
    ]
    const [optionSelected, setOptionSelected] = useState(listOption[0])
    const [clickButon, setClickButon] = useState(true);

    /**
     * change the value for the sort according to the type of sorting (game name -> Az - Za) according to the listOption
     * and save it in searchInfo
     */
    function changeValue() {
        const takeIndex = parseInt((document.getElementById("sort-select") as HTMLInputElement).value);
        if(takeIndex===0){
            let reponse = {...props.searchInfo}
            reponse["Sort"]="";
            props.setSearchInfo(reponse)
        }
        if (takeIndex !== null) {
            setOptionSelected(listOption[takeIndex]);
            setClickButon(true);
        }
    }

    useEffect(() => {
 
            let reponse = {...props.searchInfo}
            let value = "";
            if (optionSelected.value === "") {
                value = "";
            } else {
                if (clickButon) {
                    value = optionSelected.value + "-asc";
                } else {
                    value = optionSelected.value + "-desc";
                }
                reponse["Sort"] = value;
                props.setSearchInfo(reponse)
            }
        
    }, [clickButon, optionSelected])

    return (
        <div className="w-full flex space-x-10 text-lg justify-center my-auto">
            <div className="w-1/2 mx-3 my-auto">
                <select className="text-black bg-gray-300" onChange={changeValue} name="sort" id="sort-select">
                    {listOption.map((value, index) => <option value={index} key={index}>{value.option}</option>)}
                </select>
            </div>
            <div className="w-1/2 my-auto">
                {optionSelected.option === "Pertinence" ? ""
                    :
                    <button onClick={() => setClickButon(!clickButon)}
                            className="text-black py-1 px-2 rounded-md bg-gray-300">{clickButon ? optionSelected.sorder : optionSelected.disorder}</button>
                }
            </div>
        </div>
    );
}
export default Short;