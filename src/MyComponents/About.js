import React from 'react'
import { FaAngellist } from "react-icons/fa";


export const About = () => {
    let aboutStyle = {
        padding: "100px",
    }
    return (
        <>
        <figure className="text-center" style = {aboutStyle} >
  <blockquote className="blockquote">
    <h2>Hi, I'm Ankur <FaAngellist/></h2>
    <p>      💬 self-taught coder, investor, designer and programmer<br/>
            📙 student at Indian Institute of Technology, BHU, Varanasi<br/>
            🌱 learning Django. React. REST API.<br/>
            🔭 interested in web-development, open-source, tech<br/>
            🖥 develops websites. back-end works.<br/>
            🧩 likes cycling. skateboarding. football. and webdev<br/></p>
  </blockquote>
</figure>
 
            </>
    )
}
