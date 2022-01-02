import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 90%;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  padding: 35px 0;
`;

export const WeddingButton = styled.a`
  padding: 25px;
  margin-top: 50px;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color .2s ease-in;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 736px) {
    font-size: 16px;
  }

  &:hover {
    background-color: darkred;
  }

  @media screen and (max-width: 736px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const Pix = styled.img`
  width: 500px;
  height: 600px;

  @media screen and (max-width: 736px) {
    width: 250px;
    height: 300px;
  }
`;

export const PixCode = styled.code`
  background-color: ghostwhite;
  padding: 10px;

  @media screen and (max-width: 736px) {
    width: 260px;
    font-size: 12px;
    word-wrap: break-word;
    height: 80px;
  }
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 736px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
    font-family: 'Merriweather', serif;
    font-size: 40px;
    color: black;
    cursor: default;
    user-select: none;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 736px) {
      font-size: 24px;
    }
`;

export const Paragraph = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 20px;
  color: black;

  @media screen and (max-width: 736px) {
      font-size: 14px;
  }

  span {
    color: #de7884;
    float: left;
    font-family: Georgia;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;

    @media screen and (max-width: 736px) {
      font-size: 60px;
    }
  }
`;
