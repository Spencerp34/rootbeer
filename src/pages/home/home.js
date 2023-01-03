import HomeStyle from "./home.style";
import Card from "../../components/card/card";

const Home = () => {
    
    const results = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]

    return(
        <section>
            <HomeStyle>

                {results.map((result, index) => {
                    return(
                        <Card result={result} index={index} />
                    )
                })}
            </HomeStyle>
        </section>
    )
}

export default Home;