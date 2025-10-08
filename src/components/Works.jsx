    import React from "react";

    function Works({ skills, projects }) {
    return (
        <div className="works">
        <h2>Projects</h2>

        {/* ==== PROJECTS SECTION ==== */}
        <div className="portfolio-grid">
            {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
                <a href={p.link || p.img} target="_blank" rel="noopener noreferrer">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                </a>
            </div>
            ))}
        </div>

        {/* ==== SKILLS & EXPERIENCE SECTION ==== */}
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>Skills & Experience</h2>

        <div className="skills-container">
            {/* Hard Skills */}
            <div className="card-container">
            <h3>Hard Skills</h3>
            {skills.map((s, i) => (
                <div key={i} className="skill">
                <div className="skill-label">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${s.level}%` }}></div>
                </div>
                </div>
            ))}
            </div>

            {/* Soft Skills */}
            <div className="card-container">
            <h3>Soft Skills</h3>
            <ul>
                <li>Negotiation</li>
                <li>Empathy</li>
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Accountability</li>
                <li>Positive Attitude</li>
                <li>Leadership</li>
                <li>Communication Skills</li>
            </ul>
            </div>

            {/* Experience */}
            <div className="card-container">
            <h3>Experience</h3>
            <ul>
                <li><strong>Grand Champion LKBB LOPTASIKU 8</strong> - UDINUS</li>
                <li><strong>Runner Up GAPAKSI V</strong> - SMA Negeri 4 Semarang</li>
                <li><strong>Runner Up LKBB Panglima TNI</strong> - AKPELNI</li>
                <li><strong>Grand Champion LKBB Porsimaptar</strong> - Akademi Kepolisian</li>
            </ul>
            </div>
        </div>
        </div>
    );
    }

    export default Works;
