import React from "react";
import "../css/kc_section7_modal.css";
import {useTranslation} from "react-i18next";
import Section7BackgroundImage from "../assets/img/story_bg.jpg"

export default function KCSection7Modal() {

    const { t } = useTranslation()

    return (
        <section id="section_7" className="kc-text-white align-items-center">
            <div className="position-absolute kc-section-7-wrap-bg-img">
                <img src={Section7BackgroundImage} alt="" className="kc-section-7-bg-img"/>
            </div>
            <div className="position-absolute container kc-section-7-wrap-text">
                <div className="row kc-section-7-text">
                    <div className="col-12 kc-section-title kc-section-7-title">
                        Story
                    </div>
                    <div className="col-12 kc-section-body kc-section-7-body">
                        {t('story_body_p1')}
                    </div>
                    <div className="col-12 kc-section-body kc-section-7-body">
                        {t('story_body_p2')}
                    </div>
                    <div className="col-12 kc-section-body kc-section-7-body">
                        {t('story_body_p3')}
                    </div>

                    <div className='position-absolute kc-section-7-btn'>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://medium.com/ludena-protocol/kanimal-clash-b3d1a2de607';
                        }}
                                type="button"
                                className="btn sectionSeven-button">
                            {t('story_btn')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}