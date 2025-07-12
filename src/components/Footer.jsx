import React from 'react'
import './../styles/Footer.css'
import { FaHeart, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='Footer'>
        <div className="oneFooter">
            <h1 className='h1kel'>KelKel</h1>
            <p>Адрес:<br/><span>г.Каракол,ул. Токтогула 242, магазин "Kel Kel"</span></p>
            <p>Контакты:<br/><span>0505 590 590</span></p>
            <p>WhatsApp:<br/><span>0505 590 590</span></p>
            <p>График работы:<br/><span>9:00 - 19:00 (ежедневно)</span></p>
            <h1 className='we'>Мы в соцсетях:</h1>
            <div className="icons2">
                <FaTelegram className='icon2'/>
                <FaYoutube className='icon2'/>
                <FaWhatsapp className='icon2'/>
                <FaInstagram className='icon2'/>
            </div>
            <p className='kelkelEnd'>2025 kelkel. Все права защищены.</p>
        </div>
        <div className="twoFooter">
            <h1>Something went <br/> wrong</h1>
            <p>We are already looking into what happended and <br/> will fix it shortly.<br/>Please try again in few minutes.</p>
        </div>
    </div>
  )
}

export default Footer