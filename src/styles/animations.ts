import { keyframes } from 'styled-components';

export const fadeInWithTranslate = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const bannerImageFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: .6;
  }
`;
