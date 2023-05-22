import React from "react";

const Footer = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                minWidth: '80vw',
                height: '50px',
                marginBottom: '10px',
                padding: '10px 0px 10px 0px',
            }}>

            <div><a href="https://www.linkedin.com/in/christopher-nabo-004149220/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                aria-label="LinkedIn Profile">
                <span style={{
                    cursor: "pointer",
                    color: "inherit"
                }} >LinkedIn</span>
            </a> | <a href="https://github.com/christophernabo/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                aria-label="GitHub Profile">
                    <span style={{
                        cursor: "pointer", textDecoration: "none",
                        color: "inherit"
                    }}>Github</span></a>
            </div>

            <div>© 2023 Christopher Nabo</div>
        </div>
    );
};

export default Footer;
