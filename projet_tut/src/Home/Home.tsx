import React, {useEffect, useState} from "react";
import Switch from "./Switch/Switch";
import Table from "../Table/Table";
import Pagination from "./Pagination/Pagination";
import Icons from "./Icons/Icons";
import Search from "./Search/Search";
import Sort from "./Search/Sort/Sort";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

import debounce from '../function/useDebounce'

const Home = (props: {
    setIsClickForDetail: any;
    isClickForDetail: any;
}) => {
    const [switchButton, setSwitchButton] = useState(false);
    const [actualyPage, setActualyPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [infoGame, setInfoGame] = useState<any>();
    const [error, setError] = useState<number>(0);
    const [searchInfo, setSearchInfo] = useState<any>({})

    let traiterSearchNameDebounce = debounce(searchInfo, 600);

    async function getValue() {
        return await fetch("http://projettutore2back/games/" + actualyPage)
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

    async function searchName() {
        return await fetch("http://projettutore2back/gameByName/" + traiterSearchNameDebounce['Game Name'] + "/" + actualyPage)
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

    function display() {
        switch (true) {
            case infoGame === undefined: {
                return (<Loading/>)
            }
            case infoGame === null: {
                return (
                    <Error error={error}/>
                )
            }
            case infoGame.length === 0: {
                return (
                    <div className="justify-center self-center justify-self-center my-auto">
                        Les parametre rentrer ne permette pas de trouver de jeux 😜
                    </div>
                )
            }
            default: {
                return (
                    <div>
                        {
                            !switchButton ?
                                <div className="z-30 mb-5 place-items-auto  rounded-3xl">
                                    <Icons tableInfo={infoGame}
                                           setIsClickForDetail={props.setIsClickForDetail}
                                           isClickForDetail={props.isClickForDetail}
                                    />
                                    <Pagination actualyPage={actualyPage}
                                                setActualyPage={setActualyPage}
                                                gamesByPage={maxPage}
                                    />
                                </div>
                                :
                                <div className="z-30 mb-5 place-items-auto rounded-2xl text-black">
                                    <div className="w-full mx-auto py-10">
                                        <Table tableInfo={infoGame}
                                               setIsClickForDetail={props.setIsClickForDetail}
                                               isClickForDetail={props.isClickForDetail}
                                        />
                                    </div>
                                    <Pagination actualyPage={actualyPage}
                                                setActualyPage={setActualyPage}
                                                gamesByPage={maxPage}
                                    />
                                </div>
                        }
                    </div>)
            }
        }
    }


    useEffect(() => {
        setInfoGame(undefined);
        if (!traiterSearchNameDebounce['name']) {
            getValue()
                .then(
                    x => {
                        if (typeof x === 'number') {
                            setInfoGame(null);
                            setError(x);
                        } else {
                            setInfoGame(x.games);
                            setMaxPage(x.nbPages)
                        }
                    }
                )
        } else {
            searchName()
                .then(
                    x => {
                        if (typeof x === 'number') {
                            setInfoGame(null);
                            setError(x);
                        } else {
                            setInfoGame(x.games);
                            setMaxPage(x.nbPages);
                        }
                    }
                )
        }
    }, [actualyPage]);

    useEffect(() => {
        setInfoGame(undefined);
        setActualyPage(1);
        searchName()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setInfoGame(null);
                        setError(x);
                    } else {
                        setInfoGame(x.games);
                        setMaxPage(x.nbPages);
                    }
                }
            )
    }, [traiterSearchNameDebounce])
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-1/12"/>
                <div className="w-10/12">
                    <div className="flex mx-3 justify-between mt-5">
                        <Search setSearchInfo={setSearchInfo} searchInfo={searchInfo}/>
                        <Switch switchButton={setSwitchButton}/>
                    </div>
                    <div>
                        {
                            display()
                        }
                    </div>
                </div>
                <div className="w-1/12"/>
            </div>
        </div>
    );
}
export default Home;
