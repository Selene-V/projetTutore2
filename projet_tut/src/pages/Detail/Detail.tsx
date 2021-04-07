import Carousel from "./Carousel/Carousel";
import ShortDescription from "./ShortDescription/ShortDescription";
import Developer from "./Developer/Developer";
import Publicher from "./Publisher/Publisher";
import TagCloud from "./TagCloud/TagCloud";
import SystemRequirement from "./SystemRequirement/SystemRequirement";
import "./Detail.css"
import Category from "./Category/Category";
import LongDescription from "./LongDescription/LongDescription";
import RelatedGames from "./RelatedGames/RelatedGames";
import React, {useEffect, useState} from "react";
import Loading from "../../componant/Loading/Loading";
import Error from "../../componant/Error/Error";
import Platform from "../../Platform";
import Genre from "./Genre/Genre";

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

    async function getRelatedGame() {
        if (detailGame) {
            return await fetch("http://projettutore2back/relatedGames", {
                method: "post",
                body: "appid=" + detailGame.appid
            })
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
    }

    const [detailGame, setDetailGame] = useState<any>();
    const [error, setError] = useState<number>(0);
    const [relatedGames, setRelatedGames] = useState<any>();

    useEffect(() => {
        setDetailGame(undefined);
        getValue()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setDetailGame(null);
                        setError(x);
                    } else {
                        setDetailGame(x);
                    }
                }
            )
    }, []);

    useEffect(() => {
        getRelatedGame()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setRelatedGames(null);
                        setError(x);
                    } else {
                        setRelatedGames(x);
                    }
                }
            )
    }, [detailGame])

    if (detailGame === undefined) {
        return (<Loading/>)
    } else if (detailGame === null) {
        return (<Error error={error}/>)
    }

    return (
        <div className="flex">
            <div className="lg:w-1/12 xl:w-1/12"/>
            <div className="lg:w-10/12 xl:w-10/12">
                <div className="mt-8 text-2xl my-4">
                    <div className="ml-4 text-white justify-between lg:flex xl:flex">
                        <div className="w-full
                        lg:w-3/12 img_size
                        ">
                            <img src={detailGame.image.headerImage} className="sizeImg mx-auto" alt="test"/>
                        </div>
                        <div className="ml-4 text-white text-center lg:w-8/12 text-left xl:w-8/12 text-left">
                            <div className="mt-5 text-5xl lg:flex xl:flex">
                                <p className="xl:text-5xl lg:text-5xl">{detailGame.name}</p>
                            </div>
                            <div className="mt-5 space-x-3 text-lg">
                                <div className="text-left sm:text-center">
                                    <p className="text-sm xl:text-2xl lg:text-2xl">{detailGame.releaseDate}</p>
                                </div>
                                <div className="space-x-2 inline-flex content-center lg:flex xl:flex">
                                    {detailGame.platforms.map((value: string, index: number) => <div
                                            className="text-sm xl:text-2xl lg:text-2xl"
                                            key={index}>
                                            <Platform platform={value}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/12 text-center justify-center place-self-center text-white ">
                            {props.isConected ?
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
                    <div className="text-left lg:flex lg:mt-20 xl:flex xl:mt-20">
                        <div className="lg:w-3/5 xl:w-3/5 text-lg">
                            <Carousel img={detailGame.image.screenshots}/>
                            <div className="lg:mt-8 lg:space-x-5 xl:space-x-5 xl:mt-8 lg:flex xl:flex">

                                <TagCloud tagCloud={detailGame.tagCloud}/>
                                <div className="w-1/2 h-max sm:space-x-2 sm:flex sm:w-full">
                                    <Category categories={detailGame.categories}/>
                                    <Genre genre={detailGame.genres}/>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/5 lg:ml-4 text-lg xl:w-2/5 xl:ml-4 text-lg ">
                            <ShortDescription
                                short_description={detailGame["description"]['shortDescription']}/>
                            <Developer developer={detailGame.developer}/>
                            <Publicher publisher={detailGame.publisher}/>
                            <SystemRequirement
                                system_requirement={detailGame.requirement.minimum.replace(/<(?:.|\n)*?>/gm, '')}/>

                        </div>
                    </div>
                    {relatedGames !== undefined ?
                        <RelatedGames relatedGames={relatedGames.games}
                                      setIsClickForDetail={props.setIsClickForDetail}
                                      isClickForDetail={props.isClickForDetail}
                                      choiceDisign={false}
                        />
                        :
                        <Loading/>}
                    <LongDescription
                        long_description={detailGame.description.detailedDescription.replace(/<(?:.|\n)*?>/gm, '')}/>
                </div>
                <div className="mx-auto justify-items-center my-4">
                    <button
                        className="w-1/4 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => props.setIsClickForDetail(false)}>Back
                    </button>
                </div>

            </div>
            <div className="lg:w-1/12 xl:w-1/12"/>
        </div>
    );
}
export default Detail;
