import styled from "styled-components";
import { Theme } from "../../constants";

const {creme, rbBrown} = Theme;

const HeaderStyle = styled.div`

    background-color: ${creme};
    padding: 15px;

    .bottom-header {
        display: flex;
        justify-content: end;
    }

    .logged-out {
        display: flex;
    }

    .login {
        width: 20%;
        display: flex;
        justify-content: space-around;
    }

    .buttons {
        display: flex;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-color: ${rbBrown};
        color: ${creme};
        margin-left: 5px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
    }

    #login {
        background-color: transparent;
        color: ${rbBrown};
        border: 2px solid ${rbBrown};
    }
    #signup {
        background-color: ${rbBrown};
        color: ${creme};
        border: 2px solid ${rbBrown};
    }
    h1 {
        font-family: 'Lobster', cursive;
        font-size: 42px;
        color: ${rbBrown};
    }
`;

export default HeaderStyle;