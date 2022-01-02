import React from 'React';
import { Container } from './styles';

interface AsideProps {
  left?: boolean;
  right?: boolean;
}

const Aside: React.FC<AsideProps> = ({ children, left, right }) => (
  <Container left={left} right={right}>
    {children}
  </Container>
);

export default Aside;
