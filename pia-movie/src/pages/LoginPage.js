import React from "react";
import Login from "../components/LoginSignUp/login";
import Navbar from "../components/Navbar/Navbar";

export default function LoginPage(){
    return(
        <header>
            <Navbar />
            <Login/>

        </header>
       
    )
}