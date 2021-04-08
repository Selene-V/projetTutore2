import React, { useEffect, useState } from "react";
import Table from "../../componant/Table/Table";
import Loading from "../../componant/Loading/Loading";
import Error from "../../componant/Error/Error";
import Pagination from "../Home/Pagination/Pagination";


const Favoris = (props: {setIsClickForDetail: any; isClickForDetail: string; }) => {
    const [table, setTable] = useState<any>();
    const [maxPage, setMaxPage] = useState(1);
    const [actualyPage, setActualyPage] = useState(1);
    const [error, setError] = useState<number>(0);

    useEffect(() => {
        async function getFavorites(){
            let local = localStorage.getItem('jwt')
            if(local === null){setTable(null)}
            else {
                let myHeaders = new Headers()
                myHeaders.append('Authorization', local);
                console.log(myHeaders)
                return await fetch("http://projettutore2back/displayLibrary",
                {
                    method: 'post',
                    headers : myHeaders,
                    body : "page="+actualyPage
                })
                .then(reponse => {
                    if (reponse.status === 200) {
                        return reponse.json()
                    } else {
                        return reponse.status
                    }
                })
                .then(function (json) {
                    console.log(json)
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
                        setTable(x.games);
                        setMaxPage(x.nbPages);
                    }
                }
            )
    }, [actualyPage]);

    function display() {
        switch (true) {
            case table === undefined: {
                return (<Loading/>)
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
                        <Table tableInfo={table} setIsClickForDetail={props.setIsClickForDetail} isClickForDetail={props.isClickForDetail} choiceDisign={true}/>
                        <Pagination actualyPage={actualyPage}
                                                setActualyPage={setActualyPage}
                                                gamesByPage={maxPage}
                                    />
                    </div>
                )
            }
        }
    }

    return(
        <div>
            {display()}
        </div>
    )
}
export default Favoris;