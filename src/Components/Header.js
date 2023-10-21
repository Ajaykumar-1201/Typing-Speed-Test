import React from "react";
import Keyboard from "@mui/icons-material/Keyboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <span className="logo">TypeCat</span>
                <span className="icon"><Keyboard/></span>
            </div>
            <div className="user-icon"><AccountCircleIcon/></div>
        </div>
    )
}

export default Header;