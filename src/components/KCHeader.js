import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Logo from "../assets/img/logo.png";
import '../css/kc_header.css';
import i18next from "i18next";
import JsCookie from "js-cookie";

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

export default function KCHeader() {

    const {t} = useTranslation()
    let initialLang = 'English'
    const langCookie = JsCookie.get('i18next')
    // eslint-disable-next-line array-callback-return
    languages.forEach(l => {
        if (l.code === langCookie) {
            initialLang = l.name;
        }
    })
    const [langText, setLangText] = useState(initialLang);

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark kc-navbar-color">
                <div className="container-fluid kc-navbar-color">
                    <div className="position-relative">
                        <a className="navbar-brand" href="#">
                            <img className="logo-header" src={Logo} alt="" />
                        </a>
                        <button className="position-absolute navbar-toggler kc-navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse kc-navbar-collapse" id="navbarSupportedContent">
                        <div className="text-center">
                            <a className="navbar-brand kc-navbar-brand" href="#">Kanimal Clash</a>
                        </div>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="kc-navbar-item nav-item p-3">
                                <a className="nav-link" href="#">{t('nav_menu_nft_sale')}</a>
                            </li>
                            <li className="kc-navbar-item nav-item p-3">
                                <a className="nav-link" href="#">{t('nav_menu_marketplace')}</a>
                            </li>
                            <li className="kc-navbar-item nav-item p-3">
                                <a className="nav-link" href="#">{t('nav_menu_ludena_protocol')}</a>
                            </li>
                            <li className="kc-navbar-item nav-item p-3">
                                <a className="nav-link" href="#">{t('nav_menu_docs')}</a>
                            </li>
                            <li className="kc-navbar-item nav-item p-3">
                                <div className="dropdown">
                                    <button className="btn kc-navbar-btn-dropdown-lang-menu dropdown-toggle" type="button" id="dropdownLanguageBtn"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {langText}
                                    </button>
                                    <div id="dropdownLanguage" className="dropdown-menu" aria-labelledby="dropdownLanguageBtn">
                                        {languages.map(({code, name, country_code}) => (
                                            <a key={country_code} className="dropdown-item" href="">
                                                <button className="dropdown-item items_dropdown_language"
                                                        onClick={(e) => {
                                                            e.preventDefault();
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
                        <div className="ms-auto text-center">
                            <button className="btn btn-white kc-header-btn">{t('nav_btn_coming')}</button>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}