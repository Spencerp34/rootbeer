import CardStyle from "./card.style";
import PARB1 from "../../assets/PARB1.png";
import Star from "../../assets/Star.png";
import HalfStar from "../../assets/HalfStar.png";

const Card = () => {
    return(
        <section>
            <CardStyle>
                <div className="ex">A&W</div>
                <img src={PARB1} width={"60%"} alt="Root Beer Brand" />
                <div className="Author Rating">
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                </div>
                {/* <div className="Consumer Rating">
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                    <img src={Star} width={50} alt="star rating" />
                    <img src={HalfStar} width={27} alt="half star rating" />
                </div> */}
            </CardStyle>
        </section>
    )
}

export default Card;