import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
// import 'aos/dist/aos.css';

const FooterContainer = styled.footer`
  color: #ffffff;
  padding: 10px 0;
  text-align: center;
`;

const ContactDetails = styled.div`
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  font-size: 14px;
`;

const SocialIcons = styled.div`
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  font-size: 40px;
  margin: 0 10px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00aced; /* Change to your desired hover color */
  }
`;

const DevelopedBy = styled.p`
  font-size: 12px;
`;

AOS.init();

function Footer() {
  return (
    <FooterContainer id="contact">
      <p style={{ textAlign: 'center', fontSize: '12px', padding: '10px'}}>Risk Disclaimer : Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts .</p>
      <ContactDetails>
        <ContactInfo>© 2023 FX BLUEPRINT</ContactInfo>
      </ContactDetails>

      <SocialIcons>
        <SocialIcon href="https://www.instagram.com/fx_blueprint1/">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.tiktok.com/@fx_blueprint">
        <FaTiktok />
        </SocialIcon>
        <SocialIcon href="https://wa.me/0812308278">
        <FaWhatsapp />

        </SocialIcon>
      </SocialIcons>

      <DevelopedBy>Developed by Uncharted Peak</DevelopedBy>
    </FooterContainer>
  );
}

export default Footer;
