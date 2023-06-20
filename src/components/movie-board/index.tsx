import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { CardProps } from "../../types";
import MovieCard from "./movie-card";

interface MovieBoardProps {
  movieData: CardProps[];
}
const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 5rem;
  gap: 3rem 3rem;
  background-color: ${(props) => props.theme.black.veryDark};
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 3rem;
  }
`;

const CardWrapper = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  color: ${(props) => props.theme.white.darker};
`;

const cardWrapperVariants = {
  initial: { scale: 0 },
  animate: (order: number) => ({
    scale: 1,
    transition: { delay: order * 0.3, duration: 0.2 }
  }),
  exit: { scale: 0, transition: { delay: 0.3, duaration: 0.2 } }
};

export default function MovieBoard({ movieData }: MovieBoardProps) {
  return (
    <GridContainer>
      <AnimatePresence>
        {movieData?.map((movie, idx) => (
          <CardWrapper
            key={movie.id}
            layoutId={movie.id.toString()}
            custom={idx + 1}
            variants={cardWrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MovieCard cardData={movie} />
          </CardWrapper>
        ))}
      </AnimatePresence>
    </GridContainer>
  );
}
