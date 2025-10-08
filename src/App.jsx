    import React from "react";
    import Navbar from "./components/Navbar";
    import Hero from "./components/Hero";
    import About from "./components/About";
    import Works from "./components/Works";
    import Gallery from "./components/Gallery";
    import Achievement from "./components/Achievement";
    import Contact from "./components/Contact";
    import "./App.css";

    function App() {
    return (
        <div className="app">
        <Navbar />
        <section id="home">
            <Hero />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="works">
            <Works skills={skills} projects={projects} />
        </section>
        <section id="achievements">
            <Achievement />
        </section>
        <section id="gallery">
            <Gallery photos={projects} />
        </section>
        <section id="contact">
            <Contact />
        </section>
        </div>
    );
    }

    const skills = [
    { name: "VSCode", level: 50 },
    { name: "Illustrator", level: 50 },
    { name: "Canva", level: 70 },
    { name: "Blender", level: 20 },
    ];

    const projects = [
    { title: "FAFM Game Web", img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/1.png", link: "https://fafm-game.vercel.app/" },
    { title: "Weather Web", img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/2.jpg", link: "https://web-cek-cuaca.vercel.app/" },
    { title: "Company Web", img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/3.jpg", link: "https://web-company-bootstrap.vercel.app/" },
    ];

    export default App;
