import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fcee0a;

  .black-line {
    width: 100%;
    height: 35px;
    background-image: url('./assets/images/line-black.svg');
    rotate: calc(180deg);
  }
`

export const Section = styled.section`
  padding: 0px 20px;
  margin: auto;

  .title-about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px 0px 20px 0px;

    h1 {
      font-size: 55px;
    }

    img {
      width: 200px;
    }
  }
  
  .line-content {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .text-about {
    font-size: 45px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 35px 0px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .title-about {
      h1 {
        font-size: 40px;
      }

      img {
        width: 150px;
      }
    }

    .text-about {
        gap: 30px;
    }

    .text-about {
      font-size: 30px;
    }
  }
`;
