import styled from "styled-components";
import { MovieRoute } from "../../types";
import { titles } from "../../types/constants";
import MakeTitle from "./title";

export interface TitleProps {
  titleName: string;
  routeName: MovieRoute;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.white.lighter};
  font-weight: 600;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: 1.5rem;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <GridContainer>
        {titles.map((title: TitleProps) => {
          return <MakeTitle key={title.titleName} {...title} />;
        })}
      </GridContainer>
    </Wrapper>
  );
}
