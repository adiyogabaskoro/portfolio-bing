    import React from "react";

    function Works({ skills, projects }) {
    return (
        <div className="works">
        <h2>Portfolio & Experience</h2>

        {/* Resume / Skills */}
        <div className="resume-grid">
            <div className="skills">
            <h3>Software Skills</h3>
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

            <div className="experience">
            <h3>Experience</h3>
            <ul>
                <li><strong>Juara Umum LKBB LOPTASIKU 8</strong> - UDINUS</li>
                <li><strong>Juara Utama 2 GAPAKSI v</strong> - SMA Negeri 4 Semarang</li>
                <li><strong>Juara Utama 2 LKBB Panglima TNI</strong> - AKPELNI</li>
                <li><strong>Juara Umum LKBB Porsimaptar</strong> - Akademi Kepolisian</li>
                <li><strong>IT Essentials</strong> - Cisco Networking Academy</li>
                <li><strong>AI Upskilling Program</strong> - Remote Skill Academy</li>
            </ul>
            </div>
        </div>

        {/* Portfolio */}
        <div className="portfolio-grid">
            {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Works;
