import HomeStyle from "./home.style";
import Header from "../../components/header/header";
import AWGif from "../../assets/A&Wgif.gif"

const Home = () => {
    return(
        <section>
            <HomeStyle>
                <Header />
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