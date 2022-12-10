import HomeStyle from "./home.style";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <section>
            <HomeStyle>
                <h1>Home Page</h1>
                <p>Logged in? {true ? "Yes" : "No"}</p>
                <Link to="/login" > Log in</Link> 
                <br/>
                <Link to="/login" > Sign Up</Link>
            </HomeStyle>
        </section>
    )
}

export default Home;