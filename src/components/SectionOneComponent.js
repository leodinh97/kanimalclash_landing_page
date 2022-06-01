import React from 'react'
// import LandingPageBackground from '../assets/img/Background-Landing-Page2.png'
import VideoLandingPageBackground from '../assets/video/bg-ver-3.mp4';
import {useTranslation} from "react-i18next";

export default function SectionOneComponent() {

    const { t } = useTranslation()

  return (
    <section
      className="bg-image d-flex justify-content-center align-items-center sectionOne">
      {/*<img src={Logo} alt="Kanimal Clash" width={width/3} height={width/4.5}/>*/}
      {/*<img  className='position-absolute' style={{*/}
      {/*  top: height/5.5,*/}
      {/*  left: width/5*/}
      {/*}}  src={PandaGif} alt="Panda" width={width/8} height={width/8}/>*/}

      {/*<img  className='position-absolute' style={{*/}
      {/*  top: height/14,*/}
      {/*  right: width/5*/}
      {/*}}  src={BuffaloGif} alt="Panda" width={width/6} height={width/6}/>*/}

      {/*<img  className='position-absolute' style={{*/}
      {/*  top: height/2.5,*/}
      {/*  right: width/8,*/}
      {/*}}  src={RabbitGif} alt="Panda" width={width/6} height={width/6}/>*/}

      {/*<img  className='position-absolute' style={{*/}
      {/*  top: height/2,*/}
      {/*  left: width/8,*/}
      {/*  transform: 'rotate(360deg)'*/}
      {/*}}  src={LionGif} alt="Panda" width={width/5} height={width/5}/>*/}

      {/*  <img src={LandingPageBackground} alt=""/>*/}

        {/*<div className='video-layout'>*/}
            <video loop playsInline muted autoPlay="autoplay"
                   className="video-background">
                <source src={VideoLandingPageBackground} type='video/mp4'></source>
            </video>
        {/*</div>*/}
        <div className='position-absolute'>
        {/*<span className='text-white mint-now-button' style={{*/}
        {/*  paddingTop: 15,*/}
        {/*  paddingRight: width/15,*/}
        {/*  paddingBottom: 15,*/}
        {/*  paddingLeft: width/15*/}
        {/*}}>MINT NOW</span>*/}
          <button type="button" className="btn btn-dark sectionOne-button">{t('main_btn_mint')}</button>
      </div>
    </section>
  )
}
