    import React, { useEffect } from "react";
    import Navbar from "./components/Navbar";
    import Hero from "./components/Hero";
    import About from "./components/About";
    import Works from "./components/Works";
    import Gallery from "./components/Gallery";
    import Achievement from "./components/Achievement";
    import Contact from "./components/Contact";
    import "./App.css";

    /* === Hook animasi scroll === */
    function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
            });
        },
        { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    }

    function App() {
    useScrollAnimation();

    return (
        <div className="app">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="fade-in">
            <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="fade-in">
            <About />
        </section>

        {/* Works Section */}
        <section id="works" className="fade-in">
            <Works skills={skills} projects={projects} />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="fade-in">
            <Achievement />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="fade-in">
            <Gallery />
        </section>

        {/* Contact Section */}
        <section id="contact" className="fade-in">
            <Contact />
        </section>
        </div>
    );
    }

    /* === Data === */
    const skills = [
    { name: "VSCode", level: 50 },
    { name: "Illustrator", level: 50 },
    { name: "Canva", level: 70 },
    { name: "Blender", level: 20 },
    ];

    const projects = [
    {
        title: "FAFM Game Web",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/1.png",
        link: "https://fafm-game.vercel.app/",
    },
    {
        title: "Weather Web",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/8.png",
        link: "https://web-cek-cuaca.vercel.app/",
    },
    {
        title: "Company Web",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/9.png",
        link: "https://web-company-bootstrap.vercel.app/",
    },
    ];

    export default App;
