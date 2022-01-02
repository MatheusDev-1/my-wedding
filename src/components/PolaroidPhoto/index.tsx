import React from 'React';
import { Container } from './styles';

export interface PolaroidPhotoProps {
  photo: string;
  title?: string;
  date?: string;
}

const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({ photo, title, date }) => (
  <Container>
    <img src={photo} alt='weddingPhoto' />

    {title && <h1>{title}</h1>}
    {date && <h2>{date}</h2>}
  </Container>
);

export default PolaroidPhoto;
