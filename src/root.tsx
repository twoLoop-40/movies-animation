import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export default function Root() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
