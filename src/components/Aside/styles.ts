import styled from 'styled-components';

interface AsideProps {
  left?: boolean;
  right?: boolean;
}

export const Container = styled.div<AsideProps>`
  display: flex;
  margin-top: 440px;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 350px;
  height: auto;

  @media screen and (max-width: 1300px) {
    opacity: 0.7;
  }

  @media screen and (max-width: 1150px) {
    opacity: 0.3;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }

  ${(props) => props.left && `
    left: 0;
    margin-left: 180px;

    @media screen and (max-width: 1800px) {
      margin-left: 0px;
    }
  `}

${(props) => props.right && `
    right: 0;
    margin-right: 130px;

    @media screen and (max-width: 1800px) {
      margin-right: -50px;
    }
  `}
`;
