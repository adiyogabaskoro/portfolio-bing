    import React from "react";

    export default function Achievement() {
    const achievements = [
        {
        title: "Grand Champion LKBB LOPTASIKU 8",
        desc: "Awarded as the overall champion at UDINUS Semarang for outstanding variation formation and team coordination.",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/6.jpg",
        },
        {
        title: "Runner Up GAPAKSI V",
        desc: "Secured 2nd place at the national level paskibra competition at SMA Negeri 4 Semarang.",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/18.JPG",
        },
        {
        title: "Grand Champion LKBB Porsimaptar",
        desc: "Achieved the highest honor at the LKBB Porsimaptar contest hosted by the Indonesian Police Academy.",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/3.jpg",
        },
        {
        title: "Runner Up LKBB Panglima TNI",
        desc: "Achieved 2nd place in the city level Paskibra competition hosted by the Indonesian National Armed Forces (TNI).",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/12.jpg",
        },
        {
        title: "IT Essentials - Cisco Networking Academy",
        desc: "Completed the official Cisco certification program covering computer hardware and networking fundamentals.",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/5.png",
        },
        {
        title: "AI Upskilling Program - Remote Skill Academy",
        desc: "Participated in an intensive AI learning program focusing on Python and fundamental machine learning concepts.",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/4.png",
        },
        
    ];

    return (
        <div className="achievements">
        <h2>Achievements</h2>
        <div className="portfolio-grid">
            {achievements.map((a, i) => (
            <div key={i} className="portfolio-card">
                <img src={a.img} alt={a.title} />
                <div className="achievement-info">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }
