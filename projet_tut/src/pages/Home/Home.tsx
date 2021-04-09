import {useEffect, useState} from "react";
import Switch from "./Switch/Switch";
import Table from "../../componant/Table/Table";
import Pagination from "./Pagination/Pagination";
import Icons from "./Icons/Icons";
import Search from "./Search/Search";
import Loading from "../../componant/Loading/Loading";
import Error from "../../componant/Error/Error";

import debounce from './function/useDebounce'

const Home = (props: {
    setIsClickForDetail: any;
    isClickForDetail: any;
}) => {
    const [switchButton, setSwitchButton] = useState(false);
    const [actualyPage, setActualyPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [infoGame, setInfoGame] = useState<any>();
    const [error, setError] = useState<number>(0);
    const [searchInfo, setSearchInfo] = useState<any>({
        Category: [],
        Developer: [],
        Publisher: [],
        Sort: "",
        "Game Name": "",
        "Steamspy Tags": [],
        "Reviews": "90-100",
        "Minimum Age": 3,
        Platforms: [],
        Genre: [],
    })

    let traiterSearchNameDebounce = debounce(searchInfo, 1200);

    async function searchAll() {
        return await fetch("http://projettutore2back/advancedSearch",
            {
                method: 'post',
                body: transformeInStringParam()
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
                        The parameters entered do not allow you to find games
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
                                               choiceDisign={true}
                                               setdesactivatePage={null}
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

    function transformeInStringParam() {
        let copieTable = {...traiterSearchNameDebounce}
        let allInfo = "";
        allInfo += "page=" + actualyPage;
        for (const key in copieTable) {
            switch (key) {
                case "Platform":
                    if (copieTable["Platform"].length !== 0) {
                        allInfo += "&platforms=" + (copieTable["Platform"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Developer":
                    if (copieTable["Developer"].length !== 0) {
                        allInfo += "&developer=" + (copieTable["Developer"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Game Name":
                    if (copieTable["Game Name"] !== "") {
                        allInfo += "&name=" + copieTable["Game Name"]
                    }


                    break;
                case "Sort":
                    if (copieTable["Sort"] !== "") {
                        allInfo += "&sorting=" + copieTable["Sort"]
                    }

                    break;
                case "Reviews":
                    if (copieTable["Reviews"] !== "") {
                        let table = copieTable["Reviews"].split('-');
                        allInfo += "&review_rate_low=" + table[0];
                        allInfo += "&review_rate_high=" + table[1];
                    }

                    break;
                case "End Date":
                    allInfo += "&release_date_end=" + copieTable["End Date"]

                    break;
                case "Start Date":
                    allInfo += "&release_date_begin=" + copieTable["Start Date"]

                    break;
                case "Steamspy Tag":
                    if (copieTable["Steamspy Tags"].length !== 0) {
                        allInfo += "&steamspy_tags=" + (copieTable["Steamspy Tags"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Publisher":
                    if (copieTable["Publisher"].length !== 0) {
                        allInfo += "&publisher=";
                        allInfo += (copieTable["Publisher"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Genre":
                    if (copieTable["Genre"].length !== 0) {
                        allInfo += "&genres=" + (copieTable["Genre"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Minimum Age":
                    allInfo += "&required_age=" + copieTable["Minimum Age"];

                    break;
                case "Category":
                    if (copieTable["Category"].length !== 0) {
                        allInfo += "&categories=" + (copieTable["Category"].join("+")).replace(" ", "~")
                    }

                    break;
                case "Precise Date":
                    allInfo += "&release_date=" + copieTable["Precise Date"]

                    break;
                case "Year":
                    allInfo += "&release_date=" + copieTable["Year"]

                    break;
                default:

            }
        }
        return allInfo;

    }

    useEffect(() => {
        setInfoGame(undefined);
        searchAll()
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
    }, [actualyPage]);

    useEffect(() => {
        setInfoGame(undefined);
        setActualyPage(1);
        searchAll()
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