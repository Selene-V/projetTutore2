import React, {useState} from "react";

const Short = (props: { searchInfo: any; setSearchInfo: any }) => {
    const listOption = [
        {option: "Game Name", sorder: "A - Z", disorder: "Z - A"},
        {option: "Release Date", sorder: "Recent - Old", disorder: "Old - Recent"},
        {option: "Developer", sorder: "A - Z", disorder: "Z - A"},
        {option: "Publisher", sorder: "A - Z", disorder: "Z - A"},
        {option: "Minimum Age", sorder: "Ascending", disorder: "Descending"},
        {option: "Positive Reviews", sorder: "Scending", disorder: "Descending"}
    ]
    const [optionSelected, setOptionSelected] = useState(listOption[0])
    const [clickButon, setClickButon] = useState(true);

    function takeInformation() {
        let reponse = {...props.searchInfo}
        if (clickButon) {
            reponse = optionSelected.option + "-asc";
        } else {
            reponse = optionSelected.option + "-deasc";
        }
        reponse["Sort"] = reponse;
        props.setSearchInfo(reponse)
    }

    function changeValue() {
        const takeIndex = parseInt((document.getElementById("sort-select") as HTMLInputElement).value);
        if (takeIndex !== null) {
            setOptionSelected(listOption[takeIndex]);
            setClickButon(true);
        }
    }

    return (
        <div className="w-full flex space-x-10 text-2xl justify-center ">
            <div className="w-1/2">
                <select className="text-black bg-gray-300" onChange={changeValue} name="sort" id="sort-select">
                    {listOption.map((value, index) => <option value={index} key={index}>{value.option}</option>)}
                </select>
            </div>
            <div className="w-1/5">
                <button onClick={() => setClickButon(!clickButon)}
                        className="text-black rounded-md w-full bg-gray-300">{clickButon ? optionSelected.sorder : optionSelected.disorder}</button>
            </div>
        </div>
    );
}
export default Short;