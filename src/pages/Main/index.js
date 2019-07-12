import React from "react";

import Launches from '../../components/Launches';
import MissionKey from '../../components/MissionKey';

import { Container, Title } from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Launches</Title>
      <MissionKey />
      <Launches />
    </Container>
  );
}
