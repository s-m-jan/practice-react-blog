import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/home";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="About" element={<AboutUs/>}/>
     </Routes>

    </div>
  );
}

export default App;
