import React, {useEffect, useState} from "react";
import Table from "../../componant/Table/Table";
import Loading from "../../componant/Loading/Loading";
import Error from "../../componant/Error/Error";
import Pagination from "../Home/Pagination/Pagination";


const Favoris = (props: { setIsClickForDetail: any; isClickForDetail: string; setOnclickFavoris: (arg0: boolean) => void; }) => {
    const [table, setTable] = useState<any>();
    const [maxPage, setMaxPage] = useState(1);
    const [actualyPage, setActualyPage] = useState(1);
    const [error, setError] = useState<number>(0);

    useEffect(() => {
        async function getFavorites() {
            let local = localStorage.getItem('jwt')
            if (local === null) {
                setTable(null)
            } else {
                let myHeaders = new Headers()
                myHeaders.append('Authorization', local);
                return await fetch("http://projettutore2back/displayLibrary",
                    {
                        method: 'post',
                        headers: myHeaders,
                        body: "page=" + actualyPage
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

        setTable(undefined)
        getFavorites()
            .then(
                x => {
                    if (typeof x === 'number') {
                        setTable(null);
                        setError(x);
                    } else {
                        if (x === false) {
                            setTable(x)
                        } else {
                            setTable(x.games);
                            setMaxPage(x.nbPages);
                        }

                    }
                }
            )
    }, [actualyPage]);

    /**
     * Allows to display different display according to the result of the API
     */
    function display() {
        switch (true) {
            case table === undefined: {
                return (<div className="justify-center"><Loading/></div>)
            }
            case table === null: {
                return (
                    <Error error={error}/>
                )
            }
            case table.length === 0: {
                return (
                    <div className="justify-center self-center justify-self-center my-auto">
                        The parameters entered do not allow you to find games
                    </div>
                )
            }
            default: {
                return (
                    <div>
                        {table === false ? <div className="text-center">You have 0 favorites</div> :
                            <div>
                                <Table tableInfo={table} setIsClickForDetail={props.setIsClickForDetail}
                                       isClickForDetail={props.isClickForDetail} choiceDisign={true}
                                       setdesactivatePage={props.setOnclickFavoris}/>
                                <Pagination actualyPage={actualyPage}
                                            setActualyPage={setActualyPage}
                                            gamesByPage={maxPage}
                                />
                            </div>}
                        <div className="flex">
                            <div className="w-4/12"/>
                            <div className="mx-auto w-1/12 justify-center">
                                <button
                                    className="w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => props.setOnclickFavoris(false)}>Back
                                </button>
                            </div>
                            <div className="w-4/12"/>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div>
            {display()}
        </div>
    )
}
export default Favoris;