import './App.css';
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Menu from "./Menu/Menu";
import React, {useEffect, useState} from "react";
import Conection from "./Conection/Conection";

function App() {
    const [isClickForDetail, setIsClickForDetail] = useState("");
    const [isConected, setIsConected] = useState(undefined);
    const [onclickConection, setOnclickConection] = useState(false);

    useEffect(() => {
        setIsClickForDetail(isClickForDetail);
    });

    console.log(onclickConection);

    if (onclickConection) {
        return (
            <div className="App">
                <header className="App-header">
                    <Conection setOnclickConection={setOnclickConection}/>
                </header>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <Menu setIsClickForDetail={setIsClickForDetail} isConected={isConected}
                      setOnclickConection={setOnclickConection}/>
                {isClickForDetail ?
                    <Detail setIsClickForDetail={setIsClickForDetail} isClickForDetail={isClickForDetail} isConected={isConected}
                    /> :
                    <Home setIsClickForDetail={setIsClickForDetail} isClickForDetail={isClickForDetail}
                    />}
            </header>
        </div>
    );
}

export default App;
