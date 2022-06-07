import React from "react";
import '../css/kc_section3_parallax.css';
import {useTranslation} from "react-i18next";
import ImageCard from "../assets/img/Fighting1.png";
import ImageCard1 from '../assets/img/sword.png'
import ImageCard2 from '../assets/img/Capsule1.png'
import ImageCard3 from '../assets/img/tournament.png'

export default function KCSection3Parallax() {

    const { t } = useTranslation()

    return (
        <section id="section_3">
            <div className="kc-section-3-title kc-section-title kc-text-white">
                {t('kanimal_clash_title_kanimal_clash')}
            </div>
            <div className="kc-section-3-sub-title kc-section-sub-title kc-text-white">
                {t('kanimal_clash_sub')}
            </div>
            <div className="kc-section3-body kc-section-body kc-text-white">
                {t('kanimal_clash_body')}
            </div>

            <div className="container kc-text-white text-center mt-3 section-3-imgs">
                <div className="row mt-1 mb-3 section-3-large-wrap-img">
                    <div className="col-12">
                        <img src={ImageCard} className="section-3-large-img" alt="..."/>
                    </div>
                </div>
                <div className="row mt-3 mb-1">
                    <div className="col-md-4 col-12 pt-2 pb-2">
                        <div className="card kc-card">
                            <img src={ImageCard1} className="card-img-top kc-card-img-top" alt="..."/>
                            <h5 className="card-title kc-card-title">
                                {t('kanimal_clash_battle_title')}
                            </h5>
                            <div className="card-body kc-card-body">
                                {t('kanimal_clash_battle_body')}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 pt-2 pb-2">
                        <div className="card kc-card">
                            <img src={ImageCard2} className="card-img-top kc-card-img-top" alt="..."/>
                            <h5 className="card-title kc-card-title">
                                {t('kanimal_clash_breeding_title')}
                            </h5>
                            <div className="card-body kc-card-body">
                                {t('kanimal_clash_breeding_body')}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 pt-2 pb-2">
                        <div className="card kc-card">
                            <img src={ImageCard3} className="card-img-top kc-card-img-top" alt="..."/>
                            <h5 className="card-title kc-card-title">
                                {t('kanimal_clash_tournaments_title')}
                            </h5>
                            <div className="card-body kc-card-body">
                                {t('kanimal_clash_tournaments_body')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}