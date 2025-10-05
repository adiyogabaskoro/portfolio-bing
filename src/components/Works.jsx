    import React from "react";

    function Works({ skills, projects }) {
    return (
        <div className="works">
        <h2>Portfolio & Experience</h2>

        {/* Resume / Skills */}
        <div className="resume-grid">
            <div className="skills">
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

            <div className="experience">
            <h3>Experience</h3>
            <ul>
                <li><strong>Grand Champion LKBB LOPTASIKU 8</strong> - UDINUS</li>
                <li><strong>Runner Up GAPAKSI v</strong> - SMA Negeri 4 Semarang</li>
                <li><strong>Runner UP LKBB Panglima TNI</strong> - AKPELNI</li>
                <li><strong>Grand Champion LKBB Porsimaptar</strong> - Akademi Kepolisian</li>
                <li><strong>IT Essentials</strong> - Cisco Networking Academy</li>
                <li><strong>AI Upskilling Program</strong> - Remote Skill Academy</li>
            </ul>
            </div>

            <div className="experience">
            <h3>Soft Skills</h3>
            <ul>
                <li><strong>Negotiation</strong></li>
                <li><strong>Emphaty</strong></li>
                <li><strong>Team Collaboration</strong></li>
                <li><strong>Problem Solving</strong></li>
                <li><strong>Accountability</strong></li>
                <li><strong>Positive Attitude</strong></li>
                
            </ul>
            </div>

            <div className="experience">
            <h3>Organizational Experience</h3>
            <ul>
                <li><strong>Paskibra SMP Negeri 9 Semarang – Treasurer (2022 – 2023) </strong>
                            Managed organization finances efficiently and responsibly.
                            Actively participated in flag ceremony and training events.</li>
                <li><strong>Paskibra SMK Negeri 7 Semarang – Chairman (2024 – 2025) </strong>
                            Led the organization and supervised programs and activities.
                            Trained members in discipline, teamwork, and leadership.
                            Developed strategic plans to enhance organizational performance.</li>
                
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
