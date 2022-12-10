import HomeStyle from "./home.style";
import { useState, useEffect } from "react";

const Home = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    return(
        <section>
            <HomeStyle>
                <h1>Home Page</h1>
                <p>Logged in? {loggedIn ? "Yes" : "No"}</p>
            </HomeStyle>
        </section>
    )
}

export default Home;