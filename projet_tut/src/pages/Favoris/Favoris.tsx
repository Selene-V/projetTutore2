import Table from "../../componant/Table/Table";

const Favoris = (props: { tableInfo: any[]; setIsClickForDetail: any; isClickForDetail: string; }) => {
    return (
        <div>
            <Table tableInfo={props.tableInfo} setIsClickForDetail={props.setIsClickForDetail} isClickForDetail={props.isClickForDetail} choiceDisign={true}/>
        </div>
    )
}
export default Favoris;