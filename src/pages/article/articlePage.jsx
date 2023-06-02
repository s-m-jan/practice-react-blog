import Navbar from "./../../components/navabar/Navbar";
import styled from "./articlePage.module.css";
import image from "./../../assets/images/article.png"
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {
const [article, setArticle] = useState({})
const params = useParams({});


useEffect(()=>{

   axios.get(`http://localhost:8000/articles/${params.id}`).then(result=>{
    setArticle(result.data)
   }).catch((error)=>{
    console.log(error)
   })
    


}, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className={styled.title}> {article.title} </h1>
        <div className={styled.articleDefiner}>
          <span>تاریخ {article.date} </span>
          <span>نویسنده : {article.Author}</span>
          <span>مدت زمان خواندن:{article.readingTime} دقیقه</span>
        </div>
        <div className={styled.img}>
        <img  src={article.imageURL} alt="" />
        </div>
        <p className={styled.text}>
          {article.content}
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default ArticlePage;
