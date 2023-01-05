import CardStyle from "./card.style";
import Star from "../../assets/Star.png";
import HalfStar from "../../assets/HalfStar.png";
import { pixelArts } from "../../constants";

const Card = (props) => {

    const {result, index} = props

    let pic = Star;
    if(result.pic){
        pic = result.pic
    }else{
        console.log(index)
        let i = index % pixelArts.length
        pic = pixelArts[i]
    }

    const ratingRender = (rating) => {
        let stars = []
        if(rating%1 === 0.5){
            stars.push( <img src={HalfStar} width={27} alt="half star rating" />)
        }
        for(let i = 1; i <= rating; i++){
            stars.unshift(<img src={Star} width={50} alt="star rating" />)
        }
        return stars
    }

    return(
        <section>
            <CardStyle>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="front">
                            <div className="ex">A&W</div>
                            <img src={pic} width={"60%"} alt="Root Beer Brand" />
                            <div className="Author Rating">
                                {ratingRender(4.5)}
                            </div>
                        </div>
                        <div className="back">
                            <p>A&W</p>
                            <p>Author Rating:</p>
                            <div className="Author Rating">
                                {ratingRender(4.5)}
                            </div>
                            <p>Consumer Rating:</p>
                            <div className="Consumer Rating">
                                {ratingRender(3)}
                            </div>
                        </div>
                    </div>
                </div>
            </CardStyle>
        </section>
    )
}

export default Card;