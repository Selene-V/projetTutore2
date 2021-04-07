import React, {useEffect, useState} from "react";

const Short = (props: { searchInfo: any; setSearchInfo: any }) => {
    const listOption = [
        {option: "Game Name", value: "name", sorder: "A - Z", disorder: "Z - A"},
        {option: "Release Date", value: "release_date", sorder: "Recent - Old", disorder: "Old - Recent"},
        {option: "Developer", value: "developer", sorder: "A - Z", disorder: "Z - A"},
        {option: "Publisher", value: "publisher", sorder: "A - Z", disorder: "Z - A"},
        {option: "Minimum Age", value: "required_age", sorder: "Ascending", disorder: "Descending"},
        {option: "Positive Reviews", value: "positive_ratings", sorder: "Scending", disorder: "Descending"}
    ]
    const [optionSelected, setOptionSelected] = useState(listOption[0])
    const [clickButon, setClickButon] = useState(true);

    function takeInformation() {
        let reponse = {...props.searchInfo}
        let value = "";
        if (clickButon) {
            value = optionSelected.value + "-asc";
        } else {
            value = optionSelected.value + "-desc";
        }
        reponse["Sort"] = value;
        props.setSearchInfo(reponse)
    }

    function changeValue() {
        const takeIndex = parseInt((document.getElementById("sort-select") as HTMLInputElement).value);
        if (takeIndex !== null) {
            setOptionSelected(listOption[takeIndex]);
            setClickButon(true);
        }
    }

    useEffect(() => {
        takeInformation();
    }, [clickButon, optionSelected])

    return (
        <div className="w-full flex space-x-10 text-lg justify-center my-auto">
            <div className="w-1/2 mx-3 my-auto">
                <select className="text-black bg-gray-300" onChange={changeValue} name="sort" id="sort-select">
                    {listOption.map((value, index) => <option value={index} key={index}>{value.option}</option>)}
                </select>
            </div>
            <div className="w-1/2 my-auto">
                <button onClick={() => setClickButon(!clickButon)}
                        className="text-black py-1 px-2 rounded-md bg-gray-300">{clickButon ? optionSelected.sorder : optionSelected.disorder}</button>
            </div>
        </div>
    );
}
export default Short;