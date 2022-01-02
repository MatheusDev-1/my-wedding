import Head from 'next/head';
import React from 'react';
import Banner from '@components/Banner';
import MainWrapper from '@components/MainWrapper';
import PolaroidPhoto from '@components/PolaroidPhoto';
import { SectionWrapper, Pix, PixCode, WeddingButton, Description, Title, Paragraph } from '@styles/home';
import Aside from '@components/Aside';

const Home: React.FC = () => (
  <>
    <Head key='index'>
      <title>Elaine & Matheus | Casamento</title>
      <meta property='og:title' content='Elaine & Matheus | Casamento' key='title' />
      <meta
        property='og:description'
        content='Site de casamento'
      />
      <meta
        name='keywords'
        content='Site de casamento'
      />
    </Head>

    <MainWrapper>
      <Banner>Teste</Banner>

      <SectionWrapper>
        <Title>~ Nossa História ~</Title>
        <Description>
          <Paragraph><span>F</span>oi em uma noite de sexta-feira em que nos conhecemos. Eu, <strong>Matheus</strong>, estava em uma festa jogando papo fora quando recebi uma mensagem no celular dessa mocinha chamada <strong>Elaine</strong>.</Paragraph>
          <br />
          <Paragraph>Conversa vai e vem, depois de falarmos muito sobre memes e CEMTN - nosso colégio em comum - meu celular chegou a 1% e tive que sair correndo atrás de um carregador para continuar o papo que estava tão bom.</Paragraph>
          <br />
          <Paragraph>Marcamos alguns encontros e após conversar sobre todas as coisas possíveis, percebemos que realmente gostávamos um do outro.</Paragraph>
          <br />
          <Paragraph>Depois de 2 anos de muito amor, estamos prontos para dar um novo passo: casar no civil e ir morar juntos.</Paragraph>
        </Description>

      </SectionWrapper>

      <SectionWrapper>
        <Title>~ Casamento e lista de presentes ~</Title>
        <Description>
          <Paragraph><span>N</span>este primeiro momento iremos casar no civil. Decidimos usar nossas reservas para comprar os móveis grandes e que precisaríamos mais no dia a dia (geladeira, máquina de lavar, sofá, etc).</Paragraph>
          <br />
          <Paragraph>Com isso, após casarmos no civil e mudarmos, iremos fazer um chá de casa nova e nos reunir para comemorar a nossa conquista. E que vocês, que nos acompanharam, também fazem parte</Paragraph>
          <br />
          <Paragraph>Logo abaixo segue o link para a lista de presentes. A maioria são recomendações da Magalu, mas não se acanhem, são apenas sugestões e podem ser comprados em outra loja da sua preferência</Paragraph>
        </Description>

        <WeddingButton style={{ marginBottom: '30px' }} href='https://www.querodecasamento.com.br/lista-de-casamento/elaineematheusdahora'>Acessar lista de casamento</WeddingButton>

        <Description style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paragraph>E caso queira contribuir com qualquer outro valor, segue abaixo também o QRCode para PIX e o código do pix copia e cola</Paragraph>
          <br />
          <Pix src='pix.jpeg' alt='pix' />
          <PixCode>00020126360014br.gov.bcb.pix0114+55619942944415204000053039865802BR5924Matheus Oliveira Da Hora6009Sao Paulo62070503***6304D48C</PixCode>
        </Description>
      </SectionWrapper>

      <Aside left>
        <PolaroidPhoto
          title='Stonia'
          date='18/07/2021'
          photo='photo2.jpeg'
        />

        <PolaroidPhoto
          title='Passeio no Taguatinga Shopping'
          date='16/01/2020'
          photo='photo1.jpg'
        />

        <PolaroidPhoto
          title='Ano Novo'
          date='01/01/2022'
          photo='photo5.jpeg'
        />
      </Aside>

      <Aside right>
        <PolaroidPhoto
          title='Comemoração emprego novo'
          date='17/05/2021'
          photo='photo3.jpg'
        />

        <PolaroidPhoto
          title='Pedido de casamento'
          date='05/10/2020'
          photo='photo4.jpg'
        />

        <PolaroidPhoto
          title='<3'
          date='01/08/2021'
          photo='photo6.jpeg'
        />
      </Aside>
    </MainWrapper>
  </>
);

export default Home;
