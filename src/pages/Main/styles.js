import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 56px;
  color: #fff;

  @media(max-width: 480px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-left: 10px;
  padding: 20px 0;
`;
