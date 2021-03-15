import React, {useState} from "react";
import Carousel from "./Carousel/Carousel";
import ReviewBan from "../ReviewBan/ReviewBan";
import ShortDescription from "./ShortDescription/ShortDescription";
import Developer from "./Developer/Developer";
import Publicher from "./Publisher/Publisher";
import TagClan from "./TagClan/TagClan";

const Detail = () => {
    const [info, setInfo] = useState(
        {
            id: 1,
            title: "Game Title",
            release_date: "10/12/2020",
            os: ["Windows", "Mac", "Linux"],
            img: ["", "", "", ""],
            short_description: "blablablablabla",
            developer: "blablablablabla",
            publisher: "blablablablabla",
            tag_clan: ["Action", "Aventure", "gaming", "tata", "pipo", "scurt", "olala", "rrrrr", "fefefe f efe", "test", "Action", "1234567899", "Action"],
            related_games: [
                {name: "Fortnite", release_date: "10/12/2020", score: "70"},
                {name: "Fortnite", release_date: "10/12/2020", score: "70"},
                {name: "Fortnite", release_date: "10/12/2020", score: "70"},
                {name: "Fortnite", release_date: "10/12/2020", score: "70"},
            ],
            system_requirement: ["I5 9600K", "16 GO RAM", "70 GO SSD", "RTX 2070"],
            category: "blablablablabla",
            kind: "nblalleflz",
            long_description: "blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla b" +
                "lablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablabla" +
                "blabla blablablablabla blablablablabla blablablablablablablablablabla blablablablabla blablablablabla blablablab" +
                "labla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla blab" +
                "lablablabla blablablablabla blablablablabla blablablablabla blablablablabla blablablablabla",
            review_ban: [
                {
                    id: 1,
                    name: "jean michel",
                    description: "m Ipsum is simply dummy text of the printing and m I" +
                        "psum is simply dummy text of the printing and m Ipsum is simply d" +
                        "ummy text of the printing and m Ipsum is simply dummy text of the printing and"
                },
                {
                    id: 2,
                    name: "abdel",
                    description: "m Ipsum is simply dummy text of the printing and m I" +
                        "psum is simply dummy text of the printing and m Ipsum is simply d" +
                        "ummy text of the printing and m Ipsum is simply dummy text of the printing and"
                },
                {
                    id: 3,
                    name: "bg du 93",
                    description: "m Ipsum is simply dummy text of the printing and m I" +
                        "psum is simply dummy text of the printing and m Ipsum is simply d" +
                        "ummy text of the printing and m Ipsum is simply dummy text of the printing and"
                }
            ]
        }
    )


    return (
        <div className="flex">
            <div className="w-1/12"/>
            <div className="w-10/12">
                <div className="flex mt-8 text-2xl">
                    <div className="w-3/12">

                        <img src="https://marketing-nova.com/wp-content/uploads/2020/10/1200x630wa.png" alt="test"/>

                    </div>
                    <div className="w-8/12 ml-4 text-white">
                        <div className="flex mt-5 text-5xl">
                            <p>Game Title</p>
                        </div>
                        <div className="flex mt-5 space-x-3 text-lg">
                            <div>
                                <p>10/10/2020</p>
                            </div>
                            <div><p>-</p></div>
                            <div>
                                <p>Windows / Mac / Linux</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/12 text-center justify-center place-self-center text-white ">
                        <i className="fa fa-plus fa-2x" aria-hidden="true"/>
                    </div>
                </div>
                <div className="flex mt-20">


                    <div className="w-3/5 text-lg">
                        <Carousel/>
                        <div className="flex space-x-5 mt-8">
                            <div className="bg-white rounded-xl w-4/12">
                                <div className="bg-green-500 rounded-t-xl">
                                    <p className="ml-2">System Requirement</p>
                                </div>
                                <div className="m-1 p-2 text-black">
                                    <ul>
                                        <li>I5 9600K</li>
                                        <li>16 GO RAM</li>
                                        <li>70 GO</li>
                                        <li>RTX 2070</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl w-4/12">
                                <div className="bg-green-500 rounded-t-xl">
                                    <p className="ml-2">Category</p>
                                </div>
                                <div className="m-1 p-2 text-justify text-black">
                                    <p>m Ipsum is simply dummy text of the printing and</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl w-4/12">
                                <div className="bg-green-500 rounded-t-xl">
                                    <p className="ml-2">Kind</p>
                                </div>
                                <div className="m-1 p-2 text-justify text-black">
                                    <p>m Ipsum is simply dummy text of the printing and</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-white rounded-xl w-12/12">
                            <div className="bg-green-500 rounded-t-xl">
                                <p className="ml-2">Long description</p>
                            </div>
                            <div className=" text-base m-1 p-2 text-justify text-black">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has
                                    been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a
                                    galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It
                                    was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions
                                    of
                                    Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/5 ml-4 text-lg">
                        <ShortDescription short_description={info.short_description}/>
                        <Developer developer={info.developer}/>
                        <Publicher publisher={info.publisher}/>
                        <TagClan tag_clan={info.tag_clan}/>


                        <div className="mt-4 bg-white rounded-xl">
                            <div className="bg-green-500 rounded-t-xl">
                                <p className="ml-2">Related Games</p>
                            </div>
                            <div className="mx-4 text-black">
                                <div className="place-items-auto  rounded-3xl">
                                    <div className="my-2 pb-4">
                                        <div className="flex overflow-y-scroll max-h-96">
                                            <table className="rounded-t-lg m-4 w-11/12 mx-auto bg-gray-500 text-center">
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                                <tr className="bg-gray-200 border-b border-gray-200 hover:bg-gray-400 hover:text-gray-50 transition ease-in-out duration-150">
                                                    <td className="px-4 py-3">Fortnite</td>
                                                    <td className="px-4 py-3">10/12/2020</td>
                                                    <td className="px-4 py-3">70/100</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <ReviewBan reviewBan={info.review_ban}/>
            </div>
            <div className="w-1/12"/>
        </div>
    );
}
export default Detail;
