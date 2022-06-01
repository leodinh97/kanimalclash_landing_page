import React from "react";
import {useTranslation} from "react-i18next";
import TreasurePlay2EarnVideo from "../assets/video/Treasure-of-collapsed-ver-3.mp4";

export default function SectionSixComponent() {

    const { t } = useTranslation()

    return (
        <section className="d-flex justify-content-center align-items-center sectionSix">
            <video loop playsInline muted autoPlay="autoplay"
                   className="video-background">
                <source src={TreasurePlay2EarnVideo} type='video/mp4'></source>
            </video>
            <div className="container">
                <div className="sectionSix-wrap-content">
                    <h1 className="text-center text-white sectionSix-title1 sectionSix-title">{t('play2earn_title')}</h1>
                    <h4 className="text-center text-white sectionSix-title2 sectionSix-title">{t('play2earn_sub')}</h4>
                    <p className='text-center text-white sectionSix-content'>{t('play2earn_body')}</p>
                    {/*<div className='container sectionThree-image justify-content-center'>*/}
                    {/*    <div className="row">*/}
                    {/*        <img src={ImageCard} alt=''/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </section>
    )
}