import React, {useEffect, useState} from "react";
import Switch from "./Switch/Switch";
import Table from "../Table/Table";
import Pagination from "./Pagination/Pagination";
import Icons from "./Icons/Icons";
import Search from "./Search/Search";
import Sort from "./Sort/Sort";

const Home = (props: {
    setIsClickForDetail: any;
    isClickForDetail: any;
}) => {
    const [switchButton, setSwitchButton] = useState(false);

    async function getValue() {
        return await fetch("http://projettutore2back/games/1").then(reponse => reponse.json())
            .then(function (json) {
                console.log(json)
                console.log([json[0]['images']['hits']['hits'],json["hits"]["hits"]])
                return [json[0]['images']['hits']['hits'],json["hits"]["hits"]];
            });
    }

    const [infoGame, setInfoGame] = useState<any>();
    const [imageGame, setImageGame] = useState<any>();

    useEffect(() => {
        getValue()
        .then(
            x => {setInfoGame(x[1]);setImageGame(x[0]);}
            )
    }, []);

    if (infoGame === undefined || imageGame === undefined) {
        return (<div> Loading ...</div>)
    }

    console.log(imageGame);
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-1/12"/>
                <div className="w-10/12">
                    <div className="flex mx-3 justify-between mt-5">
                        <Search/>
                        <Sort/>
                        <Switch switchButton={setSwitchButton}/>
                    </div>
                    <div>
                        {
                            !switchButton ?
                                <div className="z-30 mt-20 mb-5 place-items-auto  rounded-3xl">
                                    <Icons info={imageGame}
                                           setIsClickForDetail={props.setIsClickForDetail}
                                           isClickForDetail={props.isClickForDetail}
                                    />
                                    <Pagination/>
                                </div>
                                :
                                <div className="z-30 mt-20 mb-5 place-items-auto rounded-2xl text-black">
                                    <div className="w-full mx-auto py-10">
                                        <Table tableInfo={infoGame}
                                               choiceFormat={true}
                                               setIsClickForDetail={props.setIsClickForDetail}
                                               isClickForDetail={props.isClickForDetail}
                                        />
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
