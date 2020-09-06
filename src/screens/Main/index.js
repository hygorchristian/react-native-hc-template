import React from 'react';

import {
  Container, Status, Logo, Welcome, Instruction
} from './styles';

import bg from '#/img/bg.png'

const Main = () => (
  <Container source={bg}>
    <Status barStyle="light-content" backgroundColor="#7159c1" />
    <Logo
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
    />
    <Welcome testID="welcome-text">Welcome to basic template!</Welcome>
    <Instruction>This is the Main Screen of your application =)</Instruction>
    <Instruction>You can edit this screen in the file:</Instruction>
    <Instruction bold>src/pages/Main/index.js</Instruction>
  </Container>
);

export default Main;
