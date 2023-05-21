import React from "react";
import backgroundImage from "../../assets/banner.png";

const Header = () => {
    return (
        <div
            style={{
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: '30px 50px 0px 50px',
                padding: '10px 0px 10px 0px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
            }}
        >
            PH Headline News Today
        </div>
    )
}

export default Header;
