import styled from "styled-components";
import { Theme } from "../../constants";

const HomeStyle = styled.div`
    width: 75vw;
    min-height: 70vh;
    margin-left: 2vw;
    margin-right: 2vw;
    background-color: ${Theme.rbBrown};
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
`;

export default HomeStyle;