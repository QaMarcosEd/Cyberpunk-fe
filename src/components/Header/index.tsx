import { Container } from "./styles";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'


export default function Header() {
    const imageurl = './assets/images/header.jpg'

    return (
        <Container $imageurl={imageurl}>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaGithub /></a>

            <div className="yellow-line"></div>
        </Container>
    );
}