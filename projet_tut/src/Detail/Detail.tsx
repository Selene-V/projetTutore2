import Carousel from "./Carousel/Carousel";
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
import React, {useEffect, useState} from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Platform from "../Platform";

const Detail = (props: {
    setIsClickForDetail: any;
    isClickForDetail: any;
    isConected: any;
}) => {
    async function getValue() {
        return await fetch("http://projettutore2back/game/" + props.isClickForDetail)
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

    const [detailGame, setDetailGame] = useState<any>();
    const [error, setError] = useState<number>(0);

    useEffect(() => {
        setDetailGame(undefined);
        getValue()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setDetailGame(null);
                        setError(x);
                    } else {
                        console.log(x.image.screenshots[0].path_thumbnail)
                        setDetailGame(x);
                    }
                }
            )
    }, []);

    const info =
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
                {name: "a", release_date: "10/12/2020", score: "47"},
                {name: "b", release_date: "10/11/2020", score: "52"},
                {name: "c", release_date: "11/10/2020", score: "44"},
                {name: "d", release_date: "10/09/2020", score: "12"},
                {name: "e", release_date: "24/08/2020", score: "70"},
                {name: "f", release_date: "10/07/2020", score: "88"},
                {name: "g", release_date: "10/05/2020", score: "70"},
                {name: "h", release_date: "25/02/2020", score: "54"},
                {name: "i", release_date: "01/10/2020", score: "96"},
                {name: "j", release_date: "10/11/2020", score: "38"},
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
    if (detailGame === undefined) {
        return (<Loading/>)
    } else if (detailGame === null) {
        return (<Error error={error}/>)
    }

    return (
        <div className="flex">
            <div className="w-1/12"/>
            <div className="w-10/12">
                <div className="mt-8 text-2xl my-4">
                    <div className="ml-4 text-white flex justify-between">
                        <div className="w-3/12 img_size">
                            <img src={detailGame.image.headerImage} className="sizeImg mx-auto" alt="test"/>
                        </div>
                        <div className="w-8/12 ml-4 text-white text-left">
                            <div className="flex mt-5 text-5xl">
                                <p>{detailGame.name}</p>
                            </div>
                            <div className="mt-5 space-x-3 text-lg">
                                <div>
                                    <p>{detailGame.releaseDate}</p>
                                </div>
                                <div className="flex space-x-2">
                                    {detailGame.platforms.split(";").map((value: string, index: number) => <div
                                            key={index}>
                                            <Platform platform={value}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/12 text-center justify-center place-self-center text-white ">
                            {props.isConected !== undefined ?
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div> : ""}

                        </div>
                    </div>
                    <div className="text-left flex mt-20">
                        <div className="w-3/5 text-lg">
                            <Carousel img={detailGame.image.screenshots}/>
                            <div className="flex space-x-5 mt-8">
                                <SystemRequirement system_requirement={info.system_requirement}/>
                                <Category categories={detailGame.categories.split(';')}/>
                                <Kind kind={detailGame.genres.split(';')}/>
                            </div>
                        </div>
                        <div className="w-2/5 ml-4 text-lg">
                            <ShortDescription
                                short_description={detailGame["description"]['shortDescription']}/>
                            <Developer developer={detailGame.developer}/>
                            <Publicher publisher={detailGame.publisher.split(';')}/>
                            <TagClan tag_clan={detailGame.steamspyTags.split(';')}/>
                            {true ? <div/> :
                                <RelatedGames relatedGames={info.related_games}
                                              setIsClickForDetail={props.setIsClickForDetail}
                                              isClickForDetail={props.isClickForDetail}
                                />
                            }
                        </div>
                    </div>
                    <LongDescription
                        long_description={detailGame.description.detailedDescription.replace(/<(?:.|\n)*?>/gm, '')}/>
                </div>
            </div>
            <div className="w-1/12"/>
        </div>
    );
}
export default Detail;
