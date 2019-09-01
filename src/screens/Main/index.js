import React from 'react';

import {
  Container, Status, Logo, Welcome, Instruction
} from './styles';

const Main = () => (
  <Container
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
  >
    <Status barStyle="light-content" backgroundColor="#7159c1" />
    <Logo
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
    />
    <Welcome style={styles.welcome}>Bem-vindo ao Template Básico!</Welcome>
    <Instruction>Essa é a tela principal da sua aplicação =)</Instruction>
    <Instruction>Você pode editar a tela no arquivo:</Instruction>
    <Instruction bold>src/pages/Main/index.js</Instruction>
  </Container>
);

export default Main;
