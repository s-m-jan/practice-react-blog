import styled from "./Article.module.css";

function Article(props) {

  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageURL} />
      <h3>{props.article.title}</h3>
      <p>خواندن {props.article.readingTime} دقیقه ای</p>
    </div>
  );
}

export default Article;
