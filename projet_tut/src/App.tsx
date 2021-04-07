import './App.css';
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Menu from "./componant/Menu/Menu";
import React, {useEffect, useState} from "react";
import Conection from "./pages/Conection/Conection";
import Registration from "./pages/Registration/Registration";

function App() {
    const [isClickForDetail, setIsClickForDetail] = useState("");
    const [isConected, setIsConected] = useState();
    const [onclickConection, setOnclickConection] = useState(false);
    const [onclickRegister, setOnclickRegister] = useState(false);

    useEffect(() => {
        setIsClickForDetail(isClickForDetail);
    });

    if (onclickConection) {
        return (
            <div className="App">
                <header className="App-header font-medium ">
                    <Conection setOnclickConection={setOnclickConection} setOnclickRegister={setOnclickRegister}/>
                </header>
            </div>
        );
    }

    if (onclickRegister) {
        return (
            <div className="App">
                <header className="App-header font-medium ">
                    <Registration setOnclickRegister={setOnclickRegister} setOnclickConection={setOnclickConection}/>
                </header>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header font-medium ">
                <Menu isConected={isConected} setOnclickConection={setOnclickConection} setIsConected={setIsConected}/>
                {isClickForDetail ?
                    <Detail setIsClickForDetail={setIsClickForDetail} isClickForDetail={isClickForDetail}
                            isConected={isConected}
                    /> :
                    <Home setIsClickForDetail={setIsClickForDetail} isClickForDetail={isClickForDetail}
                    />}
            </header>
        </div>
    );
}

export default App;
