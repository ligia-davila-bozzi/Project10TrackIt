import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #dbdbdb;
  outline: none;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 6px;

  ::placeholder {
    color: #dbdbdb;
  }
`;

const MainHome = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 33px 36px;
`;

const LinkHome = styled.h1`
  color: #52b6ff;
  text-decoration: underline;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #52B6FF;
  margin-bottom: 6px;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 21px;
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 70px;
  background-color: #dbdbdb;
`;

export { Input, MainHome, LinkHome, Button, Main };
