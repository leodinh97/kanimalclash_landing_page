import React from "react";
import "../css/kc_section5_cards.css";
import {useTranslation} from "react-i18next";
import card4 from "../assets/img/card4.png";
import card1 from "../assets/img/card1.png";
import card3 from "../assets/img/card3.png";
import card2 from "../assets/img/card2.png";
import ImageEffectCard from "../assets/img/effect_cards.png";

export default function KCSection5Cards() {

    const { t } = useTranslation()

    return (
        <section id="section_5" className="kc-text-white text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 kc-section-5-title kc-section-title">
                        {t('collect_nfts_title')}
                    </div>
                    <div className="col-12 kc-section-5-sub-title kc-section-sub-title">
                        {t('collect_nfts_sub')}
                    </div>
                    <div className="col-12 kc-section-5-body kc-section-body">
                        {t('collect_nfts_body')}
                    </div>

                    <div className="col-12 kc-section-5-wrap-cards">

                        <div className='container justify-content-center'>

                            <div className="position-absolute section-5-card-item ">
                                <img id="effect-card4" height="538px" preserveAspectRatio="xMidYMid slice"
                                     src={card4} className=""></img>
                            </div>
                            <div className="position-absolute section-5-card-item">
                                <img id="effect-card1" height="538px" preserveAspectRatio="xMidYMid slice"
                                     src={card1} className=""></img>
                            </div>
                            <div className="position-absolute section-5-card-item">
                                <img id="effect-card3" height="538px" preserveAspectRatio="xMidYMid slice"
                                     src={card3} className=""></img>
                            </div>
                            <div className="position-absolute section-5-card-item">
                                <img id="effect-card2" height="538px" preserveAspectRatio="xMidYMid slice"
                                     src={card2} className=""></img>
                            </div>

                            <div id="effect-card" className="position-absolute effect-card-out">
                                <img id="effect-flash" src={ImageEffectCard} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}