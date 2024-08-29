import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaWaze
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  InfoSection,
  InfoTitle,
  InfoText
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Mystic Ice Cream</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/mysticartisanicecream/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/mystic_artisanicecream/?hl=en' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.google.com/maps/place/Mystic+Artisan+Ice+Cream/@32.0822818,34.7714135,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4d669726eb4f:0xfaf60e3005ff0690!8m2!3d32.0822818!4d34.7739884!16s%2Fg%2F11mw7h5rv3?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D' target='_blank' aria-label='Location'>
                <FaGoogle />
              </SocialIconLink>
              <SocialIconLink href='https://www.waze.com/he/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91/%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95/mystic-artisan-ice-cream?to=place.ChIJT-sml2ZNHRURkAb_BTAO9vo' target='_blank' aria-label='Location'>
                <FaWaze />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <InfoSection>
          <InfoTitle>We Are Open</InfoTitle>
          <InfoText>Tuesday: 10:30 am–11 pm</InfoText>
          <InfoText>Wednesday: 10:30 am–11 pm</InfoText>
          <InfoText>Thursday: 10:30 am–11 pm</InfoText>
          <InfoText>Friday: 10:30 am–4:30 pm</InfoText>
          <InfoText>Saturday: 11 am–11 pm</InfoText>
          <InfoText>Sunday: 10:30 am–11 pm</InfoText>
          <InfoText>Monday: 10:30 am–11 pm</InfoText>
          <br />
          <InfoTitle>Contact</InfoTitle>
          <InfoText>Address: דיזנגוף 138, תל אביב-יפו</InfoText>
          <InfoText>Phone: 03-687-0775</InfoText>
        </InfoSection>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
