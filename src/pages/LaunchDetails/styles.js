import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 56px;
  color: #bdc3c7;

  a {
    text-decoration: none;
    text-align: center;
    background-color: #34495e;
    color: #bdc3c7;
    border-radius: 4px;
    font-size: 1em;
    font-weight: bold;
    padding: 10px 30px;
    transition: 0.3s;

    :hover {
      background-color: #2c3e50;
      transition: 0.3s;
    }
  }

  @media(max-width: 480px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-left: 10px;
  padding: 20px 0;

  span {
    color: #ecf0f1;
  }
`;

export const ListTitle = styled.h4`
  font-size: 1.5rem;
`;

export const List = styled.ul`
  list-style: none;
  text-align: left;
  background-color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;

  li:last-child {
    border: none;
  }
`;

export const ListItem = styled.li`
  padding: 15px 10px;
  border-bottom: 1px solid #444;
  transition: 0.2s;

  .text-success {
    color: #2ecc71;
  }

  .text-danger {
    color: #e74c3c;
  }

  :hover {
    background-color: #555; 
    color: #ecf0f1;
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const Separator = styled.hr`
  background-color: #bdc3c7;
  margin: 20px auto;
  border: none;
  height: 1px;
`;
