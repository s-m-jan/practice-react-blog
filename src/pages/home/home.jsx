import { useEffect,  useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navabar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";

function Home(){

   const [articles, setArticles ] = useState([])
   
    useEffect(()=>{
        
        // API call
        
      axios.get("http://localhost:8000/articles").then(result=>{
        setArticles(result.data.data)
      }).catch((error)=>{
        console.log(error);
      })
        

    }, [])



    return(
        <div className={styled.homeWrapper}>
            <Navbar title="سالار بلاگ"/>

            <div className="container">
                
                <h2>
                    مقالات جدید
                </h2>
                <div className={styled.articles}>
                   {
                    articles.map(article=>(
                        <Article key={article.Id} article={article} />
                    ))
                   }
                    
                </div>
                
            </div>
            
        <Footer /> 
        </div>
        
    )
}

export default Home