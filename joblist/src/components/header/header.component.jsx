import React from "react"
import {ReactComponent as HeaderPhoto} from "./bg-header-desktop.svg"
import {ReactComponent as HeaderPhotoMobile} from "./bg-header-mobile.svg"
import "./header.styles.css"
const Header=()=>{
return (
    <header>
    {
    <HeaderPhoto style={{width:"100vw"}} alt="header"/ >
    }
    </header>
)
}

export default Header;