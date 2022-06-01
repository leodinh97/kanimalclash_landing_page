import React, {useState} from 'react'
import Logo from '../assets/img/logo.png'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import 'flag-icon-css/css/flag-icons.min.css';

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'us'
    },
    {
        code: 'ko',
        name: '한국인',
        country_code: 'kr'
    }
]

export default function HeaderComponent() {

    const { t } = useTranslation()

    const initialLang = 'Languages';
    const [langText, setLangText] = useState(initialLang);

  return (
    <header id='header' className='w-100'>
        <nav className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='p-1'>
                <img src={Logo} alt="Kanimal Clash" className='logo-header mb-2'/>
              </div>
              <ul className='d-flex no-padding-left'>
                <li className='header-nav-item col-md'>{t('nav_menu_nft_sale')}</li>
                <li className='header-nav-item'>{t('nav_menu_marketplace')}</li>
                <li className='header-nav-item'>{t('nav_menu_ludena_protocol')}</li>
                <li className='header-nav-item'>{t('nav_menu_docs')}</li>
                <li className='header-nav-item'>
                    <div className="dropdown">
                        <button className="btn kc-navbar-btn-dropdown-lang-menu dropdown-toggle" type="button" id="dropdownLanguageBtn"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {langText}
                        </button>
                        <div id="dropdownLanguage" className="dropdown-menu" aria-labelledby="dropdownLanguageBtn">
                            {languages.map(({code, name, country_code}) => (
                                <a key={country_code} className="dropdown-item" href="">
                                <button className="dropdown-item items_dropdown_language"
                                        onClick={() => {
                                            i18next.changeLanguage(code);
                                            setLangText(name);
                                        }}>
                                    <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                    {name}
                                </button>
                                </a>
                             ))}
                        </div>
                    </div>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end header-wrap-button">
                <button className="btn btn-white header-button">{t('nav_btn_coming')}</button>
            </div>
        </nav>
    </header>
  )
}
