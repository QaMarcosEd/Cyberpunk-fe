/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container, Section } from './style'

function About() {

    const netflixLogo = './assets/images/netflix.svg'
    const lineContent = './assets/images/line-section.png'
    return (
        <Container>
            <Section>
                <div className='title-about'>
                    <h1>Now available on</h1>
                    <img src={netflixLogo} alt="Logo Netflix" />
                </div>

                <div className='line-content'>
                    <img src={lineContent} alt="line" />
                </div>

                <div className='text-about'>
                    <p>
                        Cyberpunk: Edgerunners tells a standalone, 10-episode <br />
                        story about a street kid trying to survive in atechnology <br />
                        and body modification-obsessed city of the future. <br />
                    </p>

                    <p>
                        Having everything to lose, he chooses to stay alive by <br />
                        becoming an edgerunner—a mercenary outlaw also known <br />
                        as a cyberpunk. <br />
                    </p>
                </div>
            </Section>
            <div className="black-line"></div>
        </Container>
    )
}

export default About