import './App.css';
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Menu from "./componant/Menu/Menu";
import React, {useEffect, useState} from "react";
import Conection from "./pages/Conection/Conection";
import Registration from "./pages/Registration/Registration";
import Favoris from "./pages/Favoris/Favoris";

function App() {
    const [isClickForDetail, setIsClickForDetail] = useState("");
    const [isConected, setIsConected] = useState();
    const [onclickConection, setOnclickConection] = useState(false);
    const [onclickRegister, setOnclickRegister] = useState(false);
    const [onclickFavoris, setOnclickFavoris] = useState(false);

    useEffect(() => {
        setIsClickForDetail(isClickForDetail);
    }, [isClickForDetail]);

    if (onclickConection) {
        return (
            <div className="App">
                <header className="App-header font-medium ">
                    <Conection setOnclickConection={setOnclickConection} setOnclickRegister={setOnclickRegister}
                               setIsConected={setIsConected}/>
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
    if(onclickFavoris){
        return (
            <div>
                <header className="App-header font-medium ">
                    <Menu isConected={isConected} setOnclickConection={setOnclickConection} setIsConected={setIsConected}/>
                    <Favoris tableInfo={[]} setIsClickForDetail={setIsClickForDetail} isClickForDetail={isClickForDetail}/>
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
