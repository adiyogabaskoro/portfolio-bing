    import React from "react";

    export default function Gallery() {
    const galleryItems = [
        {
        title: "Udinus Loptasiku 8",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/6.jpg",
        },
        {
        title: "Gapaksi V",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/2.jpg",
        },
        {
        title: "LKBB Panglima TNI Akpelni",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/10.jpg",
        },
        {
        title: "LKBB Porsimaptar",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/17.jpg",
        },
        {
        title: "Paskibra organization activities",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/13.jpg",
        },
        {
        title: "Pramuka organization activities",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/14.jpg",
        },
        {
        title: "Paskibra organization activities",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/15.jpg",
        },
        {
        title: "Paskibra organization activities",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/23.jpg",
        },
        {
        title: "Paskibra organization activities",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/19.jpg",
        },
        {
        title: "Practice FO",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/21.jpg",
        },
        {
        title: "Using Kali Linux",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/22.jpg",
        },
        {
        title: "Using Seeker",
        img: "https://raw.githubusercontent.com/adiyogabaskoro/portfolio-bing/main/public/images/24.jpg",
        },
        
    ];

    return (
        <div className="gallery">
        <h2>Gallery</h2>
        <div className="portfolio-grid">
            {galleryItems.map((item, i) => (
            <div key={i} className="portfolio-card">
                <img src={item.img} alt={item.title} />
                <div className="achievement-info">
                <h3>{item.title}</h3>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    }
