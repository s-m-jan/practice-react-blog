import styled from "./Article.module.css";
import article from "./../../assets/images/article.png";

function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={article}/>
      <h3>متغیرها در جاوااسکریپت</h3>
      <p>خواندن 5 دقیقه ای</p>
    </div>
  );
}

export default Article;
