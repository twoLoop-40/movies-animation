import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TitleProps } from ".";
import useMovieDataWithRoute from "../../hooks/movieDataByRoute";

const Title = styled.div`
  text-align: center;
  font-size: 1.75rem;
  padding-top: 1rem;
  position: relative;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

export default function MakeTitle({ routeName, titleName }: TitleProps) {
  const { routeName: route } = useMovieDataWithRoute();
  return (
    <Title>
      <Link to={routeName}>
        {titleName}
        {route === routeName && <Circle layoutId="circle" />}
      </Link>
    </Title>
  );
}
