import React from "react";
import '../styles/header.css';

export default function Header () {
    return (
        <header className="header-container">
            <div>
                {/* <img src="/jhon-doe-picture.png" alt="Jhon Doe" /> */}
                <div style={{width: "100px", height: "60px", backgroundColor: "white"}}></div>
            </div>
            <div className="links-and-profile-wrapper">
                <a href="/cursos">Meus Cursos</a>
                <a href="/materias">Matérias</a>
                <div className="profile-wrapper">
                    <img src="/images/jhon-doe-picture.png" alt="Jhon Doe" />
                    <span>Olá, Jhon!</span>
                </div>
            </div>
        </header>
    )
}