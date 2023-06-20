import styled from "styled-components";

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white.darker};
  background-color: ${(props) => props.theme.black.darker};
`;

const LoadingSpan = styled.span`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  font-size: 4rem;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSpan>Loading...</LoadingSpan>
    </LoadingWrapper>
  );
}
