import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import translate from '../../assets/icons/translate.svg'

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <section className="language-selector">
      <button 
        className="language-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={translate} alt="Language" />
        <p>{currentLanguage.name}</p>
      </button>

      {isOpen && (
        <div className="language-selector-dropdown"> 
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="language-option"
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};