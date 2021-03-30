import React, {useState} from "react";

const Short = () => {
    const listOption = [
        {option: "Game Name", sorder: "A - Z", disorder: "Z - A"},
        {option: "Release Date", sorder: "Recent - Old", disorder: "Old - Recent"},
        {option: "Developer", sorder: "A - Z", disorder: "Z - A"},
        {option: "Publisher", sorder: "A - Z", disorder: "Z - A"},
        {option: "Minimum Age", sorder: "Ascending", disorder: "Descending"},
        {option: "Positive Reviews", sorder: "scending", disorder: "Descending"}
    ]
    const [optionSelected, setOptionSelected] = useState(listOption[0])
    const [clickButon, setClickButon] = useState(true);

    function changeValue() {
        const takeIndex = parseInt((document.getElementById("sort-select") as HTMLInputElement).value);
        if (takeIndex !== null) {
            setOptionSelected(listOption[takeIndex]);
            setClickButon(true);
        }
    }

    return (
        <div className="w-full flex space-x-4 text-2xl justify-center ">
            <div className="w-1/5">
                <select className="text-black" onChange={changeValue} name="sort" id="sort-select">
                    {listOption.map((value, index) => <option value={index} key={index}>{value.option}</option>)}
                </select>
            </div>
            <div className="w-1/5">
                <button onClick={() => setClickButon(!clickButon)}
                        className="text-black rounded-md w-full bg-gray-100">{clickButon ? optionSelected.sorder : optionSelected.disorder}</button>
            </div>
        </div>
    );
}
export default Short;