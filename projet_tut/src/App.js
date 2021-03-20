import './App.css';
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Menu from "./Menu/Menu";
import {useState} from "react";

function App() {
    const [isClickForDetail, setIsClickForDetail] = useState(false)
    console.log(isClickForDetail);
    return (
        <div className="App">
            <header className="App-header">
                <Menu/>
                {isClickForDetail ? <Detail setIsClickForDetail={setIsClickForDetail}
                                            isClickForDetail={isClickForDetail}/> :
                    <Home setIsClickForDetail={setIsClickForDetail}
                          isClickForDetail={isClickForDetail}/>}
            </header>
        </div>
    );
}

export default App;
