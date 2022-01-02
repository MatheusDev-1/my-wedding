import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: 300px;
  height: 390px;
  box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 736px) {
    width: 200px;
    height: 250px;
  }

  img {
    object-fit: cover;
    width: 90%;
    height: 280px;
    margin-top: 20px;
  }

  h1 {
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
    margin: 10px 0;
    text-transform: uppercase;

    @media screen and (max-width: 736px) {
      font-size: 10px;
    }
  }

  h2 {
    font-size: 12px;
    opacity: 0.3;

    @media screen and (max-width: 736px) {
      font-size: 10px;
    }
  }
`;
