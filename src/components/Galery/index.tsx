import React, { useEffect } from 'react'
import Image from 'next/image'
import { Container, Section } from './styles'

import 'aos/dist/aos.css';
import AOS from 'aos';

function Galery() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <Container>
            <Section>
                <div className='title-galery'>
                    <h1>Galery</h1>
                </div>
                <div className='galery'>

                    <div className="image">
                        <Image src={`/assets/images/david.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="image">
                        <Image src={`/assets/images/lucy.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="image">
                        <Image src={`/assets/images/maine.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="image">
                        <Image src={`/assets/images/becca.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="image">
                        <Image src={`/assets/images/pilar.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="image">
                        <Image src={`/assets/images/kiwi.jpg`} alt='teste' fill />
                        <div className="gradient-overlay"></div>
                    </div>
                </div>
            </Section>
        </Container>
    )
}

export default Galery
