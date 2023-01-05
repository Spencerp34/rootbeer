import styled from "styled-components";
import { Theme } from "../../constants";

const CardStyle = styled.div`
    width: 400px;
    height: 400px;
    padding: 15px;
    margin: 25px;
    border-radius: 15px;
    background-color: ${Theme.creme};

    .flip-card {
        background-color: transparent;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .back{
        transform: rotateY(180deg);
    }


`;

export default CardStyle;