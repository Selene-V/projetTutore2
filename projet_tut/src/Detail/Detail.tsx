import React, {useState} from "react";
import Carousel from "./Carousel/Carousel";
import ReviewBan from "../ReviewBan/ReviewBan";
import ShortDescription from "./ShortDescription/ShortDescription";
import Developer from "./Developer/Developer";
import Publicher from "./Publisher/Publisher";
import TagClan from "./TagClan/TagClan";
import SystemRequirement from "./SystemRequirement/SystemRequirement";
import "./Detail.css"
import Category from "./Category/Category";
import Kind from "./Kind/Kind";
import LongDescription from "./LongDescription/LongDescription";
import RelatedGames from "./RelatedGames/RelatedGames";

const Detail = () => {
    const [info, setInfo] = useState(
        {
            id: 1,
            title: "Game Title",
            release_date: "10/12/2020",
            os: ["Windows", "Mac", "Linux"],
            img: [
                "https://marketing-nova.com/wp-content/uploads/2020/10/1200x630wa.png",
                "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg",
                "https://upload.wikimedia.org/wikipedia/fr/9/9d/PetitBamBouLogo.png",
                "https://www.fine-s.fr/9959/test.jpg",
            ],
            short_description: "blablablablabla",
            developer: "blablablablabla",
            publisher: "blablablablabla",
            tag_clan: ["Action", "Aventure", "gaming", "tata", "pipo", "scurt", "olala", "rrrrr", "fefefe f efe", "test", "Action", "1234567899", "Action"],
            related_games: [
                {title: "a", release_date: "10/12/2020", score: "47"},
                {title: "b", release_date: "10/11/2020", score: "52"},
                {title: "c", release_date: "11/10/2020", score: "44"},
                {title: "d", release_date: "10/09/2020", score: "12"},
                {title: "e", release_date: "24/08/2020", score: "70"},
                {title: "f", release_date: "10/07/2020", score: "88"},
                {title: "g", release_date: "10/05/2020", score: "70"},
                {title: "h", release_date: "25/02/2020", score: "54"},
                {title: "i", release_date: "01/10/2020", score: "96"},
                {title: "j", release_date: "10/11/2020", score: "38"},
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
                    <div className="w-3/12 img_size">
                        <img src={info.img[0]} className="sizeImg mx-auto" alt="test"/>
                    </div>
                    <div className="w-8/12 ml-4 text-white">
                        <div className="flex mt-5 text-5xl">
                            <p>{info.title}</p>
                        </div>
                        <div className="flex mt-5 space-x-3 text-lg">
                            <div>
                                <p>{info.release_date}</p>
                            </div>
                            <div>-</div>
                            <div>
                                <p>{info.os.map(value => value + " ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12 text-center justify-center place-self-center text-white ">
                        <i className="fa fa-plus fa-2x" aria-hidden="true"/>
                    </div>
                </div>
                <div className="text-left flex mt-20">
                    <div className="w-3/5 text-lg">
                        <Carousel img={info.img}/>
                        <div className="flex space-x-5 mt-8">
                            <SystemRequirement system_requirement={info.system_requirement}/>
                            <Category category={info.category}/>
                            <Kind kind={info.kind}/>
                        </div>
                        <LongDescription long_description={info.long_description}/>
                    </div>
                    <div className="w-2/5 ml-4 text-lg">
                        <ShortDescription short_description={info.short_description}/>
                        <Developer developer={info.developer}/>
                        <Publicher publisher={info.publisher}/>
                        <TagClan tag_clan={info.tag_clan}/>
                        <RelatedGames related_games={info.related_games}/>
                    </div>
                </div>
                <ReviewBan reviewBan={info.review_ban}/>
            </div>
            <div className="w-1/12"/>
        </div>
    );
}
export default Detail;
