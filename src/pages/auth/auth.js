import AuthStyle from "./auth.style";
import { useState, useEffect } from "react";

const Auth = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    return(
        <section>
            <AuthStyle>
                <h1>Login/Signup</h1>
                <p>Logged in? {loggedIn ? "Yes" : "No"}</p>
            </AuthStyle>
        </section>
    )
}

export default Auth;