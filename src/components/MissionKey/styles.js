import styled from 'styled-components';

export const Container = styled.div`
  @media(max-width: 480px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  margin: 0 0 20px 10px;
  padding: 5px 0;
`;

export const SquareSuccess = styled.span`
  margin: 2px;
  padding: 0 10px;
  background-color: #2ecc71;
`;

export const SquareFail = styled.span`
  margin: 2px;
  padding: 0 10px;
  background-color: #e74c3c;
`;
