import HeaderStyle from "./header.style";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

    const [authed, setAuthed] = useState(false)
    
    useEffect(() => {
        let authed = window.localStorage.getItem("token")
        if(authed){
            setAuthed(true)
        }
    }, [])

    const handleLogOut = () => {
        setAuthed(false)
        window.localStorage.removeItem("token") 
    }

    return(
        <HeaderStyle>
            <h1>Root Beer Ratings</h1>
            <div className="bottom-header">
                <div className="login">
                    {authed 
                        ? 
                            <div className="logged-in">
                                <p>Spencer P</p>
                                <button onClick={() => handleLogOut()}>Log out</button>
                            </div>
                        :   <div className="logged-out">
                                <p>Voice your opinion:</p>
                                <div className="buttons" >
                                    <Link className="button" id="login" to="/login" > Log in</Link> 
                                    <br/>
                                    <Link className="button" id="signup" to="/login" > Sign Up</Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </HeaderStyle>
    )
};

export default Header;