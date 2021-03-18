import React, {useState} from "react";
import Switch from "./Switch/Switch";
import Table from "../Table/Table";
import Pagination from "./Pagination/Pagination";
import Icons from "./Icons/Icons";
import Search from "./Search/Search";

const Home = () => {
    const [switchButton, setSwitchButton] = useState(false);


    const info = [
        {
            id: 1,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 2,
            name: "fffortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 3,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 4,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 5,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 6,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 7,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
        {
            id: 8,
            name: "fortnite",
            release_date: "10/10/2021",
            score: "70",
            img: "https://www.fine-s.fr/9959/test.jpg"
        },
    ];
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-1/12"/>
                <div className="w-10/12">
                    <div className="flex mx-3 justify-between mt-5">
                        <Search/>
                        <Switch switchButton={setSwitchButton}/>
                    </div>
                    <div>
                        {
                            !switchButton ?
                                <div className="z-30 mt-20 place-items-auto  rounded-3xl">
                                    <Icons info={info}/>
                                    <Pagination/>
                                </div>
                                :
                                <div className="z-30 mt-20 place-items-auto rounded-2xl text-black">
                                    <div className="w-full mx-auto py-10">
                                        <Table tableInfo={info}/>
                                    </div>
                                    <Pagination/>
                                </div>
                        }
                    </div>
                </div>
                <div className="w-1/12"/>
            </div>
        </div>
    );
}
export default Home;
