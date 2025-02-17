import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fcee0a;
  color: red;
  position: relative;
  margin: auto;

  .black-line {
        width: 100%;
        height: 35px;
        background-image: url('./assets/images/line-black.svg');
        top: 0;
        position: absolute;
    }
`;

export const Section = styled.section`
  padding: 0px 20px;
  margin: auto;

  .title-glossary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 60px 0px 40px 0px;

    h1 {
      font-size: 65px;
      color: #000;
      background-clip: text;
    }
  }

  .content-separator-top {
    display: flex;
    justify-content: center;
  }

  .content-separator-bottom {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }

  .line-separator {
    width: 1320px;
    display: flex;
    border: 1px solid #ded207;
    margin-bottom: 40px;
  }

  .separator-left {
  border: 3px solid #ded207;
  height: 16px;
  width: 16px;
  margin-top: -7px;
  margin-right: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 16px;
    height: 2px;
    background-color: #ded207;
  }
}

  
.separator-right {
  border: 3px solid #ded207;
  height: 16px;
  width: 16px;
  margin-top: -7px;
  margin-left: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 16px;
    height: 2px;
    background-color: #ded207;
  }
}

  .content-glossary {
    color: #000;
    display: flex;
    gap: 20px;
    justify-content: center;

    .list {
      display: flex;
     
      .list-item {
        width: 100%;
      p {
      cursor: pointer;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      max-width: 272px;
      padding: 8px 16px;
      text-transform: uppercase;
      width: 100%;
      box-sizing: border-box;
    }

    p.selected {
      color: #fcee0a;
      background-color: #000;
    }
    } 
  }

  .about-image {
    width: 100%;

    .image {
      width: 100%;
      height: 400px;
      position: relative;
      
      clip-path: polygon(5% 100%, 0% 90%, 0% 0%, 100% 0%, 100% 100%);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

  .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
    }
  }

  h4 {
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
    text-align: justify;
    color: rgb(31, 31, 31);
    font-family: 'BlenderPro-Thin';
  }
  }
}

@media (max-width: 768px) {
  .about-image {
    border: 1px solid blue;
    .image {
      max-height: 300px;
      border: 1px solid red;
    }
  }

  .content-glossary {
    flex-direction: column;
  }
}
`