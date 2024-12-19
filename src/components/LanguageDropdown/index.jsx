import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem('language') || 'en';
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="flex flex-col items-center gap-2">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="en">{'English'}</option>
        <option value="hi">{'हिन्दी'}</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
