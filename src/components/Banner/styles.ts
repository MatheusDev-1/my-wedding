import { fadeInWithTranslate } from '@styles/animations';
import styled from 'styled-components';

interface TypographyProps {
  underline?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 90%;
  height: 600px;
  margin: 70px 0 30px 0;
  border: 5px solid white;

  @media screen and (max-width: 736px) {
    height: 300px;
  }
`;

export const Leaves = styled.img`
  position: absolute;
  object-fit: cover;
  width: 400px;
  height: 220px;
  margin-top: 300px;

  @media screen and (max-width: 736px) {
    width: 220px;
    height: 120px;
    margin-top: 160px;
  }
`;

export const LeavesFlipped = styled.img`
  position: absolute;
  object-fit: cover;
  width: 400px;
  height: 220px;
  margin-top: -280px;

  @media screen and (max-width: 736px) {
    width: 220px;
    height: 120px;
    margin-top: -150px;
  }
`;

export const Typography = styled.h1<TypographyProps>`
    font-family: 'Merriweather', serif;
    font-size: 64px;
    color: ${(props) => props.color || '#808080'};
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    z-index: 50;
    cursor: default;
    user-select: none;
    animation: ${fadeInWithTranslate} 1s ease-in;

    &:first-child {
      animation-delay: 4s;
    }

    @media screen and (max-width: 736px) {
      font-size: 32px;
    }
`;
