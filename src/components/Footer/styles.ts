import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fcee0a;
  color: #000;
  position: relative;
  margin: auto;

  .line-content {
        width: calc(100% + 160px); /* 80px de padding para a esquerda e 80px para a direita */
        display: flex;
        justify-content: center;
        margin-left: -80px; /* Anula o padding da Section */
        padding-top: 40px;
        padding-bottom: 30px;
        img {
            width: 100%;
        }
    }
`;

export const Section = styled.section`
  padding: 0px 20px;
  margin: auto;
  

  .title-newsletter {
    padding: 5px 0 35px 0;

    h1 {
      font-size: 40px;
      line-height: 1;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .newsletter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;

    .form-newsletter {
      width: 600px;

      .inputEmail {
        display: flex;
        width: 100%;
        gap: 15px;
        margin-bottom: 15px;

        input {
          border: 2px solid #000;
          font-size: 22px;
          line-height: 24px;
          padding: 14px 20px;
          background-color: #fcee0a;
          width: 100%;

          &:focus {
            outline: none;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            

            &::placeholder {
            transform: translateY(-25px);
            font-size: 16px;
      }
          }
          
        }

        .btn-newsletter {
          border: none;
          background: linear-gradient(225deg, #000 92%, transparent 0);
          color: #fcee0a;
          height: 56px;
          width: 100px;
        }
      }

      .checkboxEmail {
        gap: 5px;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 1fr;
        line-height: 24px;
        font-size: 20px;
        
        p {
          font-family: 'BlenderPro-Thin';
        }

        input {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          border: 2px solid #000;
          background-color: #fcee0a;
          -moz-appearance: none;
          position: relative;

          &:checked {
            background-color: #000;
          }

          &:checked::before {
            border-bottom: 2px solid #fcee0a;
            border-left: 2px solid #fcee0a;
            content: "";
            height: 10px;
            left: calc(50% - 10px);
            top: calc(50% - 10px);
            transform: rotate(-42deg);
            width: 16px;
            position: absolute;
          }
        }
      }  
      > p {
        margin-top: 25px;
        margin-left: 40px;
        font-family: 'BlenderPro-Thin';

        u {
          font-family: 'BlenderPro-Thin';
        }
      }
    }
  }

  .social-media {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    padding-top: 25px;

    .medias {
      display: flex;
      margin-top: 25px;
      justify-content: center;
      gap: 50px;

      a {
        font-size: 25px;
      }

      .medias-left {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .medias-right {
        display: flex;
        gap: 16px;
        align-items: center;
      }
    }

  }
   
    .line-separator {
      width: calc(100% + 160px);
      margin-left: -80px;
      display: flex;
      border: 1px solid #ded207;
      margin-top: 45px;
  }

  .sem-ideia {
    font-weight: 100;
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    p {
      font-family: 'BlenderPro-Thin';
      font-size: 16px;
    }
  }

  .links-privacy {
    margin-top: 20px;
    display: flex;
    gap: 40px;
    

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    
  }
`;
