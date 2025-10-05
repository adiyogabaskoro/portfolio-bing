    import React from "react";
    import { FaInstagram, FaLinkedin, FaPinterest, FaGithub, FaWhatsapp } from "react-icons/fa";

    function Hero() {
    return (
        <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
            <h1>Adiyoga<span className="highlight"> A Baskoro</span></h1>
            <p>Siswa Jurusan SIJA SMK Negeri 7 Semarang</p>
            <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaWhatsapp /></a>
            </div>
        </div>
        </div>
    );
    }

    export default Hero;
