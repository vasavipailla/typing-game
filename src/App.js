import { BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Score from "./components/Score";

function App() {
  return (
    <BrowserRouter>
          <div> 
            <Header/>
          </div>
          <div>
            <Routes>
              <Route path="/Login"  element={<Login/>}/>
              <Route path="/"  element= {<Home />} />
              <Route path="/register"  element= {<Register />} />
            </Routes>
          </div>  
          <div>
            <Score/>
          </div>
    </BrowserRouter>
  );
}
export default App;
