import HomeStyle from "./home.style";
import AWGif from "../../assets/A&Wgif.gif"

const Home = () => {
    return(
        <section>
            <HomeStyle>
                <img src={AWGif} alt="fizzy fill up" />
                <img src={AWGif} alt="fizzy fill up" />
                <img src={AWGif} alt="fizzy fill up" />
                <img src={AWGif} alt="fizzy fill up" />
                <img src={AWGif} alt="fizzy fill up" />
                <img src={AWGif} alt="fizzy fill up" />
            </HomeStyle>
        </section>
    )
}

export default Home;