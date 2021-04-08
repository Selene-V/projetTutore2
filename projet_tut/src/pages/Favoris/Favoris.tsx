import { useState } from "react";
import Table from "../../componant/Table/Table";

const Favoris = (props: { tableInfo: any[]; setIsClickForDetail: any; isClickForDetail: string; }) => {
    const [table, setTable] = useState([])
    return (
        <div>
            <Table tableInfo={props.tableInfo} setIsClickForDetail={props.setIsClickForDetail} isClickForDetail={props.isClickForDetail} choiceDisign={true}/>
        </div>
    )
}
export default Favoris;