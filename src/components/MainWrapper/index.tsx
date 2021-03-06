import React from 'react';
import { Container } from './styles';

const MainWrapper: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default MainWrapper;
