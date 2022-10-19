import React from 'react';
import { ICFacebook, ICInstagram, ICLinkedIn, ICTwitter, ICWhatsApp, ICYoutube, LogoMern } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon' />
        </div>
    )
}
const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={LogoMern} alt="logo-nur-coding" />
                <p>Nur Coding</p>
            </div>
            <div className='social-wrapper'>
                <Icon img={ICFacebook} />
                <Icon img={ICTwitter} />
                <Icon img={ICInstagram} />
                <Icon img={ICWhatsApp} />
                <Icon img={ICLinkedIn} />
                <Icon img={ICYoutube} />
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer;
