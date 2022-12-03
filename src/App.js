import Main from "./components/Main";
import JSONComponent from "./components/JSON";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/json" element={<JSONComponent />} />
            </Routes>
        </div>
    );
}

export default App;
