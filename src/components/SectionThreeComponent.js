import React from 'react'
import useWindowSize from '../utils/getSize'
import ImageCard from '../assets/img/Fighting.png'
import ImageCard1 from '../assets/img/sword.png'
import ImageCard2 from '../assets/img/Capsule1.png'
import ImageCard3 from '../assets/img/tournament.png'
import KCCharacter1 from '../assets/img/kc-character1.png'
import KCCharacter2 from '../assets/img/kc-character2.png'
import {useTranslation} from "react-i18next";

export default function SectionThreeComponent () {

    const [width] = useWindowSize();
    const { t } = useTranslation()

    return (
      <div id='sectionThree' className='sectionThree' style={{
            height: width*426/727,
            justifyContent: 'center',
            alignContent: 'center',
            display: 'grid',
            alignItems: 'center',
            width: '100vw',
        }}>
            <div className='container-fluid position-relative avoid-clicks'>
                <h1 className="text-center text-white sectionThree-title1 sectionThree-title">{t('kanimal_clash_title_kanimal_clash')}</h1>
                <h4 className="text-center text-white sectionThree-title2 sectionThree-title">{t('kanimal_clash_sub')}</h4>
                <p className='text-center text-white sectionThree-content'>{t('kanimal_clash_body')}</p>
                <div className='container sectionThree-image justify-content-center'>
                    <div className="row">
                        <img src={ImageCard} alt=''/>
                    </div>
                    <div className=" sectionThree-wrap-image">
                        <div className="kc-image-item">
                            <img src={ImageCard1} alt='' />
                            <div>
                                <h3 className="text-center pt-3 p-0 kc-image-title">{t('kanimal_clash_battle_title')}</h3>
                                <p className="text-center pt-0 pb-4 p-5 kc-image-content">
                                    {t('kanimal_clash_battle_body')}
                                </p>
                            </div>
                        </div>
                        <div className="kc-image-item">
                            <img src={ImageCard2} alt='' />
                            <div>
                                <h3 className="text-center pt-3 p-0 kc-image-title">{t('kanimal_clash_breeding_title')}</h3>
                                <p className="text-center pt-0 pb-4 p-5 kc-image-content">
                                    {t('kanimal_clash_breeding_body')}
                                </p>
                            </div>
                        </div>
                        <div className="kc-image-item">
                            <img src={ImageCard3} alt='' />
                            <div>
                                <h3 className="text-center pt-3 p-0 kc-image-title">{t('kanimal_clash_tournaments_title')}</h3>
                                <p className="text-center pt-0 pb-4 p-5 kc-image-content">
                                    {t('kanimal_clash_tournaments_body')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-absolute kc-character-1">
                    <img src={KCCharacter1} alt=''/>
                </div>
                {/*<div className="position-absolute kc-character-2">*/}
                {/*    <img src={KCCharacter2} alt=''/>*/}
                {/*</div>*/}
            </div>
      </div>

    )
}
