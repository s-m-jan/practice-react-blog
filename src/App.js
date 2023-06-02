import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/article/articlePage";
import Home from "./pages/home/home";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/article/:id" element={<ArticlePage/>}/>
     </Routes>

    </div>
  );
}

export default App;
