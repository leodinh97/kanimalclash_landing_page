import React from "react";
import "../css/kc_section6_text.css";
import TreasurePlay2EarnVideo from "../assets/video/Treasure-of-collapsed-ver-4.mp4";
import {useTranslation} from "react-i18next";

export default function KCSection6Text() {

    const { t } = useTranslation()

    return (
        <section id="section_6" className="justify-content-center align-items-center kc-text-white text-center">
            <video loop playsInline muted autoPlay="autoplay" className="video-background">
                <source src={TreasurePlay2EarnVideo} type='video/mp4'></source>
            </video>
            <div className="container position-absolute">
                    <div className="row ">
                        <div className="col-12 kc-section-title kc-section-6-title">
                            {t('play2earn_title')}
                        </div>
                        <div className="col-12 kc-section-6-sub-title kc-section-sub-title">
                            {t('play2earn_sub')}
                        </div>
                        <div className="col-12 kc-section-6-body kc-section-body">
                            {t('play2earn_body')}
                        </div>
                    </div>
            </div>
        </section>
    )
}