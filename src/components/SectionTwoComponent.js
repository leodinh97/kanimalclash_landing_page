import React from 'react'
import VideoTeaserGame from '../assets/video/Kanimal-Clash-P2E-Game-Official-Teaser.mp4'

export default function SectionTwoComponent() {

  return (
    <section id='sectionTwo' className='sectionTwo p-5 justify-content-center align-item-center'>
         <div className='justify-content-center align-item-center background-video-section-two'>
             {/*<img src={VideoBackground} alt=""/>*/}
           <div className='video-layout'>
              <video autoPlay loop playsInline controls>
                <source src={VideoTeaserGame} type='video/mp4'></source>
              </video>
            </div>
         </div>
    </section>
  )
}
