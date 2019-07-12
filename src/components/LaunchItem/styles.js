import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 10px 20px;
  height: 120px;
  background-color: #444;
  border-radius: 4px;
  color: #b2bec3;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

  a {
    display: block;
    text-decoration: none;
    text-align: center;
    background-color: #333;
    border-radius: 4px;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    padding: 10px 30px;
    transition: 0.3s;

    :hover {
      background-color: #222;
      opacity: 0.8;
      transition: 0.3s;
    }
  }

  @media (max-width: 479px) {
    height: 130px;

    a {
      width: 100%;
    }
  }

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 4fr 3fr;

    .description,
    .btn {
      display: grid;
      align-content: center;
    }

    .description {
      grid-column: 1;
      padding-left: 30px;
    }

    .btn {
      grid-column: 2;
      justify-content: end;
      padding-right: 30px;
    }
  }
`;

export const Title = styled.h4`
  font-size: 1.2em;
  font-weight: bold;

  .text-success {
    color: #2ecc71;
  }

  .text-danger {
    color: #e74c3c;
  }

  @media (min-width: 700px) {
    font-size: 1.5em;
  }
`;

export const Text = styled.p`
  font-size: 0.8em;

  @media (min-width: 700px) {
    font-size: 1em;
  }
`;
