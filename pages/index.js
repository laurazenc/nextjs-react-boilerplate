import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Head from '../components/head';
import Nav from '../components/nav';

const Hero = styled.div`
  width: 100%;
  color: #333;
`;

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Home = () => (
  <div>
    <Nav />
    <Hero>
      <Title>Welcome to Next!</Title>
      <Description>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Description>
    </Hero>
  </div>
);

export default Home;
