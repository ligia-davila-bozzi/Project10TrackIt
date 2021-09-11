import styled from "styled-components";
export default function Footer() {
    return (
        <ContainerFooter>
            <p>Hábitos</p>
            <div class="fora">
                <div class="dentro">
                    Hoje
                </div>
            </div>
            <p>Histórico</p>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.footer`
  width: 100%;
  height: 70px;
  padding: 10px 35px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;

    div{
      width: 80%;
      height: 80%;
      background-color: #52B6FF;
      border-radius:50%;
      border: 8px solid white;
      border-left: 8px solid #52B6FF;
      text-align: center;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
