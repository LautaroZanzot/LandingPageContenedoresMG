import React from 'react';
import WhatsAppIco from "../src/assets/whatsapp.png";

const WhatsAppIcon = () => {
  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} className='z-50'>
      <a href="YOUR_WHATSAPP_CHAT_URL_HERE" target="_blank" rel="noopener noreferrer">
        <img src={WhatsAppIco} alt="WhatsApp" style={{ width: '48x', height: '48px', cursor: 'pointer' }} />
      </a>
    </div>
  );
}

export default WhatsAppIcon;