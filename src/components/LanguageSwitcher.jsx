import React from 'react';
import { useTranslation } from 'react-i18next';
import { setDirection } from '../utils/setDirection';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const switchLang = (lang) => {
        i18n.changeLanguage(lang);
        setDirection(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLang("en")}
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                EN
            </button>
            <button
                onClick={() => switchLang("ar")}
                className={`px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                AR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
