import './App.css';
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Menu from "./Menu/Menu";
import {useEffect, useState} from "react";

function App() {
    const [isClickForDetail, setIsClickForDetail] = useState(false)
    console.log(isClickForDetail);
    useEffect(() => {
        setIsClickForDetail(isClickForDetail);
    });
    return (
        <div className="App">
            <header className="App-header">
                <Menu setIsClickForDetail={setIsClickForDetail}/>
                {isClickForDetail ? <Detail setIsClickForDetail={setIsClickForDetail}
                                            /> :
                    <Home setIsClickForDetail={setIsClickForDetail}
                          />}
            </header>
        </div>
    );
}

export default App;
