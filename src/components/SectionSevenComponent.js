import React from "react";
import {useTranslation} from "react-i18next";

export default function SectionSevenComponent() {

    const { t } = useTranslation()

    return (
        <section className="d-flex justify-content-center align-items-center sectionSeven">
            <div className="container">
                <h1 className="text-center text-white sectionSeven-title1 sectionSeven-title">Story</h1>
                <p className='text-center text-white sectionSeven-content'>{t('story_body_p1')}</p>
                <p className='text-center text-white sectionSeven-content'>{t('story_body_p2')}</p>
                <p className='text-center text-white sectionSeven-content'>{t('story_body_p3')}</p>
                <div className='position-absolute'>
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

        </section>
    )
}