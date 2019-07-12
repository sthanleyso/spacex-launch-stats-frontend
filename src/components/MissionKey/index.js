import React from "react";

import { Container, Text, SquareSuccess, SquareFail } from "./styles";

export default function MissionKey() {
  return (
    <Container>
      <Text>
        <SquareSuccess /> = Success
        {"  "}
        <SquareFail /> = Fail
      </Text>
    </Container>
  );
}
