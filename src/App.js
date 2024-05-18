import "./styles.css"
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Productos } from './components/Productos';
import { HashRouter Routes,Route } from "react-router-dom"
//import { AuthProvider } from "./context/authContext";
import { Register } from "./components/Register";
import { Crearp } from "./components/Crearp";
import { Eliminarp } from "./components/Eliminarp";

function App()
{
  return (
    <div className="bg-gradient-to-b from-slate-600 to-slate-100 h-screen text-white flex">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Crearp" element={<Crearp/>} />
          <Route path="/Eliminarp" element={<Eliminarp/>} />
        </Routes>      
      </HashRouter>
      </div>
  );
}

export default App;

