import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <HeaderWrapBox>
      <NavGrid>
        <HeaderCloseBtnWrap></HeaderCloseBtnWrap>
      </NavGrid>
      <ul>
        <NavOneDepth>
          <Link href="/information">INFORMATION</Link>
          <NavTwoDepthul>
            <NavDepth02>SKILLS</NavDepth02>
            <NavDepth02>EDUCATION & CAREER</NavDepth02>
            <NavDepth02>CAREER</NavDepth02>
          </NavTwoDepthul>
        </NavOneDepth>
        <NavOneDepth>
          <a>PORTFOLIO</a>
          <NavTwoDepthul>
            <NavDepth02>
              DEVELOP PROJECT
              <NavDepth03>
                <NavThreeDepthli>01</NavThreeDepthli>
                <NavThreeDepthli>02</NavThreeDepthli>
                <NavThreeDepthli>03</NavThreeDepthli>
                <NavThreeDepthli>04</NavThreeDepthli>
              </NavDepth03>
            </NavDepth02>
            <NavDepth02>PROJECT MANAGER</NavDepth02>
          </NavTwoDepthul>
        </NavOneDepth>
      </ul>
    </HeaderWrapBox>
  );
}

const HeaderWrapBox = styled.div`
  width: 300px;
  height: 100vh;
  color: #fff;
  background-color: #111;
  position: fixed;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
`;
const HeaderCloseBtnWrap = styled.div`
  width: 22px;
  height: 22px;
  margin: 0;
  position: relative;
  padding: 0;
  margin-bottom: 27px;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    top: -2px;
    content: " ";
    height: 22px;
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
const NavGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
// const Test = styled.div`
//   color: ${(props) => props.bgColor};
// `;
const NavOneDepth = styled.li`
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 50px;
`;
const NavTwoDepthul = styled.ul`
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 8px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
const NavDepth02 = styled.li`
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  margin-bottom: 8px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
const NavDepth03 = styled.ul`
  margin-top: 5px;
`;
const NavThreeDepthli = styled.li`
  color: #eee;
  font-size: 12px;
  margin-bottom: 5px;
  text-indent: 5px;
`;
