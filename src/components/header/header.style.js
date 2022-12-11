import styled from "styled-components";

const HeaderStyle = styled.div`

    .bottom-header {
        display: flex;
        justify-content: end;
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
        margin-left: 5px;
        text-align: center;
    }
`;

export default HeaderStyle;