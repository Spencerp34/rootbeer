import AuthStyle from "./auth.style";
import { useState } from "react";

const Auth = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    return(
        <section>
            <AuthStyle>
                <h1>Login/Signup</h1>
                <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
                <button onClick={() => setIsLoggedIn(true)} >Log In</button>
                <button onClick={() => setIsLoggedIn(true)} >Sign Up</button>
            </AuthStyle>
        </section>
    )
}

export default Auth;