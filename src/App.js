import Landing from './Pages/Landing';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Couple from './Pages/Couple';


function App() {
    return (
        <BrowserRouter className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="Couple" element={<Couple />} />
                {/*<Route path="invoices" element={<Invoices />} />*/}
            </Routes>
            
        </BrowserRouter>
  );
}

export default App;
