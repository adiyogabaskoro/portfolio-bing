    import { useState } from "react";
    import "../App.css";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav>
        <div className="nav-container">
            <div className="brand">AGOYYXX</div>

            {/* Hamburger / Close button */}
            <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            >
            {open ? "✖" : "☰"}
            </button>

            {/* Navigation Links */}
            <ul className={`nav-links ${open ? "mobile-active" : ""}`}>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#works" onClick={() => setOpen(false)}>Portfolio</a></li>
            <li><a href="#achievements" onClick={() => setOpen(false)}>Achievements</a></li>
            <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
        </div>
        </nav>
    );
    }
