import { BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
          <div> 
            <Header/>
          </div>
          <div>
            <Routes>
              <Route path="/Login"  element={<Login/>}/>
            </Routes>
          </div>  
    </BrowserRouter>
  );
}
export default App;
