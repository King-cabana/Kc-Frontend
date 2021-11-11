import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {Button} from '../../globalStyles'
import { FooterContainer,
    FooterSubscription,  
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIcons,
    SocialIconLink
    
             } from './Footer.element'

const footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Join our exclusive membership to
                 receive the latest news and trends
                </FooterSubHeading>
            <FooterSubText>
            You can unsubscribe at any time.
            </FooterSubText>
            
              <Form>
                <FormInput name="email" type="email" placeholder="First Name"/>
              
                <Button fontBig>Sign up</Button>
            </Form>
        
            </FooterSubscription>
            
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinksItems>

                    <FooterLinksTitle>
                    About Us
                    </FooterLinksTitle>
                    <FooterLink to="/sign-up"> Wisdom for today</FooterLink>
                    
                   
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                    Contact Us
                    </FooterLinksTitle>
                    <FooterLink to="/sign-up"> Wisdom for today</FooterLink>
                    
                    
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Video
                    </FooterLinksTitle>
                    <FooterLink to="/sign-up"> Wisdom for today</FooterLink>
                   
                    
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Social media
                    </FooterLinksTitle>
                    <FooterLink to="/sign-up"> Wisdom for today</FooterLink>
                    
                   
                    </FooterLinksItems>



                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon/>
                                King Cabana
                        </SocialLogo>
                        <WebsiteRights>King cabana 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                            <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                            <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                            <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                            <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkdin">
                            <FaLinkedin/>
                            </SocialIconLink>
                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

        </FooterContainer>
    )
}
export default footer
