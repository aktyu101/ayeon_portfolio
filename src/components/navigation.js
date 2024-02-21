import styled from "styled-components";

export default function Navigation() {
  return (
    <HeaderWrapBox>
      <Test bgColor="#fff"></Test>
      <HeaderCloseBtnWrap></HeaderCloseBtnWrap>
    </HeaderWrapBox>
  );
}

const HeaderWrapBox = styled.div`
  display: flex;
  width: 300px;
  height: 100vh;
  color: #fff;
  background-color: #111;
  position: fixed;
  top: 0;
  padding: 20px;
`;
const HeaderCloseBtnWrap = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  position: relative;
  padding: 0;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    top: -2px;
    content: " ";
    height: 40px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
`;
const Test = styled.div`
  color: ${(props) => props.bgColor};
`;
