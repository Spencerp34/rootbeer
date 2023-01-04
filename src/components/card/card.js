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
        for(let i = 0; i < rating; i++){
            stars.push(<img src={Star} width={50} alt="star rating" />)
        }
        return stars
    }

    return(
        <section>
            <CardStyle>
                <div className="ex">A&W</div>
                <img src={pic} width={"60%"} alt="Root Beer Brand" />
                <div className="Author Rating">
                    {ratingRender(4)}
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