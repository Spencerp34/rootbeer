import AuthStyle from "./auth.style";
import { useEffect } from "react";

const Auth = () => {

    useEffect(() => {
        if(window.localStorage.getItem("token")){
            window.location = "/"
        }
    }, [])

    const handleLogIn = () => {
        window.localStorage.setItem("token", "Spencer Patterson")
        window.location = "/"
    }

    return(
        <section>
            <AuthStyle>
                <h2>Login</h2>
                <input placeholder="Username" type="text" >
                </input>
                <br/>
                <input placeholder="Password" type="text">
                </input>
                <br/>
                <button onClick={() => handleLogIn()} >Log In</button>
            </AuthStyle>
        </section>
    )
}

export default Auth;