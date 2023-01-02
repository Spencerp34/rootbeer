import styled from "styled-components";

const HeaderStyle = styled.div`

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
        background-color: #5B3A0A;
        color: #f2e1c1;
        margin-left: 5px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
    }

    #login {
        background-color: #f2e1c1;
        color: #5B3A0A;
        border: 2px solid #5B3A0A;
    }
    #signup {
        background-color: #5B3A0A;
        color: #f2e1c1;
        border: 2px solid #5B3A0A;
    }
    h1 {
        font-family: 'Lobster', cursive;
        font-size: 42px;
        color: #5B3A0A;
    }
`;

export default HeaderStyle;