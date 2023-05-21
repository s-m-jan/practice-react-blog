import Article from "../../components/article/Article";
import Navbar from "../../components/navabar/Navbar";
import styled from "./home.module.css";
function Home(){

    return(
        <div className={styled.homeWrapper}>
            <Navbar title="سالار بلاگ"/>

            <div className="container">
                
                <h2>
                    مقالات جدید
                </h2>
                <div className={styled.articles}>
                    <Article  title="ali"/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
                
            </div>
            
        {/* <Footer />  */}
        </div>
        
    )
}

export default Home