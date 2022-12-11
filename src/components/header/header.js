import HeaderStyle from "./header.style";
import {Link} from "react-router-dom";

const Header = () => {
    const loggedIn = false;

    return(
        <HeaderStyle>
            <h1>Root Beer Ratings</h1>
            <div className="bottom-header">
                <div className="login">
                    {loggedIn 
                        ? 
                            <p>Spencer P</p>
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