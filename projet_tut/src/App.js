import './App.css';
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Menu from "./Menu/Menu";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu/>
                {true ? <Home/> : <Detail/>}
            </header>
        </div>
    );
}

export default App;
