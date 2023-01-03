import CardStyle from "./card.style";
import PARB1 from "../../assets/PARB1.png";
import RatingImg from "../../assets/pixelartRB.png";

const Card = () => {
    return(
        <section>
            <CardStyle>
                <div className="ex">A&W</div>
                <img src={PARB1} width={"60%"} alt="Root Beer Brand" />
                <div className="Author Rating">
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                </div>
                <div className="Consumer Rating">
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                    <img src={RatingImg} width={50} alt="root beer rating" />
                </div>
            </CardStyle>
        </section>
    )
}

export default Card;