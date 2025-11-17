import React from 'react';
import download from '../../assets/icons/download.svg';
import { useTranslation } from 'react-i18next';
import '../../assets/css/ui/download-btn.css';

export const DownloadCVButton = () => {
    const { t } = useTranslation();

    return (
        <a href="/Portafolio/cv.pdf" download>
            <button className="download-cv-btn">
                <img src={download} alt="" /> {t('download')}
            </button>
        </a>
    );
};
