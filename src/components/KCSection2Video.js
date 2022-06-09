import React from "react";
import '../css/kc_section2_video.css';
import '../css/index.css';
import '../js/index.js';
import VideoTeaserGame from "../assets/video/Kanimal-Clash-P2E-Game-Official-Teaser.mp4";

export default function KCSection2Video() {

    return (
        <section id="section_2" className="justify-content-center align-item-center">
            <div className='justify-content-center align-item-center background-video-section-2'>
                {/*<img src={VideoBackground} alt=""/>*/}
                <div className='video-layout'>
                    <video autoPlay loop playsInline controls muted id="kc-sc2-video">
                        <source src={VideoTeaserGame} type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </section>
    )
}