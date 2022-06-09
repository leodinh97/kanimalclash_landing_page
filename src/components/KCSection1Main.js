import React from "react";
import VideoLandingPageBackground from "../assets/video/bg-ver-5.mp4";
import '../css/kc_section1_main.css';
import {useTranslation} from "react-i18next";
import Logo from "../assets/img/logo.png";

export default function KCSection1Main() {

    const {t} = useTranslation()

    return (
        <section id="section_1">
            <div className="kc-video-background">
                <video loop playsInline muted autoPlay="autoplay">
                    <source src={VideoLandingPageBackground} type='video/mp4'></source>
                </video>
            </div>

            <div className="kc-logo-caption">
                <div className='p-1'>
                    <img src={Logo} alt="Kanimal Clash" className='mb-2 animate__heartBeat'/>
                </div>
            </div>
            <div className="kc-video-caption">
                <button type="button" className="btn btn-dark kc-section1-button">{t('main_btn_mint')}</button>
                <button className="btn btn-white kc-section1-button">{t('nav_btn_coming')}</button>
            </div>
        </section>
    )
}