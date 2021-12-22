import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaCheese} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";




export const Footer = () =>  {

let font = {
    color: "#53b3cb",
}
    return (
        <footer className="bg-dark sticky-bottom text-light py-3 " style={{position: "fixed",
        bottom: "0",
        width: "100%", textAlign:"center"}}>
        <div style={{ display:"flex", flexDirection: "row", justifyContent:"space-around"}}>
        <div className="text-center"><p>For code, visit github repo <a href="https://github.com/ankur12-1610/Todo-react/"><FaGithub color="#53b3cb"/></a></p></div>
            <div className="text-center"><p>Made with <FaCheese /> and <FaHeart/></p></div>  
            <div className="text-center"><p>Copyright &copy; <a href="https://ankurrev.tech/"  style={font}>Ankur</a></p></div>
        </div> 
        </footer>
    )
}
