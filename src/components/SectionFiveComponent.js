import React from "react";
// import ImageCard from "../assets/img/card_03.png";
import card1 from "../assets/img/card1.png"
import card2 from "../assets/img/card2.png"
import card3 from "../assets/img/card3.png"
import card4 from "../assets/img/card4.png"
import ImageEffectCard from "../assets/img/effect_cards.png";
import {useTranslation} from "react-i18next";

export default function SectionFiveComponent() {

    const { t } = useTranslation()

    return (
        <section id="sectionFive" className="d-flex justify-content-center align-items-center sectionFive">
            <div className="container">
                <div className="sectionFive-wrap-content">
                    <h1 className="text-center text-white sectionFive-title1 sectionFive-title">{t('collect_nfts_title')}</h1>
                    <h4 className="text-center text-white sectionFive-title2 sectionFive-title">{t('collect_nfts_sub')}</h4>
                    <p className='text-center text-white sectionFive-content'>{t('collect_nfts_body')}</p>
                    <div className='container sectionThree-image justify-content-center'>
                        {/*<div className="row position-absolute">*/}
                        {/*    <img src={ImageCard} alt=''/>*/}
                        {/*</div>*/}


                        <div className="position-absolute sectionFive-card-item ">
                            <img id="effect-card4" width="358px" height="538px" preserveAspectRatio="xMidYMid slice"
                                 src={card4} className=""></img>
                        </div>
                        <div className="position-absolute sectionFive-card-item">
                            <img id="effect-card1" width="358px" height="538px" preserveAspectRatio="xMidYMid slice"
                                   src={card1} className=""></img>
                        </div>
                        <div className="position-absolute sectionFive-card-item">
                            <img id="effect-card3" width="358px" height="538px" preserveAspectRatio="xMidYMid slice"
                                 src={card3} className=""></img>
                        </div>
                        <div className="position-absolute sectionFive-card-item">
                            <img id="effect-card2" width="358px" height="538px" preserveAspectRatio="xMidYMid slice"
                                 src={card2} className=""></img>
                        </div>

                        <div id="effect-card" className="position-absolute text-end effect-card-out">
                            <img src={ImageEffectCard} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}