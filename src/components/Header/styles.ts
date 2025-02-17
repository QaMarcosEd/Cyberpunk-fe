import styled from 'styled-components';

interface ContainerProps {
    $imageurl: string;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${props => props.$imageurl});
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 500px) {
        flex-direction: row;
    }

    a {
        padding: 1px 15px;
        color: #fcee0a;
        font-size: 40px;
        margin-left: auto;
        transition: all 0.4s;
    }

    a:hover {
        transform: scale(1.2);
    }

    .yellow-line {
        width: 100%;
        height: 35px;
        background-repeat: repeat-x;
        background-image: url('./assets/images/line-yellow.svg');
        transform: rotate(180deg);
        position: absolute;
        bottom: 0;
    }

    @media (max-width: 500px) {
        a {
            margin-left: 0;
            margin-top: auto;
            padding: 30px 12px;
        }
    }
`