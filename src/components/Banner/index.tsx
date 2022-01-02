import React from 'React';
import { Leaves, LeavesFlipped, Container, Typography } from './styles';

const Banner: React.FC = () => (
  <Container>
    <LeavesFlipped src='leaves-flipped.png' alt='leaves' />
    <Typography color='#de7884' underline>Elaine Hora</Typography>
    <Typography> & Matheus Jager</Typography>
    <span style={{ margin: '20px' }}>Escute nossa playlist</span>

    <iframe
      title='Spotify Playlist Full'
      src='https://open.spotify.com/embed/playlist/5q6XFkFvMWUPfJlJ9LumkF?utm_source=generator&theme=0'
      width='30%'
      height='80'
      frameBorder='0'
      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    />

    <Leaves src='leaves.png' alt='leaves' />
  </Container>
);

export default Banner;
