import HeaderStyle from "./header.style";
import {Link} from "react-router-dom";

const Header = () => {
    const loggedIn = false;

    return(
        <HeaderStyle>
            <h1>Root Beer Ratings</h1>
            <div className="login">
                <p>Voice your opinion:</p>
                {loggedIn 
                    ? 
                        <p>Spencer P</p>
                    :   <div>
                            <Link to="/login" > Log in</Link> 
                            <br/>
                            <Link to="/login" > Sign Up</Link>
                        </div>
                }
            </div>
        </HeaderStyle>
    )
};

export default Header;