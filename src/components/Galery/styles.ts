import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #000;
`;

export const Section = styled.section`
  padding: 0px 20px 100px 20px;
  margin: auto;

  .title-galery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 40px 0px;

    h1 {
      font-size: 60px;
      background: linear-gradient(to bottom, #41FE79, #E8FF66);
      background-clip: text;
      color: transparent;
    }
  }

  .galery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .image {
      width: 100%; /* Utilize 100% de largura para responsividade */
      max-width: 428px; /* Adicione um max-width para evitar esticamento em telas maiores */
      height: 250px;
      position: relative;
      overflow: hidden;
      transition: 0.5s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Use object-fit: contain; para manter as proporções e evitar cortes */
      }

      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .galery {
      .image {
        max-width: 100%; /* Ajuste para telas menores */
      }
    }
  }
`;
