/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Section } from './styles'
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord, FaArrowLeft  } from "react-icons/fa";

function Footer() {

    const lineContent = './assets/images/line-section.png'
    return (
        <Container>
            <Section>
                <div className='title-newsletter'>
                    <h1>Sign up for the EDGERUNNERS newsletter here:</h1>
                </div>

                <div className='newsletter'>
                    <form action="" className='form-newsletter'>
                        <div className='inputEmail'>
                            <input type="email" placeholder='Enter your email address' />
                            <button className='btn-newsletter' disabled></button>
                        </div>
                        <div className='checkboxEmail'>
                            <input type="checkbox" />
                            <p>I would like to receive news, special offers and other information from CD PROJEKT and I am 16 years old or older.</p>
                        </div>
                        <p>CD PROJEKT will be responsible for your personal data. For more information please check our <u>CD PROJEKT Privacy Policy</u></p>
                    </form>
                </div>
                <div className="yellow-line"></div>
                <div className='line-content'>
                    <img src={lineContent} alt="line" />
                </div>
                <div className='social-media'>
                    <h4>Stay in sync with every fresh news-blast. <br /> More updates hittin the Net soon:</h4>
                    <div className='medias'>
                        <div className='medias-left'>
                            CD PROJEKT RED
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaDiscord /></a>
                        </div>
                        <div className='medias-right'>
                            NETFLIX
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className='line-separator'></div>
                <div className='sem-ideia'>
                    <p>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® and Cyberpunk: Edgerunners® are registered trademarks of CD PROJEKT S.A. © 2022 CD </p>
                    <p>PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their respective owners.</p>
                    <div className='links-privacy'>
                        <a href="">Terms of Use & Privacy Policy <FaArrowLeft /></a>
                        <a href="">Cookie Declaration <FaArrowLeft /></a>
                    </div>
                </div>
            </Section>
        </Container>
    )
}

export default Footer