import React from 'react';
import { ImageSlot } from './ImageSlot';
import { Globe, Mail, Phone } from 'lucide-react';

interface HeaderProps {
  imageOverrides: Record<string, string>;
  onImageUploaded: (src: string, dataUrl: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  imageOverrides,
  onImageUploaded,
}) => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="logo-placeholder">
          <ImageSlot
            src="images/Logo2.png"
            alt="ME Instruments Logo"
            className="w-full h-full"
            overrideSrc={imageOverrides['images/Logo2.png']}
            onImageUploaded={onImageUploaded}
          />
        </div>
        
        <h1 className="header-title">ME Instruments</h1>
        <p className="subtitle">Инновационные решения для секвенирования нового поколения</p>
        <p className="distributor">Эксклюзивный дистрибьютор в России и СНГ — компания БиоЛайн</p>
        
        {/* Контакты — компактная сетка с кнопками */}
        <div className="contacts">
          {/* Сайт кнопкой */}
          <div className="contact-row">
            <a
              href="https://new.bioline.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-primary"
            >
              <Globe className="w-4 h-4" />
              <span>new.bioline.ru</span>
            </a>
          </div>

          {/* Телефоны */}
          <div className="contact-row contact-phones">
            <div className="contact-phone-item">
              <Phone className="w-3.5 h-3.5 opacity-80" />
              <a href="tel:+78123204949" className="contact-link-tel">
                8 (812) 320-49-49, доб. 335
              </a>
            </div>
            <span className="contact-separator">|</span>
            <div className="contact-phone-item">
              <a href="tel:+79313948298" className="contact-link-tel">
                8 (931) 394-82-98
              </a>
            </div>
          </div>

          {/* Email адреса в виде кнопок */}
          <div className="contact-row contact-emails">
            <a href="mailto:main@bioline.ru" className="contact-btn">
              <Mail className="w-4 h-4" />
              <span>main@bioline.ru</span>
            </a>
            <span className="contact-separator">|</span>
            <a href="mailto:pimenov@bioline.ru" className="contact-btn">
              <Mail className="w-4 h-4" />
              <span>pimenov@bioline.ru</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
