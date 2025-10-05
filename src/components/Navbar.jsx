    import { useState } from "react";
    import "../App.css";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
        <div className="nav-container">
            <div className="brand">AGOYYXX</div>

            <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            >
            ☰
            </button>

            <ul className={`nav-links ${open ? "mobile-active" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </nav>
    );
    }
