import { useEffect,  useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navabar/Navbar";
import styled from "./home.module.css";

function Home(){

   const [articles, setArticles ] = useState([])
   
    useEffect(()=>{
        
        // API call
    
        setArticles([
            {
                Id: 1,
                imageURL: "https://cdn.britannica.com/48/179448-138-40EABF32/Overview-New-York-City.jpg",
                title: "عنوان اول",
                readingTime: 5
            },
            {
                Id: 2,
                imageURL: "https://cdn1.epicgames.com/ue/product/Screenshot/r5-1920x1080-b455d4ad246f168613891f5e162dcf97.jpg?resize=1&w=1920",
                title: "عنوان دوم",
                readingTime: 3
            },
            {
                Id: 3,
                imageURL: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475669-Jersey-City.jpg",
                title: "عنوان سوم",
                readingTime: 8
            },
            {
                Id: 4,
                imageURL: "https://media.architecturaldigest.com/photos/58f918044f42bd463db36a3f/4:3/w_2663,h_1997,c_limit/1%20-%2010%20Greenest%20Cities%20in%20America%20in%202017.jpg",
                title: "عنوان چهارم",
                readingTime: 9
            }
        ])

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
            
        {/* <Footer />  */}
        </div>
        
    )
}

export default Home