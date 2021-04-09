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

const Detail = (props: { isClickForDetail: string; isConected: any; setIsClickForDetail: (arg0: any) => void; }) => {

    const [detailGame, setDetailGame] = useState<any>();
    const [error, setError] = useState<number>(0);
    const [relatedGames, setRelatedGames] = useState<any>();
    const [fav, setFav] = useState<boolean|undefined>()

    /**
     * Add a game in favorites
     */
    const addFav = () => {
        let local = localStorage.getItem('jwt')
        if (local !== null) {
            let myHeaders = new Headers()
            myHeaders.append('Authorization', local);
            fetch("http://projettutore2back/addGameToLibrary",
                {
                    method: 'post',
                    headers: myHeaders,
                    body: "game=" + detailGame.appid
                })
                .then(reponse => {
                    if (reponse.status === 200) {
                        return reponse.json()
                    } else {
                        return reponse.status
                    }
                })
                .then(function (json) {
                    if (json === 1) {
                        setFav(true)
                    }
                });
        }
    }

    /**
     * remove a games from the favorites
     */
    const removeFav = () => {
        let local = localStorage.getItem('jwt')
        if (local !== null) {
            let myHeaders = new Headers()
            myHeaders.append('Authorization', local);
            fetch("http://projettutore2back/removeGameFromLibrary",
                {
                    method: 'post',
                    headers: myHeaders,
                    body: "game=" + detailGame.appid
                })
                .then(reponse => {
                    if (reponse.status === 200) {
                        return reponse.json()
                    } else {
                        return reponse.status
                    }
                })
                .then(function (json) {
                    if (json === 1) {
                        setFav(false)
                    }
                });
        }
    }

    useEffect(() => {
        /**
         * get all information of a game
         */
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

        /**
         * check if the game send in params is a fav of the user
         */
        async function isFav(appid: number) {
            let local = localStorage.getItem('jwt')
            if (local !== null) {
                let myHeaders = new Headers()
                myHeaders.append('Authorization', local);
                fetch("http://projettutore2back/libraryContains",
                    {
                        method: 'post',
                        headers: myHeaders,
                        body: "appid=" + appid
                    })
                    .then(reponse => {
                        if (reponse.status === 200) {
                            return reponse.json()
                        } else {
                            return reponse.status
                        }
                    })
                    .then(function (json) {
                        if (json === 1) {
                            setFav(true)
                        }
                    });
            }
        }

        setDetailGame(undefined);
        getValue()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setDetailGame(null);
                        setError(x);
                    } else {
                        setDetailGame(x);
                        isFav(x.appid)
                    }
                }
            )

    }, [props.isClickForDetail]);

    useEffect(() => {
        /**
         * call an api point to get games associated to the one who send in params
         */
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
                    <div className="ml-4 text-white justify-between lg:flex xl:flex w-full">
                        <div className="w-full lg:w-3/12 img_size">
                            <img src={detailGame.image.headerImage} className="sizeImg mx-auto" alt="test"/>
                        </div>
                        <div className="ml-4 text-white text-center lg:w-7/12 text-left xl:w-7/12 text-left">
                            <div className="mt-5 text-5xl lg:flex xl:flex">
                                <p className="xl:text-5xl lg:text-5xl">{detailGame.name}</p>
                            </div>
                            <div className="mt-5 space-x-3 text-lg">
                                <div className="sm:text-center xl:text-left lg:text-left">
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
                        <div
                            className="xl:w-1/12 lg:w-1/12 text-center justify-center place-self-center text-white w-full">
                            {props.isConected ?
                                <div>
                                    {fav === undefined ? "" :
                                        <div>
                                            {fav ? <button className="w-full" onClick={() => {
                                                    removeFav()
                                                }}>
                                                    <i className="fa fa-heart fa-3x w-full" aria-hidden="true"/>
                                                </button>
                                                :
                                                <button className="w-full" onClick={() => {
                                                    addFav()
                                                }}>
                                                    <i className="fa fa-heart-o fa-3x w-full" aria-hidden="true"/>
                                                </button>}
                                        </div>}
                                </div> : ""}

                        </div>
                    </div>
                    <div className="text-left lg:flex lg:mt-20 xl:flex xl:mt-20">
                        <div className="lg:w-3/5 xl:w-3/5 text-lg">
                            <Carousel img={detailGame.image.screenshots}/>
                            <div className="lg:mt-8 lg:space-x-5 xl:space-x-5 xl:mt-8 lg:flex xl:flex">
                                <TagCloud tagCloud={detailGame.tagCloud}/>
                                <div className="xl:w-1/2 lg:w-1/2 xl:space-y-2 lg:space-y-2 h-max sm:w-full">
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
