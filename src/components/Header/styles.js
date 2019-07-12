import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  width: 100%;
  height: 56px;
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #222;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);

  div {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: space-around;
    align-items: center;

    img {
      width: 200px;
    }
  }

  @media(min-width: 480px) {
    div {
      justify-content: flex-start;

      img {
        width: 250px;
      }
    }
  }
`;
